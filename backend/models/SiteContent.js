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

  // Hero Section Dynamic Data
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

  aboutTitle: { type: String, default: 'Empowering Next-Gen Talent Across Tamil Nadu' },
  aboutDescription: { type: String, default: 'TheZar 2026 is Tamil Nadu’s premier multi-district talent festival.' },
  mission: { type: String, default: 'To discover, nurture, and celebrate authentic cultural, musical, and intellectual excellence.' },
  vision: { type: String, default: 'A unified statewide platform connecting regional youth with national creative opportunities.' },
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
