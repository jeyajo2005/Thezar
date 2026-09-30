import { Eye, Target } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        
        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-400/20 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To build Tamil Nadu’s most inspiring collegiate ecosystem where youth talent is recognized, mentored, and connected to national industry opportunities.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Provide an equitable, transparent platform with cash prizes, incubators, and state-level recognition for every passionate student contestant.
          </p>
        </div>

      </div>
    </section>
  );
}
