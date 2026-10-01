import { UserCheck, Compass, Zap, BarChart3, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ onOpenRegister }) {
  const steps = [
    {
      num: '01',
      title: 'REGISTER',
      subtitle: 'Candidate Pass',
      desc: 'Sign up with your college ID to generate your verified digital QR admission pass.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'CHOOSE YOUR EVENT',
      subtitle: 'Select Arena',
      desc: 'Browse 100+ competitions across technical, cultural, quiz, and innovation tracks.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'COMPETE',
      subtitle: 'District Round',
      desc: 'Perform on live auditorium stages in front of expert state and national judges.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'TRACK RESULTS',
      subtitle: 'Live Scoring',
      desc: 'View real-time district leaderboard points, performance metrics, and badges.',
      icon: BarChart3,
    },
    {
      num: '05',
      title: 'REACH GRAND STAGE',
      subtitle: 'Chennai Finale',
      desc: 'District champions compete in Chennai for the ₹40 Lakhs House & ₹25L cash pool.',
      icon: Trophy,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "PROCESS" */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#2563EB] tracking-[0.18em] uppercase">
              HOW IT WORKS
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#D4A72C',
                boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
            HOW THEZAR <span className="text-[#2563EB]">WORKS</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
            A clear 5-step journey connecting campus talent directly to the grand statewide spotlight.
          </p>
        </div>

        {/* 5-Step Horizontal Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-amber-400 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="text-center space-y-4 flex flex-col items-center group">
                  
                  {/* Step Number Circle */}
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-600 shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-xs font-mono font-black text-cyan-600">{step.num}</span>
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-cyan-500 transition-colors mt-0.5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 px-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-widest block">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base font-black text-[#071426] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
          >
            <span>START YOUR JOURNEY NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
