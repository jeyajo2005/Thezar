import { Sparkles, Calendar, Gift, ArrowRight, Star } from 'lucide-react';
import ChristmasHero3D from './ChristmasHero3D';
import santaHeroImg from '../../assets/xmas_santa_hero.jpg';

export default function ChristmasHero({ onOpenRegister }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-0 overflow-hidden text-white"
      style={{
        background: 'radial-gradient(ellipse at top, #7a0c12 0%, #4a060a 45%, #200305 100%)',
      }}
    >
      {/* 3D Three.js Interactive Flying Santa, Tree & Gift Boxes */}
      <ChristmasHero3D />

      {/* Decorative Hanging Pine Garland & Golden Baubles Top Border */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none flex justify-between items-start px-4 sm:px-12">
        {/* Left Garland Bunch */}
        <div className="flex items-center gap-3 bg-gradient-to-b from-[#0f3822]/90 to-transparent p-4 rounded-b-3xl border-b border-emerald-500/20 backdrop-blur-xs">
          <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_#ef4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-christmas text-amber-200 text-lg">Holiday Season 2026</span>
        </div>

        {/* Right Garland Bunch */}
        <div className="flex items-center gap-3 bg-gradient-to-b from-[#0f3822]/90 to-transparent p-4 rounded-b-3xl border-b border-emerald-500/20 backdrop-blur-xs">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ffd700] hidden sm:inline">Winter Carnival</span>
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_8px_#ffd700]" />
          <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_#ef4444]" />
        </div>
      </div>

      {/* Atmospheric Star Particles & Soft Glows */}
      <div className="absolute top-24 left-10 z-20 pointer-events-none animate-twinkle">
        <Star className="w-8 h-8 text-[#ffd700] fill-[#ffd700] drop-shadow-[0_0_18px_rgba(255,215,0,0.9)]" />
      </div>
      <div className="absolute top-36 right-16 z-20 pointer-events-none animate-pulse delay-300">
        <Star className="w-6 h-6 text-amber-200 fill-amber-200 drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]" />
      </div>
      <div className="absolute top-72 left-1/4 z-20 pointer-events-none animate-twinkle delay-500">
        <Star className="w-4 h-4 text-[#ffd700] fill-[#ffd700]" />
      </div>
      <div className="absolute top-64 right-1/4 z-20 pointer-events-none animate-pulse delay-700">
        <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center pt-8">
        
        {/* Luxury Gold Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#3a0508]/85 border border-[#ffd700]/60 shadow-[0_0_25px_rgba(212,175,55,0.4)] mb-4 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#ffd700] animate-spin" style={{ animationDuration: '5s' }} />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ffd700] font-mono">
            ★ THEZAR STATEWIDE CHRISTMAS CARNIVAL 2026 ★
          </span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>

        {/* Grand Typography - Exactly as Reference Deck Cover */}
        <div className="space-y-1 mb-6">
          <p
            className="font-christmas text-7xl sm:text-9xl lg:text-[115px] text-white tracking-wide transform -rotate-1 select-none leading-none pt-2 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
            style={{
              textShadow: '0 0 35px rgba(255, 215, 0, 0.6), 0 5px 25px rgba(0, 0, 0, 0.95)',
            }}
          >
            Happy Christmas
          </p>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider gold-gradient-text leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            THE MAGIC OF CHRISTMAS
          </h1>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ffd700]" />
            <Star className="w-4 h-4 text-[#ffd700] fill-[#ffd700]" />
            <span className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#ffd700]" />
          </div>

          <p className="text-xs sm:text-sm lg:text-base text-amber-200 font-mono tracking-widest uppercase font-bold text-shadow">
            WITH ALL GOOD WISHES FOR A BRILLIANT AND HAPPY CHRISTMAS SEASON
          </p>

          <p className="text-base sm:text-xl text-rose-100/90 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            Celebrate the season of joy, love, togetherness and unforgettable moments across Tamil Nadu’s premier winter stage.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 mb-10">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:shadow-[0_0_55px_rgba(212,175,55,1)] hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-3 group"
          >
            <Gift className="w-5 h-5 text-[#240306] group-hover:rotate-12 transition-transform" />
            <span>Register for Christmas Event</span>
            <ArrowRight className="w-5 h-5 text-[#240306] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#events"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold tracking-wide text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-[#ffd700]/60 hover:border-[#ffd700] shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2.5 text-decoration-none group"
          >
            <Calendar className="w-5 h-5 text-[#ffd700]" />
            <span>Explore 5 Festive Events</span>
          </a>
        </div>

      </div>

      {/* Santa on Snowy Roof Showcase Card (Matching Reference Deck Cover!) */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-4">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#ffd700]/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-gradient-to-t from-black via-black/40 to-transparent">
          
          <img
            src={santaHeroImg}
            alt="Santa Claus on Snowy Roof"
            className="w-full h-80 sm:h-[420px] lg:h-[480px] object-cover object-top filter brightness-100 contrast-105"
          />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0204] via-transparent to-transparent" />

          {/* Floating Luxury Banner on Image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#ffd700]/40">
            <div className="text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffd700] uppercase tracking-wider font-bold mb-1">
                <Star className="w-3.5 h-3.5 fill-[#ffd700]" />
                <span>OFFICIAL CHRISTMAS ADVENT ARENA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Santa's Grand Arrival & Statewide Gift Distribution
              </h3>
            </div>

            <button
              onClick={onOpenRegister}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shrink-0 shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              Claim VIP Entry Pass
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Golden Ribbon Accent & Smooth Blend */}
      <div className="relative z-20 mt-12 flex flex-col items-center">
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] shadow-[0_0_12px_#ffd700] -mt-1.5" />
      </div>

    </section>
  );
}
