import { UserCheck, MapPin, Trophy, Crown, ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ onOpenRegister }) {
  const steps = [
    {
      num: '01',
      title: 'Register Candidate & Track',
      icon: UserCheck,
      desc: 'Fill in your college details, select your home district, and pick from Technical, Cultural, Quiz, or Innovation tracks.'
    },
    {
      num: '02',
      title: 'Compete at District Venue',
      icon: MapPin,
      desc: 'Show up at your assigned district venue (38 districts) with your official digital QR pass for instant check-in.'
    },
    {
      num: '03',
      title: 'Climb District Standings',
      icon: Trophy,
      desc: 'Earn points scored by official judges. Top 3 position holders qualify directly for the State Championship.'
    },
    {
      num: '04',
      title: 'Grand Finale at Chennai',
      icon: Crown,
      desc: 'Compete at Nehru Indoor Stadium, Chennai in front of state dignitaries, tech executives, and live media.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            07 • FOUR SIMPLE STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How <span className="gradient-gold">THEZAR 2026 Works</span>
          </h2>
          <p className="text-slate-400 text-sm">
            From online pass creation to taking the grand trophy in Chennai, here is your path to victory.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-rose-500/50 transition-all text-left flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-rose-500 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
