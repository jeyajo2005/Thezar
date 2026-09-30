import { Code, Music, HelpCircle, Zap, MapPin, Trophy, QrCode, Medal } from 'lucide-react';

export default function CategoryGridSection() {
  const items = [
    { title: 'Technical Hackathon', icon: Code, desc: 'Web & App Code Battles' },
    { title: 'Cultural Dance & Fest', icon: Music, desc: 'Choreography & Folk Music' },
    { title: 'Grand TN Quiz', icon: HelpCircle, desc: '38 District Intellect Rounds' },
    { title: 'AI & IoT Innovation Expo', icon: Zap, desc: 'Hardware & Prototype Show' },
    { title: '38 District Venues', icon: MapPin, desc: 'Collegiate Host Campuses' },
    { title: '₹25 Lakhs Cash Pool', icon: Trophy, desc: 'State Trophies & Grants' },
    { title: 'QR Digital Pass', icon: QrCode, desc: 'Instant Entrance Check-in' },
    { title: 'Statewide Leaderboard', icon: Medal, desc: 'Real-time Live Rankings' }
  ];

  return (
    <section id="categories" className="py-24 bg-[#110626] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            [ TOURNAMENT FEATURES & TRACKS ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Multi-Format <span className="gradient-gold-amber">Competition Highlights</span>
          </h2>
          <p className="text-slate-300 text-sm">
            Everything you need to compete, represent your district, and win state glory.
          </p>
        </div>

        {/* 4x2 Grid of Circular Neon Icon Cards matching Image 1 Section 3 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-purple-card p-6 rounded-3xl border border-rose-500/30 hover:border-rose-400 flex flex-col items-center text-center space-y-3 group hover:scale-105 transition-all shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-400 p-0.5 shadow-lg shadow-rose-600/40 group-hover:rotate-12 transition-transform">
                  <div className="w-full h-full bg-[#110626] rounded-full flex items-center justify-center text-white">
                    <IconComp className="w-7 h-7 text-amber-300" />
                  </div>
                </div>

                <h3 className="text-sm font-black text-white">{item.title}</h3>
                <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
