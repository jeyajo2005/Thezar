import heroSpeakerImg from '../../assets/Young_woman.png';
import { Trophy, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[700px] bg-[#3f0701]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Background Image & Dark Maroon Gradients for High Readability */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroSpeakerImg}
          alt="TheZar 2026 Grand Stage Atmosphere"
          className="w-full h-full object-cover object-[80%_25%] sm:object-[center_20%] lg:object-[75%_22%]"
        />

        {/* Mobile vertical gradient */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(63, 7, 1, 0.94) 0%, rgba(63, 7, 1, 0.78) 55%, rgba(63, 7, 1, 0.98) 100%)',
          }}
        />
        {/* Desktop horizontal gradient overlay: Dark on left for text contrast */}
        <div
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(63, 7, 1, 0.96) 0%, rgba(63, 7, 1, 0.85) 42%, rgba(63, 7, 1, 0.45) 75%, rgba(63, 7, 1, 0.15) 100%)',
          }}
        />

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-28 lg:pb-32 w-full flex-1 flex items-center">
        <div className="max-w-[560px] text-left space-y-4 sm:space-y-5">
          
          {/* 1. TOP EYEBROW HEADER */}
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/80">
            38 DISTRICTS <span className="text-white/60 mx-1.5">|</span> TAMIL NADU <span className="text-white/60 mx-1.5">|</span> STATEWIDE LEAGUE <span className="text-white/60 mx-1.5">|</span> THEZAR 2026
          </div>

          {/* 2. TYPOGRAPHIC HEADING STACK */}
          <h1 className="flex flex-col uppercase tracking-tight leading-[0.94]">
            <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white">
              THE GRAND
            </span>
            <span
              className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #FEE2E2 50%, #FFFFFF 100%)',
              }}
            >
              STATEWIDE
            </span>
            <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-light text-white/95 tracking-[0.06em]">
              COMPETITION
            </span>
          </h1>

          {/* 3. SUBTITLE */}
          <div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-slate-100 leading-relaxed">
              Bringing people together across 38 districts of Tamil Nadu through multi-disciplinary competitions, creativity, innovation, and unforgettable experiences.
            </p>
          </div>

          {/* 4. EVENT DETAILS 2x2 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-[500px]">
            {/* Multi-Disciplinary Events */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.12] border border-white/20 text-white shrink-0">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Multi-Disciplinary</div>
                <div className="text-[11px] text-white/80 mt-0.5">38 District Events</div>
              </div>
            </div>

            {/* 38 Districts */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.12] border border-white/20 text-white shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">38 Districts</div>
                <div className="text-[11px] text-white/80 mt-0.5">Statewide Stages</div>
              </div>
            </div>

            {/* Open to Everyone */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.12] border border-white/20 text-white shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Open to Everyone</div>
                <div className="text-[11px] text-white/80 mt-0.5">5,000+ Participants</div>
              </div>
            </div>

            {/* Grand Championship */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.12] border border-white/20 text-white shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Grand Championship</div>
                <div className="text-[11px] text-white/80 mt-0.5">Trophies & Awards</div>
              </div>
            </div>
          </div>

          {/* 5. CTA ACTION BUTTONS (Crisp White Solid & Translucent Glass) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto h-[42px] sm:h-[44px] px-7 rounded-full text-[13px] font-extrabold text-[#3f0701] uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-lg shadow-black/25 no-underline hover:no-underline"
              style={{
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                color: '#3f0701',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#events"
              className="w-full sm:w-auto h-[42px] sm:h-[44px] px-7 rounded-full text-[13px] font-bold text-white uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer no-underline hover:no-underline"
              style={{
                borderRadius: '9999px',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.40)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.40)';
              }}
            >
              EXPLORE EVENTS
            </a>
          </div>

        </div>
      </div>

      {/* 6. CURVED HERO BOTTOM WAVE */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none leading-none overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 text-white block"
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
