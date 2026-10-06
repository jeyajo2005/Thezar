const mongoose = require('mongoose');

const siteContentSchema = new mongoose.Schema({
  // Admin Profile Settings
  adminName: { type: String, default: 'Suman / TheZar Administrator' },
  adminEmail: { type: String, default: 'admin@thezarevents.com' },
  adminPhone: { type: String, default: '+91 97903 51878' },
  adminAddress: { type: String, default: 'Tirunelveli, TN - India' },
  adminRole: { type: String, default: 'Super Admin' },
  adminAvatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },

  // 1. INDEX BANNER / NEWS TICKER (Dynamic Marquee)
  bannerItems: {
    type: [String],
    default: [
      'THEZAR 2026',
      '38 DISTRICTS',
      'ONE TABLE',
      'ONE TASTE',
      'GRAND COOKING CHAMPIONSHIP',
      'TAMIL NADU',
      'TIRUNELVELI STAGE',
      'REGISTER NOW'
    ]
  },
  bannerSpeed: { type: Number, default: 28 },
  bannerEnabled: { type: Boolean, default: true },
  topAnnouncement: {
    type: String,
    default: 'Season 2026 Registrations Open Across All 38 Districts'
  },

  // 2. HERO SECTION
  heroEyebrow: {
    type: String,
    default: "Tamil Nadu's Grandest Stage"
  },
  heroTitle: { type: String, default: 'The Taste of Tamil Nadu.' },
  heroTitleLine1: { type: String, default: 'The Taste' },
  heroTitleLine2: { type: String, default: 'of Tamil' },
  heroTitleLine3: { type: String, default: 'Nadu.' },
  heroSubtitle: {
    type: String,
    default: 'Statewide Culinary Championship — 38 Districts, One Grand Stage. Unleashing extraordinary cooking talent across the cultural heart of India.'
  },
  heroCountdownDate: { type: String, default: '2026-10-10T10:00:00+05:30' },
  heroEventName: { type: String, default: 'Grand Opening Stage & Cook-Off' },
  heroVenue: { type: String, default: 'VOC Ground, Tirunelveli' },
  heroPrimaryBtnText: { type: String, default: 'Register for Competition' },
  heroSecondaryBtnText: { type: String, default: 'Explore Fixtures' },
  heroBadgeText: { type: String, default: 'State Youth Championship' },

  // 3. ABOUT SECTION
  aboutEyebrow: { type: String, default: 'ABOUT THEZAR' },
  aboutTitle: { type: String, default: 'WHERE TALENT meets OPPORTUNITY' },
  aboutSubtitle: { type: String, default: 'Empowering Next-Gen Talent Across Tamil Nadu' },
  aboutDescription: {
    type: String,
    default: 'Tamil Nadu’s premier youth talent championship and cultural festival platform. Dedicated to discovering, celebrating, and empowering extraordinary talents across all 38 districts.'
  },
  aboutMission: {
    type: String,
    default: 'To discover, nurture, and celebrate authentic cultural, musical, and culinary excellence across all 38 districts of Tamil Nadu.'
  },
  aboutVision: {
    type: String,
    default: 'To build India\'s most prestigious youth platform where regional mastery meets statewide recognition and industry opportunities.'
  },
  aboutHighlights: {
    type: [String],
    default: [
      '38 Districts United Under One Championship Flag',
      '₹10 Lakhs+ Total Cash Prizes & Career Grants',
      'Statewide Media Broadcast & Celebrity Masterchef Panel',
      'Direct Pathway to National Cultural Festivals'
    ]
  },
  aboutStats: {
    type: [{ label: String, value: String }],
    default: [
      { label: 'Districts United', value: '38' },
      { label: 'Registered Contestants', value: '12,000+' },
      { label: 'Cash Prize Pool', value: '₹10,00,000+' },
      { label: 'Live Stages', value: '4 Rounds' }
    ]
  },

  // 4. EVENT / COMPETITIONS SECTION
  eventsSectionTitle: { type: String, default: 'State Championship Categories' },
  eventsSectionSubtitle: { type: String, default: 'Top Christmas & Statewide Championship Competitions across all 38 districts' },
  eventsList: {
    type: [
      {
        id: String,
        title: String,
        category: String,
        prize: String,
        date: String,
        venue: String,
        badge: String,
        description: String,
        image: String
      }
    ],
    default: [
      {
        id: '1',
        title: 'Grand Cooking Championship',
        category: 'Culinary Arts',
        prize: '₹1,00,000 Cash Prize + Golden Chef Trophy',
        date: 'Oct 10-12, 2026',
        venue: 'VOC Ground Arena, Tirunelveli',
        badge: 'Headline Championship',
        description: 'Statewide culinary battle showcasing authentic Tamil Nadu festive recipes and master chef judging.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2',
        title: 'Statewide Carol Symphony',
        category: 'Choir & Music Bands',
        prize: '₹50,000 Cash Prize + Trophy',
        date: 'Dec 12, 2026',
        venue: 'Tirunelveli District Arena',
        badge: 'Featured Stage',
        description: 'Grand choral and acoustic musical groups performing traditional and contemporary festive melodies.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3',
        title: 'Traditional Folk & Classical Dance',
        category: 'Dance Showcase',
        prize: '₹75,000 Cash Prize + Natya Award',
        date: 'Oct 15, 2026',
        venue: 'Centenary Hall, Tirunelveli',
        badge: 'High Impact',
        description: 'Celebrating classical Bharatanatyam, Karakattam, and contemporary choreography from 38 districts.',
        image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '4',
        title: 'Christmas Holiday Carnival & Stalls',
        category: 'Carnival & Fun',
        prize: 'Mega Holiday Shopping & Stalls',
        date: 'Dec 20-25, 2026',
        venue: 'Exhibition Grounds, Tirunelveli',
        badge: 'All Ages Welcome',
        description: 'Family holiday extravaganza featuring artisan stalls, food pavilions, gifts, and carnival rides.',
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  // 5. EXPERIENCE ZONES SECTION
  experienceTitle: { type: String, default: 'The Winter Festival Experience' },
  experienceSubtitle: { type: String, default: 'Immerse yourself in spectacular celebration zones crafted for all 38 districts' },
  experienceZones: {
    type: [
      {
        step: String,
        title: String,
        subtitle: String,
        desc: String,
        image: String,
        features: [String]
      }
    ],
    default: [
      {
        step: '01',
        title: "Santa's Midnight Sleigh Flight",
        subtitle: 'Where Holiday Journeys Begin',
        desc: 'Watch Santa Claus riding his traditional golden sleigh pulled by reindeer galloping across rolling snow-covered hills under a warm sunset glow.',
        image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
        features: ['Golden Sleigh Display', 'Snow Drift Trail', 'Magical Star Canopy']
      },
      {
        step: '02',
        title: 'Majestic Reindeer Pavilion',
        subtitle: "Meet Santa's Golden-Harnessed Reindeer",
        desc: 'Step inside the peaceful winter stable to meet majestic reindeer adorned with delicate golden fairy lights, brass jingle bells, and piles of velvet wrapped gifts.',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        features: ['Reindeer Petting Zone', 'Brass Jingle Bell Souvenirs', 'Golden Wish Postbox']
      },
      {
        step: '03',
        title: 'Grand Christmas Tree Plaza',
        subtitle: '70-Foot Landmark of Lights & Presents',
        desc: 'Gather around our magnificent pine Christmas tree adorned with thousands of golden fairy lights, crimson baubles, a glowing star, and mountains of wrapped presents.',
        image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80',
        features: ['70-Foot Decorated Tree', 'Statewide Carol Choirs', 'Hourly Light Shows']
      },
      {
        step: '04',
        title: 'Midnight Fireworks & Award Gala',
        subtitle: 'The Grand Finale Spectacle',
        desc: 'As midnight approaches, witness a world-class pyrotechnic and synchronized drone light show painting the winter night sky with holiday blessings.',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=800&q=80',
        features: ['Drone Light Art', 'Champion Trophies', 'Midnight Bell Blessing']
      }
    ]
  },

  // 6. INDEX BANNERS (Storefront Desktop & Mobile Banners)
  desktopBanners: {
    type: [
      {
        slot: { type: Number, required: true },
        title: { type: String, default: '' },
        image: { type: String, default: '' },
        link: { type: String, default: '/events' },
        size: { type: String, default: '1500 * 500 px' },
        active: { type: Boolean, default: true }
      }
    ],
    default: [
      {
        slot: 1,
        title: 'Traditional Flavours & Grand Stage',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      },
      {
        slot: 2,
        title: 'Daily Health Mixes & Festive Arena',
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      },
      {
        slot: 3,
        title: 'Statewide Championship & Event Details',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      }
    ]
  },
  mobileBanners: {
    type: [
      {
        slot: { type: Number, required: true },
        title: { type: String, default: '' },
        image: { type: String, default: '' },
        link: { type: String, default: '/events' },
        size: { type: String, default: 'Portrait' },
        active: { type: Boolean, default: true }
      }
    ],
    default: [
      {
        slot: 1,
        title: 'Mobile Pass - Festive Season',
        image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      },
      {
        slot: 2,
        title: 'Mobile Pass - Culinary Battle',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      },
      {
        slot: 3,
        title: 'Mobile Pass - Music & Dance Gala',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      }
    ]
  },

  // Countdown Section Dynamic Data
  countdownTitle: { type: String, default: 'Count Every Second Until the Event' },
  countdownEventName: { type: String, default: 'Christmas Carol Fiesta 2026 Grand Stage' },
  countdownTargetDate: { type: String, default: '2026-12-12T09:00:00.000Z' },
  countdownVenue: { type: String, default: 'Tirunelveli District Arena' },

  // Featured Competition Dynamic Data
  featuredTitle: { type: String, default: 'GRAND COOKING CHAMPIONSHIP' },
  featuredDistrict: { type: String, default: 'TIRUNELVELI DISTRICT' },
  featuredPrize: { type: String, default: '₹1,00,000 Cash Prize + Trophy' },
  featuredDescription: {
    type: String,
    default: 'Statewide culinary battle showcasing authentic Tamil Nadu festive recipes, live staging & master chef judging panel.'
  },

  // Contact & Social Details
  contactEmail: { type: String, default: 'thezarevents@gmail.com' },
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
