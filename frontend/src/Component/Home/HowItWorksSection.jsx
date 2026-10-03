import { MapPin, Video, Trophy, ArrowRight, UserCheck, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';
import contestantImg from '../../assets/cheerful_contestant.jpg';

export default function HowItWorksSection({ onOpenRegister }) {
  const steps = [
    {
      id: 1,
      title: 'Select District & Register',
      desc: 'Choose your district arena (e.g. Tirunelveli Cooking, Cultural or Arts) & generate your verified digital admission pass.',
      icon: UserCheck,
      iconBg: 'bg-[#DCFCE7] text-[#15803D]', // Soft mint green
    },
    {
      id: 2,
      title: 'Submit 60-Sec Video Reel',
      desc: 'Record & upload a short video reel showing your talent for district jury evaluation & shortlisting.',
      icon: Video,
      iconBg: 'bg-[#F1F5F9] text-[#334155]', // Soft slate
    },
    {
      id: 3,
      title: 'Face-to-Face Live Stage',
      desc: 'Perform live before grand judges & audience at your district auditorium and advance to Chennai Finals!',
      icon: Trophy,
      iconBg: 'bg-[#FEF3C7] text-[#92400E]', // Soft warm amber
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.025)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        STEPS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CENTERED HEADER (Matching Reference Image) */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
              SIMPLE STEPS
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#D4A72C',
                boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071426] tracking-tight uppercase">
            HOW IT <span className="text-[#9e0804]">WORKS</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed pt-1">
            No confusion or delays. Just fast, simple and transparent talent selection.
          </p>
        </div>

        {/* 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Clean Person Portrait Card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Soft Ambient Backdrop Light */}
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-[#9e0804]/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Main Person Portrait Card */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3.8] bg-slate-100 group">
                <img
                  src={contestantImg}
                  alt="TheZar Participant"
                  className="w-full h-full object-cover object-top select-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Step List with Left Timeline Line (Matching Reference Layout) */}
          <div className="lg:col-span-6 text-left relative space-y-8 pl-2 sm:pl-4">
            
            {/* Vertical Timeline Divider Line */}
            <div className="absolute left-[39px] sm:left-[47px] top-6 bottom-6 w-[2px] bg-slate-200/80 -z-0" />

            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex items-start gap-5 sm:gap-6 group">
                  
                  {/* Icon Box (Matching Reference Green / Grey / Yellow Square Icon Design) */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ${step.iconBg}`}>
                    <StepIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Step Title & Description */}
                  <div className="pt-1 space-y-1 max-w-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-[#071426] tracking-tight group-hover:text-[#9e0804] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-4 pl-[75px] sm:pl-[88px]">
              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 rounded-full bg-[#071426] hover:bg-[#9e0804] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Register & Get Digital Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
