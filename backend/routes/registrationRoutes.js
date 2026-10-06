const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Event = require('../models/Event');
const Registration = require('../models/Registration');
const GroupRegistration = require('../models/GroupRegistration');
const Payment = require('../models/Payment');
const { sendConfirmationEmail } = require('../services/emailService');

// Seed default events matching Carol Fiesta 2026 & Statewide Championships
const defaultEvents = [
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
  },

];

// GET /api/events
router.get('/events', async (req, res) => {
  try {
    let events = await Event.find();
    if (events.length === 0) {
      events = await Event.insertMany(defaultEvents);
    }
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, events: defaultEvents });
  }
});

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const {
      registrationType, // 'individual' | 'group'
      // Individual fields
      participantName,
      address,
      district,
      phone,
      altPhone,
      email,
      // Group fields
      groupName,
      groupAddress,
      groupLeaderName,
      groupLeaderAddress,
      groupLeaderPhone,
      groupLeaderAltPhone,
      groupLeaderEmail,
      members, // [{ name }]
      // Event selection & meta
      selectedEvents, // [{ eventId, title, price }]
      howDidYouHear,
      paymentMethod, // 'UPI_QR' | 'FREE'
      utrNumber
    } = req.body;

    const primaryEmail = (registrationType === 'group' ? groupLeaderEmail : email) || req.body.email || `candidate_${Date.now()}@thezarevents.com`;
    const primaryName = (registrationType === 'group' ? groupLeaderName : participantName) || req.body.fullName || req.body.name || 'Candidate';
    const primaryPhone = (registrationType === 'group' ? groupLeaderPhone : phone) || req.body.mobile || '+91 97903 51878';
    const primaryDistrict = district || req.body.district || 'Tirunelveli';
    const primaryAddress = (registrationType === 'group' ? groupAddress : address) || req.body.collegeName || `${primaryDistrict}, Tamil Nadu`;
    const collegeOrOrg = req.body.collegeName || req.body.department || '';

    // 1. Normalize Events List & Calculate Total Amount
    let eventsList = Array.isArray(selectedEvents) && selectedEvents.length > 0 ? selectedEvents : null;
    if (!eventsList) {
      const trackName = req.body.competition || req.body.event || 'Carol Fiesta 2026';
      const trackPrice = req.body.price !== undefined ? Number(req.body.price) : 699;
      eventsList = [{
        eventId: `evt-${trackName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: trackName,
        price: trackPrice
      }];
    }

    let totalAmount = eventsList.reduce((acc, ev) => acc + (Number(ev.price) || 0), 0);

    // 2. Generate Unique Registration ID & Participant ID
    const count = (await Registration.countDocuments()) + 1;
    const paddedCount = String(count).padStart(6, '0');
    const registrationId = `TZR-2026-${paddedCount}`;
    const participantId = registrationId;
    const generatedPassword = `tzr${Math.floor(100000 + Math.random() * 900000)}`;

    // 3. Find or Create User
    let user = await User.findOne({ email: primaryEmail });
    if (!user) {
      user = new User({
        participantId,
        fullName: primaryName,
        email: primaryEmail,
        phone: primaryPhone,
        altPhone: altPhone || groupLeaderAltPhone || '',
        address: primaryAddress,
        district: primaryDistrict,
        password: generatedPassword
      });
      await user.save();
    } else {
      // Update phone or district if provided
      if (primaryPhone) user.phone = primaryPhone;
      if (primaryDistrict) user.district = primaryDistrict;
      await user.save();
    }

    // 4. Save Group Registration if applicable
    if (registrationType === 'group') {
      const groupReg = new GroupRegistration({
        registrationId,
        groupName: groupName || primaryName,
        groupAddress: groupAddress || primaryAddress,
        leaderName: groupLeaderName || primaryName,
        leaderAddress: groupLeaderAddress || primaryAddress,
        leaderPhone: groupLeaderPhone || primaryPhone,
        leaderAltPhone: groupLeaderAltPhone || '',
        leaderEmail: primaryEmail,
        members: members || []
      });
      await groupReg.save();
    }

    // 5. Payment Details (Testing Mode)
    const paymentStatus = totalAmount === 0 ? 'free' : 'pending_verification';
    const testUtr = utrNumber || `UTR-TEST-${Date.now().toString().slice(-8)}`;

    const payment = new Payment({
      registrationId,
      amount: totalAmount,
      paymentMethod: totalAmount === 0 ? 'FREE' : paymentMethod || 'UPI_QR',
      utrNumber: testUtr,
      status: paymentStatus
    });
    await payment.save();

    // 6. Registration Record
    const registration = new Registration({
      registrationId,
      participantId: user.participantId,
      userId: user._id,
      registrationType: registrationType || 'individual',
      selectedEventIds: eventsList.map((e) => e.eventId || e.id || 'evt-general'),
      selectedEvents: eventsList,
      howDidYouHear: howDidYouHear || 'Website',
      totalAmount,
      paymentStatus,
      utrNumber: testUtr,
      qrCodeData: registrationId
    });
    await registration.save();

    // 7. Send Email Confirmation
    try {
      await sendConfirmationEmail({
        email: primaryEmail,
        fullName: primaryName,
        registrationId,
        participantId: user.participantId,
        password: user.password || generatedPassword,
        selectedEvents: eventsList,
        amount: totalAmount,
        paymentStatus
      });
    } catch (e) {
      console.warn('[Email Warning]:', e.message);
    }

    res.json({
      success: true,
      registrationId,
      participantId: user.participantId,
      password: user.password || generatedPassword,
      paymentStatus,
      amount: totalAmount,
      utrNumber: testUtr,
      selectedEvents: eventsList,
      qrCodeData: registrationId,
      user: {
        fullName: primaryName,
        email: primaryEmail,
        phone: primaryPhone,
        district: primaryDistrict,
        collegeName: collegeOrOrg
      },
      message: 'Registration Submitted Successfully 🎉'
    });
  } catch (err) {
    console.error('[Registration Error]:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/registration/:identifier (Lookup candidate pass by Registration ID, Participant ID, Phone, or Email)
router.get('/registration/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let registration = await Registration.findOne({
      $or: [
        { registrationId: identifier },
        { participantId: identifier },
        { utrNumber: identifier }
      ]
    }).populate('userId');

    if (!registration) {
      const user = await User.findOne({
        $or: [{ email: identifier }, { phone: identifier }]
      });
      if (user) {
        registration = await Registration.findOne({ userId: user._id })
          .populate('userId')
          .sort({ createdAt: -1 });
      }
    }

    if (!registration) {
      return res.status(404).json({ success: false, message: 'Registration not found' });
    }

    const groupInfo = await GroupRegistration.findOne({ registrationId: registration.registrationId });

    res.json({
      success: true,
      registration: {
        registrationId: registration.registrationId,
        participantId: registration.participantId,
        fullName: registration.userId?.fullName || groupInfo?.groupName || 'Candidate',
        email: registration.userId?.email || groupInfo?.leaderEmail,
        phone: registration.userId?.phone || groupInfo?.leaderPhone,
        district: registration.userId?.district || 'Tirunelveli',
        address: registration.userId?.address,
        registrationType: registration.registrationType,
        selectedEvents: registration.selectedEvents,
        totalAmount: registration.totalAmount,
        paymentStatus: registration.paymentStatus,
        utrNumber: registration.utrNumber,
        qrCodeData: registration.qrCodeData || registration.registrationId,
        createdAt: registration.createdAt,
        groupInfo
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Public Site Content & Enquiry Routes
const { getSiteContent, createEnquiry } = require('../controllers/siteContentController');
router.get('/site-content', getSiteContent);
router.post('/enquiries', createEnquiry);

module.exports = router;
