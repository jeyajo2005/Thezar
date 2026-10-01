import { ArrowRight, Trophy } from 'lucide-react';

export default function CtaSection({ onOpenRegister }) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Navy Decorative Card */}
        <div className="relative rounded-3xl bg-[#071426] p-8 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-sm text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.18em] text-white">
              <Trophy className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>THEZAR 2026 REGISTRATION</span>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-extrabold text-white tracking-[-0.035em] uppercase leading-[1.05]">
              READY TO TAKE <br />
              <span className="text-gradient-thezar">
                THE STAGE?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-[#CBD5E1] text-sm sm:text-base lg:text-[17px] max-w-xl mx-auto leading-[1.7] font-normal">
              Register for TheZar 2026 and begin your journey. Join thousands of collegiate students competing across 38 districts of Tamil Nadu.
            </p>

            {/* Bumper Prize Reminder */}
            <div className="pt-2 text-[12px] sm:text-[13px] font-bold text-amber-400 tracking-[0.05em] uppercase">
              1st Prize Bumper: ₹40 Lakhs House Free + ₹25L Cash Pool
            </div>

            {/* Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-bold text-[14px] sm:text-[15px] uppercase tracking-[0.02em] shadow-xl shadow-blue-600/30 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#events"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors text-center"
              >
                VIEW EVENT SCHEDULE
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
