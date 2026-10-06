const mongoose = require('mongoose');

const siteContentSchema = new mongoose.Schema({
  // 1. Admin Profile Settings
  adminName: { type: String, default: 'Suman / TheZar Administrator' },
  adminEmail: { type: String, default: 'admin@thezarevents.com' },
  adminPhone: { type: String, default: '+91 97903 51878' },
  adminAddress: { type: String, default: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002' },
  adminRole: { type: String, default: 'Super Admin' },
  adminAvatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },

  // 2. Hero Section Dynamic Data
  heroEyebrow: {
    type: String,
    default: '1ST DISTRICT STAGE | TIRUNELVELI | TALENT CHAMPIONSHIP | THEZAR 2026'
  },
  heroTitleLine1: { type: String, default: 'STATEWIDE TALENT' },
  heroTitleLine2: { type: String, default: 'SHOWCASE PLATFORM' },
  heroTitleLine3: { type: String, default: 'CHAMPIONSHIP' },
  heroSubtitle: {
    type: String,
    default: 'Unleashing & Elevating Extraordinary Talent Across 38 Districts. 1st Live Competition Stage Hosted in Tirunelveli.'
  },
  heroBadgeText: { type: String, default: 'TIRUNELVELI ROUND 1 OPEN' },
  heroStatDistricts: { type: String, default: '38 Districts' },
  heroStatParticipants: { type: String, default: '10,000+ Registrations' },
  heroStatPrizePool: { type: String, default: '₹5 Lakhs+ Prize Pool' },

  // 3. About Section Dynamic Data
  aboutEyebrow: { type: String, default: 'ABOUT THEZAR' },
  aboutTitle: { type: String, default: 'WHERE TALENT meets OPPORTUNITY' },
  aboutDescription: {
    type: String,
    default: 'TheZar brings participants together across Tamil Nadu through district-level competitions, innovation, creativity and achievement. From competitions to cultural spectacles, this is the definitive stage for state champions.'
  },
  aboutBullet1: { type: String, default: '38 District preliminary stages leading to Chennai Mega Finals' },
  aboutBullet2: { type: String, default: 'Grand House Prize + Mega Cash Prize Pool for winners' },
  aboutBullet3: { type: String, default: 'Direct mentorship and networking with state industry leaders' },
  mission: { type: String, default: 'To discover, nurture, and celebrate authentic cultural, musical, and intellectual excellence.' },
  vision: { type: String, default: 'A unified statewide platform connecting regional youth with national creative opportunities.' },

  // 4. Countdown Section Dynamic Data
  countdownBadge: { type: String, default: 'NEXT DISTRICT STAGE' },
  countdownTitle: { type: String, default: 'Count Every Second Until the Event' },
  countdownEventName: { type: String, default: 'Christmas Carol Fiesta 2026 Grand Stage' },
  countdownTargetDate: { type: String, default: '2026-12-12T09:00:00.000Z' },
  countdownVenue: { type: String, default: 'Tirunelveli District Arena' },

  // 5. Featured & Competition Categories Dynamic Data
  competitionsEyebrow: { type: String, default: 'OFFICIAL COMPETITION CATEGORIES • TIRUNELVELI' },
  competitionsTitle: { type: String, default: 'CAROL FIESTA 2026' },
  competitionsHighlight: { type: String, default: 'CATEGORIES' },
  competitionsSubtitle: {
    type: String,
    default: 'Four exciting competition tracks featuring solo singing, live choir bands, choreography dance, and special Santa Claus performances with grand cash awards and trophies!'
  },
  featuredBadge: { type: String, default: 'TIRUNELVELI DISTRICT ARENA • DEC 12, 2026' },
  featuredTitle: { type: String, default: 'Christmas Carol Fiesta' },
  featuredSubtitle: { type: String, default: 'Grand Stage Competitions' },
  featuredDescription: {
    type: String,
    default: 'Take the acoustic spotlight and compete among Tamil Nadu’s top vocalists, choir troupes, and dance performers. Instant digital entry passes and certified jury evaluations!'
  },
  featuredDistrict: { type: String, default: 'TIRUNELVELI DISTRICT' },
  featuredPrize: { type: String, default: '₹50,000 Cash Prize + Trophy' },
  competitionCategories: {
    type: Array,
    default: [
      {
        id: 'singing',
        categoryNum: 'Category I',
        title: 'Solo Vocal & Carol Singing',
        subtitle: 'Kids Under 15 & Adults Open',
        entryFee: '₹699 per entry',
        iconName: 'Mic',
        color: 'bg-amber-500/15 text-amber-900 border-amber-200',
        badgeBg: 'bg-amber-100 text-amber-800',
        description: 'Acoustic festive singing with live jury evaluation. Kids (under 15) and adult open tracks available.',
        prizes: '1st ₹15,000 / 2nd ₹10,000',
        venue: 'Tirunelveli District Arena'
      },
      {
        id: 'choir',
        categoryNum: 'Category II',
        title: 'Choir & Music Bands',
        subtitle: 'Troupe & Band Harmony',
        entryFee: '₹199 per member',
        iconName: 'Users',
        color: 'bg-[#9e0804]/15 text-[#9e0804] border-[#9e0804]/30',
        badgeBg: 'bg-[#9e0804]/15 text-[#9e0804]',
        description: 'Grand choir and band competition for church, school, college, and independent ensembles.',
        prizes: '1st ₹50,000 / 2nd ₹25,000',
        venue: 'Main Auditorium Stage'
      },
      {
        id: 'dance',
        categoryNum: 'Category III',
        title: 'Choreography Dance Showcase',
        subtitle: 'Solo & Group Choreography',
        entryFee: 'Solo ₹699 / Group ₹199 per head',
        iconName: 'Sparkles',
        color: 'bg-purple-500/15 text-purple-900 border-purple-200',
        badgeBg: 'bg-purple-100 text-purple-800',
        description: 'Dynamic festive dance battles featuring creative choreography, rhythm, costumes, and stage synchrony.',
        prizes: '1st ₹25,000 / 2nd ₹15,000',
        venue: 'Grand Stage Arena'
      },
      {
        id: 'santa',
        categoryNum: 'Category IV',
        title: 'Santa Claus Contest',
        subtitle: 'Special Stage Character Act',
        entryFee: '₹699 per entry',
        iconName: 'Award',
        color: 'bg-emerald-500/15 text-emerald-900 border-emerald-200',
        badgeBg: 'bg-emerald-100 text-emerald-800',
        description: 'Festive character presentation, costume creativity, cheerful crowd interaction, and stage presence.',
        prizes: 'Grand Prize ₹20,000',
        venue: 'Festive Center Stage'
      }
    ]
  },

  // 6. How It Works Dynamic Data
  howItWorksEyebrow: { type: String, default: 'SIMPLE 3-STEP JOURNEY' },
  howItWorksTitle: { type: String, default: 'HOW THEZAR' },
  howItWorksHighlight: { type: String, default: 'WORKS' },
  howItWorksSubtitle: {
    type: String,
    default: 'From local district registration to the grand statewide stage in Chennai — simple, transparent, and direct.'
  },
  howItWorksStep1Title: { type: String, default: 'Select District & Register' },
  howItWorksStep1Desc: { type: String, default: 'Choose your district arena (e.g. Tirunelveli Singing, Choirs, Dance or Arts) & generate your verified digital admission pass.' },
  howItWorksStep2Title: { type: String, default: 'Submit 60-Sec Video Reel' },
  howItWorksStep2Desc: { type: String, default: 'Record & upload a short video reel showing your talent for district jury evaluation & shortlisting.' },
  howItWorksStep3Title: { type: String, default: 'Face-to-Face Live Stage' },
  howItWorksStep3Desc: { type: String, default: 'Perform live before grand judges & audience at your district auditorium and advance to Chennai Finals!' },

  // 7. News Ticker Dynamic Data
  newsTickerItems: {
    type: Array,
    default: [
      { id: 1, tag: 'LIVE NOW', tagColor: 'bg-[#9e0804] text-white', text: 'TIRUNELVELI DISTRICT REGISTRATION IS NOW OPEN — CAROL FIESTA 2026 COMPETITIONS' },
      { id: 2, tag: 'PRIZE POOL', tagColor: 'bg-[#9e0804] text-white', text: 'GRAND HOUSE PRIZE & MEGA CASH PRIZE POOL FOR STATEWIDE CHAMPIONS' },
      { id: 3, tag: 'ROUND 1', tagColor: 'bg-sky-500 text-white', text: 'UPLOAD 60-SEC VIDEO REEL ONLINE — NO CODING OR TECHNICAL TESTS REQUIRED' },
      { id: 4, tag: '38 DISTRICTS', tagColor: 'bg-emerald-500 text-white', text: 'LIVE AUDITORIUM STAGE PERFORMANCES ACROSS ALL 38 TAMIL NADU DISTRICTS' },
      { id: 5, tag: 'CATEGORIES', tagColor: 'bg-purple-500 text-white', text: '4 DIVISIONS OPEN: SINGING SOLO, CHOIR & BANDS, DANCE SHOWCASE & SANTA CLAUS CONTEST' }
    ]
  },

  // 8. Leaderboard Section Dynamic Data
  leaderboardEyebrow: { type: String, default: 'LIVE SCORING PREVIEW' },
  leaderboardTitle: { type: String, default: 'Statewide Leaderboard' },
  leaderboardSubtitle: { type: String, default: 'Real-time points & stage performance rankings from district qualifiers.' },
  leaderboardTopThree: {
    type: Array,
    default: [
      { rank: 2, name: 'Wade Warren', district: 'Tirunelveli', score: '3,546', subtitle: 'Solo Vocal Champion' },
      { rank: 1, name: 'Robert Fox', district: 'Chennai', score: '3,890', subtitle: 'Statewide Carol Champion' },
      { rank: 3, name: 'Jane Cooper', district: 'Madurai', score: '3,420', subtitle: 'South Region Leader' }
    ]
  },

  // 9. Mobile App Section Dynamic Data
  mobileAppEyebrow: { type: String, default: 'MOBILE APP PORTAL' },
  mobileAppTitle: { type: String, default: 'Download TheZar App for Live Passes & Results' },
  mobileAppSubtitle: {
    type: String,
    default: 'Track your scores, download verified entry QR passes, receive jury schedules, and submit video reels directly from your smartphone.'
  },
  mobileAppPassName: { type: String, default: 'Sumanth Raja • Solo Vocal Championship • Tirunelveli' },
  mobileAppPlayStoreUrl: { type: String, default: '#' },
  mobileAppAppStoreUrl: { type: String, default: '#' },

  // 10. CTA Section Dynamic Data
  ctaEyebrow: { type: String, default: 'YOUR SPOTLIGHT AWAITS' },
  ctaTitle: { type: String, default: 'Ready to Represent Your District?' },
  ctaSubtitle: { type: String, default: 'Join thousands of participants across Tamil Nadu. Register now and get your verified admission pass.' },
  ctaButtonText: { type: String, default: 'REGISTER NOW' },

  // 11. Contact & Social Links
  contactEmail: { type: String, default: 'contact@thezarevents.com' },
  contactPhone: { type: String, default: '+91 97903 51878' },
  contactAddress: { type: String, default: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002' },
  instagram: { type: String, default: 'https://instagram.com/thezarevents' },
  facebook: { type: String, default: 'https://facebook.com/thezarevents' },
  youtube: { type: String, default: 'https://youtube.com/@thezarevents' },
  whatsapp: { type: String, default: '+91 97903 51878' },
  footerText: { type: String, default: 'TheZar 2026 Statewide Championship • Official Portal' },
  copyright: { type: String, default: '© 2026 TheZar Statewide Championship. All Rights Reserved.' }
}, { timestamps: true });

module.exports = mongoose.model('SiteContent', siteContentSchema);
