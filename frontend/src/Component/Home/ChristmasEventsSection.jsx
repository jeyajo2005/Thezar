import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useSiteContent } from '../../context/SiteContentContext';

import christmasCakeImg from '../../assets/christmas_cake.jpg';
import christmasDecorImg from '../../assets/christmas_decor.jpg';
import christmasGiftsImg from '../../assets/christmas_gifts.jpg';

export default function ChristmasEventsSection({ onOpenRegister, onSelectEvent }) {
  const { siteContent } = useSiteContent();

  // 26 randomized snowfall particles
  const snowflakes = [
    { id: 1, left: '4%', size: '14px', duration: '7s', delay: '0s', sway: '15px', char: '❄', opacity: 0.7 },
    { id: 2, left: '10%', size: '6px', duration: '5s', delay: '1.2s', sway: '8px', isDot: true, opacity: 0.6 },
    { id: 3, left: '16%', size: '18px', duration: '9s', delay: '2.5s', sway: '25px', char: '❅', opacity: 0.85 },
    { id: 4, left: '22%', size: '5px', duration: '6s', delay: '0.4s', sway: '10px', isDot: true, opacity: 0.5 },
    { id: 5, left: '28%', size: '12px', duration: '8s', delay: '3.1s', sway: '18px', char: '❆', opacity: 0.65 },
    { id: 6, left: '34%', size: '7px', duration: '5.5s', delay: '1.8s', sway: '12px', isDot: true, opacity: 0.7 },
    { id: 7, left: '40%', size: '16px', duration: '10s', delay: '4.2s', sway: '22px', char: '❄', opacity: 0.9 },
    { id: 8, left: '46%', size: '5px', duration: '6.5s', delay: '0.9s', sway: '14px', isDot: true, opacity: 0.6 },
    { id: 9, left: '52%', size: '13px', duration: '7.8s', delay: '2.8s', sway: '16px', char: '❅', opacity: 0.75 },
    { id: 10, left: '58%', size: '6px', duration: '5.2s', delay: '1.5s', sway: '9px', isDot: true, opacity: 0.5 },
    { id: 11, left: '64%', size: '15px', duration: '8.5s', delay: '3.7s', sway: '20px', char: '❆', opacity: 0.8 },
    { id: 12, left: '70%', size: '8px', duration: '6.2s', delay: '0.2s', sway: '11px', isDot: true, opacity: 0.7 },
    { id: 13, left: '76%', size: '17px', duration: '9.5s', delay: '4.8s', sway: '24px', char: '❄', opacity: 0.85 },
    { id: 14, left: '82%', size: '5px', duration: '5.8s', delay: '2.1s', sway: '13px', isDot: true, opacity: 0.5 },
    { id: 15, left: '88%', size: '14px', duration: '7.2s', delay: '1.0s', sway: '19px', char: '❅', opacity: 0.75 },
    { id: 16, left: '94%', size: '6px', duration: '6.8s', delay: '3.4s', sway: '10px', isDot: true, opacity: 0.6 },
    { id: 17, left: '8%', size: '11px', duration: '11s', delay: '5.2s', sway: '17px', char: '❆', opacity: 0.6 },
    { id: 18, left: '26%', size: '15px', duration: '8.2s', delay: '4.0s', sway: '21px', char: '❄', opacity: 0.8 },
    { id: 19, left: '48%', size: '12px', duration: '9.2s', delay: '6.1s', sway: '15px', char: '❅', opacity: 0.7 },
    { id: 20, left: '68%', size: '16px', duration: '7.6s', delay: '5.5s', sway: '22px', char: '❆', opacity: 0.85 },
    { id: 21, left: '85%', size: '10px', duration: '10.5s', delay: '6.8s', sway: '14px', char: '❄', opacity: 0.65 },
    { id: 22, left: '14%', size: '4px', duration: '4.8s', delay: '3.0s', sway: '7px', isDot: true, opacity: 0.5 },
    { id: 23, left: '38%', size: '5px', duration: '5.9s', delay: '4.5s', sway: '9px', isDot: true, opacity: 0.6 },
    { id: 24, left: '60%', size: '4px', duration: '4.5s', delay: '2.3s', sway: '8px', isDot: true, opacity: 0.5 },
    { id: 25, left: '78%', size: '5px', duration: '5.1s', delay: '3.9s', sway: '10px', isDot: true, opacity: 0.6 },
    { id: 26, left: '91%', size: '4px', duration: '4.2s', delay: '1.7s', sway: '7px', isDot: true, opacity: 0.5 },
  ];

  const events = [
    {
      id: 'evt-cooking-celebration',
      tag: 'FESTIVE EXPERIENCE',
      tagBg: 'bg-[#9e0804] text-white',
      title: 'Christmas Cooking Celebration',
      subtitle: 'A festive cooking experience filled with seasonal flavors',
      date: '22 Dec 2026',
      time: '10:00 AM – 04:00 PM',
      btnText: 'EXPLORE EVENT',
      image: christmasCakeImg,
      badge: 'Festive Special',
    },
    {
      id: 'evt-cooking-challenge',
      tag: 'COMPETITION',
      tagBg: 'bg-emerald-700 text-white',
      title: 'Christmas Special Cooking Challenge',
      subtitle: 'Compete in the ultimate festive cooking competition',
      date: '23 Dec 2026',
      time: '09:00 AM – 05:00 PM',
      btnText: 'REGISTER NOW',
      image: christmasDecorImg,
      badge: 'Championship',
    },
    {
      id: 'evt-family-food-festival',
      tag: 'ALL AGES WELCOME',
      tagBg: 'bg-[#966b44] text-white',
      title: 'Christmas Family Food Festival',
      subtitle: 'Family-friendly festive celebration of food and community',
      date: '24–25 Dec 2026',
      time: '11:00 AM – 10:00 PM',
      btnText: 'VIEW DETAILS',
      image: christmasGiftsImg,
      badge: 'Family & Food',
    },
  ];

  return (
    <section
      id="christmas-events"
      className="relative text-white overflow-hidden selection:bg-[#9e0804] selection:text-white"
      style={{
        background: 'radial-gradient(ellipse at 50% 35%, #0e2246 0%, #071328 60%, #040a14 100%)',
      }}
    >
      {/* ─── CSS Animations for Snowfall ─── */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--snow-opacity, 0.8);
          }
          90% {
            opacity: var(--snow-opacity, 0.8);
          }
          100% {
            transform: translateY(110vh) translateX(var(--snow-sway, 20px));
            opacity: 0;
          }
        }
        .animate-snow {
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* ─── 1. AMBIENT GLOW LIGHTS ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* ─── 2. CONTINUOUS FALLING SNOW ANIMATION OVERLAY ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10" aria-hidden="true">
        {snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="absolute top-0 animate-snow"
            style={{
              left: flake.left,
              fontSize: flake.size,
              animationDuration: flake.duration,
              animationDelay: flake.delay,
              '--snow-sway': flake.sway,
              '--snow-opacity': flake.opacity,
              color: flake.isDot ? 'rgba(255,255,255,0.7)' : 'rgba(224, 242, 254, 0.85)',
              textShadow: '0 0 8px rgba(186, 230, 253, 0.6)',
            }}
          >
            {flake.isDot ? (
              <span
                className="inline-block rounded-full bg-white blur-[0.5px]"
                style={{ width: flake.size, height: flake.size }}
              />
            ) : (
              flake.char
            )}
          </span>
        ))}
      </div>

      {/* ─── 3. MAIN CONTENT CONTAINER (Normal/Flat Top Edge) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3.5 sm:space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#9e0804] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.20em] uppercase shadow-[0_4px_14px_rgba(158,8,4,0.45)] border border-red-400/30">
            <span>✦</span>
            <span>{siteContent?.christmasEyebrow || 'CHRISTMAS SPECIAL'}</span>
            <span>✦</span>
          </div>

          {/* Main Title with Fiery Orange Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            <span>{siteContent?.christmasTitlePrefix || 'CHRISTMAS '}</span>
            <span
              className="bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#ea580c] bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(249, 115, 22, 0.35)',
              }}
            >
              {siteContent?.christmasTitleHighlight || 'EVENTS'}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            {siteContent?.christmasSubtitle ||
              'Celebrate the season with food, creativity and unforgettable moments.'}
          </p>
        </div>

        {/* 3 Events Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="group bg-[#0d1d36]/90 hover:bg-[#0f2240] rounded-2xl sm:rounded-3xl border border-slate-700/60 hover:border-slate-500/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all duration-300 flex flex-col overflow-hidden text-left hover:-translate-y-1.5"
              style={{ borderRadius: '24px' }}
            >
              {/* Image Container with Top Tag Badge */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark gradient overlay at top/bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d36] via-transparent to-black/30 pointer-events-none" />

                {/* Top-Left Category Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-md ${evt.tagBg}`}
                    style={{ borderRadius: '9999px' }}
                  >
                    {evt.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Event Title */}
                  <h3 className="text-base sm:text-lg font-black text-white leading-snug tracking-tight group-hover:text-amber-300 transition-colors">
                    {evt.title}
                  </h3>

                  {/* Event Description */}
                  <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                    {evt.subtitle}
                  </p>
                </div>

                {/* Event Metadata: Date & Time */}
                <div className="pt-2 border-t border-slate-700/60 space-y-1.5 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-mono text-[11px] sm:text-xs">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-[11px] sm:text-xs">{evt.time}</span>
                  </div>
                </div>

                {/* Call-to-Action Button in Rich Crimson */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenRegister) {
                      onOpenRegister();
                    } else if (onSelectEvent) {
                      onSelectEvent(evt.id);
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#9e0804] hover:bg-[#b80a05] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(158,8,4,0.40)] hover:shadow-[0_6px_20px_rgba(158,8,4,0.55)] cursor-pointer mt-auto"
                  style={{ borderRadius: '12px' }}
                >
                  <span>{evt.btnText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. BOTTOM CURVED WAVE DIVIDER (Seamless curve transition into next section) ─── */}
      <div className="w-full pointer-events-none leading-none overflow-hidden -mt-[1px]">
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-20 text-white block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C480,5 980,85 1440,30 L1440,85 L0,85 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}


