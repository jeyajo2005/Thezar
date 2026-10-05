import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import thezarLogo from '../../assets/thezar_logo.png';
import { Sparkles, Trophy, FastForward } from 'lucide-react';

export default function CurtainIntro({ onComplete, onStartReveal }) {
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const leftFoldsRef = useRef([]);
  const rightFoldsRef = useRef([]);
  const glowRef = useRef(null);
  const shadowLeftRef = useRef(null);
  const shadowRightRef = useRef(null);
  const brandCenterRef = useRef(null);
  const sheenRef = useRef(null);
  const canvasRef = useRef(null);
  const skipBtnRef = useRef(null);

  const [isFinished, setIsFinished] = useState(false);
  const tlRef = useRef(null);

  useEffect(() => {
    // 1. Canvas particle dust system (delicate gold floating sparkles)
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W = (cv.width = window.innerWidth);
    let H = (cv.height = window.innerHeight);

    const onResize = () => {
      if (!cv) return;
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: W * 0.5 + (Math.random() - 0.5) * 450,
      y: H * 0.5 + (Math.random() - 0.5) * 350,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -0.3 - Math.random() * 0.8,
      size: 1 + Math.random() * 2.5,
      alpha: 0.1 + Math.random() * 0.8,
      twinkle: Math.random() * Math.PI * 2,
    }));

    let animId = null;
    let running = true;
    const renderParticles = () => {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#fce7b0';

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += 0.04;
        const currentAlpha = Math.max(0, p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle)));

        if (p.y < -10) {
          p.y = H + 10;
          p.x = W * 0.5 + (Math.random() - 0.5) * 500;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = currentAlpha;
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(renderParticles);
    };
    renderParticles();

    // Lock body scrolling while curtains are closed
    document.body.style.overflow = 'hidden';

    // 2. GSAP Timeline Choreography
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setIsFinished(true);
        running = false;
        if (animId) cancelAnimationFrame(animId);
        if (onComplete) onComplete();
      },
    });
    tlRef.current = tl;

    // Initial positioning
    gsap.set(brandCenterRef.current, { opacity: 0, scale: 0.92, y: 15 });
    gsap.set(glowRef.current, { opacity: 0, scaleX: 0.2 });
    gsap.set(skipBtnRef.current, { opacity: 0, y: -10 });
    gsap.set([leftCurtainRef.current, rightCurtainRef.current], { xPercent: 0 });

    // Step 1: Initial Logo & Ambient glow arrive (0s - 0.6s)
    tl.to(brandCenterRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, 0.1);

    tl.to(glowRef.current, {
      opacity: 0.85,
      scaleX: 1,
      duration: 0.9,
      ease: 'sine.out',
    }, 0.1);

    tl.to(skipBtnRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    }, 0.3);

    // Step 2: Specular golden sheen sweep across brand logo (0.5s - 1.2s)
    if (sheenRef.current) {
      tl.fromTo(
        sheenRef.current,
        { left: '-120%', opacity: 0 },
        { left: '160%', opacity: 0.95, duration: 0.8, ease: 'power2.inOut' },
        0.55
      );
    }

    // Step 3: Call onStartReveal slightly before curtains fully part so Hero can begin graceful transition
    tl.add(() => {
      if (onStartReveal) onStartReveal();
    }, 1.2);

    // Step 4: Theatrical Velvet Curtains Part Elegantly (1.2s - 2.5s)
    tl.addLabel('open', 1.25);

    // Center glow blooms into bright golden light then dissipates
    tl.to(glowRef.current, {
      opacity: 1,
      scaleX: 3.5,
      duration: 0.6,
      ease: 'power2.in',
    }, 'open')
      .to(glowRef.current, {
        opacity: 0,
        scaleX: 6,
        duration: 0.7,
        ease: 'power2.out',
      }, 'open+=0.5');

    // Brand center gently ascends and dissolves into the opening light
    tl.to(brandCenterRef.current, {
      opacity: 0,
      scale: 1.08,
      y: -20,
      filter: 'blur(6px)',
      duration: 0.65,
      ease: 'power2.inOut',
    }, 'open+=0.1');

    // Left & Right Curtains Slide Open with realistic fabric inertia
    tl.to(leftCurtainRef.current, {
      xPercent: -108,
      duration: 1.45,
      ease: 'power3.inOut',
    }, 'open')
      .to(rightCurtainRef.current, {
        xPercent: 108,
        duration: 1.45,
        ease: 'power3.inOut',
      }, 'open');

    // Curtain Folds compression effect (realistic cloth folding)
    if (leftFoldsRef.current.length) {
      tl.to(leftFoldsRef.current, {
        scaleX: 0.55,
        stagger: { each: 0.03, from: 'end' },
        duration: 1.45,
        ease: 'power3.inOut',
        transformOrigin: '0% 50%',
      }, 'open');
    }
    if (rightFoldsRef.current.length) {
      tl.to(rightFoldsRef.current, {
        scaleX: 0.55,
        stagger: { each: 0.03, from: 'start' },
        duration: 1.45,
        ease: 'power3.inOut',
        transformOrigin: '100% 50%',
      }, 'open');
    }

    // Cast shadows fade and shift away
    tl.to(shadowLeftRef.current, {
      xPercent: -350,
      opacity: 0,
      duration: 1.45,
      ease: 'power3.inOut',
    }, 'open')
      .to(shadowRightRef.current, {
        xPercent: 350,
        opacity: 0,
        duration: 1.45,
        ease: 'power3.inOut',
      }, 'open');

    // Skip button fades out
    tl.to(skipBtnRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    }, 'open');

    // Entire container fades away
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
      },
    }, '-=0.2');

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
      running = false;
      if (animId) cancelAnimationFrame(animId);
      if (tlRef.current) tlRef.current.kill();
    };
  }, [onComplete, onStartReveal]);

  const handleSkip = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    document.body.style.overflow = '';
    if (tlRef.current) {
      if (onStartReveal) onStartReveal();
      // Immediately jump to the curtain parting moment so it opens smoothly right now
      tlRef.current.seek('open');
      setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
        if (containerRef.current) containerRef.current.style.display = 'none';
      }, 750);
    }
  };

  if (isFinished) return null;

  // 7 fold width variations for natural velvet look
  const foldWeights = [1.15, 0.9, 1.08, 0.95, 1.22, 0.88, 1.12];

  return (
    <div
      ref={containerRef}
      id="theaterCurtains"
      onClick={handleSkip}
      onTouchStart={handleSkip}
      className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden bg-[#070102] cursor-pointer select-none"
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      aria-hidden="true"
    >
      {/* Background Ambient Void */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #200406 0%, #0d0102 55%, #050001 100%)',
        }}
      />

      {/* Golden Dust Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />

      {/* Warm Golden Center Glow (seeping through crack) */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-15 pointer-events-none w-[28vw] h-[130vh] blur-2xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(254, 240, 138, 0.75) 0%, rgba(245, 158, 11, 0.45) 32%, rgba(196, 18, 12, 0.20) 65%, transparent 80%)',
        }}
      />

      {/* ================= LEFT VELVET CURTAIN ================= */}
      <div
        ref={leftCurtainRef}
        className="absolute -top-[3vh] -bottom-[3vh] -left-[2vw] w-[54vw] z-10 overflow-hidden will-change-transform"
        style={{
          boxShadow: '10px 0 50px rgba(0, 0, 0, 0.85)',
        }}
      >
        {/* Folds */}
        <div className="absolute inset-0 flex">
          {foldWeights.map((weight, idx) => (
            <div
              key={`left-fold-${idx}`}
              ref={(el) => (leftFoldsRef.current[idx] = el)}
              className="h-full will-change-transform"
              style={{
                flex: `${weight} 1 0%`,
                background:
                  'linear-gradient(90deg, #130103 0%, #2e0407 14%, #530a10 32%, #791018 48%, #5a0b12 65%, #300407 82%, #140103 100%)',
              }}
            />
          ))}
        </div>

        {/* Drape Texture & Light Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(254, 215, 170, 0.12) 0%, rgba(255, 255, 255, 0.03) 25%, transparent 55%, rgba(10, 0, 2, 0.6) 100%)',
          }}
        />

        {/* Inner Edge Shade (Center meeting point) */}
        <div
          className="absolute top-0 bottom-0 right-0 w-[12%] pointer-events-none"
          style={{
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%)',
          }}
        />

        {/* Bottom Hem Shade */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[18%] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%)',
          }}
        />
      </div>

      {/* ================= RIGHT VELVET CURTAIN ================= */}
      <div
        ref={rightCurtainRef}
        className="absolute -top-[3vh] -bottom-[3vh] -right-[2vw] w-[54vw] z-10 overflow-hidden will-change-transform"
        style={{
          boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.85)',
        }}
      >
        {/* Folds */}
        <div className="absolute inset-0 flex">
          {foldWeights.map((weight, idx) => (
            <div
              key={`right-fold-${idx}`}
              ref={(el) => (rightFoldsRef.current[idx] = el)}
              className="h-full will-change-transform"
              style={{
                flex: `${weight} 1 0%`,
                background:
                  'linear-gradient(90deg, #140103 0%, #300407 16%, #5a0b12 34%, #791018 50%, #530a10 66%, #2e0407 84%, #130103 100%)',
              }}
            />
          ))}
        </div>

        {/* Drape Texture & Light Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(254, 215, 170, 0.12) 0%, rgba(255, 255, 255, 0.03) 25%, transparent 55%, rgba(10, 0, 2, 0.6) 100%)',
          }}
        />

        {/* Inner Edge Shade (Center meeting point) */}
        <div
          className="absolute top-0 bottom-0 left-0 w-[12%] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%)',
          }}
        />

        {/* Bottom Hem Shade */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[18%] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%)',
          }}
        />
      </div>

      {/* Curtain Shadow Overlays for 3D Depth */}
      <div
        ref={shadowLeftRef}
        className="absolute top-0 bottom-0 left-[50vw] w-[18vw] z-5 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
        }}
      />
      <div
        ref={shadowRightRef}
        className="absolute top-0 bottom-0 right-[50vw] w-[18vw] z-5 pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
        }}
      />

      {/* ================= CENTER BRAND HERO IDENTITY ================= */}
      <div
        ref={brandCenterRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center text-center px-4 w-full max-w-[620px] pointer-events-none select-none"
      >
        {/* Glowing Crest Halo */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full bg-[#eab308]/25 blur-3xl" />
          <div className="absolute w-32 h-32 rounded-full bg-[#c4120c]/40 blur-2xl" />

          {/* Logo Badge Container with Glass Shimmer */}
          <div className="relative overflow-hidden w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center">
            <img
              src={thezarLogo}
              alt="THEZAR 2026 Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
            />

            {/* Specular Sheen Sweep */}
            <div
              ref={sheenRef}
              className="absolute top-0 bottom-0 w-24 pointer-events-none -skew-x-20"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.75) 50%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-amber-400/40 text-amber-300 text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>TAMIL NADU TALENT SHOWCASE</span>
          <Trophy className="w-3.5 h-3.5 text-amber-300" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-wider uppercase mb-1 drop-shadow-lg">
          THEZAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">2026</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[13px] sm:text-[15px] font-semibold text-slate-200/90 tracking-widest uppercase mb-3">
          1ST DISTRICT STAGE &bull; TIRUNELVELI
        </p>

        {/* Decorative Gold Accent Bar */}
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b] mb-4" />

        {/* Pulsing Touch to Enter Prompt */}
        <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
          <button
            onClick={handleSkip}
            className="group px-7 py-3 rounded-full bg-gradient-to-r from-[#9e0804] via-[#c4120c] to-[#730502] hover:from-[#c4120c] hover:to-[#9e0804] border-2 border-amber-300 text-white font-extrabold text-sm sm:text-base tracking-widest uppercase shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:shadow-[0_0_45px_rgba(245,158,11,1)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5 animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>TOUCH TO ENTER</span>
            <FastForward className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[11px] sm:text-[12px] font-medium text-amber-200/90 tracking-wider">
            உள்ளே செல்ல தொடுங்கள் &bull; Tap anywhere to open
          </span>
        </div>
      </div>

      {/* ================= SKIP INTRO BUTTON ================= */}
      <button
        ref={skipBtnRef}
        onClick={handleSkip}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-40 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider text-white/90 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-amber-400/60 backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95"
        aria-label="Skip Introduction"
      >
        <span>Skip Intro</span>
        <FastForward className="w-3.5 h-3.5 text-amber-300" />
      </button>
    </div>
  );
}
