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

const District = require('../models/District');
const Competition = require('../models/Competition');

// Curated 38 Districts of Tamil Nadu fallback
const defaultDistricts = [
  { id: 1, name: "Tirunelveli", code: "TVL", region: "South", zone: "South TN", date: "10 Oct 2026", venue: "ABC College of Engineering, Tirunelveli", status: "Live", participants: 420, eventsCount: 12 },
  { id: 2, name: "Madurai", code: "MDU", region: "South", zone: "South TN", date: "15 Oct 2026", venue: "Madura Arts & Science College", status: "Upcoming", participants: 380, eventsCount: 10 },
  { id: 3, name: "Chennai", code: "CHN", region: "North", zone: "North TN", date: "20 Oct 2026", venue: "Anna University Campus, Guindy", status: "Upcoming", participants: 850, eventsCount: 18 },
  { id: 4, name: "Coimbatore", code: "CBE", region: "West", zone: "West TN", date: "25 Oct 2026", venue: "PSG College of Technology", status: "Upcoming", participants: 620, eventsCount: 15 },
  { id: 5, name: "Salem", code: "SLM", region: "West", zone: "West TN", date: "28 Oct 2026", venue: "Government Engineering College", status: "Upcoming", participants: 310, eventsCount: 8 },
  { id: 6, name: "Trichy", code: "TRY", region: "Central", zone: "Central TN", date: "02 Nov 2026", venue: "NIT Trichy Convention Hall", status: "Upcoming", participants: 540, eventsCount: 14 },
  { id: 7, name: "Kanyakumari", code: "KKI", region: "South", zone: "South TN", date: "05 Nov 2026", venue: "Scott Christian College, Nagercoil", status: "Upcoming", participants: 290, eventsCount: 8 },
  { id: 8, name: "Thanjavur", code: "TNJ", region: "Central", zone: "Central TN", date: "08 Nov 2026", venue: "SASTRA Deemed University", status: "Upcoming", participants: 410, eventsCount: 10 },
  { id: 9, name: "Erode", code: "ERD", region: "West", zone: "West TN", date: "12 Nov 2026", venue: "Kongu Engineering College", status: "Upcoming", participants: 390, eventsCount: 9 },
  { id: 10, name: "Vellore", code: "VLR", region: "North", zone: "North TN", date: "15 Nov 2026", venue: "VIT Auditorium, Vellore", status: "Upcoming", participants: 510, eventsCount: 12 },
  { id: 11, name: "Tuticorin", code: "TCN", region: "South", zone: "South TN", date: "18 Nov 2026", venue: "VOC College Campus", status: "Upcoming", participants: 270, eventsCount: 7 },
  { id: 12, name: "Dindigul", code: "DGL", region: "Central", zone: "Central TN", date: "22 Nov 2026", venue: "PSNA College of Engg", status: "Upcoming", participants: 330, eventsCount: 8 },
  { id: 13, name: "Cuddalore", code: "CDL", region: "East", zone: "East TN", date: "25 Nov 2026", venue: "Periyar Arts College", status: "Upcoming", participants: 280, eventsCount: 6 },
  { id: 14, name: "Kanchipuram", code: "KCP", region: "North", zone: "North TN", date: "28 Nov 2026", venue: "Meenakshi University", status: "Upcoming", participants: 340, eventsCount: 8 },
  { id: 15, name: "Thiruvallur", code: "TVR", region: "North", zone: "North TN", date: "01 Dec 2026", venue: "RMK Engineering College", status: "Upcoming", participants: 360, eventsCount: 9 },
  { id: 16, name: "Dharmapuri", code: "DMP", region: "West", zone: "West TN", date: "04 Dec 2026", venue: "Government Arts College", status: "Upcoming", participants: 210, eventsCount: 5 },
  { id: 17, name: "Krishnagiri", code: "KGI", region: "West", zone: "West TN", date: "07 Dec 2026", venue: "GCE Krishnagiri", status: "Upcoming", participants: 240, eventsCount: 6 },
  { id: 18, name: "Namakkal", code: "NMK", region: "West", zone: "West TN", date: "10 Dec 2026", venue: "Muthayammal Engg College", status: "Upcoming", participants: 290, eventsCount: 7 },
  { id: 19, name: "Karur", code: "KRR", region: "Central", zone: "Central TN", date: "13 Dec 2026", venue: "Chettinad College", status: "Upcoming", participants: 230, eventsCount: 6 },
  { id: 20, name: "Perambalur", code: "PBL", region: "Central", zone: "Central TN", date: "16 Dec 2026", venue: "Dhanalakshmi Srinivasan College", status: "Upcoming", participants: 190, eventsCount: 5 },
  { id: 21, name: "Ariyalur", code: "AYR", region: "Central", zone: "Central TN", date: "19 Dec 2026", venue: "Govt Arts & Science College", status: "Upcoming", participants: 180, eventsCount: 5 },
  { id: 22, name: "Nagapattinam", code: "NGP", region: "East", zone: "East TN", date: "22 Dec 2026", venue: "EGS Pillay College", status: "Upcoming", participants: 220, eventsCount: 6 },
  { id: 23, name: "Mayiladuthurai", code: "MYD", region: "East", zone: "East TN", date: "26 Dec 2026", venue: "AVC College of Engg", status: "Upcoming", participants: 210, eventsCount: 5 },
  { id: 24, name: "Tiruvarur", code: "TVR", region: "East", zone: "East TN", date: "29 Dec 2026", venue: "Central University TN", status: "Upcoming", participants: 250, eventsCount: 6 },
  { id: 25, name: "Pudukkottai", code: "PDK", region: "Central", zone: "Central TN", date: "02 Jan 2027", venue: "JJ College of Arts", status: "Upcoming", participants: 260, eventsCount: 7 },
  { id: 26, name: "Sivagangai", code: "SVG", region: "South", zone: "South TN", date: "05 Jan 2027", venue: "Alagappa University", status: "Upcoming", participants: 310, eventsCount: 8 },
  { id: 27, name: "Ramanathapuram", code: "RMD", region: "South", zone: "South TN", date: "08 Jan 2027", venue: "Syed Ammal Arts College", status: "Upcoming", participants: 230, eventsCount: 6 },
  { id: 28, name: "Virudhunagar", code: "VDN", region: "South", zone: "South TN", date: "11 Jan 2027", venue: "Kamaraj College of Engg", status: "Upcoming", participants: 340, eventsCount: 8 },
  { id: 29, name: "Theni", code: "TNI", region: "South", zone: "South TN", date: "14 Jan 2027", venue: "CPA College, Bodinayakanur", status: "Upcoming", participants: 200, eventsCount: 5 },
  { id: 30, name: "Tenkasi", code: "TKS", region: "South", zone: "South TN", date: "18 Jan 2027", venue: "Govt Arts College Tenkasi", status: "Upcoming", participants: 250, eventsCount: 6 },
  { id: 31, name: "Nilgiris", code: "NLG", region: "West", zone: "West TN", date: "22 Jan 2027", venue: "Government Arts College Ooty", status: "Upcoming", participants: 170, eventsCount: 5 },
  { id: 32, name: "Tirupathur", code: "TPT", region: "North", zone: "North TN", date: "25 Jan 2027", venue: "Sacred Heart College", status: "Upcoming", participants: 220, eventsCount: 6 },
  { id: 33, name: "Ranipet", code: "RPT", region: "North", zone: "North TN", date: "28 Jan 2027", venue: "C. Abdul Hakeem College", status: "Upcoming", participants: 210, eventsCount: 6 },
  { id: 34, name: "Kallakurichi", code: "KKC", region: "Central", zone: "Central TN", date: "01 Feb 2027", venue: "AKT Memorial College", status: "Upcoming", participants: 230, eventsCount: 6 },
  { id: 35, name: "Villupuram", code: "VPM", region: "East", zone: "East TN", date: "04 Feb 2027", venue: "TACW Campus", status: "Upcoming", participants: 290, eventsCount: 7 },
  { id: 36, name: "Chengalpattu", code: "CGP", region: "North", zone: "North TN", date: "08 Feb 2027", venue: "SRM Institute, Kattankulathur", status: "Upcoming", participants: 680, eventsCount: 16 },
  { id: 37, name: "Tiruvannamalai", code: "TVM", region: "North", zone: "North TN", date: "12 Feb 2027", venue: "SKP Engineering College", status: "Upcoming", participants: 300, eventsCount: 8 },
  { id: 38, name: "Grand Finale - Chennai", code: "FIN", region: "Statewide", zone: "Statewide Finals", date: "20 Feb 2027", venue: "Nehru Indoor Stadium, Chennai", status: "Upcoming", participants: 1200, eventsCount: 20 }
];

// Curated Competitions fallback
const defaultCompetitions = [
  {
    id: 'singing',
    competitionId: 'COMP-01',
    title: 'Solo Vocal & Carol Singing',
    category: 'Singing Solo',
    badgeColor: 'from-[#8C202E] to-[#5C101B]',
    tag: 'Category I',
    prizes: '₹50,000 Total Pool',
    items: ['Kids Solo Vocal (Under 15)', 'Adult Solo Festive Singing', 'Acoustic Accompaniment Live', 'Master Jury Evaluation'],
    description: 'Step onto the acoustic main stage to showcase melodic vocal range, emotional depth, and festive Christmas Carol harmony.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    fee: 699,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'choir',
    competitionId: 'COMP-02',
    title: 'Choir & Live Music Bands',
    category: 'Choir & Bands',
    badgeColor: 'from-amber-600 to-amber-900',
    tag: 'Category II',
    prizes: '₹1,50,000 Total Pool',
    items: ['Church & School Choirs', 'Festive Live Music Bands', 'Multi-Part Vocal Harmony', 'Orchestral Staging Setup'],
    description: 'Grand troupe battle bringing together church choirs, collegiate musical bands, and multi-part choral harmonies.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    fee: 199,
    venue: 'Grand Auditorium Stage'
  },
  {
    id: 'dance',
    competitionId: 'COMP-03',
    title: 'Choreography Dance Showcase',
    category: 'Dance Showcase',
    badgeColor: 'from-purple-600 to-indigo-900',
    tag: 'Category III',
    prizes: '₹1,00,000 Total Pool',
    items: ['Freestyle Solo Festive Dance', 'Group Choreography Showcase', 'Costume & Theme Presentation', 'Grand Stage Lighting Act'],
    description: 'Expressive rhythm and visual spectacle featuring synchronized group troupes, energetic steps, and freestyle soloists.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80',
    fee: 199,
    venue: 'Open Arena Stage'
  },
  {
    id: 'santa',
    competitionId: 'COMP-04',
    title: 'Santa Claus & Special Acts',
    category: 'Special Contest',
    badgeColor: 'from-emerald-600 to-teal-900',
    tag: 'Category IV',
    prizes: '₹50,000 Total Pool',
    items: ['Santa Claus Character Contest', 'Festive Stage Theme Presentation', 'Live Audience Interaction', 'Celebrity Jury Evaluation'],
    description: 'Festive stage character competition featuring Santa Claus costume acts, creative sketches, and interactive joy.',
    image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1000&q=80',
    fee: 699,
    venue: 'Festive Center Stage'
  }
];

// Curated Christmas/Featured Events fallback
const defaultFeaturedEvents = [
  {
    id: 'xmas-1',
    title: 'Statewide Christmas Choral Symphony',
    date: '22 Dec 2026',
    time: '05:00 PM - 09:30 PM',
    venue: 'Santhome Cathedral Auditorium, Chennai',
    prize: '₹2,50,000 Cash + Rolling Trophy',
    category: 'Choir & Vocal Harmony',
    badge: 'Statewide Gala',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'xmas-2',
    title: 'Traditional Plum Cake & Baking Championship',
    date: '23 Dec 2026',
    time: '10:00 AM - 04:00 PM',
    venue: 'Heritage Hall, Madurai',
    prize: '₹1,50,000 + Golden Whisk Award',
    category: 'Culinary Contest',
    badge: 'Chef Judged',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'xmas-3',
    title: 'TheZar Winter Carnival & Gift Expo',
    date: '24-25 Dec 2026',
    time: '11:00 AM - 10:00 PM',
    venue: 'VOC Grounds, Coimbatore',
    prize: 'Mega Holiday Shopping & Stalls',
    category: 'Carnival & Fun',
    badge: 'All Ages Welcome',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&auto=format&fit=crop&q=80'
  }
];

// GET /api/events (Public dynamic events)
router.get('/events', async (req, res) => {
  try {
    let events = [];
    try {
      events = await Event.find().sort({ createdAt: -1 });
    } catch (dbErr) {
      console.warn('[Events API] MongoDB offline or timeout, returning defaults:', dbErr.message);
    }
    if (!events || events.length === 0) {
      try {
        events = await Event.insertMany(defaultEvents);
      } catch (insertErr) {
        events = defaultEvents;
      }
    }
    res.json({ success: true, events });
  } catch (err) {
    res.json({ success: true, events: defaultEvents, fallback: true });
  }
});

// GET /api/districts (Public dynamic districts)
router.get('/districts', async (req, res) => {
  try {
    let districts = [];
    try {
      districts = await District.find().sort({ name: 1 });
    } catch (dbErr) {
      console.warn('[Districts API] MongoDB query error:', dbErr.message);
    }

    if (!districts || districts.length === 0) {
      res.json({ success: true, districts: defaultDistricts, count: defaultDistricts.length });
    } else {
      // Map DB fields nicely to frontend structure if necessary
      const formatted = districts.map((d, idx) => ({
        id: d.districtId || idx + 1,
        name: d.name,
        code: d.districtId ? d.districtId.replace('DIST-', '') : d.name.slice(0, 3).toUpperCase(),
        region: d.zone ? d.zone.replace(' TN', '') : 'South',
        zone: d.zone || 'South TN',
        venue: `${d.name} Central Stadium / Auditorium`,
        status: d.status || 'Upcoming',
        participants: d.participantsCount || (d.name === 'Tirunelveli' ? 420 : 150 + (idx * 25)),
        eventsCount: d.activeEventsCount || 4,
        date: d.name === 'Tirunelveli' ? '12.12.2026' : 'Dec 2026'
      }));
      res.json({ success: true, districts: formatted, count: formatted.length });
    }
  } catch (err) {
    res.json({ success: true, districts: defaultDistricts, count: defaultDistricts.length, fallback: true });
  }
});

// GET /api/competitions (Public dynamic competitions)
router.get('/competitions', async (req, res) => {
  try {
    let comps = [];
    try {
      comps = await Competition.find().sort({ createdAt: -1 });
    } catch (dbErr) {
      console.warn('[Competitions API] MongoDB query error:', dbErr.message);
    }

    if (!comps || comps.length === 0) {
      res.json({ success: true, competitions: defaultCompetitions });
    } else {
      // Merge with default tracks if DB has partial info
      const merged = comps.map((c, idx) => {
        const fallback = defaultCompetitions[idx] || defaultCompetitions[0];
        return {
          id: c.competitionId || fallback.id,
          title: c.name || fallback.title,
          category: c.category || fallback.category,
          tag: `Category ${['I', 'II', 'III', 'IV', 'V'][idx % 5]}`,
          badgeColor: fallback.badgeColor,
          prizes: c.fee ? `₹${c.fee * 100} Prize Pool` : fallback.prizes,
          items: c.rules && c.rules.length > 0 ? c.rules : fallback.items,
          description: fallback.description,
          image: fallback.image,
          fee: c.fee || fallback.fee,
          venue: c.venue || fallback.venue
        };
      });
      res.json({ success: true, competitions: merged });
    }
  } catch (err) {
    res.json({ success: true, competitions: defaultCompetitions, fallback: true });
  }
});

// GET /api/events/featured (Public dynamic featured Christmas events)
router.get('/events/featured', async (req, res) => {
  try {
    res.json({ success: true, featuredEvents: defaultFeaturedEvents });
  } catch (err) {
    res.json({ success: true, featuredEvents: defaultFeaturedEvents, fallback: true });
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
