import { Star } from 'lucide-react';
import trophyImg from '../../assets/event_trophy.jpg';

export default function WhyParticipateSection() {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonial & Social Proof */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-[#E11D48] tracking-[0.18em] uppercase">
                TESTIMONIALS & IMPACT
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
              LOVED BY THOUSANDS OF{' '}
              <span className="text-[#E11D48] font-serif italic lowercase tracking-normal">
                competitors
              </span>
            </h2>

            {/* Testimonial Quote Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4 relative">
              <span className="text-5xl font-serif text-rose-400 leading-none">"</span>
              <p className="text-slate-600 text-sm italic font-serif leading-relaxed">
                THEZAR transformed our team. Competing at Tirunelveli Round 2 and making it to the Chennai Grand Finale opened direct career opportunities and provided statewide recognition.
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Olivia Martinez"
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Suman R.</h4>
                    <p className="text-[10px] text-slate-400 font-mono">Tirunelveli District Finalist</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Avatar Stack Counter */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm w-fit">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Avatar" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Avatar" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Avatar" />
              </div>
              <div className="text-left font-mono">
                <p className="text-xs font-black text-slate-900">50,000+ Candidates</p>
                <p className="text-[10px] text-slate-500">Registered across 38 Districts</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual + 3 Stat Counters matching TRAVELIA Section 6 */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-between p-8 border border-slate-200">
              <img
                src={trophyImg}
                alt="Championship Podium"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10 text-left">
                <span className="bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  STATISTICS & OUTREACH
                </span>
              </div>

              {/* 3 Stat Counter Box Grid */}
              <div className="relative z-10 grid grid-cols-3 gap-3 pt-8">
                <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl text-center border border-white shadow-lg">
                  <p className="text-xl sm:text-2xl font-black text-rose-600 font-mono">120+</p>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-0.5">Colleges</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl text-center border border-white shadow-lg">
                  <p className="text-xl sm:text-2xl font-black text-purple-600 font-mono">50K+</p>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-0.5">Participants</p>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl text-center border border-white shadow-lg">
                  <p className="text-xl sm:text-2xl font-black text-amber-500 font-mono">4.9/5</p>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mt-0.5">Avg Rating</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
