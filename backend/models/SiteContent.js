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
        title: 'TheZar Official Passes & Team Badges',
        category: 'Official Passes',
        prize: 'VIP Entry & Stage Pass',
        date: 'Season 2026',
        venue: 'Tirunelveli District Arena',
        badge: 'Official Passes',
        description: 'Official credential passes for Event Organizers, Media Teams, Decor, Stage, and Support Crew with VIP backstage access.',
        image: '/assets/cards1.png'
      },
      {
        id: '2',
        title: 'Statewide Mega Group Dance Championship',
        category: 'Dance Troupe',
        prize: '₹1,50,000 Cash + Natya Trophy',
        date: 'Dec 12, 2026',
        venue: 'Main Grand Stage, VOC Ground',
        badge: 'Championship Trophy',
        description: 'High-octane group dance championship with state-of-the-art concert lighting, fireworks, and celebrity choreographers.',
        image: '/assets/cards2.png'
      },
      {
        id: '3',
        title: 'Solo Freestyle & Hip-Hop Dance Battle',
        category: 'Solo Dance',
        prize: '₹75,000 Cash + Gold Medal',
        date: 'Dec 12, 2026',
        venue: 'Amphitheatre Stage, VOC Ground',
        badge: 'Solo Battle',
        description: 'Electrifying solo dance battle showcasing Tamil Nadu’s finest solo dancers battling for statewide championship honors.',
        image: '/assets/cards3.png'
      },
      {
        id: '4',
        title: 'Statewide Solo Singing & Vocal Contest',
        category: 'Singing Solo',
        prize: '₹75,000 Cash + Golden Mic',
        date: 'Dec 12, 2026',
        venue: 'Acoustic Concert Hall, Tirunelveli',
        badge: 'Golden Mic',
        description: 'Mesmerizing solo vocal performances with live acoustic orchestration on the golden TheZar concert stage.',
        image: '/assets/cards4.png'
      },
      {
        id: '5',
        title: 'Grand Carol Choirs & Music Band Symphony',
        category: 'Choir & Bands',
        prize: '₹1,00,000 Cash + Choir Trophy',
        date: 'Dec 12, 2026',
        venue: 'Cathedral Grand Arena, Chennai',
        badge: 'Choir Trophy',
        description: 'Magnificent festive choral groups and musical bands performing timeless carols and cultural melodies across Tamil Nadu.',
        image: '/assets/cards5.png'
      },
      {
        id: '6',
        title: 'Santa Claus Family Stage & Winter Carnival',
        category: 'Special Contest',
        prize: 'Mega Holiday Shopping & Gifts',
        date: 'Dec 12, 2026',
        venue: 'North Pole Pavilion, Coimbatore',
        badge: 'Kids & Family',
        description: 'Step into Santa’s magical winter stage featuring giant Christmas trees, snowman displays, and gift distributions.',
        image: '/assets/cards6.png'
      },
      {
        id: '7',
        title: 'Junior Carol Fiesta & Kids Singing Contest',
        category: 'Kids Category',
        prize: '₹50,000 Cash + Junior Trophy',
        date: 'Dec 12, 2026',
        venue: 'Junior Arena Stage, VOC Ground',
        badge: 'Junior Category',
        description: 'Young rising prodigies and junior choirs singing festive melodies in traditional attire before an audience of thousands.',
        image: '/assets/cards7.png'
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
