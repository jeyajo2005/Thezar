import { useState } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { Calendar, MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function EventsGrid({ onOpenRegister, onSelectEvent }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Live Now', 'Technical', 'Cultural', 'Quiz', 'Innovation'];

  const filteredEvents = EVENTS_LIST.filter((evt) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Live Now') return evt.status === 'Live';
    return evt.competitions?.some((c) => c.type === filterCategory);
  });

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "SCHEDULE" */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        SCHEDULE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left space-y-2">
            <span className="font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-wider">
              [ District Timetable & Stage Dates ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071426] tracking-tight uppercase">
              Upcoming <span className="text-blue-600">Events</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Discover what's happening across TheZar. Preliminary district rounds and live stages across 38 districts of Tamil Nadu.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200/80 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#071426] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.slice(0, 6).map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              {/* Event Image with Badge */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/75 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {evt.status === 'Live' ? (
                    <span className="inline-flex items-center gap-1.5 bg-cyan-500 text-[#071426] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#071426] animate-pulse"></span>
                      LIVE NOW
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#071426] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      UPCOMING
                    </span>
                  )}
                </div>

                {/* District Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-mono text-cyan-300 font-bold uppercase tracking-wider text-[11px]">
                    {evt.district} DISTRICT
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
                    Round 2
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#071426] tracking-tight group-hover:text-blue-600 transition-colors">
                    {evt.title}
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectEvent && onSelectEvent(evt.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={onOpenRegister}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#071426] hover:bg-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-12 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 hover:border-blue-600 bg-white hover:text-blue-600 text-[#071426] font-bold text-xs uppercase tracking-widest transition-all shadow-sm"
          >
            <span>EXPLORE ALL 38 DISTRICT ROUNDS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
