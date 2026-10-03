import { Code, Music, HelpCircle, Zap, Trophy, CheckCircle } from 'lucide-react';

export default function CompetitionsShowcase({ onOpenRegister }) {
  const tracks = [
    {
      id: 'tech',
      title: 'Technical Competitions',
      icon: Code,
      badgeColor: 'from-emerald-500 to-teal-700',
      prizes: '₹8,00,000 Total Pool',
      items: ['Full-Stack Web & App Hackathon', 'Cybersecurity Capture The Flag', 'AI & Data Science Challenge', 'Algorithmic Coding Battle'],
      description: 'Test your problem solving and software architecture against top developers across Tamil Nadu.'
    },
    {
      id: 'cultural',
      title: 'Cultural Festivals',
      icon: Music,
      badgeColor: 'from-pink-500 to-rose-700',
      prizes: '₹6,50,000 Total Pool',
      items: ['Choreography & Group Dance', 'Battle of the Bands & Folk Music', 'Theatrical Drama & Skit', 'Classical Vocal Showcase'],
      description: 'Unleash artistic expression and traditional Tamil culture on the grand statewide stage.'
    },
    {
      id: 'quiz',
      title: 'Grand TN Quiz League',
      icon: HelpCircle,
      badgeColor: 'from-amber-500 to-orange-700',
      prizes: '₹4,50,000 Total Pool',
      items: ['General Knowledge & Tamil Heritage', 'Tech & Science Olympiad Quiz', 'Current Affairs & Innovation Quiz', 'Rapid Fire Finals'],
      description: 'Battle of intellect across 38 districts with live buzzer rounds broadcasted online.'
    },
    {
      id: 'innovation',
      title: 'Innovation & AI Expo',
      icon: Zap,
      badgeColor: 'from-purple-500 to-indigo-700',
      prizes: '₹6,00,000 Total Pool',
      items: ['AI Prototype Exhibition', 'IoT & Hardware Smart Tech', 'Green Energy & Sustainability Projects', 'Biotech & Robotics Demos'],
      description: 'Showcase working prototypes to industry judges, investors, and state incubation funds.'
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-[#3f0701] uppercase tracking-widest bg-[#FAF0F0] px-4 py-1.5 rounded-full border border-[#3f0701]/20">
            [ FOUR MAJOR COMPETITION TRACKS ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Statewide <span className="text-[#3f0701]">Competition Categories</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Designed to identify, reward, and elevate talent across technology, culture, knowledge, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => {
            const IconComp = track.icon;
            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#3f0701]/30 transition-all text-left flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${track.badgeColor} shadow-md text-white`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-mono text-[#3f0701] bg-[#FAF0F0] border border-[#3f0701]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5" />
                      {track.prizes}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#3f0701] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {track.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {track.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#3f0701] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenRegister}
                    className="w-full py-3 rounded-full bg-slate-50 hover:bg-[#3f0701] text-slate-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors border border-slate-200 cursor-pointer shadow-sm"
                    style={{ borderRadius: '9999px' }}
                  >
                    Enter This Track &rarr;
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
