const Admin = require('../models/Admin');
const Registration = require('../models/Registration');
const Payment = require('../models/Payment');
const User = require('../models/User');
const Event = require('../models/Event');
const GroupRegistration = require('../models/GroupRegistration');
const District = require('../models/District');
const Competition = require('../models/Competition');
const Schedule = require('../models/Schedule');
const Result = require('../models/Result');
const Announcement = require('../models/Announcement');
const AuditLog = require('../models/AuditLog');
const Enquiry = require('../models/Enquiry');
const SiteContent = require('../models/SiteContent');

// 38 Tamil Nadu Districts
const TAMIL_NADU_DISTRICTS = [
  'Tirunelveli', 'Thoothukudi', 'Kanyakumari', 'Tenkasi', 'Madurai', 'Virudhunagar',
  'Ramanathapuram', 'Sivaganga', 'Dindigul', 'Theni', 'Tiruchirappalli', 'Thanjavur',
  'Tiruvarur', 'Nagapattinam', 'Mayiladuthurai', 'Karur', 'Perambalur', 'Ariyalur',
  'Pudukkottai', 'Salem', 'Namakkal', 'Dharmapuri', 'Krishnagiri', 'Erode',
  'Tiruppur', 'Coimbatore', 'Nilgiris', 'Vellore', 'Tirupattur', 'Ranipet',
  'Tiruvannamalai', 'Cuddalore', 'Villupuram', 'Kallakurichi', 'Chengalpattu',
  'Kanchipuram', 'Tiruvallur', 'Chennai'
];

// Helper: Log audit action
const logAdminAction = async (adminName, action, moduleName, recordId, details) => {
  try {
    const log = new AuditLog({
      logId: `LOG-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
      adminName: adminName || 'Suman (Admin)',
      action,
      module: moduleName,
      recordId: recordId || '',
      details: details || ''
    });
    await log.save();
  } catch (err) {
    console.error('AuditLog error:', err.message);
  }
};

// 1. Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin123') {
      const token = `tzr_token_${Date.now()}`;
      await logAdminAction('admin', 'LOGIN', 'Auth', '', 'Admin successfully logged into portal');
      return res.json({
        success: true,
        token,
        admin: { username: 'admin', role: 'Super Admin', name: 'Suman / TheZar Administrator' }
      });
    }
    return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 2. Full Comprehensive Dashboard KPIs & Analytics
const getDashboardStats = async (req, res) => {
  try {
    const totalRegistrations = await Registration.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalEvents = await Event.countDocuments();
    const paidRegistrations = await Registration.countDocuments({ paymentStatus: 'completed' });
    const pendingPayments = await Registration.countDocuments({ paymentStatus: 'pending_verification' });
    const pendingEnquiries = await Enquiry.countDocuments({ status: 'new' });

    const payments = await Payment.find();
    const totalRevenue = payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const approvedRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + (Number(p.amount) || 0), 0);

    // Group by District
    const districtWise = await Registration.aggregate([
      { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } },
      { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
      { $group: { _id: '$user.district', count: { $sum: 1 } } }
    ]);

    // Group by Event
    const eventWise = await Registration.aggregate([
      { $unwind: '$selectedEvents' },
      { $group: { _id: '$selectedEvents.title', count: { $sum: 1 } } }
    ]);

    res.json({
      success: true,
      stats: {
        totalParticipants: totalUsers || 24,
        totalRegistrations,
        totalEvents,
        activeEvents: totalEvents,
        upcomingEvents: totalEvents,
        completedEvents: 0,
        paidRegistrations,
        pendingPayments,
        totalRevenue,
        approvedRevenue,
        pendingEnquiries,
        districtWise: districtWise.map(d => ({ district: d._id || 'Tirunelveli', count: d.count })),
        eventWise: eventWise.map(e => ({ event: e._id || 'Carol Fiesta', count: e.count }))
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 3. Participants Module
const getAllParticipants = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    const participantsWithMeta = await Promise.all(users.map(async (u) => {
      const regCount = await Registration.countDocuments({ userId: u._id });
      const lastReg = await Registration.findOne({ userId: u._id }).sort({ createdAt: -1 });
      return {
        _id: u._id,
        participantId: u.participantId,
        fullName: u.fullName,
        email: u.email,
        phone: u.phone,
        altPhone: u.altPhone,
        address: u.address,
        district: u.district || 'Tirunelveli',
        registrationCount: regCount,
        paymentStatus: lastReg ? lastReg.paymentStatus : 'free',
        accountStatus: 'Active',
        registeredDate: u.createdAt ? u.createdAt.toISOString().slice(0, 10) : '2026-10-05'
      };
    }));

    res.json({ success: true, participants: participantsWithMeta });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 4. Registrations Module
const getAllRegistrations = async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};
    if (status && status !== 'all') {
      query.paymentStatus = status;
    }

    const registrations = await Registration.find(query)
      .populate('userId')
      .sort({ createdAt: -1 });

    const enriched = await Promise.all(
      registrations.map(async (reg) => {
        const groupInfo = await GroupRegistration.findOne({ registrationId: reg.registrationId });
        return {
          registrationId: reg.registrationId,
          participantId: reg.participantId,
          registrationType: reg.registrationType,
          user: reg.userId,
          groupInfo,
          selectedEvents: reg.selectedEvents,
          totalAmount: reg.totalAmount,
          paymentStatus: reg.paymentStatus,
          utrNumber: reg.utrNumber,
          qrCodeData: reg.qrCodeData,
          createdAt: reg.createdAt
        };
      })
    );

    res.json({ success: true, registrations: enriched });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 5. Payment Verification Module
const verifyRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body; // 'completed' | 'rejected'

    const reg = await Registration.findOne({ registrationId: id });
    if (!reg) {
      return res.status(404).json({ success: false, message: 'Registration not found' });
    }

    reg.paymentStatus = status;
    await reg.save();

    await Payment.updateMany({ registrationId: id }, { status });
    await logAdminAction('Admin', 'PAYMENT_VERIFY', 'Payments', id, `Updated payment to ${status}. ${reason ? 'Reason: ' + reason : ''}`);

    res.json({ success: true, message: `Payment verified as ${status}`, registration: reg });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 6. Events Module
const getEvents = async (req, res) => {
  try {
    let events = await Event.find().sort({ createdAt: -1 });
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const addEvent = async (req, res) => {
  try {
    const { title, category, district, date, price, venue, description, minGroupSize, maxGroupSize } = req.body;
    const eventId = `evt-${Date.now().toString().slice(-6)}`;
    const newEv = new Event({
      eventId,
      title,
      category,
      district: district || 'Tirunelveli',
      date: date || '12.12.2026',
      price: Number(price) || 0,
      venue: venue || 'Tirunelveli District Arena',
      description: description || ''
    });
    await newEv.save();
    await logAdminAction('Admin', 'EVENT_CREATE', 'Events', eventId, `Created event ${title}`);
    res.json({ success: true, event: newEv });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    await Event.findOneAndDelete({ eventId });
    await logAdminAction('Admin', 'EVENT_DELETE', 'Events', eventId, `Deleted event ${eventId}`);
    res.json({ success: true, message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const reseedEvents = async (req, res) => {
  try {
    await Event.deleteMany({});
    const officialEvents = [
      {
        eventId: 'evt-carol-kids-solo',
        title: 'Carol Fiesta 2026 - Kids Solo Singing (Category I)',
        category: 'Singing Solo',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 699,
        venue: 'Tirunelveli District Arena'
      },
      {
        eventId: 'evt-carol-adult-solo',
        title: 'Carol Fiesta 2026 - Adult Solo Singing (Category I)',
        category: 'Singing Solo',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 699,
        venue: 'Tirunelveli District Arena'
      },
      {
        eventId: 'evt-carol-choirs-bands',
        title: 'Carol Fiesta 2026 - Choirs & Music Bands (Category II)',
        category: 'Choir & Bands',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 199,
        venue: 'Tirunelveli District Arena'
      },
      {
        eventId: 'evt-carol-solo-dance',
        title: 'Carol Fiesta 2026 - Solo Dance Showcase (Category III)',
        category: 'Dance Showcase',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 699,
        venue: 'Tirunelveli District Arena'
      },
      {
        eventId: 'evt-carol-group-dance',
        title: 'Carol Fiesta 2026 - Group Dance Showcase (Category III)',
        category: 'Dance Showcase',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 199,
        venue: 'Tirunelveli District Arena'
      },
      {
        eventId: 'evt-carol-santa',
        title: 'Carol Fiesta 2026 - Santa Claus Contest (Category IV)',
        category: 'Special Contest',
        district: 'Tirunelveli',
        date: '12.12.2026',
        price: 699,
        venue: 'Tirunelveli District Arena'
      }
    ];
    const inserted = await Event.insertMany(officialEvents);
    await logAdminAction('Admin', 'EVENT_RESEED', 'Events', '', 'Reseeded Carol Fiesta events collection');
    res.json({ success: true, events: inserted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 7. Competitions Module
const getCompetitions = async (req, res) => {
  try {
    let comps = await Competition.find();
    if (comps.length === 0) {
      const defaultComps = [
        { competitionId: 'COMP-01', name: 'Solo Singing (Kids & Adults)', eventId: 'evt-carol-adult-solo', eventName: 'Carol Fiesta 2026', category: 'Singing', type: 'Individual', fee: 699, venue: 'Acoustic Stage 1', status: 'Active' },
        { competitionId: 'COMP-02', name: 'Choir & Festive Bands Battle', eventId: 'evt-carol-choirs-bands', eventName: 'Carol Fiesta 2026', category: 'Choir', type: 'Group', fee: 199, venue: 'Grand Auditorium', status: 'Active' },
        { competitionId: 'COMP-03', name: 'Choreography Dance Clash', eventId: 'evt-carol-group-dance', eventName: 'Carol Fiesta 2026', category: 'Dance', type: 'Group', fee: 199, venue: 'Open Arena', status: 'Active' },
        { competitionId: 'COMP-04', name: 'Grand Cooking Championship', eventId: 'evt-cooking-01', eventName: 'Statewide League', category: 'Culinary', type: 'Individual', fee: 499, venue: 'Food Arena Hall B', status: 'Active' }
      ];
      comps = await Competition.insertMany(defaultComps);
    }
    res.json({ success: true, competitions: comps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createCompetition = async (req, res) => {
  try {
    const comp = new Competition({
      competitionId: `COMP-${Date.now().toString().slice(-4)}`,
      ...req.body
    });
    await comp.save();
    await logAdminAction('Admin', 'COMPETITION_CREATE', 'Competitions', comp.competitionId, `Created ${comp.name}`);
    res.json({ success: true, competition: comp });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 8. Districts Module (38 Tamil Nadu Districts)
const getDistricts = async (req, res) => {
  try {
    let districts = await District.find();
    if (districts.length === 0) {
      const seeds = TAMIL_NADU_DISTRICTS.map((name, idx) => ({
        districtId: `DIST-${String(idx + 1).padStart(2, '0')}`,
        name,
        zone: idx < 10 ? 'South TN' : idx < 20 ? 'Central TN' : idx < 30 ? 'West TN' : 'North TN',
        coordinatorName: `${name} District Lead`,
        coordinatorPhone: '+91 97903 51878',
        activeEventsCount: name === 'Tirunelveli' ? 6 : 1,
        status: 'Active'
      }));
      districts = await District.insertMany(seeds);
    }
    res.json({ success: true, districts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 9. Schedules Module
const getSchedules = async (req, res) => {
  try {
    let schedules = await Schedule.find();
    if (schedules.length === 0) {
      const defaultSchedules = [
        { scheduleId: 'SCH-01', eventId: 'evt-carol-adult-solo', eventName: 'Carol Fiesta 2026', competitionName: 'Solo Singing Stage', date: '2026-12-12', startTime: '09:30 AM', endTime: '01:00 PM', venue: 'Tirunelveli District Arena', stage: 'Stage A', coordinator: 'Music Committee', status: 'Scheduled' },
        { scheduleId: 'SCH-02', eventId: 'evt-carol-choirs-bands', eventName: 'Carol Fiesta 2026', competitionName: 'Statewide Choir Battle', date: '2026-12-12', startTime: '02:00 PM', endTime: '06:30 PM', venue: 'Main Auditorium', stage: 'Grand Stage', coordinator: 'Band Lead', status: 'Scheduled' }
      ];
      schedules = await Schedule.insertMany(defaultSchedules);
    }
    res.json({ success: true, schedules });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createSchedule = async (req, res) => {
  try {
    const sch = new Schedule({
      scheduleId: `SCH-${Date.now().toString().slice(-4)}`,
      ...req.body
    });
    await sch.save();
    res.json({ success: true, schedule: sch });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 10. Results & Leaderboard Module
const getResults = async (req, res) => {
  try {
    let results = await Result.find();
    if (results.length === 0) {
      results = [
        { resultId: 'RES-01', eventName: 'Carol Fiesta 2026', competitionName: 'Adult Solo Singing', participantName: 'Suman Kumar', district: 'Tirunelveli', rank: 1, score: 98, position: '1st Place Winner', prize: '₹10,000 + Gold Trophy', points: 120, published: true },
        { resultId: 'RES-02', eventName: 'Carol Fiesta 2026', competitionName: 'Choir & Festive Bands', participantName: 'St. Xavier Choir', district: 'Thoothukudi', rank: 2, score: 94, position: '2nd Place Runner-Up', prize: '₹15,000 + Silver Trophy', points: 100, published: true }
      ];
    }
    res.json({ success: true, results });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createResult = async (req, res) => {
  try {
    const resDoc = new Result({
      resultId: `RES-${Date.now().toString().slice(-4)}`,
      published: true,
      ...req.body
    });
    await resDoc.save();
    await logAdminAction('Admin', 'RESULT_PUBLISH', 'Results', resDoc.resultId, `Published result for ${resDoc.participantName}`);
    res.json({ success: true, result: resDoc });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 11. Announcements Module
const getAnnouncements = async (req, res) => {
  try {
    let announcements = await Announcement.find();
    if (announcements.length === 0) {
      announcements = [
        { announcementId: 'ANN-01', title: 'Carol Fiesta Reporting Time', message: 'All choir teams and solo vocalists must report at 8:30 AM sharp at Tirunelveli District Arena.', targetAudience: 'All Participants', district: 'Tirunelveli', status: 'Active' },
        { announcementId: 'ANN-02', title: 'Round 2 Grand Staging Pass', message: 'Entry passes are now available for download under your candidate profile QR code.', targetAudience: 'All Participants', district: 'All', status: 'Active' }
      ];
    }
    res.json({ success: true, announcements });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const ann = new Announcement({
      announcementId: `ANN-${Date.now().toString().slice(-4)}`,
      ...req.body
    });
    await ann.save();
    res.json({ success: true, announcement: ann });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 12. Audit Logs Module
const getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, logs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  loginAdmin,
  getDashboardStats,
  getAllParticipants,
  getAllRegistrations,
  verifyRegistration,
  getEvents,
  addEvent,
  deleteEvent,
  reseedEvents,
  getCompetitions,
  createCompetition,
  getDistricts,
  getSchedules,
  createSchedule,
  getResults,
  createResult,
  getAnnouncements,
  createAnnouncement,
  getAuditLogs
};
