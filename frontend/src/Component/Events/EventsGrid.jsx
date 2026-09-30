import { useState } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, Code, Music, HelpCircle, Zap, Shield } from 'lucide-react';

export default function EventsGrid({ onOpenRegister, onSelectEvent }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Live Now', 'Technical', 'Cultural', 'Quiz', 'Innovation'];

  const filteredEvents = EVENTS_LIST.filter(evt => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Live Now') return evt.status === 'Live';
    return evt.competitions.some(c => c.type === filterCategory);
  });

  const getCompetitionIcon = (type) => {
    switch (type) {
      case 'Technical': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'Cultural': return <Music className="w-4 h-4 text-pink-400" />;
      case 'Quiz': return <HelpCircle className="w-4 h-4 text-amber-400" />;
      case 'Innovation': return <Zap className="w-4 h-4 text-rose-400" />;
      default: return <Shield className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="events" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              [ DISTRICT ROUND SCHEDULE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Upcoming <span className="gradient-text">District Events</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Explore district competitions taking place across Tamil Nadu. Register to represent your institution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterCategory === cat
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 hover:border-rose-500/50 transition-all group flex flex-col justify-between hover:shadow-2xl hover:shadow-rose-950/40"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                      evt.status === 'Live' 
                        ? 'bg-rose-600 text-white animate-pulse' 
                        : 'bg-slate-900/90 text-amber-300 border border-amber-400/30'
                    }`}>
                      {evt.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono font-bold text-slate-200">
                    {evt.districtCode}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">{evt.category}</span>
                    <h3 className="text-xl font-extrabold text-white leading-tight mt-0.5">{evt.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <Calendar className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{evt.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800">
                    <p className="text-[11px] text-slate-500 uppercase font-mono font-bold mb-2">Tracks Included:</p>
                    <div className="flex flex-wrap gap-2">
                      {evt.competitions.map((comp, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300">
                          {getCompetitionIcon(comp.type)}
                          <span>{comp.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={onOpenRegister}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectEvent(evt.id)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-colors border border-slate-800"
                >
                  View Schedule & Venue Details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
