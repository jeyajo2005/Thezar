import React, { useState, useEffect, useRef } from 'react';
import { Scissors, X, Sparkles, ChevronRight, Award, Music, Trophy, Star } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';
import eventTrophy from '../../assets/event_trophy.jpg';
import christmasChoir from '../../assets/christmas_choir.jpg';
import cheerfulContestant from '../../assets/cheerful_contestant.jpg';
import eventDance from '../../assets/event_dance.jpg';
import eventMusic from '../../assets/event_music.jpg';
import aboutAudience from '../../assets/about_audience.jpg';
import christmasWoodTable from '../../assets/christmas_wood_table.jpg';
import vintageChristmasBotanical from '../../assets/vintage_christmas_botanical.jpg';

// Happiest Captured Moments Data (Revealed inside letter only)
const CAPTURED_MOMENTS = [
  {
    title: 'Grand Trophy & Championship Glory',
    subtitle: 'Statewide Winners & Excellence',
    img: eventTrophy,
    icon: Trophy,
    tag: 'Championship'
  },
  {
    title: 'Harmonious Choirs & Carol Melodies',
    subtitle: 'Soulful Vocal Ensembles',
    img: christmasChoir,
    icon: Music,
    tag: 'Christmas Choir'
  },
  {
    title: 'Electrifying Stage Dance & Choreography',
    subtitle: 'Rhythmic State Showcases',
    img: eventDance,
    icon: Sparkles,
    tag: 'Dance Arena'
  },
  {
    title: 'Pure Joy, Smiles & Proud Contestants',
    subtitle: 'Celebrating Youth Passion',
    img: cheerfulContestant,
    icon: Award,
    tag: 'Youth Spirit'
  },
  {
    title: 'Live Acoustic & Band Performances',
    subtitle: 'Instrumental Magic & Beats',
    img: eventMusic,
    icon: Music,
    tag: 'Music Battle'
  },
  {
    title: 'Cheering Audiences Across 38 Districts',
    subtitle: 'Unstoppable Festive Energy',
    img: aboutAudience,
    icon: Star,
    tag: 'Grand Arena'
  }
];

export default function RibbonCuttingSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  // Stages: 'initial' -> 'ribbon_cut' (curtains slide left & right) -> 'envelope_opening' -> 'letter_reveal' -> 'completed'
  const [stage, setStage] = useState('initial');
  const [snowflakes, setSnowflakes] = useState([]);
  const [goldConfetti, setGoldConfetti] = useState([]);
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHoveringRibbon, setIsHoveringRibbon] = useState(false);
  const letterScrollRef = useRef(null);

  // Initialize realistic snowflakes & golden confetti
  useEffect(() => {
    const flakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 3,
      blur: Math.random() > 0.7 ? '1.5px' : '0px',
      opacity: Math.random() * 0.7 + 0.3,
      duration: (Math.random() * 8 + 8) / 0.7,
      delay: Math.random() * -15
    }));
    setSnowflakes(flakes);

    const confettiList = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 8 + 6,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.6 + 0.4
    }));
    setGoldConfetti(confettiList);
  }, []);

  // Step 1: User Cuts Ribbon -> Left & Right Half Screens Slide Apart (Curtain Split)
  const triggerRibbonCut = () => {
    if (stage !== 'initial') return;
    setStage('ribbon_cut');

    // Step 2: Open Envelope Wax Seal & Flap in slow motion (1.1s delay)
    setTimeout(() => {
      setStage('envelope_opening');
    }, 1100);

    // Step 3: Letter slides out and expands smoothly (2.2s delay)
    setTimeout(() => {
      setStage('letter_reveal');
    }, 2200);
  };

  // Automated Slow Smooth Scrolling & Automatic Site Reveal
  useEffect(() => {
    if (stage !== 'letter_reveal') return;

    let animationFrameId;
    let startScrollTimer;
    let autoRevealTimer;

    // Give 1.2s for letter unfolding animation to settle, then begin smooth slow scroll
    startScrollTimer = setTimeout(() => {
      const container = letterScrollRef.current;
      if (!container) return;

      let lastTime = performance.now();
      const scrollSpeed = 80;

      const performScroll = (currentTime) => {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        if (container) {
          const maxScroll = container.scrollHeight - container.clientHeight;
          if (container.scrollTop < maxScroll - 4) {
            container.scrollTop += scrollSpeed * deltaTime;
            animationFrameId = requestAnimationFrame(performScroll);
          } else {
            // Reached the bottom of letter: pause for 2.2s then automatically reveal the website!
            autoRevealTimer = setTimeout(() => {
              handleEnterSite();
            }, 2200);
          }
        }
      };

      animationFrameId = requestAnimationFrame(performScroll);
    }, 1200);

    return () => {
      clearTimeout(startScrollTimer);
      clearTimeout(autoRevealTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [stage]);

  // Complete and enter website
  const handleEnterSite = () => {
    setStage('completed');
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 800);
  };

  // Track mouse for golden scissors cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  // Reusable Grand Opening Card Content (Without mentioning "TheZar")
  const renderGrandOpeningCardContent = () => (
    <div
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-between py-8 sm:py-12 px-4 select-none"
      style={{
        background: 'linear-gradient(180deg, #FAF7F2 0%, #F5EFE6 50%, #EFE8DC 100%)'
      }}
    >
      {/* Floating Golden Confetti in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {goldConfetti.map((c) => (
          <div
            key={c.id}
            className="absolute rounded-sm"
            style={{
              left: `${c.left}%`,
              top: `${c.top}%`,
              width: `${c.size}px`,
              height: `${c.size * 1.6}px`,
              background: 'linear-gradient(135deg, #FFE57F, #FFC107, #B78103)',
              transform: `rotate(${c.rotate}deg)`,
              opacity: c.opacity,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        ))}

        {/* Botanical Leaf Silhouettes in corners */}
        <div className="absolute top-10 left-8 opacity-20 pointer-events-none hidden sm:block">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="#6B1414" strokeWidth="1.5">
            <path d="M 50 110 Q 40 60 70 20" />
            <path d="M 45 80 Q 20 70 30 55 Q 45 65 46 76" fill="#6B1414" opacity="0.3" />
            <path d="M 52 60 Q 80 50 70 35 Q 55 45 53 58" fill="#6B1414" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute top-10 right-8 opacity-20 pointer-events-none hidden sm:block">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="#6B1414" strokeWidth="1.5">
            <path d="M 50 110 Q 60 60 30 20" />
            <path d="M 55 80 Q 80 70 70 55 Q 55 65 54 76" fill="#6B1414" opacity="0.3" />
            <path d="M 48 60 Q 20 50 30 35 Q 45 45 47 58" fill="#6B1414" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Top Header: Neutral luxury crest (No TheZar mentioned) */}
      <div className="text-center z-10 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="text-[#6B1414]/60">
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M 0 4 Q 4 0 8 4 T 16 4 T 24 4" />
              <path d="M 0 10 Q 4 6 8 10 T 16 10 T 24 10" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-sans tracking-[3px] text-slate-500 font-medium">
            @grandopening
          </span>
        </div>

        {/* Main "Grand Opening" Typography (Matching User Reference Image) */}
        <div className="mt-1 sm:mt-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#4A0A10] uppercase tracking-[6px] sm:tracking-[8px]">
            Grand
          </h2>
          <h1
            className="text-6xl sm:text-8xl md:text-9xl text-[#1C0D0E] select-none leading-tight -mt-3 sm:-mt-5 md:-mt-7"
            style={{
              fontFamily: "'Playfair Display', 'Brush Script MT', 'Great Vibes', 'Allura', cursive, serif",
              fontStyle: 'italic',
              fontWeight: 600,
              textShadow: '0 4px 18px rgba(74, 10, 16, 0.12)'
            }}
          >
            Opening
          </h1>
        </div>

        {/* Subtitle Message (Neutral & Mysterious) */}
        <div className="max-w-md mx-auto mt-2 sm:mt-4 px-4 text-center">
          <p className="text-xs sm:text-sm md:text-base font-serif font-bold text-[#2A040A] leading-relaxed">
            Welcome to a new era.
          </p>
          <p className="text-[11px] sm:text-xs md:text-sm font-serif text-slate-600 leading-relaxed mt-1">
            A grand celebration where extraordinary talents, music, and passion unite for an unforgettable journey.
          </p>
        </div>
      </div>

      {/* 
        ====================================================================
        EDGE-TO-EDGE 3D MAROON VELVET RIBBON & LUXURY BOW
        ====================================================================
      */}
      <div className="relative w-full my-auto py-6 sm:py-8 flex items-center justify-center">
        {/* Left Ribbon Band */}
        <div
          className="h-14 sm:h-20 md:h-24 flex-1 relative origin-right shadow-xl"
          style={{
            background: 'linear-gradient(180deg, #250308 0%, #4D0A14 18%, #851624 45%, #580B15 75%, #250308 100%)',
            boxShadow: '0 12px 30px rgba(45, 6, 12, 0.45), inset 0 2.5px 6px rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-y-1/2" />
        </div>

        {/* Central 3D Vector Velvet Bow */}
        <div className="relative z-20 flex items-center justify-center shrink-0 -mx-1 sm:-mx-2">
          <div className="relative w-72 sm:w-96 md:w-[440px] max-w-[88vw] flex items-center justify-center">
            <svg
              viewBox="0 0 440 320"
              className="w-full h-auto overflow-visible filter drop-shadow-[0_20px_35px_rgba(40,4,8,0.55)]"
            >
              <defs>
                <linearGradient id="vLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9B1C2E" />
                  <stop offset="25%" stopColor="#C43D52" />
                  <stop offset="50%" stopColor="#6E121E" />
                  <stop offset="80%" stopColor="#450810" />
                  <stop offset="100%" stopColor="#250308" />
                </linearGradient>

                <linearGradient id="vRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9B1C2E" />
                  <stop offset="25%" stopColor="#C43D52" />
                  <stop offset="50%" stopColor="#6E121E" />
                  <stop offset="80%" stopColor="#450810" />
                  <stop offset="100%" stopColor="#250308" />
                </linearGradient>

                <radialGradient id="vKnot" cx="45%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#A82338" />
                  <stop offset="40%" stopColor="#6E101D" />
                  <stop offset="85%" stopColor="#3A050B" />
                  <stop offset="100%" stopColor="#1E0205" />
                </radialGradient>

                <linearGradient id="tLeft" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#6E121E" />
                  <stop offset="45%" stopColor="#9B1C2E" />
                  <stop offset="75%" stopColor="#500A13" />
                  <stop offset="100%" stopColor="#2A0307" />
                </linearGradient>

                <linearGradient id="tRight" x1="80%" y1="0%" x2="20%" y2="100%">
                  <stop offset="0%" stopColor="#6E121E" />
                  <stop offset="45%" stopColor="#9B1C2E" />
                  <stop offset="75%" stopColor="#500A13" />
                  <stop offset="100%" stopColor="#2A0307" />
                </linearGradient>
              </defs>

              {/* Left Flowing Ribbon Tail */}
              <path
                d="M 190 150 C 160 210 130 270 50 310 L 95 240 L 125 305 C 165 240 185 190 205 155 Z"
                fill="url(#tLeft)"
                stroke="#2A0307"
                strokeWidth="1.2"
              />
              <path
                d="M 180 160 C 150 215 125 255 75 290"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Right Flowing Ribbon Tail */}
              <path
                d="M 250 150 C 280 210 310 270 390 310 L 345 240 L 315 305 C 275 240 255 190 235 155 Z"
                fill="url(#tRight)"
                stroke="#2A0307"
                strokeWidth="1.2"
              />
              <path
                d="M 260 160 C 290 215 315 255 365 290"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Left Bow Loop */}
              <path
                d="M 195 125 C 90 25 20 50 25 125 C 30 195 105 200 195 145 Z"
                fill="url(#vLeft)"
                stroke="#250308"
                strokeWidth="1.5"
              />
              <path
                d="M 195 125 C 130 75 80 90 60 130 C 50 150 85 175 195 145 Z"
                fill="#3A050B"
                opacity="0.65"
              />
              <path
                d="M 60 80 C 110 50 160 70 190 120"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Right Bow Loop */}
              <path
                d="M 245 125 C 350 25 420 50 415 125 C 410 195 335 200 245 145 Z"
                fill="url(#vRight)"
                stroke="#250308"
                strokeWidth="1.5"
              />
              <path
                d="M 245 125 C 310 75 360 90 380 130 C 390 150 355 175 245 145 Z"
                fill="#3A050B"
                opacity="0.65"
              />
              <path
                d="M 380 80 C 330 50 280 70 250 120"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Central Velvet Knot Wrap */}
              <ellipse
                cx="220"
                cy="135"
                rx="26"
                ry="34"
                fill="url(#vKnot)"
                stroke="#250308"
                strokeWidth="1.8"
              />
              <path
                d="M 212 110 C 210 135 210 150 214 160"
                fill="none"
                stroke="#1E0205"
                strokeWidth="2.5"
                opacity="0.7"
              />
              <path
                d="M 226 110 C 228 135 228 150 224 160"
                fill="none"
                stroke="#1E0205"
                strokeWidth="2.5"
                opacity="0.7"
              />
              <ellipse
                cx="215"
                cy="125"
                rx="7"
                ry="18"
                fill="rgba(255,255,255,0.3)"
                transform="rotate(-15 215 125)"
              />
            </svg>

            {/* Floating "TAP TO CUT" Pill Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
              <div className="px-4 py-1.5 rounded-full bg-[#3A070E]/95 border border-white/50 text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase font-mono shadow-2xl flex items-center gap-1.5 animate-pulse whitespace-nowrap">
                <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE57F]" />
                <span>TAP TO CUT RIBBON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Ribbon Band */}
        <div
          className="h-14 sm:h-20 md:h-24 flex-1 relative origin-left shadow-xl"
          style={{
            background: 'linear-gradient(180deg, #250308 0%, #4D0A14 18%, #851624 45%, #580B15 75%, #250308 100%)',
            boxShadow: '0 12px 30px rgba(45, 6, 12, 0.45), inset 0 2.5px 6px rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-y-1/2" />
        </div>
      </div>

      {/* Bottom Minimalist Footer (Neutral) */}
      <div className="text-center z-10">
        <p className="text-[#6B1414] text-[10px] sm:text-xs font-serif tracking-[2px] sm:tracking-[3px] uppercase font-bold">
          Grand Opening Ceremony • Tap Ribbon to Inaugurate
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-[999999] overflow-hidden select-none transition-opacity duration-1000 ${
        stage === 'completed' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        cursor: stage === 'initial' ? 'none' : 'default'
      }}
    >
      {/* Top Controls: Skip Button */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 flex items-center gap-3 z-50 pointer-events-auto">
        <button
          type="button"
          onClick={handleEnterSite}
          style={{ borderRadius: '9999px' }}
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/50 hover:bg-[#6B1414] text-white backdrop-blur-md border border-white/30 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
        >
          <span>Skip</span>
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </button>
      </div>

      {/* 
        ====================================================================
        STAGE 1: DUAL PARTING SCREEN DOORS (CLIP-PATH SPLIT SCREEN)
        100% Seamless before cut. When cut: Left half slides left, Right half slides right!
        NO mention of "TheZar" before ribbon cut!
        ====================================================================
      */}
      {stage !== 'completed' && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* ==================== LEFT HALF SCREEN PANEL ==================== */}
          <div
            className={`fixed inset-0 z-40 transition-transform duration-1000 ease-[cubic-bezier(0.75,0,0.25,1)] pointer-events-auto shadow-[20px_0_50px_rgba(0,0,0,0.4)] ${
              stage !== 'initial' ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{
              clipPath: 'polygon(0% 0%, 50.05% 0%, 50.05% 100%, 0% 100%)'
            }}
            onClick={triggerRibbonCut}
            onMouseEnter={() => setIsHoveringRibbon(true)}
            onMouseLeave={() => setIsHoveringRibbon(false)}
          >
            {renderGrandOpeningCardContent()}
          </div>

          {/* ==================== RIGHT HALF SCREEN PANEL ==================== */}
          <div
            className={`fixed inset-0 z-40 transition-transform duration-1000 ease-[cubic-bezier(0.75,0,0.25,1)] pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.4)] ${
              stage !== 'initial' ? 'translate-x-full' : 'translate-x-0'
            }`}
            style={{
              clipPath: 'polygon(49.95% 0%, 100% 0%, 100% 100%, 49.95% 100%)'
            }}
            onClick={triggerRibbonCut}
            onMouseEnter={() => setIsHoveringRibbon(true)}
            onMouseLeave={() => setIsHoveringRibbon(false)}
          >
            {renderGrandOpeningCardContent()}
          </div>
        </div>
      )}

      {/* 
        ====================================================================
        STAGE 2 & 3: CHRISTMAS WOODEN TABLE, KRAFT ENVELOPE & LETTER SEQUENCE
        Revealed only after the ribbon is cut and curtains part!
        Opens automatically and scrolls down slowly, then auto-reveals site
        ====================================================================
      */}
      {/* Background: Cinematic Christmas Wooden Table */}
      <div className="absolute inset-0 z-0">
        <img
          src={christmasWoodTable}
          alt="Festive Christmas Table"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 scale-105 animate-subtle-drift"
        />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Snowfall Animation Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-35">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-snowfall"
            style={{
              left: `${flake.left}%`,
              top: '-20px',
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              filter: `blur(${flake.blur})`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>

      {/* Envelope & Letter Container */}
      {stage !== 'initial' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* A. Vintage Kraft Parchment Envelope */}
          <div
            className={`relative transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              stage === 'letter_reveal'
                ? 'scale-125 translate-y-[450px] opacity-10 pointer-events-none'
                : 'scale-100 translate-y-0 opacity-100'
            }`}
            style={{ perspective: '1200px' }}
          >
            <div
              className="relative w-[320px] sm:w-[480px] h-[220px] sm:h-[310px] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] border-2 border-[#8C6B46]/60 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #C29B68 0%, #A97E4A 50%, #8C6230 100%)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.7), inset 0 2px 6px rgba(255,255,255,0.3)'
              }}
            >
              {/* Inner Envelope Lining */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7A5426] via-[#946A36] to-[#6A471E] opacity-95" />

              {/* Letter Paper Preview inside */}
              <div
                className={`absolute left-4 sm:left-6 right-4 sm:right-6 top-4 sm:top-6 bottom-3 sm:bottom-4 rounded-xl bg-[#FAF6EE] shadow-md transition-transform duration-1000 ease-out border border-[#D4AF37]/30 flex flex-col items-center justify-center p-4 ${
                  stage === 'envelope_opening' ? '-translate-y-16 scale-105' : 'translate-y-0 scale-100'
                }`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#996515] to-[#FFD700] mb-1">
                  <img src={thezarLogo} alt="TheZar Logo" className="w-full h-full object-contain rounded-full bg-[#4A0A0A]" />
                </div>
                <span className="font-serif font-black text-[#5C101B] text-[11px] sm:text-xs tracking-widest uppercase">TheZar 2026</span>
              </div>

              {/* Folded Triangular Flaps */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 480 310">
                <polygon points="0,0 240,155 0,310" fill="#996E3B" opacity="0.95" />
                <polygon points="480,0 240,155 480,310" fill="#8E6332" opacity="0.95" />
                <polygon points="0,310 240,155 480,310" fill="#A87A44" />
              </svg>

              {/* Top Envelope Flap (3D Slow-Motion Flip Open) */}
              <div
                className={`absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${
                  stage === 'envelope_opening' || stage === 'letter_reveal'
                    ? 'rotate-x-180 -translate-y-full opacity-60'
                    : 'rotate-x-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transitionDuration: '1.4s'
                }}
              >
                <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 480 155">
                  <polygon points="0,0 480,0 240,155" fill="#B3864E" stroke="#8C6230" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Royal Golden Wax Seal with TheZar Medallion */}
              <div
                className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 z-30 ${
                  stage === 'envelope_opening' || stage === 'letter_reveal'
                    ? 'scale-150 opacity-0 -translate-y-24 rotate-45 pointer-events-none'
                    : 'scale-100 opacity-100'
                }`}
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#996515] via-[#FFD700] to-[#FFF3B0] p-1 shadow-[0_10px_30px_rgba(212,175,55,0.75)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#B8860B] to-[#785404] border border-[#FFE082] flex items-center justify-center shadow-inner overflow-hidden p-1.5 sm:p-2.5">
                    <img
                      src={thezarLogo}
                      alt="TheZar Medallion Seal"
                      className="w-full h-full object-contain rounded-full drop-shadow-md filter brightness-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
            ====================================================================
            B. EXPANDED VINTAGE CHRISTMAS PARCHMENT LETTER
            Auto-Scrolls slowly & automatically reveals the website!
            ====================================================================
          */}
          {stage === 'letter_reveal' && (
            <div
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#FAF8F5] rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] border-2 sm:border-4 border-[#D4AF37] overflow-y-auto z-40 p-4 sm:p-8 md:p-10 text-[#2A040A] animate-letter-unfold"
              ref={letterScrollRef}
              style={{
                background: 'linear-gradient(135deg, #FAF8F5 0%, #F6EFE6 50%, #EFE4D4 100%)',
                boxShadow: '0 0 70px rgba(212,175,55,0.45), 0 35px 100px rgba(0,0,0,0.95)',
                animationDuration: '1.4s'
              }}
            >
              {/* Top Vintage Christmas Botanical Header Art */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-[#D4AF37]/40 shadow-inner">
                <img
                  src={vintageChristmasBotanical}
                  alt="Merry Christmas Botanical Engraving"
                  className="w-full h-32 sm:h-44 md:h-52 object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
                
                {/* Medallion Logo Overlay at Bottom of Banner */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-[#996515] via-[#FFD700] to-[#FFF3B0] shadow-2xl">
                    <img
                      src={thezarLogo}
                      alt="TheZar Official Medallion"
                      className="w-full h-full object-contain rounded-full bg-[#4A0A0A]"
                    />
                  </div>
                </div>
              </div>

              {/* Letter Header Content */}
              <div className="text-center pb-4 sm:pb-6 border-b border-[#D4AF37]/40 relative">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-[#6B1414]/10 border border-[#6B1414]/30 text-[#6B1414] text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] uppercase mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>OFFICIAL INVITATION & INAUGURATION</span>
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-[#4A0A0A] mt-1">
                  THEZAR 2026
                </h2>

                <p className="text-xs sm:text-sm md:text-base font-serif font-bold text-[#8C202E] tracking-wide mt-1">
                  Statewide Grand Christmas & Youth Cultural Championship
                </p>

                <p className="text-[11px] sm:text-xs md:text-sm text-slate-700 max-w-xl mx-auto mt-2 leading-relaxed font-sans px-2">
                  We cordially welcome you to Tamil Nadu's premier inter-district youth championship festival celebrating extraordinary carols, music, dance, cultural arts, and festive unity across all 38 districts.
                </p>
              </div>

              {/* Happiest Captured Moments Gallery */}
              <div className="py-6 sm:py-8">
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-xs font-black tracking-[3px] sm:tracking-[4px] uppercase text-[#6B1414] font-serif block">
                    CELEBRATING EXCELLENCE & JOY
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#2A040A] mt-0.5 sm:mt-1">
                    Happiest Captured Moments
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                    Memorable triumphs, soulful carols, joyous stages, and festive highlights
                  </p>
                </div>

                {/* 6 Moments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                  {CAPTURED_MOMENTS.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="h-40 sm:h-48 overflow-hidden relative">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 sm:py-1 rounded-full bg-[#6B1414]/90 backdrop-blur-md text-[#FFE082] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-[#D4AF37]/40">
                            <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFE082]" />
                            <span>{item.tag}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-white">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2A040A] group-hover:text-[#6B1414] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Statistics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-[#D4AF37]/40 shadow-sm text-center">
                  <div>
                    <span className="block text-xl sm:text-3xl font-black font-serif text-[#6B1414]">38</span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600">Tamil Nadu Districts</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-3xl font-black font-serif text-[#6B1414]">10,000+</span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600">Participants</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-3xl font-black font-serif text-[#6B1414]">15+</span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600">Grand Competitions</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-3xl font-black font-serif text-[#6B1414]">₹5 Lakhs+</span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-600">Prizes & Trophies</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action: Enter Website Button */}
              <div className="pt-3 sm:pt-4 border-t border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="text-[11px] sm:text-xs text-slate-600 font-serif italic text-center sm:text-left">
                  "Celebrating Youth, Inspiring Faith, Elevating Talent."
                </p>

                <button
                  type="button"
                  onClick={handleEnterSite}
                  style={{ borderRadius: '9999px' }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#6B1414] via-[#8B1A1A] to-[#6B1414] hover:from-[#540F0F] hover:to-[#6B1414] text-white font-black text-xs sm:text-sm tracking-[2px] uppercase transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95 border-2 border-[#D4AF37]"
                >
                  <span className="text-white font-black">Enter TheZar Official Portal</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Golden Scissors Cursor before cut */}
      {stage === 'initial' && (
        <div
          className="fixed pointer-events-none z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.6))'
          }}
        >
          <div className="relative">
            <Scissors
              className={`w-12 h-12 text-[#FFD700] transition-transform duration-150 ${
                isHoveringRibbon ? 'scale-125 rotate-[-25deg]' : 'rotate-[-45deg]'
              }`}
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-0.5 rounded-full text-[10px] text-white font-bold border border-white/30 font-mono">
              Cut Ribbon ✂️
            </div>
          </div>
        </div>
      )}

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(25px);
          }
          100% {
            transform: translateY(105vh) translateX(-20px);
          }
        }
        .animate-snowfall {
          animation-name: snowfall;
        }

        @keyframes letterUnfold {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.85);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-letter-unfold {
          animation: letterUnfold 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes subtleDrift {
          0% {
            transform: scale(1.05) translate(0, 0);
          }
          50% {
            transform: scale(1.08) translate(-10px, -5px);
          }
          100% {
            transform: scale(1.05) translate(0, 0);
          }
        }
        .animate-subtle-drift {
          animation: subtleDrift 25s ease-in-out infinite alternate;
        }

        .bg-radial-vignette {
          background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
        }

        /* Luxury Gold Slim Scrollbar for letter */
        .animate-letter-unfold::-webkit-scrollbar {
          width: 6px;
        }
        .animate-letter-unfold::-webkit-scrollbar-track {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 9999px;
        }
        .animate-letter-unfold::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #996515, #D4AF37, #996515);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
