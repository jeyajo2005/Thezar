import heroSpeakerImg from '../../assets/Young_woman.png';
import { Calendar, MapPin, Users, Lightbulb, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-between overflow-hidden min-h-[600px] md:min-h-[650px] lg:min-h-[700px] bg-[#071426]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Background Image & Dark Navy Gradients for High Readability */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroSpeakerImg}
          alt="Youth Leadership Summit Keynote Speaker"
          className="w-full h-full object-cover object-[80%_25%] sm:object-[center_20%] lg:object-[75%_22%]"
        />

        {/* Mobile vertical gradient */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(7, 20, 38, 0.92) 0%, rgba(7, 20, 38, 0.75) 55%, rgba(7, 20, 38, 0.95) 100%)',
          }}
        />
        {/* Desktop horizontal gradient overlay: Dark on left for text contrast */}
        <div
          className="hidden md:block absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(7, 20, 38, 0.95) 0%, rgba(7, 20, 38, 0.82) 42%, rgba(7, 20, 38, 0.35) 75%, rgba(7, 20, 38, 0.1) 100%)',
          }}
        />

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-28 lg:pb-32 w-full flex-1 flex items-center">
        <div className="max-w-[560px] text-left space-y-4 sm:space-y-5">
          
          {/* 1. TOP EYEBROW HEADER */}
          <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-300">
            TECHNOLOGY <span className="text-[#FB7185] mx-1.5">|</span> IDEAS <span className="text-[#FB7185] mx-1.5">|</span> PEOPLE <span className="text-[#FB7185] mx-1.5">|</span> IMPACT
          </div>

          {/* 2. TYPOGRAPHIC HEADING STACK (Rose Theme) */}
          <h1 className="flex flex-col uppercase tracking-tight leading-[0.94]">
            <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-white">
              YOUTH
            </span>
            <span
              className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #E11D48 0%, #FB7185 50%, #F43F5E 100%)',
              }}
            >
              LEADERSHIP
            </span>
            <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-light text-white/95 tracking-[0.06em]">
              SUMMIT
            </span>
          </h1>

          {/* 3. SUBTITLE & ROSE DECORATIVE LINE */}
          <div className="space-y-2.5">
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-slate-200 leading-snug">
              Empowering the Next Generation for a Brighter Tomorrow
            </p>
            <div
              className="w-14 h-[3px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #E11D48, #FB7185)',
                boxShadow: '0 0 10px rgba(225, 29, 72, 0.4)',
              }}
            />
          </div>

          {/* 4. EVENT DETAILS 2x2 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 max-w-[500px]">
            {/* Date & Time */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#FB7185] shrink-0">
                <Calendar className="w-4 h-4 text-[#FB7185]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Oct 25, 2026</div>
                <div className="text-[11px] text-slate-300 mt-0.5">09:00 AM - 05:00 PM</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#FB7185] shrink-0">
                <MapPin className="w-4 h-4 text-[#FB7185]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Chennai</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Convention Centre</div>
              </div>
            </div>

            {/* Audience */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#FB7185] shrink-0">
                <Users className="w-4 h-4 text-[#FB7185]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Industry Experts</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Panel Discussions</div>
              </div>
            </div>

            {/* Activities */}
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-white/[0.08] border border-white/10 text-[#FB7185] shrink-0">
                <Lightbulb className="w-4 h-4 text-[#FB7185]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white leading-tight">Ideas & Innovation</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Networking</div>
              </div>
            </div>
          </div>

          {/* 5. CTA ACTION BUTTONS (Rose Palette) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto h-[42px] sm:h-[44px] px-6 rounded-full text-[13px] font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-md shadow-rose-500/25"
              style={{
                background: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #BE123C 0%, #E11D48 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#events"
              className="w-full sm:w-auto h-[42px] sm:h-[44px] px-6 rounded-full text-[13px] font-bold text-white uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.30)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.30)';
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
