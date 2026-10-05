import { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Users, Trophy, Award, Building2, Star, ArrowRight } from 'lucide-react';
import santaGiftImg from '../../assets/xmas_santa_gift.jpg';

export default function ChristmasAboutSection({ onOpenRegister }) {
  const [guestCount, setGuestCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setGuestCount(Math.floor(progress * 1000));
      setEventCount(Math.floor(progress * 25));
      setYearCount(Math.floor(progress * 15));
      setPartnerCount(Math.floor(progress * 50));

      if (step >= steps) {
        setGuestCount(1000);
        setEventCount(25);
        setYearCount(15);
        setPartnerCount(50);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const modules = [
    { num: '01.', title: 'Festival Heritage & Spirit', desc: 'Bringing together 38 districts in unity and holiday celebration.' },
    { num: '02.', title: 'The Joy of Giving & Charity', desc: 'Over 5,000 winter meals & gift boxes distributed to children.' },
    { num: '03.', title: 'Grand Winter Arenas', desc: 'Carols, ice-skating, symphony concerts, and Santa workshops.' },
    { num: '04.', title: 'Statewide Holiday Honours', desc: 'Champion awards & festive prizes across arts and innovation.' },
  ];

  const stats = [
    { label: 'Happy Guests', value: `${guestCount.toLocaleString()}+`, icon: Users, sub: 'Across 38 Arenas' },
    { label: 'Festive Events', value: `${eventCount}+`, icon: Trophy, sub: 'Winter Competitions' },
    { label: 'Years Legacy', value: `${yearCount}+`, icon: Award, sub: 'Heritage of Joy' },
    { label: 'Global Partners', value: `${partnerCount}+`, icon: Building2, sub: 'Sponsors & Patrons' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden text-white">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c4120c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ffd700]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#380407] border border-[#ffd700]/50 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffd700] font-mono">
              ★ OUR FESTIVE HERITAGE ★
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            THE SPIRIT OF <span className="gold-gradient-text">CHRISTMAS</span>
          </h2>

          <p className="font-christmas text-4xl sm:text-5xl text-amber-200 pt-1 drop-shadow-md">
            A Season of Wonder, Harmony & Giving
          </p>

          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2" />
        </div>

        {/* Master Showcase Card - Matching Reference Deck "Contents & Concept" Style */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/40 mb-16 relative bg-[#6b090f] text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Deep Velvet Red with Numbered Modules (01, 02, 03, 04) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 relative z-10">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700] uppercase tracking-wider font-bold">
                  <Star className="w-4 h-4 fill-[#ffd700]" />
                  <span>FESTIVE PILLARS & CHARTER</span>
                </div>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
                  Contents & Core Values
                </h3>
                <p className="text-sm sm:text-base text-rose-100/90 font-light leading-relaxed">
                  TheZar Christmas brings collegiate excellence, warmth, and compassion under one majestic festive tent.
                </p>
              </div>

              {/* 4 Large Numbered Modules (01, 02, 03, 04) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/25 border border-white/10 hover:border-[#ffd700]/60 transition-all hover:bg-black/35 group"
                  >
                    <span className="font-cinzel text-2xl font-black text-[#ffd700] group-hover:scale-110 inline-block transition-transform">
                      {m.num}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-rose-200/80 leading-relaxed mt-1 font-light">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenRegister}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-lg hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#240306]" />
                  <span>Join the Statewide Celebration</span>
                </button>
              </div>

            </div>

            {/* Right: 3D Santa Opening Magical Glowing Gift Box on Snow */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center bg-black">
              <img
                src={santaGiftImg}
                alt="Santa Opening Magical Glowing Gift"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-[#ffd700]/50 text-left">
                <p className="text-xs font-mono font-bold text-[#ffd700] uppercase tracking-wider flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>The Gift of Magic & Cheer</span>
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Spreading golden warmth across every home and collegiate campus in Tamil Nadu.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Animated Counter Cards styled as Luxury Gold Medals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#3a0508]/90 to-[#200204]/90 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-[#ffd700]/30 hover:border-[#ffd700] transition-all hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffd700]/20 to-[#c99738]/10 border border-[#ffd700]/40 mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                  <Icon className="w-7 h-7 text-[#ffd700]" />
                </div>
                <p className="font-cinzel text-3xl sm:text-4xl font-black gold-gradient-text tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs text-rose-200/70 font-mono mt-0.5">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
