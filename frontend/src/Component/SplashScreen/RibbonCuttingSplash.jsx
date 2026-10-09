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
import satinRibbonBow from '../../assets/satin_ribbon_bow.png';

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
  const [isHoveringRibbon, setIsHoveringRibbon] = useState(false);
  const letterScrollRef = useRef(null);

  // Initialize realistic snowflakes & golden rainfall confetti
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

    const confettiList = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 7 + 4,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.6 + 0.4,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * -12
    }));
    setGoldConfetti(confettiList);
  }, []);

  // Step 1: User Cuts Ribbon -> Left & Right Curtains Slide Apart at Slow Cinematic Speed (2.5s)
  const triggerRibbonCut = () => {
    if (stage !== 'initial') return;
    setStage('ribbon_cut');

    // Step 2: Open Envelope Wax Seal & Slide Paper Out Halfway (2.6s delay for smooth slow reveal)
    setTimeout(() => {
      setStage('envelope_opening');
    }, 2600);

    // Step 3: Expand and reveal full letter smoothly (5.2s delay for slow majestic sequence)
    setTimeout(() => {
      setStage('letter_reveal');
    }, 5200);
  };

  // Automated Very Slow Smooth Scrolling & Automatic Site Reveal
  useEffect(() => {
    if (stage !== 'letter_reveal') return;

    let animationFrameId;
    let startScrollTimer;
    let autoRevealTimer;

    // Give 2.0s for letter unfolding animation to settle, then begin very slow smooth scroll
    startScrollTimer = setTimeout(() => {
      const container = letterScrollRef.current;
      if (!container) return;

      let lastTime = performance.now();
      // Very slow, gentle, readable scroll speed (28px per second)
      const scrollSpeed = 28;

      const performScroll = (currentTime) => {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        if (container) {
          const maxScroll = container.scrollHeight - container.clientHeight;
          if (container.scrollTop < maxScroll - 4) {
            container.scrollTop += scrollSpeed * deltaTime;
            animationFrameId = requestAnimationFrame(performScroll);
          } else {
            // Reached the bottom of letter: pause for 3.5s so user can read everything, then automatically reveal the website!
            autoRevealTimer = setTimeout(() => {
              handleEnterSite();
            }, 3500);
          }
        }
      };

      animationFrameId = requestAnimationFrame(performScroll);
    }, 2000);

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

  if (!isVisible) return null;

  // Reusable Grand Opening Card Content (Without mentioning "TheZar")
  const renderGrandOpeningCardContent = () => (
    <div
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-between py-8 sm:py-12 px-4 select-none"
      style={{
        background: 'linear-gradient(180deg, #FAF7F2 0%, #F5EFE6 50%, #EFE8DC 100%)'
      }}
    >
      {/* Floating Golden Rainfall Confetti in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {goldConfetti.map((c) => (
          <div
            key={c.id}
            className="absolute rounded-sm animate-confetti-rain"
            style={{
              left: `${c.left}%`,
              top: '-30px',
              width: `${c.size}px`,
              height: `${c.size * 1.6}px`,
              background: 'linear-gradient(135deg, #FFE57F, #FFC107, #B78103)',
              transform: `rotate(${c.rotate}deg)`,
              opacity: c.opacity,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
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

      {/* Top Header & Typography Layer (Perfect Center Alignment for Mobile & Desktop) */}
      <div className="text-center z-10 max-w-5xl mx-auto flex flex-col items-center justify-center pt-2 sm:pt-4 w-full">
        {/* Main "GRAND Opening" Signature Typography Layer */}
        <div className="w-full relative flex flex-col items-center justify-center px-2 sm:px-6 mt-1 text-center">
          {/* GRAND Title (72px) */}
          <div className="w-full flex justify-center items-center text-center">
            <h2
              className="text-[44px] sm:text-[72px] font-serif font-black text-[#38050C] uppercase tracking-[12px] sm:tracking-[22px] text-center leading-none"
              style={{
                fontFamily: "'Cinzel', 'Playfair Display', serif",
                fontSize: '72px',
                textShadow: '0 4px 16px rgba(56, 5, 12, 0.18)'
              }}
            >
              GRAND
            </h2>
          </div>

          {/* Opening Calligraphy (67px) with Flowing Flourishes */}
          <div className="relative w-full flex items-center justify-center -mt-1 sm:-mt-3">
            {/* Left Extended Flowing Calligraphy Flourish Ribbon Line */}
            <svg
              className="w-16 sm:w-28 md:w-36 h-8 sm:h-10 text-[#38050C]/75 shrink-0 pointer-events-none -mr-2 sm:-mr-3"
              viewBox="0 0 240 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M 0 52 C 60 20, 130 68, 195 32 C 215 22, 230 25, 240 25"
                strokeLinecap="round"
              />
            </svg>

            {/* "Opening" Script */}
            <h1
              className="text-[40px] sm:text-[67px] text-[#200307] select-none leading-[0.85] px-1 sm:px-3"
              style={{
                fontFamily: "'Great Vibes', 'Alex Brush', cursive",
                fontWeight: 400,
                fontSize: '67px',
                textShadow: '0 6px 20px rgba(56, 5, 12, 0.2)'
              }}
            >
              Opening
            </h1>

            {/* Right Extended Flowing Calligraphy Flourish Ribbon Line */}
            <svg
              className="w-16 sm:w-28 md:w-36 h-8 sm:h-10 text-[#38050C]/75 shrink-0 pointer-events-none -ml-2 sm:-ml-3"
              viewBox="0 0 240 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M 0 28 C 30 28, 80 18, 130 48 C 180 75, 215 35, 240 45"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Date: DECEMBER 2026 */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 text-[#38050C]">
          <div className="h-[1.5px] w-6 sm:w-16 bg-[#38050C]/40" />
          <span className="text-xs sm:text-base md:text-lg font-serif font-black uppercase tracking-[5px] sm:tracking-[8px] text-[#4A0A10]">
            DECEMBER 2026
          </span>
          <div className="h-[1.5px] w-6 sm:w-16 bg-[#38050C]/40" />
        </div>

        {/* Luxury Invitation Message (Above the Ribbon) */}
        <div className="text-center z-10 max-w-2xl mx-auto px-4 mt-2 sm:mt-3">
          <p className="text-[#38050C] text-xs sm:text-sm font-serif tracking-[3px] sm:tracking-[5px] uppercase font-black leading-relaxed">
            YOU ARE CORDIALLY INVITED TO INAUGURATE THE CELEBRATION
          </p>
          <p className="text-slate-500 text-[10px] sm:text-xs font-serif tracking-wider mt-0.5">
            Click anywhere to begin the grand opening ceremony
          </p>
        </div>
      </div>

      {/* 
        ====================================================================
        EDGE-TO-EDGE SATIN RIBBON & BOW (USER'S HIGH-RES SATIN BOW)
        ====================================================================
      */}
      <div className="relative w-full my-auto py-2 sm:py-4 flex items-center justify-center">
        {/* Full continuous background ribbon band with zero gap */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 sm:h-14 md:h-16 shadow-xl z-10"
          style={{
            background: 'linear-gradient(180deg, #2b030a 0%, #5c0b1a 20%, #871328 50%, #5c0b1a 80%, #2b030a 100%)',
            boxShadow: '0 10px 25px rgba(35, 4, 10, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.25)'
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2" />
        </div>

        {/* Central Realistic Satin Bow (Transparent PNG) - Knot centered directly over ribbon bar */}
        <div className="relative z-20 flex items-center justify-center shrink-0 w-64 sm:w-80 md:w-96 lg:w-[440px] px-2 translate-y-8 sm:translate-y-10 md:translate-y-14">
          <img
            src={satinRibbonBow}
            alt="Luxury Satin Ribbon Bow"
            className="w-full h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_15px_30px_rgba(35,4,10,0.55)]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-[999999] overflow-hidden select-none transition-opacity duration-1000 ${stage === 'completed' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      style={{
        cursor: stage === 'initial' ? 'pointer' : 'default'
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
        STAGE 1: DUAL PARTING SCREEN DOORS (SLOW CINEMATIC SPEED: 2500ms)
        ====================================================================
      */}
      {stage !== 'completed' && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* ==================== LEFT HALF SCREEN PANEL (Slow Speed) ==================== */}
          <div
            className={`fixed inset-0 z-40 transition-transform duration-[2500ms] ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-auto shadow-[20px_0_50px_rgba(0,0,0,0.4)] ${
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

          {/* ==================== RIGHT HALF SCREEN PANEL (Slow Speed) ==================== */}
          <div
            className={`fixed inset-0 z-40 transition-transform duration-[2500ms] ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.4)] ${
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
        <div className="absolute inset-0 z-30 flex items-center justify-center p-2.5 sm:p-6 overflow-hidden">
          {/* A. Vintage Kraft Parchment Envelope Container (Unmounts on letter_reveal so it doesn't occupy horizontal flex space) */}
          {stage !== 'letter_reveal' && (
            <div
              className="relative transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-100 translate-y-0 opacity-100 mx-auto"
              style={{ perspective: '1200px' }}
            >
              {/* Envelope Base Body */}
              <div
                className="relative w-[310px] xs:w-[350px] sm:w-[500px] md:w-[540px] h-[215px] xs:h-[235px] sm:h-[320px] rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] border-2 border-[#8C6B46]/60 overflow-visible"
                style={{
                  background: 'linear-gradient(145deg, #C29B68 0%, #A97E4A 50%, #8C6230 100%)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.7), inset 0 2px 6px rgba(255,255,255,0.3)'
                }}
              >
                {/* Back Envelope Lining (Fully Opaque Interior Pocket) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#663F17] via-[#855B27] to-[#4D2E0F] rounded-2xl overflow-hidden shadow-inner" />

                {/* Letter Paper (Strictly bottom-aligned so it never protrudes at bottom; slides UP above top edge when opened) */}
                <div
                  className={`absolute left-3 sm:left-6 right-3 sm:right-6 bottom-3 sm:bottom-4 h-[185px] xs:h-[200px] sm:h-[265px] rounded-xl bg-[#FAF6EE] shadow-2xl transition-all duration-[1800ms] ease-out border-2 border-[#D4AF37] flex flex-col items-center justify-start pt-2.5 sm:pt-4 px-3 sm:px-6 overflow-hidden z-10 ${
                    stage === 'envelope_opening'
                      ? '-translate-y-28 sm:-translate-y-40 scale-100 shadow-[0_25px_60px_rgba(0,0,0,0.65)]'
                      : 'translate-y-0 scale-95 shadow-none'
                  }`}
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 55%, #F4E8D6 100%)'
                  }}
                >
                  {/* Gold Top Trim */}
                  <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-1 sm:mb-2 shrink-0" />

                  {/* Big Medallion Logo */}
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-[#996515] via-[#FFD700] to-[#FFE082] mb-1 sm:mb-1.5 shadow-lg shrink-0">
                    <img src={thezarLogo} alt="TheZar Logo" className="w-full h-full object-contain rounded-full bg-[#4A0A0A] p-1" />
                  </div>

                  {/* Title & Badge */}
                  <span className="font-serif font-black text-[#5C101B] text-[11px] xs:text-xs sm:text-base tracking-widest uppercase text-center shrink-0">
                    THEZAR 2026
                  </span>
                  <span className="text-[7.5px] xs:text-[8.5px] sm:text-[11px] font-serif font-bold text-[#8C202E] tracking-wider uppercase text-center mt-0.5 shrink-0">
                    Official Inauguration & Youth Championship
                  </span>
                  <div className="mt-1 flex items-center gap-1 text-[7px] sm:text-[9.5px] text-amber-900 font-bold uppercase tracking-widest bg-amber-100/90 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-300 shrink-0">
                    ✨ Statewide Cultural Festival ✨
                  </div>
                </div>

                {/* Front Folded Triangular Pocket Flaps (Z-Index 20: Keeps lower half of paper covered inside) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-2xl overflow-hidden"
                  viewBox="0 0 500 320"
                  preserveAspectRatio="none"
                >
                  {/* Left Triangle Flap */}
                  <polygon points="0,0 250,160 0,320" fill="#996E3B" opacity="0.99" />
                  {/* Right Triangle Flap */}
                  <polygon points="500,0 250,160 500,320" fill="#8E6332" opacity="0.99" />
                  {/* Bottom Triangle Flap */}
                  <polygon points="0,320 250,160 500,320" fill="#A87A44" filter="drop-shadow(0 -4px 6px rgba(0,0,0,0.25))" />
                </svg>

                {/* Top Envelope Flap (3D Flip Open at Slow Speed) */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-30 ${
                    stage === 'envelope_opening'
                      ? 'rotate-x-180 -translate-y-full opacity-30'
                      : 'rotate-x-0'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <svg
                    className="w-full h-full drop-shadow-xl overflow-visible"
                    viewBox="0 0 500 160"
                    preserveAspectRatio="none"
                  >
                    <polygon points="0,0 500,0 250,160" fill="#B3864E" stroke="#8C6230" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Royal Golden Wax Seal with TheZar Medallion */}
                <div
                  className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-40 ${
                    stage === 'envelope_opening'
                      ? 'scale-150 opacity-0 -translate-y-36 rotate-45 pointer-events-none'
                      : 'scale-100 opacity-100'
                  }`}
                >
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-[#8A550F] via-[#FFD700] to-[#FFF3B0] p-1.5 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.8)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#B8860B] via-[#785404] to-[#422C02] border-2 border-[#FFE082] flex items-center justify-center shadow-inner overflow-hidden p-1.5 sm:p-3">
                      <img
                        src={thezarLogo}
                        alt="TheZar Medallion Seal"
                        className="w-full h-full object-contain rounded-full drop-shadow-lg filter brightness-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 
            ====================================================================
            B. EXPANDED VINTAGE CHRISTMAS PARCHMENT LETTER
            Auto-Scrolls slowly & automatically reveals the website!
            ====================================================================
          */}
          {stage === 'letter_reveal' && (
            <div
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] border-2 sm:border-4 border-[#D4AF37] overflow-y-auto z-40 p-3.5 sm:p-8 md:p-10 text-[#2A040A] animate-letter-unfold mx-auto my-auto"
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

                {/* Medallion Logo Overlay at Bottom of Banner (Enlarged) */}
                <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#996515] via-[#FFD700] to-[#FFF3B0] shadow-2xl">
                    <img
                      src={thezarLogo}
                      alt="TheZar Official Medallion"
                      className="w-full h-full object-contain rounded-full bg-[#4A0A0A] p-1"
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

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes confettiRain {
          0% {
            transform: translateY(-40px) rotate(0deg) translateX(0);
          }
          50% {
            transform: translateY(55vh) rotate(180deg) translateX(20px);
          }
          100% {
            transform: translateY(115vh) rotate(360deg) translateX(-15px);
          }
        }
        .animate-confetti-rain {
          animation-name: confettiRain;
        }

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
