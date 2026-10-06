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
  eventsSectionTitle: 'State Championship Categories',
  eventsSectionSubtitle: 'Top Christmas & Statewide Championship Competitions across all 38 districts',
  eventsList: [
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
