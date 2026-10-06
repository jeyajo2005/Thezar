import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DEFAULT_SITE_CONTENT = {
  // 1. Admin Profile Settings
  adminName: 'Suman / TheZar Administrator',
  adminEmail: 'admin@thezarevents.com',
  adminPhone: '+91 97903 51878',
  adminAddress: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002',
  adminRole: 'Super Admin',
  adminAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',

  // 2. Hero Section Dynamic Data
  heroEyebrow: '1ST DISTRICT STAGE | TIRUNELVELI | TALENT CHAMPIONSHIP | THEZAR 2026',
  heroTitleLine1: 'STATEWIDE TALENT',
  heroTitleLine2: 'SHOWCASE PLATFORM',
  heroTitleLine3: 'CHAMPIONSHIP',
  heroSubtitle: 'Unleashing & Elevating Extraordinary Talent Across 38 Districts. 1st Live Competition Stage Hosted in Tirunelveli.',
  heroBadgeText: 'TIRUNELVELI ROUND 1 OPEN',
  heroStatDistricts: '38 Districts',
  heroStatParticipants: '10,000+ Registrations',
  heroStatPrizePool: '₹5 Lakhs+ Prize Pool',

  // 3. About Section Dynamic Data
  aboutEyebrow: 'ABOUT THEZAR',
  aboutTitle: 'WHERE TALENT meets OPPORTUNITY',
  aboutDescription: 'TheZar brings participants together across Tamil Nadu through district-level competitions, innovation, creativity and achievement. From competitions to cultural spectacles, this is the definitive stage for state champions.',
  aboutBullet1: '38 District preliminary stages leading to Chennai Mega Finals',
  aboutBullet2: 'Grand House Prize + Mega Cash Prize Pool for winners',
  aboutBullet3: 'Direct mentorship and networking with state industry leaders',
  mission: 'To discover, nurture, and celebrate authentic cultural, musical, and intellectual excellence.',
  vision: 'A unified statewide platform connecting regional youth with national creative opportunities.',

  // 4. Countdown Section Dynamic Data
  countdownBadge: 'NEXT DISTRICT STAGE',
  countdownTitle: 'Count Every Second Until the Event',
  countdownEventName: 'Christmas Carol Fiesta 2026 Grand Stage',
  countdownTargetDate: '2026-12-12T09:00:00.000Z',
  countdownVenue: 'Tirunelveli District Arena',

  // 5. Featured & Competition Categories Dynamic Data
  competitionsEyebrow: 'OFFICIAL COMPETITION CATEGORIES • TIRUNELVELI',
  competitionsTitle: 'CAROL FIESTA 2026',
  competitionsHighlight: 'CATEGORIES',
  competitionsSubtitle: 'Four exciting competition tracks featuring solo singing, live choir bands, choreography dance, and special Santa Claus performances with grand cash awards and trophies!',
  featuredBadge: 'TIRUNELVELI DISTRICT ARENA • DEC 12, 2026',
  featuredTitle: 'Christmas Carol Fiesta',
  featuredSubtitle: 'Grand Stage Competitions',
  featuredDescription: 'Take the acoustic spotlight and compete among Tamil Nadu’s top vocalists, choir troupes, and dance performers. Instant digital entry passes and certified jury evaluations!',
  featuredDistrict: 'TIRUNELVELI DISTRICT',
  featuredPrize: '₹50,000 Cash Prize + Trophy',
  competitionCategories: [
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
  ],

  // 6. How It Works Dynamic Data
  howItWorksEyebrow: 'SIMPLE 3-STEP JOURNEY',
  howItWorksTitle: 'HOW THEZAR',
  howItWorksHighlight: 'WORKS',
  howItWorksSubtitle: 'From local district registration to the grand statewide stage in Chennai — simple, transparent, and direct.',
  howItWorksStep1Title: 'Select District & Register',
  howItWorksStep1Desc: 'Choose your district arena (e.g. Tirunelveli Singing, Choirs, Dance or Arts) & generate your verified digital admission pass.',
  howItWorksStep2Title: 'Submit 60-Sec Video Reel',
  howItWorksStep2Desc: 'Record & upload a short video reel showing your talent for district jury evaluation & shortlisting.',
  howItWorksStep3Title: 'Face-to-Face Live Stage',
  howItWorksStep3Desc: 'Perform live before grand judges & audience at your district auditorium and advance to Chennai Finals!',

  // 7. News Ticker Dynamic Data
  newsTickerItems: [
    { id: 1, tag: 'LIVE NOW', tagColor: 'bg-[#9e0804] text-white', text: 'TIRUNELVELI DISTRICT REGISTRATION IS NOW OPEN — CAROL FIESTA 2026 COMPETITIONS' },
    { id: 2, tag: 'PRIZE POOL', tagColor: 'bg-[#9e0804] text-white', text: 'GRAND HOUSE PRIZE & MEGA CASH PRIZE POOL FOR STATEWIDE CHAMPIONS' },
    { id: 3, tag: 'ROUND 1', tagColor: 'bg-sky-500 text-white', text: 'UPLOAD 60-SEC VIDEO REEL ONLINE — NO CODING OR TECHNICAL TESTS REQUIRED' },
    { id: 4, tag: '38 DISTRICTS', tagColor: 'bg-emerald-500 text-white', text: 'LIVE AUDITORIUM STAGE PERFORMANCES ACROSS ALL 38 TAMIL NADU DISTRICTS' },
    { id: 5, tag: 'CATEGORIES', tagColor: 'bg-purple-500 text-white', text: '4 DIVISIONS OPEN: SINGING SOLO, CHOIR & BANDS, DANCE SHOWCASE & SANTA CLAUS CONTEST' }
  ],

  // 8. Leaderboard Section Dynamic Data
  leaderboardEyebrow: 'LIVE SCORING PREVIEW',
  leaderboardTitle: 'Statewide Leaderboard',
  leaderboardSubtitle: 'Real-time points & stage performance rankings from district qualifiers.',
  leaderboardTopThree: [
    { rank: 2, name: 'Wade Warren', district: 'Tirunelveli', score: '3,546', subtitle: 'Solo Vocal Champion' },
    { rank: 1, name: 'Robert Fox', district: 'Chennai', score: '3,890', subtitle: 'Statewide Carol Champion' },
    { rank: 3, name: 'Jane Cooper', district: 'Madurai', score: '3,420', subtitle: 'South Region Leader' }
  ],

  // 9. Mobile App Section Dynamic Data
  mobileAppEyebrow: 'MOBILE APP PORTAL',
  mobileAppTitle: 'Download TheZar App for Live Passes & Results',
  mobileAppSubtitle: 'Track your scores, download verified entry QR passes, receive jury schedules, and submit video reels directly from your smartphone.',
  mobileAppPassName: 'Sumanth Raja • Solo Vocal Championship • Tirunelveli',
  mobileAppPlayStoreUrl: '#',
  mobileAppAppStoreUrl: '#',

  // 10. CTA Section Dynamic Data
  ctaEyebrow: 'YOUR SPOTLIGHT AWAITS',
  ctaTitle: 'Ready to Represent Your District?',
  ctaSubtitle: 'Join thousands of participants across Tamil Nadu. Register now and get your verified admission pass.',
  ctaButtonText: 'REGISTER NOW',

  // 11. Contact & Social Links
  contactEmail: 'contact@thezarevents.com',
  contactPhone: '+91 97903 51878',
  contactAddress: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002',
  instagram: 'https://instagram.com/thezarevents',
  facebook: 'https://facebook.com/thezarevents',
  youtube: 'https://youtube.com/@thezarevents',
  whatsapp: '+91 97903 51878',
  footerText: 'TheZar 2026 Statewide Championship • Official Portal',
  copyright: '© 2026 TheZar Statewide Championship. All Rights Reserved.'
};

const SiteContentContext = createContext({
  siteContent: DEFAULT_SITE_CONTENT,
  updateSiteContent: async () => {},
  refreshSiteContent: async () => {},
  loading: false
});

export function SiteContentProvider({ children }) {
  const [siteContent, setSiteContent] = useState(() => {
    const cached = localStorage.getItem('tzr_site_content');
    if (cached) {
      try {
        return { ...DEFAULT_SITE_CONTENT, ...JSON.parse(cached) };
      } catch (e) {
        return DEFAULT_SITE_CONTENT;
      }
    }
    return DEFAULT_SITE_CONTENT;
  });

  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/site-content');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          const merged = { ...DEFAULT_SITE_CONTENT, ...data.content };
          setSiteContent(merged);
          localStorage.setItem('tzr_site_content', JSON.stringify(merged));
        }
      }
    } catch (err) {
      console.warn('[SiteContent] Offline / fallback used:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();

    // Listen for cross-component or cross-tab updates
    const handleStorage = (e) => {
      if (e.key === 'tzr_site_content' && e.newValue) {
        try {
          setSiteContent({ ...DEFAULT_SITE_CONTENT, ...JSON.parse(e.newValue) });
        } catch (err) {}
      }
    };

    const handleCustomUpdate = (e) => {
      if (e.detail) {
        setSiteContent((prev) => ({ ...prev, ...e.detail }));
      } else {
        fetchContent();
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('tzr_site_content_updated', handleCustomUpdate);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('tzr_site_content_updated', handleCustomUpdate);
    };
  }, [fetchContent]);

  const updateSiteContent = useCallback(async (newContent) => {
    const merged = { ...siteContent, ...newContent };
    setSiteContent(merged);
    localStorage.setItem('tzr_site_content', JSON.stringify(merged));

    // Dispatch update event for all components
    window.dispatchEvent(new CustomEvent('tzr_site_content_updated', { detail: merged }));

    // Send to backend
    try {
      const res = await fetch('http://localhost:5000/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merged)
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('[SiteContent] Error saving to server:', err);
      return { success: true, message: 'Saved to local cache!' };
    }
  }, [siteContent]);

  return (
    <SiteContentContext.Provider value={{ siteContent, updateSiteContent, refreshSiteContent: fetchContent, loading }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    return { siteContent: DEFAULT_SITE_CONTENT, updateSiteContent: async () => {}, refreshSiteContent: async () => {}, loading: false };
  }
  return context;
}
