import { useState } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { X, Calendar, Clock, MapPin, Code, Music, HelpCircle, Zap, Shield, Trophy } from 'lucide-react';

export default function EventDetailsModal({ eventId, onClose, onOpenRegister }) {
  const [activeTab, setActiveTab] = useState('Overview');

  const event = EVENTS_LIST.find(e => e.id === eventId) || EVENTS_LIST[0];

  const getCompetitionIcon = (type) => {
    switch (type) {
      case 'Technical': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Cultural': return <Music className="w-5 h-5 text-pink-400" />;
      case 'Quiz': return <HelpCircle className="w-5 h-5 text-amber-400" />;
      case 'Innovation': return <Zap className="w-5 h-5 text-rose-400" />;
      default: return <Shield className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl my-8 text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#3f0701] text-white uppercase tracking-wider border border-white/20">
                {event.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-amber-300 border border-white/10">
                {event.district} District
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-white" /> {event.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> {event.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-white" /> {event.venue}</span>
            </div>
          </div>
        </div>

        <div className="flex border-b border-slate-800 px-6 overflow-x-auto">
          {['Overview', 'Competitions', 'Schedule', 'Venue', 'Contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 px-5 font-extrabold text-xs tracking-wider uppercase border-b-2 transition-all shrink-0 cursor-pointer ${
                activeTab === tab
                  ? 'border-white text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8 max-h-[450px] overflow-y-auto space-y-6">
          
          {activeTab === 'Overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white mb-2">About This District Round</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {event.description} Participants from all colleges across {event.district} district can enter multiple tracks including coding hackathons, dance, music, quiz, and hardware showcase. Top 3 finalists advance directly to the Statewide Grand Finale in Chennai!
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-3">Competition Tracks Available</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.competitions.map((comp, i) => (
                    <div key={i} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-[10px] bg-slate-900 border border-slate-800">
                          {getCompetitionIcon(comp.type)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">{comp.name}</p>
                          <p className="text-xs text-slate-400">{comp.duration} • Prize: {comp.prizes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Competitions' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.competitions.map((comp, i) => (
                  <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                        {comp.type}
                      </span>
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5" />
                        {comp.prizes}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{comp.name}</h4>
                    <p className="text-xs text-slate-400">Time Limit: {comp.duration} • Team Size: 1-4 members</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Schedule' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white mb-4">Official Day Timetable</h3>
              <div className="space-y-2">
                {event.schedule.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 shrink-0">
                        {item.time}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">{item.task}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full hidden sm:inline-block">
                      {item.room}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Venue' && (
            <div className="space-y-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <span>{event.venue}</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Main Auditorium & Computer Science Engineering Lab Complex, Tirunelveli, Tamil Nadu 627001
                </p>
                <div className="pt-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(event.venue)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 underline hover:text-rose-300"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Contact' && (
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs text-slate-300">
              <h3 className="text-base font-bold text-white">District Event Coordinators</h3>
              <p>📍 District Convenor: Prof. K. Sundaram (Dept of CSE)</p>
              <p>📞 Helpline: +91 98765 43210 / +91 98400 11223</p>
              <p>✉️ Official Mail: support.tirunelveli@thezar2026.tn.gov.in</p>
            </div>
          )}

        </div>

        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span className="font-bold text-white">Registration Deadline:</span> 08 October 2026 (11:59 PM)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:scale-105 transition-transform"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                color: '#071426',
              }}
            >
              <span className="font-extrabold text-[#071426]">Register Candidate Now &rarr;</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
