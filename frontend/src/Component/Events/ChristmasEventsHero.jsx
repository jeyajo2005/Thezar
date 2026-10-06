import React from 'react';
import { Calendar, MapPin, Trophy, ArrowRight } from 'lucide-react';
import card1 from '../../assets/cards1.png';
import card2 from '../../assets/cards2.png';
import card3 from '../../assets/cards3.png';
import card4 from '../../assets/cards4.png';
import card5 from '../../assets/cards5.png';
import card6 from '../../assets/cards6.png';
import card7 from '../../assets/cards7.png';
import card8 from '../../assets/cards8.png';
import { useSiteContent } from '../../hooks/useSiteContent';

export default function ChristmasEventsHero({ onOpenRegister }) {
  const { content } = useSiteContent();

  const defaultEvents = [
    {
      id: 'xmas-1',
      title: 'TheZar Official Passes & Team Badges',
      date: 'Season 2026',
      time: 'All-Day Entry Access',
      venue: 'Tirunelveli District Arena',
      prize: 'VIP Access & Stage Passes',
      category: 'Official Badges',
      badge: 'Official Passes',
      image: card1,
    },
    {
      id: 'xmas-2',
      title: 'Mega Group Dance Championship',
      date: '12 Dec 2026',
      time: '04:00 PM - 09:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹1,50,000 Cash + Natya Trophy',
      category: 'Dance Showcase',
      badge: 'Championship Trophy',
      image: card2,
    },
    {
      id: 'xmas-3',
      title: 'Solo Freestyle & Hip-Hop Dance Battle',
      date: '12 Dec 2026',
      time: '01:00 PM - 04:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹75,000 Cash + Gold Medal',
      category: 'Dance Showcase',
      badge: 'Solo Battle',
      image: card3,
    },
    {
      id: 'xmas-4',
      title: 'Statewide Solo Singing & Vocal Contest',
      date: '12 Dec 2026',
      time: '10:00 AM - 02:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹75,000 Cash + Golden Mic',
      category: 'Singing Solo',
      badge: 'Live Vocals',
      image: card4,
    },
    {
      id: 'xmas-5',
      title: 'Grand Carol Choirs & Music Band Symphony',
      date: '12 Dec 2026',
      time: '05:30 PM - 10:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹1,00,000 Cash + Choir Trophy',
      category: 'Choir & Bands',
      badge: 'Choir & Bands',
      image: card5,
    },
    {
      id: 'xmas-6',
      title: 'Santa Claus Family Stage & Winter Carnival',
      date: '12 Dec 2026',
      time: '11:00 AM - 06:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: 'Mega Holiday Shopping & Gifts',
      category: 'Special Contest',
      badge: 'Kids & Family',
      image: card6,
    },
    {
      id: 'xmas-7',
      title: 'Junior Carol Fiesta & Kids Singing Contest',
      date: '12 Dec 2026',
      time: '09:00 AM - 01:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹50,000 Cash + Junior Trophy',
      category: 'Kids Singing',
      badge: 'Junior Category',
      image: card7,
    },
    {
      id: 'xmas-8',
      title: 'Kids Solo Singing Vocal Prodigy',
      date: '12 Dec 2026',
      time: '02:00 PM - 05:00 PM',
      venue: 'Tirunelveli District Arena',
      prize: '₹50,000 Cash + Prodigy Cup',
      category: 'Kids Solo',
      badge: 'Solo Prodigy',
      image: card8,
    },
  ];

  const featuredChristmasEvents = (content?.eventsList && content.eventsList.length > 0)
    ? content.eventsList.map(e => ({
        ...e,
        image: e.image || card2,
        time: e.time || '10:00 AM - 06:00 PM'
      }))
    : defaultEvents;

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900">
      {/* 3. FEATURED CHRISTMAS EVENTS CARDS ROW */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#3f0701] bg-[#FAF0F0] px-3 py-1 rounded-full border border-[#3f0701]/20">
                HOLIDAY HEADLINERS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {content?.eventsSectionTitle || 'Top Christmas Championship Competitions'}
              </h3>
            </div>
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f0701] hover:text-[#580c04] uppercase tracking-wider cursor-pointer"
            >
              <span>Register for All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredChristmasEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-[#3f0701]/40 transition-all duration-300 text-left"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    {evt.badge}
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
                        <span>{evt.date} • {evt.time}</span>
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

                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={onOpenRegister}
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

        </div>
      </section>
    </div>
  );
}
