import { useState, useEffect } from 'react';
import { Clock, Calendar, Trophy, Flame } from 'lucide-react';

export default function CountdownSection({ onOpenRegister }) {
  // Target date: October 10, 2026 (Tirunelveli District Round)
  const targetDate = new Date('2026-10-10T10:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-12 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Floating Countdown Container inspired by Image 1 */}
        <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle Accent Radial Gradient */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Headline */}
            <div className="lg:col-span-4 text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono font-bold">
                <Flame className="w-4 h-4 text-rose-500 animate-bounce" />
                <span>[ NEXT DISTRICT STAGE ROUND ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Count <span className="text-rose-500">Every Second</span> Until the Event
              </h2>
              <p className="text-slate-400 text-sm">
                Tirunelveli District Round 2 Starts Soon. Prepare your team & lock your participant seat.
              </p>
            </div>

            {/* Middle Countdown Timer Box (Reference Image 1 Layout) */}
            <div className="lg:col-span-8">
              <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-inner">
                <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center">
                  
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-4 sm:py-6 bg-slate-950 rounded-xl border border-slate-800 shadow-lg">
                      <span className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-mono tracking-wider">
                        {timeLeft.days}
                      </span>
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-mono text-rose-400 font-bold tracking-widest uppercase">
                      [Days]
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-4 sm:py-6 bg-slate-950 rounded-xl border border-slate-800 shadow-lg">
                      <span className="text-3xl sm:text-5xl md:text-6xl font-black text-rose-500 font-mono tracking-wider">
                        {timeLeft.hours}
                      </span>
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-mono text-rose-400 font-bold tracking-widest uppercase">
                      [Hours]
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-4 sm:py-6 bg-slate-950 rounded-xl border border-slate-800 shadow-lg">
                      <span className="text-3xl sm:text-5xl md:text-6xl font-black text-amber-400 font-mono tracking-wider">
                        {timeLeft.minutes}
                      </span>
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-mono text-rose-400 font-bold tracking-widest uppercase">
                      [Minutes]
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <div className="w-full py-4 sm:py-6 bg-slate-950 rounded-xl border border-slate-800 shadow-lg">
                      <span className="text-3xl sm:text-5xl md:text-6xl font-black text-pink-400 font-mono tracking-wider">
                        {timeLeft.seconds}
                      </span>
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-mono text-rose-400 font-bold tracking-widest uppercase">
                      [Seconds]
                    </span>
                  </div>

                </div>

                {/* Sub CTA inside Countdown Banner */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Venue: ABC College Auditorium, Tirunelveli</span>
                  </div>
                  <button
                    onClick={onOpenRegister}
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wider uppercase transition-colors border border-rose-400/30 shadow-md"
                  >
                    Lock Registration Pass
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
