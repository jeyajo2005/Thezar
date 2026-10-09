import { Music, Users, Award, Flame, Trophy, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import musicImg from '../../assets/event_music.jpg';
import choirImg from '../../assets/christmas_choir.jpg';
import danceImg from '../../assets/event_dance.jpg';
import santaImg from '../../assets/santa_peeking.jpg';

export default function CompetitionsShowcase({ onOpenRegister }) {
  const tracks = [
    {
      id: 'singing',
      title: 'Solo Vocal & Carol Singing',
      icon: Music,
      image: musicImg,
      badgeColor: 'from-[#8C202E] to-[#5C101B]',
      tag: 'Category I',
      prizes: '₹50,000 Total Pool',
      items: ['Kids Solo Vocal (Under 15)', 'Adult Solo Festive Singing', 'Acoustic Accompaniment Live', 'Master Jury Evaluation'],
      description: 'Step onto the acoustic main stage to showcase melodic vocal range, emotional depth, and festive Christmas Carol harmony.'
    },
    {
      id: 'choir',
      title: 'Choir & Live Music Bands',
      icon: Users,
      image: choirImg,
      badgeColor: 'from-amber-600 to-amber-900',
      tag: 'Category II',
      prizes: '₹1,50,000 Total Pool',
      items: ['Church & School Choirs', 'Festive Live Music Bands', 'Multi-Part Vocal Harmony', 'Orchestral Staging Setup'],
      description: 'Grand troupe battle bringing together church choirs, collegiate musical bands, and multi-part choral harmonies.'
    },
    {
      id: 'dance',
      title: 'Choreography Dance Showcase',
      icon: Sparkles,
      image: danceImg,
      badgeColor: 'from-purple-600 to-indigo-900',
      tag: 'Category III',
      prizes: '₹1,00,000 Total Pool',
      items: ['Freestyle Solo Festive Dance', 'Group Choreography Showcase', 'Costume & Theme Presentation', 'Grand Stage Lighting Act'],
      description: 'Expressive rhythm and visual spectacle featuring synchronized group troupes, energetic steps, and freestyle soloists.'
    },
    {
      id: 'santa',
      title: 'Santa Claus & Special Acts',
      icon: Trophy,
      image: santaImg,
      badgeColor: 'from-emerald-600 to-teal-900',
      tag: 'Category IV',
      prizes: '₹50,000 Total Pool',
      items: ['Santa Claus Character Contest', 'Festive Stage Theme Presentation', 'Live Audience Interaction', 'Celebrity Jury Evaluation'],
      description: 'Festive stage character competition featuring Santa Claus costume acts, creative sketches, and interactive joy.'
    }
  ];

  return (
    <section id="competitions" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-[#8C202E] uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            [ OFFICIAL COMPETITION CATEGORIES ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight">
            TheZar 2026 <span className="text-[#8C202E]">Featured Tracks</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-sans">
            Experience Tamil Nadu’s premier festival stages. Compete for prestigious cash awards, rolling trophies, and statewide recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => {
            const IconComp = track.icon;
            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#8C202E]/40 transition-all text-left flex flex-col justify-between group"
                style={{ borderRadius: '24px' }}
              >
                {/* Header DP Banner Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  
                  {/* Category Tag & Icon on DP */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${track.badgeColor} shadow-lg text-white backdrop-blur-md`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                      {track.tag}
                    </span>
                  </div>

                  {/* Prize Tag on DP */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold font-mono text-[#FFE082] bg-black/60 backdrop-blur-md border border-[#FFE082]/40 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <Trophy className="w-3.5 h-3.5 text-[#FFE082]" />
                      {track.prizes}
                    </span>
                  </div>

                  {/* Title & Badge Overlay at Bottom of DP */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-white leading-snug drop-shadow-md group-hover:text-[#FFE082] transition-colors">
                      {track.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {track.description}
                    </p>

                    <div className="pt-1 space-y-2.5">
                      {track.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-[#8C202E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onOpenRegister}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-[#6B1414] hover:to-[#8C202E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                      style={{ borderRadius: '9999px' }}
                    >
                      <span>Enter This Category</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
