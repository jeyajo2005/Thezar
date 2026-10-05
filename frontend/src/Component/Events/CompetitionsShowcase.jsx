import { Music, Users, Award, Flame, Trophy, CheckCircle, Sparkles } from 'lucide-react';

export default function CompetitionsShowcase({ onOpenRegister }) {
  const tracks = [
    {
      id: 'singing',
      title: 'Solo Vocal & Carol Singing',
      icon: Music,
      badgeColor: 'from-[#9e0804] to-[#730502]',
      prizes: '₹50,000 Total Pool',
      items: ['Kids Solo Vocal (Under 15)', 'Adult Solo Festive Singing', 'Acoustic Accompaniment Live', 'Master Jury Evaluation'],
      description: 'Step onto the acoustic main stage to showcase melodic vocal range and Christmas Carol harmony.'
    },
    {
      id: 'choir',
      title: 'Choir & Live Music Bands',
      icon: Users,
      badgeColor: 'from-amber-600 to-amber-800',
      prizes: '₹1,50,000 Total Pool',
      items: ['Church & School Choirs', 'Festive Live Music Bands', 'Multi-Part Vocal Harmony', 'Orchestral Staging Setup'],
      description: 'Grand troupe battle bringing together church choirs, college ensembles, and collegiate musical bands.'
    },
    {
      id: 'dance',
      title: 'Choreography Dance Showcase',
      icon: Sparkles,
      badgeColor: 'from-purple-600 to-indigo-800',
      prizes: '₹1,00,000 Total Pool',
      items: ['Freestyle Solo Festive Dance', 'Group Choreography Showcase', 'Costume & Theme Presentation', 'Grand Stage Lighting Act'],
      description: 'Expressive rhythm and visual spectacle featuring synchronized group troupes and freestyle soloists.'
    },
    {
      id: 'culinary',
      title: 'Grand Cooking & Special Acts',
      icon: Flame,
      badgeColor: 'from-emerald-600 to-teal-800',
      prizes: '₹1,20,000 Total Pool',
      items: ['Grand Cooking Championship (₹1 Lakh 1st Prize)', 'Santa Claus Stage Character Contest', 'Authentic Recipe Plating', 'Masterchef Judging Panel'],
      description: 'Live culinary battle preparing authentic festive cuisines and exciting Santa Claus stage presentations.'
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-[#9e0804] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
            [ OFFICIAL COMPETITION CATEGORIES ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            TheZar 2026 <span className="text-[#9e0804]">Featured Tracks</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Experience Tamil Nadu’s premier festival stages. Compete for prestigious cash awards, trophies, and statewide recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => {
            const IconComp = track.icon;
            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#9e0804]/40 transition-all text-left flex flex-col justify-between space-y-6 group"
                style={{ borderRadius: '24px' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${track.badgeColor} shadow-md text-white`} style={{ borderRadius: '16px' }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-mono text-[#9e0804] bg-red-50 border border-red-200 px-3 py-1 rounded-full flex items-center gap-1.5" style={{ borderRadius: '9999px' }}>
                      <Trophy className="w-3.5 h-3.5 text-[#9e0804]" />
                      {track.prizes}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#9e0804] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {track.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    {track.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#9e0804] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenRegister}
                    className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-[#9e0804] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
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
