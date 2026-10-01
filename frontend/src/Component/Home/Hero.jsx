import heroSpeakerImg from '../../assets/hero_speaker.jpg';
import { ArrowRight, Trophy } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden min-h-[620px] md:min-h-[660px] lg:min-h-[700px] bg-[#071426]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Cinematic Background Image: Keynote Speaker & Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroSpeakerImg}
          alt="THEZAR 2026 Keynote Stage Atmosphere"
          className="w-full h-full object-cover object-[78%_25%] sm:object-[center_20%] lg:object-[75%_22%]"
        />

        {/* 2. Directional Navy Overlay: Dark on left for text readability, clear on right */}
        {/* Mobile vertical gradient */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(7, 20, 38, 0.88) 0%, rgba(7, 20, 38, 0.65) 55%, rgba(7, 20, 38, 0.90) 100%)',
          }}
        />
        {/* Desktop directional overlay */}
        <div
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(7, 20, 38, 0.85) 0%, rgba(7, 20, 38, 0.65) 38%, rgba(7, 20, 38, 0.25) 70%, rgba(7, 20, 38, 0.05) 100%)',
          }}
        />

        {/* 3. Subtle ambient glow accents */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content Area: Occupies ~45-50% width on left */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-36 w-full flex-1 flex items-center">
        <div className="max-w-2xl text-left space-y-6">
          
          {/* Eyebrow & Bold Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-300 text-xs font-mono font-extrabold tracking-[0.2em] uppercase">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>THEZAR 2026 • TAMIL NADU</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white tracking-[-0.04em] uppercase leading-[0.96]">
              THE GRAND <br />
              COLLEGIATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 filter drop-shadow">
                COMPETITION
              </span>
            </h1>
          </div>

          {/* Description: Modern sans-serif, clean and legible */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-sans font-medium">
            Bringing students together across 38 districts through competition, creativity, innovation and unforgettable experiences.
          </p>

          {/* Primary & Secondary Action Buttons (Both Rounded Pills) */}
          <div className="pt-1 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Primary Pill Button */}
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto h-[48px] sm:h-[50px] px-7 sm:px-8 rounded-full text-[15px] font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
                boxShadow: '0 10px 25px rgba(37, 99, 235, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 99, 235, 0.32)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.25)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </button>

            {/* Secondary Pill Button */}
            <a
              href="#events"
              className="w-full sm:w-auto h-[48px] sm:h-[50px] px-7 sm:px-8 rounded-full text-[15px] font-bold text-white uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.80)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.55)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE EVENTS
            </a>
          </div>

          {/* Live Event Indicator & Statistics */}
          <div className="pt-3 space-y-4">
            {/* Live Event Badge: Pill-shaped, subtle pulsing cyan dot */}
            <div>
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full text-slate-200 text-xs font-semibold backdrop-blur-md"
                style={{
                  background: 'rgba(7, 20, 38, 0.70)',
                  border: '1px solid rgba(255, 255, 255, 0.30)',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
                </span>
                <span className="text-[11px] font-mono font-bold text-[#22D3EE] tracking-wider uppercase">
                  TIRUNELVELI DISTRICT • ROUND 2 • LIVE
                </span>
              </div>
            </div>

            {/* Statistics: Numbers stacked above labels with vertical separators */}
            <div className="pt-1 flex items-center gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div>
                <span className="text-xl sm:text-2xl font-black text-white font-mono block leading-none">
                  38
                </span>
                <span className="text-xs text-[#CBD5E1] font-medium block mt-1">
                  Districts
                </span>
              </div>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-white/25" />

              {/* Stat 2 */}
              <div>
                <span className="text-xl sm:text-2xl font-black text-white font-mono block leading-none">
                  100+
                </span>
                <span className="text-xs text-[#CBD5E1] font-medium block mt-1">
                  Events
                </span>
              </div>

              {/* Vertical Separator */}
              <div className="h-8 w-px bg-white/25" />

              {/* Stat 3 */}
              <div>
                <span className="text-xl sm:text-2xl font-black text-white font-mono block leading-none">
                  5000+
                </span>
                <span className="text-xs text-[#CBD5E1] font-medium block mt-1">
                  Participants
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 03. CURVED HERO DIVIDER: Smooth, large white SVG wave sweeping across the bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none leading-none overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 md:h-28 text-white block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C320,115 680,10 1020,75 C1220,112 1360,55 1440,35 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
