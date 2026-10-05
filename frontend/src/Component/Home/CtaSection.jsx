import { ArrowRight, CheckCircle2 } from 'lucide-react';
import rank1 from '../../assets/rank1_avatar.jpg';
import rank2 from '../../assets/rank2_avatar.jpg';
import rank3 from '../../assets/rank3_avatar.jpg';
import cheerfulContestant from '../../assets/cheerful_contestant.jpg';

export default function CtaSection({ onOpenRegister }) {
  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.hash = '#' + targetId;
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Horizontal Banner Card Matching Reference Design in Royal Maroon */}
        <div
          className="relative rounded-3xl sm:rounded-[36px] px-6 sm:px-10 lg:px-14 py-7 sm:py-9 overflow-hidden shadow-xl border-4 sm:border-[6px] border-white"
          style={{
            background: 'linear-gradient(135deg, #c4120c 0%, #9e0804 45%, #7a0603 75%, #4f0302 100%)',
          }}
        >
          {/* Subtle Decorative Translucent Circles Matching Reference */}
          <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="absolute -bottom-16 right-1/4 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-48 h-48 rounded-full bg-white/[0.08] pointer-events-none" />
          <div className="absolute -bottom-10 right-4 w-28 h-28 rounded-full bg-white/15 pointer-events-none" />
          <div className="absolute top-4 left-6 w-20 h-20 rounded-full bg-white/[0.06] pointer-events-none" />

          {/* Content Flex Container: Left Content & Right Action Column */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Column: Pill Badge, Heading & Subtitle */}
            <div className="space-y-2.5 max-w-xl text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#9e0804] text-[11px] sm:text-xs font-extrabold shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9e0804] shrink-0" />
                <span>Season 2026 Registrations Open</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Elevate Your Talent?
              </h2>

              {/* Subtitle */}
              <p className="text-red-100/90 text-xs sm:text-sm leading-relaxed font-normal">
                Don’t miss out on the latest championship fixtures and exclusive competitions. Your stage awaits.
              </p>
            </div>

            {/* Right Column: Buttons & Social Proof Avatars */}
            <div className="flex flex-col items-start lg:items-end gap-3.5 shrink-0">
              
              {/* Buttons Row */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => scrollToSection(e, 'events')}
                  className="px-7 py-3 !rounded-full bg-white hover:bg-red-50 text-[#9e0804] font-extrabold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
                  style={{ borderRadius: '9999px' }}
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4 text-[#9e0804] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-7 py-3 !rounded-full border-2 border-white/80 hover:bg-white/15 text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center cursor-pointer hover:border-white hover:scale-[1.03] active:scale-[0.97] backdrop-blur-xs"
                  style={{ borderRadius: '9999px' }}
                >
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Social Proof / Avatars Row */}
              <div className="flex items-center gap-2.5 pt-0.5">
                {/* Overlapping Avatar Circles */}
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    src={rank1}
                    alt="Participant 1"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs shrink-0"
                  />
                  <img
                    src={rank2}
                    alt="Participant 2"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs shrink-0"
                  />
                  <img
                    src={rank3}
                    alt="Participant 3"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs shrink-0"
                  />
                  <img
                    src={cheerfulContestant}
                    alt="Participant 4"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs shrink-0"
                  />
                </div>

                {/* Rating & Count Text */}
                <div className="text-white text-xs font-bold tracking-tight flex items-center gap-1">
                  <span className="text-white">5/5</span>
                  <span className="text-red-200 font-normal text-[11px] sm:text-xs">
                    (1,200+ Contestants)
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
