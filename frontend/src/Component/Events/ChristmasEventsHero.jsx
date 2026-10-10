import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useSiteContent } from '../../context/SiteContentContext';
import choirImg from '../../assets/christmas_choir.jpg';
import cakeImg from '../../assets/christmas_cake.jpg';
import giftsImg from '../../assets/christmas_gifts.jpg';

const DEFAULT_FEATURED = [
  {
    id: 'xmas-1',
    title: 'Statewide Christmas Choral Symphony',
    date: '22 Dec 2026',
    time: '05:00 PM - 09:30 PM',
    venue: 'Santhome Cathedral Auditorium, Chennai',
    prize: '₹2,50,000 Cash + Rolling Trophy',
    category: 'Choir & Vocal Harmony',
    badge: 'Statewide Gala',
    image: choirImg,
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
    image: cakeImg,
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
    image: giftsImg,
  },
];

export default function ChristmasEventsHero({ onOpenRegister, onSelectEvent }) {
  const { siteContent } = useSiteContent();
  const [events, setEvents] = useState(DEFAULT_FEATURED);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:5000/api/events/featured')
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.success && Array.isArray(data.featuredEvents) && data.featuredEvents.length > 0) {
          // Merge API data with local image assets as fallback
          const formatted = data.featuredEvents.map((ev, idx) => ({
            ...ev,
            image: ev.image || (idx === 0 ? choirImg : idx === 1 ? cakeImg : giftsImg),
          }));
          setEvents(formatted);
        }
      })
      .catch((err) => {
        console.warn('[ChristmasEventsHero] Offline or API error, using curated events:', err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900">
      {/* 3. FEATURED CHRISTMAS EVENTS CARDS ROW */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#3f0701] bg-[#FAF0F0] px-3 py-1 rounded-full border border-[#3f0701]/20 inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#9e0804]" />
                {siteContent?.featuredBadge || 'HOLIDAY HEADLINERS'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {siteContent?.featuredSubtitle || 'Top Christmas Championship Competitions'}
              </h3>
            </div>
            <button
              onClick={() => onOpenRegister && onOpenRegister()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f0701] hover:text-[#580c04] uppercase tracking-wider cursor-pointer"
            >
              <span>Register for All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white rounded-2xl h-80 border border-slate-200 animate-pulse p-4 space-y-4">
                  <div className="h-40 bg-slate-200 rounded-xl" />
                  <div className="h-4 bg-slate-200 rounded w-1/3" />
                  <div className="h-5 bg-slate-200 rounded w-3/4" />
                  <div className="h-8 bg-slate-200 rounded-full mt-4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-[#3f0701]/40 transition-all duration-300 text-left"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = choirImg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                      {evt.badge || 'Gala Event'}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                        {evt.category}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#3f0701] transition-colors mt-1">
                        {evt.title}
                      </h4>

                      <div className="space-y-1.5 pt-3 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#3f0701] shrink-0" />
                          <span>{evt.date} • {evt.time || '10:00 AM - 05:00 PM'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#3f0701] shrink-0" />
                          <span className="truncate">{evt.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 pt-1 font-bold text-[#3f0701]">
                          <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{evt.prize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => onOpenRegister && onOpenRegister(evt)}
                        className="w-full py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                        style={{ borderRadius: '9999px' }}
                      >
                        <span>Join Competition</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
