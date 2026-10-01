import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function CountdownSection({ onOpenRegister }) {
  // Target date: October 10, 2026 (Tirunelveli District Round)
  const targetDate = new Date('2026-10-10T10:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '08',
    hours: '21',
    minutes: '42',
    seconds: '12'
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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 -mb-12 sm:-mb-14">
      {/* Floating White Card Overlapping Sections */}
      <div
        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-100 transition-all duration-300"
        style={{
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 10px 25px -10px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>NEXT DISTRICT STAGE</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071426] tracking-tight leading-tight">
              Count <span className="text-blue-600 font-extrabold">Every Second</span> <br className="hidden sm:block" />
              Until the Event
            </h3>
            
            <p className="text-xs text-slate-500 font-medium">
              October 10, 2026 • Tirunelveli Main Convention Hall
            </p>
          </div>

          {/* Right Column: Numbers Layout (Matching Reference Screenshot) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-6 md:gap-8 font-mono">
              
              {/* Days */}
              <div className="text-center min-w-[55px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071426] tracking-tight block">
                  {timeLeft.days}
                </span>
                <p className="text-[11px] sm:text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1 font-mono">
                  [Days]
                </p>
              </div>

              <span className="text-2xl sm:text-4xl font-light text-slate-300 select-none pb-4">:</span>

              {/* Hours */}
              <div className="text-center min-w-[55px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071426] tracking-tight block">
                  {timeLeft.hours}
                </span>
                <p className="text-[11px] sm:text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1 font-mono">
                  [Hours]
                </p>
              </div>

              <span className="text-2xl sm:text-4xl font-light text-slate-300 select-none pb-4">:</span>

              {/* Minutes */}
              <div className="text-center min-w-[55px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071426] tracking-tight block">
                  {timeLeft.minutes}
                </span>
                <p className="text-[11px] sm:text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1 font-mono">
                  [Minutes]
                </p>
              </div>

              <span className="text-2xl sm:text-4xl font-light text-slate-300 select-none pb-4">:</span>

              {/* Seconds */}
              <div className="text-center min-w-[55px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-blue-600 tracking-tight block">
                  {timeLeft.seconds}
                </span>
                <p className="text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest mt-1 font-mono">
                  [Seconds]
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
