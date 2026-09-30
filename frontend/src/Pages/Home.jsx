import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Home/Hero';
import GrandPrizeBanner from '../Component/Home/GrandPrizeBanner';
import AboutThezarSection from '../Component/Home/AboutThezarSection';
import CategoryGridSection from '../Component/Home/CategoryGridSection';
import EventGalleryStrip from '../Component/Home/EventGalleryStrip';
import EventsGrid from '../Component/Events/EventsGrid';
import LeaderboardSection from '../Component/Home/LeaderboardSection';
import CtaSection from '../Component/Home/CtaSection';
import Footer from '../Component/Footer/Footer';

import RegistrationModal from '../Component/Modals/RegistrationModal';
import EventDetailsModal from '../Component/Modals/EventDetailsModal';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <div className="min-h-screen bg-[#080313] text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* 01 Header / Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02 Hero Banner */}
        <Hero
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId) => setSelectedEventId(evtId)}
        />

        {/* Bumper 1st Prize Highlight: ₹40 Lakhs Worth House Free */}
        <GrandPrizeBanner
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 03 About Section (Oval Visual Frame + Light Card) */}
        <AboutThezarSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 04 Tournament Feature Icons Grid (Image 1 Section 3 4x2 Grid) */}
        <CategoryGridSection />

        {/* 05 Full Width Event Photo Gallery Strip (Image 1 Section 4) */}
        <EventGalleryStrip />

        {/* 06 Upcoming District Events */}
        <EventsGrid
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId) => setSelectedEventId(evtId)}
        />

        {/* 07 Statewide Leaderboard */}
        <LeaderboardSection />

        {/* 08 Contact / Participant Support Box (Image 1 Section 5) */}
        <CtaSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

      </main>

      {/* 09 Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Modals */}
      {isRegisterOpen && (
        <RegistrationModal
          onClose={() => setIsRegisterOpen(false)}
        />
      )}

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
