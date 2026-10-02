import heroSpeakerImg from '../../assets/Young_woman.png';
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
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content Area: Occupies ~45% width on left (Editorial Composition) */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-36 w-full flex-1 flex items-center">
        <div className="max-w-[620px] text-left space-y-6">
          
          {/* 1. EYEBROW */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-sm text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-white shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#D4A72C] shrink-0" />
            <span>THEZAR 2026</span>
            <span className="text-[#FDA4AF] font-black">•</span>
            <span>TAMIL NADU</span>
          </div>

          {/* 2. MAIN HEADING */}
          <h1 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[76px] xl:text-[80px] font-extrabold text-white tracking-[-0.045em] uppercase leading-[0.98] lg:leading-[0.95] max-w-[560px]">
            THE GRAND <br />
            COLLEGIATE <br />
            <span className="text-gradient-thezar inline-block">
              COMPETITION
            </span>
          </h1>

          {/* 3. DECORATIVE GOLD LINE */}
          <div
            className="w-[80px] h-[2px] rounded-full"
            style={{
              backgroundColor: '#D4A72C',
              boxShadow: '0 0 10px rgba(212, 167, 44, 0.35)',
            }}
          />

          {/* 4. DESCRIPTION */}
          <p
            className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[1.7] tracking-[-0.01em] max-w-[580px]"
            style={{ color: 'rgba(255, 255, 255, 0.82)' }}
          >
            Bringing students together across 38 districts through competition, creativity, innovation and unforgettable experiences.
          </p>

          {/* 5. CTA BUTTONS */}
          <div className="pt-1 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {/* Primary Pill Button */}
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto h-[48px] sm:h-[50px] px-8 rounded-full text-[14px] sm:text-[15px] font-bold text-white uppercase tracking-[0.02em] flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-lg shadow-rose-500/25"
              style={{
                background: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #BE123C 0%, #E11D48 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(225, 29, 72, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(225, 29, 72, 0.25)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </button>

            {/* Secondary Pill Button */}
            <a
              href="#events"
              className="w-full sm:w-auto h-[48px] sm:h-[50px] px-8 rounded-full text-[14px] sm:text-[15px] font-semibold text-white uppercase tracking-[0.02em] flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.50)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.80)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.50)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE EVENTS
            </a>
          </div>

          {/* 6. LIVE EVENT INFORMATION & 7. STATISTICS */}
          <div className="pt-2 space-y-4">
            {/* Live Event Badge: Pill-shaped, subtle pulsing dot */}
            <div>
              <div
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md"
                style={{
                  background: 'rgba(7, 20, 38, 0.75)',
                  border: '1px solid rgba(251, 113, 133, 0.35)',
                }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDA4AF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDA4AF]"></span>
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#FDA4AF] tracking-[0.12em] uppercase">
                  TIRUNELVELI DISTRICT • ROUND 2 • LIVE
                </span>
              </div>
            </div>

            {/* Statistics: Numbers stacked above labels with vertical separators */}
            <div className="pt-1 flex items-center gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div>
                <span className="text-[22px] sm:text-[26px] font-extrabold text-white tracking-[-0.03em] block leading-none">
                  38
                </span>
                <span
                  className="text-[11px] sm:text-[12px] font-medium tracking-[0.05em] uppercase block mt-1.5"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  DISTRICTS
                </span>
              </div>

              {/* Vertical Separator */}
              <div
                className="h-8 w-px"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.22)' }}
              />

              {/* Stat 2 */}
              <div>
                <span className="text-[22px] sm:text-[26px] font-extrabold text-white tracking-[-0.03em] block leading-none">
                  100+
                </span>
                <span
                  className="text-[11px] sm:text-[12px] font-medium tracking-[0.05em] uppercase block mt-1.5"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  EVENTS
                </span>
              </div>

              {/* Vertical Separator */}
              <div
                className="h-8 w-px"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.22)' }}
              />

              {/* Stat 3 */}
              <div>
                <span className="text-[22px] sm:text-[26px] font-extrabold text-white tracking-[-0.03em] block leading-none">
                  5000+
                </span>
                <span
                  className="text-[11px] sm:text-[12px] font-medium tracking-[0.05em] uppercase block mt-1.5"
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  PARTICIPANTS
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
