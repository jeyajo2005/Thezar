import { useState } from 'react';
import aboutAudienceImg from '../../assets/about_audience.jpg';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutTheZarSection({ onOpenRegister }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about-thezar" className="py-12 sm:py-16 bg-white text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Background Watermark Text: "ABOUT" */}
      <div
        className="absolute top-6 left-6 sm:left-16 pointer-events-none select-none font-extrabold tracking-tighter uppercase z-0 leading-none"
        style={{
          fontSize: 'clamp(120px, 16vw, 180px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Heading & Content */}
          <div className="lg:col-span-6 text-left space-y-5">
            
            {/* Editorial Eyebrow with Small Gold Line */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-[#3f0701] tracking-[0.18em] uppercase">
                ABOUT THEZAR
              </span>
              <div
                className="w-10 h-[2px] rounded-full"
                style={{
                  backgroundColor: '#3f0701',
                  boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
                }}
              />
            </div>

            {/* Main Editorial Heading: 48-64px, weight 800, line-height 1.0 */}
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-extrabold text-[#3f0701] tracking-[-0.035em] leading-[1.0] uppercase">
              WHERE TALENT <br />
              <span className="text-[#3f0701] font-serif italic lowercase tracking-normal">meets</span> <br />
              OPPORTUNITY
            </h2>

            {/* Editorial Description */}
            <p className="text-[#64748B] text-sm sm:text-base lg:text-[17px] font-normal leading-[1.7] tracking-[-0.01em] max-w-xl">
              TheZar brings participants together across Tamil Nadu through district-level competitions, innovation, creativity and achievement. From competitions to cultural spectacles, this is the definitive stage for state champions.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-1 text-sm text-[#334155] font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3f0701] shrink-0" />
                <span>38 District preliminary stages leading to Chennai Mega Finals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3f0701] shrink-0" />
                <span>₹40 Lakhs House Bumper + ₹25 Lakhs Cash Pool for winners</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3f0701] shrink-0" />
                <span>Direct mentorship and networking with state industry leaders</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#3f0701] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm no-underline hover:no-underline group"
                style={{
                  color: '#3f0701',
                  borderColor: '#3f0701',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3f0701';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3f0701';
                }}
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              {onOpenRegister && (
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                  style={{
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #3f0701 0%, #580c04 100%)',
                    boxShadow: '0 8px 20px rgba(63, 7, 1, 0.25)',
                    color: '#FFFFFF',
                  }}
                >
                  <span>REGISTER NOW</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Large Editorial Event Image with Concentric Rings & Play Button */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Concentric Decorative Rings behind the Image (from reference design) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-slate-200/80 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full border border-slate-100 pointer-events-none" />

            {/* Image Container */}
            <div className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={aboutAudienceImg}
                alt="TheZar Audience & Statewide Symposium"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtle Gradient Over Bottom of Photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3f0701]/70 via-transparent to-transparent opacity-60" />

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 text-left text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-200 font-bold block">
                  STATEWIDE SYMPOSIUM
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Annual Statewide Talent & Innovation Expo
                </p>
              </div>

              {/* Circular Play Button Overlapping the Image */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#3f0701] hover:bg-[#580c04] text-white flex items-center justify-center shadow-xl shadow-[#3f0701]/40 hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Play Introduction Video"
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
