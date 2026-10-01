import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Home/Hero';
import AboutTheZarSection from '../Component/Home/AboutTheZarSection';
import CountdownSection from '../Component/Home/CountdownSection';
import EventsGrid from '../Component/Events/EventsGrid';
import DistrictJourneySection from '../Component/Home/DistrictJourneySection';
import CategoryGridSection from '../Component/Home/CategoryGridSection';
import HowItWorksSection from '../Component/Home/HowItWorksSection';
import LeaderboardSection from '../Component/Home/LeaderboardSection';
import MobileAppSection from '../Component/Home/MobileAppSection';
import CtaSection from '../Component/Home/CtaSection';
import Footer from '../Component/Footer/Footer';

import RegistrationModal from '../Component/Modals/RegistrationModal';
import EventDetailsModal from '../Component/Modals/EventDetailsModal';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 01. Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02. Hero & 03. Curved Hero Divider (Integrated) */}
        <Hero
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 04. About TheZar */}
        <AboutTheZarSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 05. Floating Countdown Card (Overlaps About & Events) */}
        <CountdownSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 06. Upcoming Events */}
        <EventsGrid
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId) => setSelectedEventId(evtId)}
        />

        {/* 07. 38 District Journey */}
        <DistrictJourneySection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 08. Competition Categories */}
        <CategoryGridSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 09. How TheZar Works */}
        <HowItWorksSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 10. Leaderboard Preview */}
        <LeaderboardSection />

        {/* 11. Mobile App Promotion */}
        <MobileAppSection />

        {/* 12. Final Registration CTA */}
        <CtaSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

      </main>

      {/* 13. Footer */}
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
