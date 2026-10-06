import { useState, useEffect, useCallback } from 'react';

export const defaultSiteContent = {
  // Admin Profile Settings
  adminName: 'Suman / TheZar Administrator',
  adminEmail: 'admin@thezarevents.com',
  adminPhone: '+91 97903 51878',
  adminAddress: 'Tirunelveli, Tamil Nadu, India',
  adminRole: 'Super Admin',

  // 1. Index Banner / News Ticker
  bannerItems: [
    'THEZAR 2026',
    '38 DISTRICTS',
    'ONE TABLE',
    'ONE TASTE',
    'GRAND COOKING CHAMPIONSHIP',
    'TAMIL NADU',
    'TIRUNELVELI STAGE',
    'REGISTER NOW'
  ],
  bannerSpeed: 28,
  bannerEnabled: true,
  topAnnouncement: 'Season 2026 Registrations Open Across All 38 Districts',

  // 2. Hero Section
  heroEyebrow: "Tamil Nadu's Grandest Stage",
  heroTitle: 'The Taste of Tamil Nadu.',
  heroTitleLine1: 'The Taste',
  heroTitleLine2: 'of Tamil',
  heroTitleLine3: 'Nadu.',
  heroSubtitle: 'Statewide Culinary Championship — 38 Districts, One Grand Stage. Unleashing extraordinary cooking talent across the cultural heart of India.',
  heroCountdownDate: '2026-10-10T10:00:00+05:30',
  heroEventName: 'Grand Opening Stage & Cook-Off',
  heroVenue: 'VOC Ground, Tirunelveli',
  heroPrimaryBtnText: 'Register for Competition',
  heroSecondaryBtnText: 'Explore Fixtures',
  heroBadgeText: 'State Youth Championship',

  // 3. About Section
  aboutEyebrow: 'ABOUT THEZAR',
  aboutTitle: 'WHERE TALENT meets OPPORTUNITY',
  aboutSubtitle: 'Empowering Next-Gen Talent Across Tamil Nadu',
  aboutDescription: 'Tamil Nadu’s premier youth talent championship and cultural festival platform. Dedicated to discovering, celebrating, and empowering extraordinary talents across all 38 districts.',
  aboutMission: 'To discover, nurture, and celebrate authentic cultural, musical, and culinary excellence in every district.',
  aboutVision: 'A unified statewide platform connecting regional youth with national creative opportunities.',
  aboutHighlights: [
    '38 Districts United Under One Championship Flag',
    '₹10 Lakhs+ Total Cash Prizes & Career Grants',
    'Statewide Media Broadcast & Celebrity Masterchef Panel',
    'Direct Pathway to National Cultural Festivals'
  ],
  aboutStats: [
    { label: 'Districts United', value: '38' },
    { label: 'Registered Contestants', value: '12,000+' },
    { label: 'Cash Prize Pool', value: '₹10,00,000+' },
    { label: 'Live Stages', value: '4 Rounds' }
  ],

  // 4. Events / Competitions Section
  eventsSectionTitle: 'State Championship Categories & Events',
  eventsSectionSubtitle: 'Official Carol Fiesta & Statewide Championship Competitions across all 38 districts',
  eventsList: [
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
  ],

  // 5. Experience Zones Section
  experienceTitle: 'The Winter Festival Experience',
  experienceSubtitle: 'Immerse yourself in spectacular celebration zones crafted for all 38 districts',
  experienceZones: [
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
  ],

  // 6. Index Banners (Storefront Desktop & Mobile Banners)
  desktopBanners: [
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
  ],
  mobileBanners: [
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
  ],

  // Countdown & Featured
  countdownTitle: 'Count Every Second Until the Event',
  countdownEventName: 'Christmas Carol Fiesta 2026 Grand Stage',
  countdownTargetDate: '2026-12-12T09:00:00.000Z',
  countdownVenue: 'Tirunelveli District Arena',
  featuredTitle: 'GRAND COOKING CHAMPIONSHIP',
  featuredDistrict: 'TIRUNELVELI DISTRICT',
  featuredPrize: '₹1,00,000 Cash Prize + Trophy',
  featuredDescription: 'Statewide culinary battle showcasing authentic Tamil Nadu festive recipes, live staging & master chef judging panel.',

  // Footer & Contact
  contactEmail: 'thezarevents@gmail.com',
  contactPhone: '+91 97903 51878',
  contactAddress: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  whatsapp: 'https://wa.me/919790351878',
  footerText: 'TheZar 2026 Statewide Championship • Official Portal',
  copyright: '© 2026 THEZAR. All Rights Reserved.'
};

export function useSiteContent() {
  const [content, setContent] = useState(() => {
    try {
      const cached = localStorage.getItem('tzr_site_content');
      if (cached) {
        return { ...defaultSiteContent, ...JSON.parse(cached) };
      }
    } catch {}
    return defaultSiteContent;
  });

  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/site-content');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          const merged = { ...defaultSiteContent, ...data.content };
          setContent(merged);
          try {
            localStorage.setItem('tzr_site_content', JSON.stringify(merged));
          } catch {}
        }
      }
    } catch (err) {
      console.warn('Could not fetch live site content, using cached/default:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return { content, loading, refreshContent: fetchContent };
}
