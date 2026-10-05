import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function GrandPrizeBanner({ onOpenRegister }) {
  return (
    <section className="py-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Indigo Rounded Container */}
        <div className="bg-[#0b0e26] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-indigo-900/50">
          
          {/* Decorative Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8 text-left space-y-5">
              
              {/* Maroon Badge Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9e0804] text-white text-[11px] font-bold tracking-[0.15em] uppercase shadow-md border border-[#c4120c]/40">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>GRAND BUMPER ANNOUNCEMENT</span>
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-extrabold text-white tracking-[-0.035em] leading-tight">
                Win <span className="text-[#f87171] font-serif italic">Grand Luxury House Prize</span> on Statewide Finale!
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed opacity-90">
                The #1 Grand Champion of Tamil Nadu receives a 100% Free Villa House Prize + Mega Cash Prize Pool at Chennai Main Auditorium. Registrations ending soon!
              </p>

              {/* 4 Digital Countdown Boxes matching TRAVELIA Banner */}
              <div className="flex items-center gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center min-w-[64px] border border-white/10">
                  <span className="text-xl sm:text-2xl font-black text-[#f87171] font-mono">08</span>
                  <p className="text-[9px] text-slate-300 font-sans font-bold uppercase tracking-wider">Days</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center min-w-[64px] border border-white/10">
                  <span className="text-xl sm:text-2xl font-black text-[#f87171] font-mono">14</span>
                  <p className="text-[9px] text-slate-300 font-sans font-bold uppercase tracking-wider">Hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center min-w-[64px] border border-white/10">
                  <span className="text-xl sm:text-2xl font-black text-[#f87171] font-mono">36</span>
                  <p className="text-[9px] text-slate-300 font-sans font-bold uppercase tracking-wider">Mins</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-center min-w-[64px] border border-white/10">
                  <span className="text-xl sm:text-2xl font-black text-[#f87171] font-mono">48</span>
                  <p className="text-[9px] text-slate-300 font-sans font-bold uppercase tracking-wider">Secs</p>
                </div>
              </div>

            </div>

            {/* Right Action & Features Column */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              
              {/* Feature Checkmarks List */}
              <div className="space-y-2.5 text-left text-xs font-mono font-bold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4120c]" />
                  <span>3 BHK Gated Villa Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4120c]" />
                  <span>100% Free Legal Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4120c]" />
                  <span>Bumper Cash Prize Pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c4120c]" />
                  <span>38 Districts Qualified Entries</span>
                </div>
              </div>

              {/* Bright Maroon Action Button */}
              <button
                onClick={onOpenRegister}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#9e0804] via-[#c4120c] to-[#730502] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-[#9e0804]/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>CLAIM PASS NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
