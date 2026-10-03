import { Flame, Sparkles, Trophy, Video, MapPin, Radio } from 'lucide-react';

export default function NewsTickerBar() {
  const newsItems = [
    {
      id: 1,
      icon: Flame,
      tag: 'LIVE NOW',
      tagColor: 'bg-rose-500 text-white',
      text: 'TIRUNELVELI DISTRICT ROUND 1 REGISTRATION IS NOW OPEN — GRAND COOKING CHAMPIONSHIP',
    },
    {
      id: 2,
      icon: Trophy,
      tag: 'PRIZE POOL',
      tagColor: 'bg-amber-400 text-amber-950',
      text: 'OVER ₹40 LAKHS PRIZE POOL INCLUDING GRAND HOUSE FOR STATEWIDE CHAMPIONS',
    },
    {
      id: 3,
      icon: Video,
      tag: 'ROUND 1',
      tagColor: 'bg-sky-500 text-white',
      text: 'UPLOAD 60-SEC VIDEO REEL ONLINE — NO CODING OR TECHNICAL TESTS REQUIRED',
    },
    {
      id: 4,
      icon: MapPin,
      tag: '38 DISTRICTS',
      tagColor: 'bg-emerald-500 text-white',
      text: 'LIVE AUDITORIUM STAGE PERFORMANCES ACROSS ALL 38 TAMIL NADU DISTRICTS',
    },
    {
      id: 5,
      icon: Sparkles,
      tag: 'CATEGORIES',
      tagColor: 'bg-purple-500 text-white',
      text: '3 DIVISIONS OPEN: KIDS (6-14 YRS), ADULTS (15+ YRS) & MEN / WOMEN OPEN CATEGORY',
    },
  ];

  return (
    <div className="w-full bg-[#3f0701] border-y border-white/10 py-3.5 relative overflow-hidden shadow-xl select-none z-20">
      
      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 relative z-10">
        
        {/* Left Fixed Badge: BREAKING NEWS / ANNOUNCEMENTS */}
        <div className="shrink-0 flex items-center gap-2 bg-white text-[#3f0701] px-3.5 py-1.5 rounded-full shadow-md text-[11px] font-mono font-black tracking-wider uppercase" style={{ borderRadius: '9999px' }}>
          <Radio className="w-3.5 h-3.5 animate-pulse text-[#3f0701]" />
          <span className="hidden sm:inline">LATEST NEWS</span>
          <span className="sm:hidden">NEWS</span>
        </div>

        {/* Scrolling News Ticker Container */}
        <div className="overflow-hidden whitespace-nowrap flex-1 relative group cursor-pointer">
          
          {/* Subtle Fading Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#3f0701] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#3f0701] to-transparent z-10 pointer-events-none" />

          {/* Marquee Motion Wrapper */}
          <div className="inline-flex items-center gap-8 animate-news-marquee group-hover:[animation-play-state:paused]">
            
            {/* Duplicated arrays for smooth continuous looping animation without glitch */}
            {[...newsItems, ...newsItems, ...newsItems].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={`${item.id}-${index}`} className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-200">
                  <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded-md ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <IconComponent className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="tracking-wide">{item.text}</span>
                  <span className="text-slate-600 font-normal mx-2">•</span>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Embedded Animation CSS for 100% Smooth Infinite Marquee */}
      <style>{`
        @keyframes newsMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-news-marquee {
          display: inline-flex;
          animation: newsMarquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
