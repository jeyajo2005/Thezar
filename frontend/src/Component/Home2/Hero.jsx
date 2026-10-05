import { useEffect, useRef } from 'react';
import heroStageImg from '../../assets/thezar_hero_stage.png';
import { ArrowRight, Trophy, Sparkles, MapPin, Calendar } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenRegister, isRevealed = true, onReplayIntro }) {
  const heroSectionRef = useRef(null);
  const stageImgRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isRevealed) {
      hasAnimatedRef.current = false;
      return;
    }
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Stage Image slight cinematic settling
      if (stageImgRef.current) {
        tl.fromTo(
          stageImgRef.current,
          { scale: 1.05, opacity: 0.85 },
          { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' },
          0
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [isRevealed]);

  const scrollToEvents = (e) => {
    e.preventDefault();
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroSectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-[#0c0204]"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 1. Main Stage Hero Visual Container - 100% Full Bleed Edge-to-Edge */}
      <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] lg:h-[820px] xl:h-[90vh] min-h-[500px] overflow-hidden">
        
        {/* The Exact User-Provided Thezar Stage Image - 100% Full Width & Height with Zero Side Gaps */}
        <img
          ref={stageImgRef}
          src={heroStageImg}
          alt="THEZAR Events - Tirunelveli Talent Showcase Championship"
          className="w-full h-full object-cover object-center block will-change-transform select-none"
        />

        {/* Subtle Ambient Vignette on bottom for mobile readability only */}
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#0c0204]/90 to-transparent sm:hidden" />

          {/* Invisible Clickable Hotspot directly over the artwork's ORDER NOW button */}
          <button
            onClick={onOpenRegister}
            className="absolute left-[18%] sm:left-[27%] bottom-[12%] sm:bottom-[16%] w-[120px] sm:w-[155px] h-[36px] sm:h-[44px] rounded-full opacity-0 hover:opacity-10 bg-white transition-opacity duration-200 cursor-pointer z-30"
            title="Register / Order Now"
            aria-label="Register Now"
          />

          {/* Replay Intro Button (Top Right) */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Theater Intro"
              className="absolute top-4 right-4 sm:top-6 sm:right-10 z-20 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 hover:border-amber-400/70 backdrop-blur-md text-[11px] font-semibold text-white/90 uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Replay Intro</span>
            </button>
          )}
        </div>

      {/* 3. Smooth Bottom Divider Leading Gracefully into the Rest of the Page */}
      <div className="w-full h-8 sm:h-12 bg-gradient-to-b from-[#0c0204] to-white pointer-events-none" />
    </section>
  );
}
