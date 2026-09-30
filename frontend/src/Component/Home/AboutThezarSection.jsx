import { ChevronDown, Sparkles } from 'lucide-react';

export default function AboutThezarSection({ onOpenRegister }) {
  return (
    <section id="about-thezar" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Oval Visual Cut-out Image Frame matching Image 1 Section 2 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-80 h-96 sm:w-96 sm:h-[420px] oval-image-frame overflow-hidden relative shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                alt="THEZAR Collegiate Stage"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Card Block with pink accent outline matching Image 1 Section 2 */}
          <div className="lg:col-span-7 text-left space-y-6 bg-slate-50 p-8 sm:p-12 rounded-3xl border-2 border-rose-200 shadow-xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold font-mono">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>[ ABOUT THEZAR 2026 ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              THEZAR — Empowering Youth Talent Across Tamil Nadu
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>THEZAR 2026</strong> is Tamil Nadu’s premiere multi-format inter-collegiate tournament bringing together talented youth from all <strong>38 districts</strong>. Designed to bridge academic excellence with real-world innovation, culture, and technical mastery.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Over 450+ colleges participate in technical hackathons, group choreography, grand quizzes, and AI prototype expos. Top 3 finalists from each district qualify directly for the Statewide Grand Finale in Chennai!
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenRegister}
                className="px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-magenta-gradient shadow-lg hover:scale-105 transition-all"
              >
                READ MORE & REGISTER
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Circular Down Chevron Button at Bottom (Matching Image 1 Section Seam) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a href="#categories" className="section-chevron-btn hover:scale-110 transition-transform">
          <ChevronDown className="w-6 h-6 stroke-[3]" />
        </a>
      </div>

    </section>
  );
}
