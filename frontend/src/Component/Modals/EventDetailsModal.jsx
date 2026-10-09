import { useState } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { X, Calendar, Clock, MapPin, Code, Music, HelpCircle, Zap, Shield, Trophy, Sparkles, UserCheck, ArrowRight } from 'lucide-react';

export default function EventDetailsModal({ eventId, onClose, onOpenRegister }) {
  const [activeTab, setActiveTab] = useState('Overview');

  const event = EVENTS_LIST.find(e => e.id === eventId) || EVENTS_LIST[0];

  const getCompetitionIcon = (type) => {
    switch (type) {
      case 'Technical': return <Code className="w-5 h-5 text-emerald-600" />;
      case 'Cultural': return <Music className="w-5 h-5 text-[#8C202E]" />;
      case 'Quiz': return <HelpCircle className="w-5 h-5 text-amber-600" />;
      case 'Innovation': return <Zap className="w-5 h-5 text-purple-600" />;
      default: return <Shield className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-6 text-left">

        {/* Close Modal Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Hero Banner */}
        <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

          <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-[#8C202E] text-white uppercase tracking-wider shadow-md">
                {event.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-serif font-bold bg-white/90 text-[#4A0A0A] border border-amber-300/80 backdrop-blur-sm shadow-sm">
                ✨ {event.district} District
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight drop-shadow-md">
              {event.title}
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-sm text-slate-200 font-medium pt-1">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#FFE082]" /> {event.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#FFE082]" /> {event.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#FFE082]" /> {event.venue}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Clean White Aesthetic) */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-4 sm:px-6 overflow-x-auto gap-1 sm:gap-2">
          {['Overview', 'Competitions', 'Schedule', 'Venue', 'Contact'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-3 sm:py-3.5 px-3.5 sm:px-5 font-bold text-xs sm:text-sm tracking-wider uppercase border-b-2 transition-all shrink-0 cursor-pointer ${activeTab === tab
                ? 'border-[#8C202E] text-[#8C202E] bg-white shadow-sm rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Body (White Theme) */}
        <div className="p-5 sm:p-8 max-h-[460px] overflow-y-auto space-y-6 bg-white">

          {/* Tab 1: Overview */}
          {activeTab === 'Overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-serif font-black text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8C202E]" />
                  About This District Round
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {event.description} Participants from across {event.district} district can enter multiple tracks including solo singing, choirs, live music bands, choreography dance, Santa Claus acts, and culinary competitions. Top performers advance to the Grand Stage!
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-serif font-black text-slate-900 mb-3">
                  Competition Tracks Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {event.competitions.map((comp, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 hover:bg-rose-50/30 p-4 rounded-2xl border border-slate-200/90 hover:border-[#8C202E]/30 flex items-center justify-between transition-all shadow-sm hover:shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
                          {getCompetitionIcon(comp.type)}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-slate-900">{comp.name}</p>
                          <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                            {comp.duration} • <span className="text-amber-700 font-bold">Prize: {comp.prizes}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Competitions */}
          {activeTab === 'Competitions' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {event.competitions.map((comp, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#8C202E] bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                        {comp.type}
                      </span>
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                        {comp.prizes}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif font-black text-slate-900 leading-snug">{comp.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">Time Limit: {comp.duration} • Team Size: 1-4 members</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Schedule */}
          {activeTab === 'Schedule' && (
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-serif font-black text-slate-900 mb-3">Official Day Timetable</h3>
              <div className="space-y-2.5">
                {event.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-300 shrink-0">
                        {item.time}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{item.task}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-full hidden sm:inline-block shadow-sm">
                      {item.room}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Venue */}
          {activeTab === 'Venue' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2.5 shadow-sm">
                <h3 className="text-base sm:text-lg font-serif font-black text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8C202E]" />
                  <span>{event.venue}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Main Auditorium & Campus Ground Complex, {event.district} District, Tamil Nadu
                </p>
                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(event.venue)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C202E] hover:text-[#5C101B] hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Contact */}
          {activeTab === 'Contact' && (
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700 shadow-sm font-medium">
              <h3 className="text-base font-serif font-black text-slate-900 mb-1">District Event Coordinators</h3>
              <p className="flex items-center gap-2">📍 <span>Convenor: Prof. K. Sundaram (District Event Lead)</span></p>
              <p className="flex items-center gap-2">📞 <span>Helpline: +91 97903 51878 / +91 98400 11223</span></p>
              <p className="flex items-center gap-2">✉️ <span>Official Mail: support.{event.district.toLowerCase()}@thezar2026.tn.gov.in</span></p>
            </div>
          )}

        </div>

        {/* Footer Actions (Clean White Aesthetic) */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-slate-900">Registration Deadline:</span> 08 October 2026 (11:59 PM)
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="px-5 sm:px-6 py-2.5 rounded-full font-black text-white bg-gradient-to-r from-[#6B1414] via-[#8B1A1A] to-[#6B1414] hover:from-[#540F0F] hover:to-[#6B1414] shadow-md hover:shadow-xl text-xs uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <span>Register Candidate Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
