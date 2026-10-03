import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import EventsGrid from '../Component/Events/EventsGrid';
import DistrictsExplorer from '../Component/Events/DistrictsExplorer';
import CompetitionsShowcase from '../Component/Events/CompetitionsShowcase';
import RegistrationModal from '../Component/Modals/RegistrationModal';
import EventDetailsModal from '../Component/Modals/EventDetailsModal';
import { CheckCircle2 } from 'lucide-react';

export default function Events() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const rules = [
    'Participants must produce a valid College ID Card along with THEZAR digital QR pass.',
    'Teams can have 1 to 4 members depending on the competition track.',
    'Judges decision across all 38 district rounds will be final and binding.',
    'Top 3 winners from each district qualify for the Statewide Grand Finale in Chennai.'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 01 Header */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02 Event Hero */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              STATEWIDE DISTRICT CALENDAR & VENUES
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Official <span className="gradient-text">Event Schedule</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Browse event dates, competition guidelines, venue maps, and timetable details for all 38 districts of Tamil Nadu.
            </p>
          </div>
        </section>

        {/* 03 & 04 Upcoming Events Grid */}
        <EventsGrid
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId) => setSelectedEventId(evtId)}
        />

        {/* 05 Competitions Categories */}
        <CompetitionsShowcase
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 06 38 District Journey & Venue Maps */}
        <DistrictsExplorer
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 07 Rules & Guidelines Section */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 text-left space-y-6">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
              07 • OFFICIAL RULES & GUIDELINES
            </span>
            <h2 className="text-3xl font-black text-white">State Tournament Rules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rules.map((rule, idx) => (
                <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 Registration CTA Banner */}
        <section className="py-16 bg-slate-950 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-3xl font-black text-white">Ready to Lock Your District Pass?</h2>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="px-8 py-3.5 rounded-full font-extrabold text-white gradient-bg-pink shadow-lg text-xs uppercase tracking-wider"
            >
              Register Candidate Now &rarr;
            </button>
          </div>
        </section>

      </main>

      {/* 11 Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Modals */}
      {isRegisterOpen && <RegistrationModal onClose={() => setIsRegisterOpen(false)} />}
      {selectedEventId && (
        <EventDetailsModal
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      )}

    </div>
  );
}
