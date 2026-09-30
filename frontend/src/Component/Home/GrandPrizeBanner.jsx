import { Home, Trophy, Sparkles, Award, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export default function GrandPrizeBanner({ onOpenRegister }) {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-950 via-rose-950 to-[#120626] border-y-2 border-amber-400/40 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.25),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left Column: Bumper 1st Prize Highlight */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-black tracking-wider uppercase animate-pulse">
              <Gift className="w-4 h-4 text-amber-300" />
              <span>BUMPER 1ST PRIZE ANNOUNCEMENT</span>
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                WIN A <span className="gradient-gold-amber">₹40 LAKHS WORTH HOUSE FREE!</span>
              </h2>
              <p className="text-lg font-mono font-bold text-amber-300">
                1st Prize Grand Champion Award • THEZAR 2026 STATEWIDE LEAGUE
              </p>
            </div>

            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
              The ultimate collegiate victory! The #1 overall Grand Champion of Tamil Nadu will be awarded a brand new <strong className="text-amber-300 font-bold">₹40,00,000 Luxury 3-BHK Villa (100% Free Ownership)</strong> along with the state championship trophy at the Chennai Grand Finale!
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-400/30">
                <Home className="w-4 h-4 text-amber-400" />
                <span>3 BHK Gated Villa</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-400/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Legal Ownership Pass</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-400/30">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>State Trophy + ₹25L Cash Pool</span>
              </div>
            </div>

          </div>

          {/* Right Column: Golden House Graphic Showcase */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-6 rounded-3xl bg-slate-950/90 border-2 border-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,0.4)] text-center space-y-4 max-w-sm">
              
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-amber-300 mx-auto flex items-center justify-center shadow-lg shadow-amber-400/50">
                <Home className="w-10 h-10 text-slate-950 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[10px] font-mono font-black uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                  1ST PRIZE GRAND CHAMPION
                </span>
                <p className="text-2xl font-black text-white mt-1">₹40,00,000</p>
                <p className="text-xs font-bold text-amber-300">FREE LUXURY VILLA</p>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gold-gradient hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>REGISTER TO WIN ₹40L HOUSE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
