import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import ChristmasEventsHero from '../Component/Events/ChristmasEventsHero';
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      
      {/* 01 Header */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0 bg-white">
        
        {/* 02 Original Official Event Schedule Hero (First, on clean White background) */}
        <section className="py-16 sm:py-20 bg-white text-center relative overflow-hidden border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-mono font-bold text-[#3f0701] uppercase tracking-widest bg-[#FAF0F0] px-4 py-1.5 rounded-full border border-[#3f0701]/20">
              STATEWIDE DISTRICT CALENDAR & VENUES
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              Official <span className="text-[#3f0701]">Event Schedule</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Browse event dates, competition guidelines, venue maps, and timetable details for all 38 districts of Tamil Nadu.
            </p>
          </div>
        </section>

        {/* 03 Christmas Events Showcase (Next) */}
        <ChristmasEventsHero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 04 Upcoming Events Grid (Next) */}
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

        {/* 07 Rules & Guidelines Section (Clean light container) */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 text-left space-y-6">
            <span className="text-xs font-mono font-bold text-red-300 uppercase tracking-widest bg-[#9e0804]/10 px-3 py-1 rounded-full border border-[#9e0804]/20">
              07 • OFFICIAL RULES & GUIDELINES
            </span>
            <h2 className="text-3xl font-black text-slate-900">State Tournament Rules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rules.map((rule, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 Registration CTA Banner (Premium Maroon Card on White) */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-3xl bg-[#3f0701] text-white p-10 sm:p-14 shadow-2xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Ready to Lock Your District Pass?</h2>
              <p className="text-slate-200 text-sm max-w-xl mx-auto">
                Join thousands of collegiate competitors across all 38 districts of Tamil Nadu.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="px-8 py-3.5 rounded-full font-black text-[#3f0701] bg-white hover:bg-slate-100 shadow-xl text-xs uppercase tracking-wider cursor-pointer transition-transform hover:scale-105"
                  style={{ borderRadius: '9999px' }}
                >
                  Register Candidate Now &rarr;
                </button>
              </div>
            </div>
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
