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

    const primaryEmail = registrationType === 'group' ? groupLeaderEmail : email;
    const primaryName = registrationType === 'group' ? groupLeaderName : participantName;
    const primaryPhone = registrationType === 'group' ? groupLeaderPhone : phone;
    const primaryAddress = registrationType === 'group' ? groupAddress : address;
    const primaryDistrict = district || 'Tirunelveli';

    // 1. Calculate Total Amount
    let totalAmount = 0;
    if (Array.isArray(selectedEvents) && selectedEvents.length > 0) {
      totalAmount = selectedEvents.reduce((acc, ev) => acc + (Number(ev.price) || 0), 0);
    }

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
      registrationType,
      selectedEventIds: selectedEvents.map((e) => e.eventId || e.id),
      selectedEvents,
      howDidYouHear: howDidYouHear || 'Website',
      totalAmount,
      paymentStatus,
      utrNumber: testUtr,
      qrCodeData: registrationId
    });
    await registration.save();

    // 7. Send Email Confirmation
    await sendConfirmationEmail({
      email: primaryEmail,
      fullName: primaryName,
      registrationId,
      participantId: user.participantId,
      password: user.password || generatedPassword,
      selectedEvents,
      amount: totalAmount,
      paymentStatus
    });

    res.json({
      success: true,
      registrationId,
      participantId: user.participantId,
      password: user.password || generatedPassword,
      paymentStatus,
      amount: totalAmount,
      utrNumber: testUtr,
      selectedEvents,
      qrCodeData: registrationId,
      message: 'Registration Submitted Successfully 🎉'
    });
  } catch (err) {
    console.error('[Registration Error]:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Public Site Content & Enquiry Routes
const { getSiteContent, createEnquiry } = require('../controllers/siteContentController');
const { getCompetitions, getAnnouncements, getDistricts, getResults } = require('../controllers/adminController');

router.get('/site-content', getSiteContent);
router.get('/competitions', getCompetitions);
router.get('/announcements', getAnnouncements);
router.get('/districts', getDistricts);
router.get('/results', getResults);
router.post('/enquiries', createEnquiry);

module.exports = router;
