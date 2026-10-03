import heroSpeakerImg from '../../assets/Young_woman.png';
import { Calendar, MapPin, Users, Lightbulb, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden min-h-[620px] md:min-h-[680px] lg:min-h-[760px] bg-[#071426]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Background Image & Cinematic Gradient Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroSpeakerImg}
          alt="Youth Leadership Summit Speaker"
          className="w-full h-full object-cover object-[78%_25%] sm:object-[75%_22%] lg:object-[68%_22%]"
        />

        {/* Mobile vertical gradient: Dark on top/left to ensure readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(7, 20, 38, 0.94) 0%, rgba(7, 20, 38, 0.82) 48%, rgba(7, 20, 38, 0.60) 100%)',
          }}
        />

        {/* Desktop horizontal cinematic gradient: Deep dark on left 45%, fading gracefully across speaker */}
        <div
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5, 15, 30, 0.98) 0%, rgba(7, 20, 38, 0.92) 36%, rgba(7, 20, 38, 0.70) 52%, rgba(7, 20, 38, 0.15) 75%, rgba(7, 20, 38, 0.05) 100%)',
          }}
        />

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#9e0804]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-28 lg:pb-32 w-full flex-1 flex items-center">
        <div className="max-w-[560px] text-left space-y-4 sm:space-y-5">
          
          {/* 1. TOP EYEBROW HEADER */}
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-300">
            38 DISTRICTS <span className="text-[#c4120c] mx-1.5">|</span> TAMIL NADU <span className="text-[#c4120c] mx-1.5">|</span> STATEWIDE LEAGUE <span className="text-[#c4120c] mx-1.5">|</span> THEZAR 2026
          </div>

          {/* 2. TYPOGRAPHIC HEADING STACK (YOUTH LEADERSHIP SUMMIT) */}
          <div className="pt-1">
            <h1 className="flex flex-col uppercase tracking-tight leading-[0.92]">
              <span className="text-[38px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black text-white tracking-tight">
                YOUTH
              </span>
              <span
                className="text-[38px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #E6C587 0%, #D8AF67 35%, #F4DEC3 65%, #C89945 100%)',
                }}
              >
                LEADERSHIP
              </span>
              <span className="text-[38px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-light text-white tracking-[0.04em]">
                SUMMIT
              </span>
            </h1>

            {/* Decorative Gold Accent Bar under SUMMIT */}
            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{
                backgroundImage: 'linear-gradient(90deg, #c4120c 0%, #9e0804 50%, #e31b14 100%)',
              }}
            />
          </div>

          {/* 3. SUBTITLE */}
          <div className="pt-1">
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] font-medium text-slate-200 leading-snug">
              Empowering the Next Generation <br className="hidden sm:inline" />
              for a Brighter Tomorrow
            </p>
            {/* Small accent bar under subtitle */}
            <div
              className="w-12 h-[2px] mt-2 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D8AF67 0%, rgba(216, 175, 103, 0) 100%)',
              }}
            />
          </div>

          {/* 4. EVENT DETAILS 2x2 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-[500px]">
            {/* Multi-Disciplinary Events */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#c4120c] shrink-0">
                <Trophy className="w-4 h-4 text-[#c4120c]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white leading-tight">Oct 25, 2026</div>
                <div className="text-[12px] text-slate-300/85 mt-0.5">09:00 AM - 05:00 PM</div>
              </div>
            </div>

            {/* 38 Districts */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#c4120c] shrink-0">
                <MapPin className="w-4 h-4 text-[#c4120c]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white leading-tight">Chennai</div>
                <div className="text-[12px] text-slate-300/85 mt-0.5">Convention Centre</div>
              </div>
            </div>

            {/* Open to Everyone */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#c4120c] shrink-0">
                <Users className="w-4 h-4 text-[#c4120c]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white leading-tight">Industry Experts</div>
                <div className="text-[12px] text-slate-300/85 mt-0.5">Panel Discussions</div>
              </div>
            </div>

            {/* Grand Championship */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#c4120c] shrink-0">
                <Sparkles className="w-4 h-4 text-[#c4120c]" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-white leading-tight">Ideas & Innovation</div>
                <div className="text-[12px] text-slate-300/85 mt-0.5">Networking</div>
              </div>
            </div>
          </div>

          {/* 5. CTA ACTION BUTTONS (Champagne Gold + Glass) */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto h-[42px] sm:h-[44px] px-7 rounded-full text-[13px] font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-md shadow-[#9e0804]/25 no-underline hover:no-underline"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #730502 0%, #9e0804 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #9e0804 0%, #730502 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#events"
              className="w-full sm:w-auto h-[44px] px-7 rounded-full text-[13px] font-bold text-white uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer no-underline hover:no-underline"
              style={{
                borderRadius: '9999px',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(216, 175, 103, 0.40)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(216, 175, 103, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(216, 175, 103, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(216, 175, 103, 0.40)';
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
