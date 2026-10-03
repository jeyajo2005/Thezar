import React from 'react';
import { Sparkles, Calendar, MapPin, Trophy, Gift, Music, Heart, ArrowRight } from 'lucide-react';
import christmasBannerImg from '../../assets/christmas_banner_hero.jpg';
import choirImg from '../../assets/christmas_choir.jpg';
import cakeImg from '../../assets/christmas_cake.jpg';
import decorImg from '../../assets/christmas_decor.jpg';
import giftsImg from '../../assets/christmas_gifts.jpg';
import danceImg from '../../assets/event_dance.jpg';
import musicImg from '../../assets/event_music.jpg';

export default function ChristmasEventsHero({ onOpenRegister }) {
  const festiveCategories = [
    {
      id: 'carols',
      title: 'Carol & Choir Fest',
      tag: 'Choral Competition',
      image: choirImg,
    },
    {
      id: 'cake',
      title: 'Christmas Cake Bake',
      tag: 'Culinary Masterclass',
      image: cakeImg,
    },
    {
      id: 'decor',
      title: 'Holiday Decor & Crib',
      tag: 'Creative Stalls',
      image: decorImg,
    },
    {
      id: 'gifts',
      title: 'Gift & Craft Expo',
      tag: 'Handmade Crafts',
      image: giftsImg,
    },
    {
      id: 'drama',
      title: 'Nativity Drama & Dance',
      tag: 'Stage Performance',
      image: danceImg,
    },
    {
      id: 'concert',
      title: 'Winter Gala Concert',
      tag: 'Live Musical Night',
      image: musicImg,
    },
  ];

  const featuredChristmasEvents = [
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

  return (
    <div className="relative w-full overflow-hidden bg-[#0a1f16] text-white">
      {/* 1. TOP HERO BANNER (MATCHING PINTEREST SHOPIFY CHRISTMAS THEME) */}
      <div className="relative w-full overflow-hidden min-h-[480px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center">
        {/* Background Graphic */}
        <img
          src={christmasBannerImg}
          alt="Merry Christmas and Happy Holidays Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Ambient Evergreen Vignette Overlay for High Readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 31, 22, 0.45) 0%, rgba(10, 31, 22, 0.20) 45%, rgba(10, 31, 22, 0.85) 90%, #0a1f16 100%)',
          }}
        />

        {/* Floating CSS Animated Snowflakes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute text-white/70 animate-pulse"
              style={{
                top: `${(i * 17) % 95}%`,
                left: `${(i * 23) % 98}%`,
                fontSize: `${12 + (i % 5) * 4}px`,
                opacity: 0.4 + (i % 4) * 0.15,
              }}
            >
              ❄
            </span>
          ))}
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>THEZAR 2026 • CHRISTMAS SPECIAL EDITION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg font-serif">
            Merry Christmas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 font-sans text-2xl sm:text-4xl md:text-5xl">
              & Statewide Winter Gala Events
            </span>
          </h1>

          <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Celebrate the holiday season with music, baking competitions, nativity pageants, and joyful festivities across all 38 districts of Tamil Nadu.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenRegister}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-red-950/60 hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border border-red-400/30"
              style={{ borderRadius: '9999px' }}
            >
              <Gift className="w-4 h-4 text-amber-300" />
              <span>Register for Christmas Gala</span>
            </button>

            <a
              href="#christmas-highlights"
              className="px-7 py-3.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-400/40 text-emerald-100 font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all shadow-md no-underline hover:no-underline"
              style={{ borderRadius: '9999px' }}
            >
              View Festive Categories
            </a>
          </div>
        </div>

        {/* Fluffy Snow Drift Divider Transition at Bottom (Curves gracefully into white background) */}
        <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none leading-none overflow-hidden">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 md:h-20 text-white block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C180,10 320,80 500,40 C680,5 820,70 1000,30 C1180,-5 1320,65 1440,35 L1440,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>

      {/* 2. "YOU MIGHT LIKE" / FESTIVE CIRCULAR TILES (EXACT TO PINTEREST SHOPIFY UI ON CLEAN WHITE BACKGROUND) */}
      <section id="christmas-highlights" className="py-14 sm:py-16 bg-white text-center border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-slate-900">
              You Might Like
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Here are some of our most anticipated Christmas & Holiday events people are in love with.
            </p>
          </div>

          {/* Circular Category Tiles Row */}
          <div className="flex items-center justify-start sm:justify-center gap-5 sm:gap-7 overflow-x-auto pb-4 pt-1 px-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {festiveCategories.map((item) => (
              <div
                key={item.id}
                onClick={onOpenRegister}
                className="group flex flex-col items-center shrink-0 cursor-pointer space-y-3 transition-transform hover:-translate-y-1.5 duration-200"
              >
                {/* Round Circular Tile */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-400/80 via-emerald-500/40 to-red-400/80 shadow-md group-hover:shadow-amber-400/40 transition-all">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title & Tag */}
                <div className="text-center max-w-[130px]">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#3f0701] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FEATURED CHRISTMAS EVENTS CARDS ROW (ON SOFT LIGHT BACKGROUND) */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#3f0701] bg-[#FAF0F0] px-3 py-1 rounded-full border border-[#3f0701]/20">
                HOLIDAY HEADLINERS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Top Christmas Championship Competitions
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
