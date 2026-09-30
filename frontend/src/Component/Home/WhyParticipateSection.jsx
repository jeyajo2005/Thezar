import { Gift, ShieldCheck, Rocket, Award, Users, CheckCircle2 } from 'lucide-react';

export default function WhyParticipateSection({ onOpenRegister }) {
  const benefits = [
    {
      icon: Gift,
      title: '₹25,00,000 Grand Prize Pool',
      desc: 'Cash awards distributed for district winners and state finalists across all 4 competition tracks.'
    },
    {
      icon: ShieldCheck,
      title: 'Government & University Certificate',
      desc: 'Official certificate of achievement recognized by universities and top recruiters nationwide.'
    },
    {
      icon: Rocket,
      title: 'Startup Incubation Grants',
      desc: 'Top projects in the AI & Innovation Expo receive direct mentorship and seed fund connections.'
    },
    {
      icon: Users,
      title: 'Network with 5,000+ Peers',
      desc: 'Connect with collegiate leaders, engineering minds, and artists from all 38 districts.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            09 • CANDIDATE ADVANTAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Participate in <span className="gradient-text">THEZAR 2026?</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Elevate your resume, gain state-level prestige, and showcase your talent on Tamil Nadu's biggest stage.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, idx) => {
            const IconC = b.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all text-left flex items-start gap-5 group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <IconC className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white">{b.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
