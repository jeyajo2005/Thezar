import { useState, useEffect } from 'react';
import heroSpeakerImg from '../../assets/hero_speaker.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  // Target date: October 10, 2026 (Tirunelveli District Round)
  const targetDate = new Date('2026-10-10T10:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    months: '00',
    days: '24',
    hours: '14',
    minutes: '55',
    seconds: '44'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const daysTotal = Math.floor(difference / (1000 * 60 * 60 * 24));
        const months = Math.floor(daysTotal / 30);
        const days = daysTotal % 30;
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          months: String(months).padStart(2, '0'),
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="home" className="relative bg-convention-dark min-h-[620px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden">
      
      {/* Main Hero Container matching Reference Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 w-full flex-1 flex items-center relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Column: Big Bold Headline & Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="space-y-1 font-sans">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
                THE NUMBER ONE
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
                COMPETITION
              </h1>
            </div>

            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed font-mono">
              Multi-format collegiate stage across 38 districts of Tamil Nadu. 1st Prize Bumper: ₹40 Lakhs House Free + ₹25L Cash Pool.
            </p>

            {/* Dual Rectangular Buttons matching Reference Image */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="px-8 py-3.5 text-xs font-black uppercase tracking-widest btn-white-solid shadow-xl transition-transform hover:scale-105"
              >
                VIEW MORE
              </a>

              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 text-xs font-black uppercase tracking-widest btn-outline-glass shadow-xl transition-all"
              >
                REGISTER
              </button>
            </div>

          </div>

          {/* Right Column: Keynote Speaker Photo Visual matching Reference Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={heroSpeakerImg}
                alt="THEZAR Keynote Speaker"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="bg-royal-blue text-white text-[10px] font-black px-2.5 py-1 rounded tracking-widest uppercase">
                  TIRUNELVELI ROUND 2 • LIVE
                </span>
                <p className="text-sm font-bold text-white mt-1">Main Convention Auditorium</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Left and Right Slider Arrows matching Reference Image */}
      <button
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 slider-arrow-btn rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 slider-arrow-btn rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Fixed Black Countdown Bar matching Reference Image */}
      <div className="bottom-countdown-bar w-full py-4 px-6 sm:px-12 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Big Digital Countdown Numbers matching Reference Image */}
          <div className="flex items-center gap-4 sm:gap-8 font-mono">
            <div className="text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
                {timeLeft.months}
              </span>
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-widest mt-1">Months</p>
            </div>

            <div className="text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
                {timeLeft.days}
              </span>
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-widest mt-1">Days</p>
            </div>

            <div className="text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
                {timeLeft.hours}
              </span>
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-widest mt-1">Hours</p>
            </div>

            <div className="text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
                {timeLeft.minutes}
              </span>
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-widest mt-1">Minutes</p>
            </div>

            <div className="text-center">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-wider">
                {timeLeft.seconds}
              </span>
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-widest mt-1">Seconds</p>
            </div>
          </div>

          {/* Right Label matching Reference Image */}
          <div className="text-right">
            <h3 className="text-lg sm:text-2xl font-black text-white font-sans tracking-tight">
              Countdown to Conference
            </h3>
            <p className="text-xs text-blue-400 font-mono">Tirunelveli District Grand Stage</p>
          </div>

        </div>
      </div>

    </section>
  );
}
