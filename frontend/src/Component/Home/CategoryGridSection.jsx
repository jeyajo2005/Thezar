import { Code, Lightbulb, Music, HelpCircle, Briefcase, Presentation, ArrowRight } from 'lucide-react';

export default function CategoryGridSection({ onOpenRegister }) {
  const categories = [
    {
      id: 'tech',
      title: 'Technical',
      icon: Code,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Competitive coding, hackathons, web development, robotics, and cyber defense arenas.',
      rounds: '12 Competitions',
      pool: '₹5 Lakhs Pool'
    },
    {
      id: 'inno',
      title: 'Innovation',
      icon: Lightbulb,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      description: 'AI prototyping, smart hardware, green energy solutions, and student patent showcases.',
      rounds: '8 Competitions',
      pool: '₹6 Lakhs Pool'
    },
    {
      id: 'cult',
      title: 'Cultural',
      icon: Music,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      description: 'Western & classical choreography, battle of bands, vocal solos, and theatrical performances.',
      rounds: '15 Competitions',
      pool: '₹4.5 Lakhs Pool'
    },
    {
      id: 'quiz',
      title: 'Quiz',
      icon: HelpCircle,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Statewide general awareness, science, technology, history, and pop culture quiz championships.',
      rounds: '6 Competitions',
      pool: '₹2 Lakhs Pool'
    },
    {
      id: 'biz',
      title: 'Business',
      icon: Briefcase,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'Startup pitch deck, venture modeling, brand marketing strategy, and fin-tech challenges.',
      rounds: '7 Competitions',
      pool: '₹3.5 Lakhs Pool'
    },
    {
      id: 'pres',
      title: 'Presentation',
      icon: Presentation,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'Collegiate research paper presentation, parliamentary debate, and public oratory cups.',
      rounds: '6 Competitions',
      pool: '₹2.5 Lakhs Pool'
    }
  ];

  return (
    <section id="competitions" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "TRACKS" */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        TRACKS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-wider">
            [ Multi-Disciplinary Competition Tracks ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#071426] tracking-tight uppercase">
            Compete <span className="text-blue-600">Your Way</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Choose your arena from 6 official championship categories open to engineering, arts, science, and management colleges across Tamil Nadu.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                      {cat.rounds}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#071426] tracking-tight group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-600">
                    {cat.pool}
                  </span>
                  <button
                    onClick={onOpenRegister}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Register Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
