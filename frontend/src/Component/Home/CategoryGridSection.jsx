import { ChefHat, Flame, Utensils, Video, Award, Users, ArrowUpRight, Sparkles, CheckCircle2, Mic, Play, Trophy, Heart } from 'lucide-react';
import speakerImg from '../../assets/about_audience.jpg';

export default function CategoryGridSection({ onOpenRegister }) {
  const cookingCategories = [
    {
      id: 'kids',
      title: 'Kids Category',
      subtitle: 'Junior Master Chefs',
      age: 'Ages 6 - 14 Years',
      icon: Sparkles,
      color: 'bg-amber-500/15 text-amber-900 border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-800',
      description: 'Flameless cooking, creative presentation, dessert crafting, and young culinary talent showcase.',
      round1: 'Video Reel Recipe Submission',
      round2: 'Live District Stage Presentation'
    },
    {
      id: 'adults',
      title: 'Adults Category',
      subtitle: 'Home Chefs & Culinary Masters',
      age: 'Ages 15+ Years',
      icon: ChefHat,
      color: 'bg-[#9e0804]/15 text-[#9e0804] border-[#9e0804]/30',
      badgeBg: 'bg-[#9e0804]/15 text-[#9e0804]',
      description: 'Traditional Tamil Nadu cuisine, fusion dishes, secret family recipes, and live taste challenges.',
      round1: 'Video Reel Recipe Submission',
      round2: 'Live District Cook-Off Arena'
    },
    {
      id: 'open',
      title: 'Men & Women Category',
      subtitle: 'Open Statewide Championship',
      age: 'Open to All Men & Women',
      icon: Utensils,
      color: 'bg-sky-500/15 text-sky-900 border-sky-200',
      badgeBg: 'bg-sky-100 text-sky-800',
      description: 'Open to all passionate cooks. Showcase regional authenticity, speed cooking, and signature taste.',
      round1: 'Video Reel Recipe Submission',
      round2: 'Tirunelveli Live Grand Stage'
    }
  ];

  return (
    <section id="competitions" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.03)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        COOKING
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
              1ST FEATURED COMPETITION • TIRUNELVELI DISTRICT
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#D4A72C',
                boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
            GRAND COOKING <span className="text-[#9e0804]">CHAMPIONSHIP</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
            TheZar 2026 kicks off with the Grand Cooking Championship in Tirunelveli District! 3 participant categories available with Video Reel Round 1 followed by Face-to-Face Live Cooking Stage Round 2.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="space-y-6">
          
          {/* TOP WIDE HERO BENTO CARD - FEATURED COOKING CHAMPIONSHIP */}
          <div className="relative rounded-3xl bg-[#071426] p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-slate-800">
            {/* Background Accent Lines */}
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full border border-[#9e0804]/20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column Info */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-[#9e0804]/20 border border-[#9e0804]/40 text-red-300 text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>TIRUNELVELI DISTRICT ROUND 1 NOW OPEN</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                  Tirunelveli District <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-red-400 to-red-200">
                    Grand Cooking Championship
                  </span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Showcase your culinary magic! Step 1: Upload a short 60-sec recipe preparation video reel. Shortlisted participants perform Face-to-Face live in front of master chefs & judges in Tirunelveli!
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenRegister}
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-red-900/30 hover:scale-105 transition-transform cursor-pointer"
                    style={{ borderRadius: '9999px' }}
                  >
                    <span>Register for Cooking Competition</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column Highlight Box */}
              <div className="lg:col-span-5 flex flex-col items-end justify-center">
                <div className="w-full max-w-sm bg-white text-slate-900 rounded-2xl p-6 shadow-2xl space-y-4 border border-slate-100 relative">
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-[#071426] tracking-tight">3 Divisions</p>
                      <p className="text-xs text-slate-500 font-medium">Kids • Adults • Men & Women</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#9e0804] flex items-center justify-center font-bold">
                      <ChefHat className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                      <span className="text-slate-600">Round 1: Video Reel Upload</span>
                      <span className="text-[#9e0804] font-bold">Online</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-50/70 border border-red-100 font-semibold">
                      <span className="text-slate-800">Round 2: Live Stage Cook-Off</span>
                      <span className="text-[#9e0804] font-bold">Tirunelveli</span>
                    </div>
                  </div>

                  {/* Pill Tags */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-bold">
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 flex items-center gap-1">
                      Kids Category <ArrowUpRight className="w-3 h-3 text-amber-600" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-red-50 text-[#9e0804] flex items-center gap-1">
                      Adults Category <ArrowUpRight className="w-3 h-3 text-[#9e0804]" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 flex items-center gap-1">
                      Men & Women <ArrowUpRight className="w-3 h-3 text-sky-600" />
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM ROW: 3 PARTICIPANT CATEGORIES (KIDS, ADULTS, MEN/WOMEN) + 1 FINALE CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* 3 COOKING CATEGORY CARDS */}
            {cookingCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between border shadow-sm hover:shadow-md transition-all group relative min-h-[280px] bg-white border-slate-200/80`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${cat.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${cat.badgeBg}`}>
                        {cat.age}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-[#071426] tracking-tight leading-snug">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] font-bold text-[#9e0804] uppercase tracking-wider mt-0.5 font-mono">
                      {cat.subtitle}
                    </p>

                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 space-y-2 mt-4">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>R1: Video Reel</span>
                      <span className="text-[#9e0804] font-bold">Online</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>R2: Live Stage</span>
                      <span className="text-slate-900 font-bold">Tirunelveli</span>
                    </div>

                    <button
                      onClick={onOpenRegister}
                      className="w-full mt-2 py-2.5 rounded-full bg-[#071426] text-white text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#9e0804] transition-colors cursor-pointer"
                      style={{ borderRadius: '9999px' }}
                    >
                      <span>Register {cat.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 4TH CARD: GRAND FINALE COOKING CHAMPIONSHIP */}
            <div className="relative rounded-3xl p-7 flex flex-col justify-between overflow-hidden shadow-lg group min-h-[280px] text-white">
              <img
                src={speakerImg}
                alt="Statewide Cooking Grand Finale Stage"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/85 to-[#730502]/80" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/30 backdrop-blur-md text-amber-300 flex items-center justify-center mb-4 border border-white/20">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-black text-white tracking-tight leading-snug">
                  Statewide Grand Finale
                </h4>
                <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mt-0.5 font-mono">
                  Chennai Master Arena
                </p>
                <p className="text-xs text-slate-200 mt-3 leading-relaxed">
                  Tirunelveli & district cooking winners advance to the Statewide Master Chef Grand Stage in Chennai!
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <button
                  onClick={onOpenRegister}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#9e0804] to-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-transform cursor-pointer border border-white/30"
                  style={{ borderRadius: '9999px' }}
                >
                  <span>View Grand Finale Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
