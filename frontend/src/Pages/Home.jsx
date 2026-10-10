import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Home/Hero';
import AboutTheZarSection from '../Component/Home/AboutTheZarSection';
import CountdownSection from '../Component/Home/CountdownSection';
import ChristmasEventsSection from '../Component/Home/ChristmasEventsSection';
import EventsGrid from '../Component/Events/EventsGrid';
import DistrictJourneySection from '../Component/Home/DistrictJourneySection';
import CategoryGridSection from '../Component/Home/CategoryGridSection';
import NewsTickerBar from '../Component/Home/NewsTickerBar';
import HowItWorksSection from '../Component/Home/HowItWorksSection';
import LeaderboardSection from '../Component/Home/LeaderboardSection';
import MobileAppSection from '../Component/Home/MobileAppSection';
import ContactInfoSection from '../Component/Contact/ContactInfoSection';
import ContactFormSection from '../Component/Contact/ContactFormSection';
import FaqSection from '../Component/Contact/FaqSection';
import CtaSection from '../Component/Home/CtaSection';
import Footer from '../Component/Footer/Footer';

import RegistrationModal from '../Component/Modals/RegistrationModal';
import EventDetailsModal from '../Component/Modals/EventDetailsModal';
import RibbonCuttingSplash from '../Component/SplashScreen/RibbonCuttingSplash';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEventData, setSelectedEventData] = useState(null);
  const [showRibbonSplash, setShowRibbonSplash] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#9e0804] selection:text-white relative">
      
      {/* 00. Grand Ribbon Cutting Ceremony Splash Screen */}
      {showRibbonSplash && (
        <RibbonCuttingSplash
          onComplete={() => setShowRibbonSplash(false)}
        />
      )}

      {/* 01. Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02. Hero & 03. Curved Hero Divider */}
        <Hero
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 04. About TheZar */}
        <AboutTheZarSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 05. Floating Countdown Card */}
        <CountdownSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 05b. Christmas Special Events */}
        <ChristmasEventsSection
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId) => setSelectedEventId(evtId)}
        />

        {/* 06. Upcoming Events */}
        <EventsGrid
          onOpenRegister={() => setIsRegisterOpen(true)}
          onSelectEvent={(evtId, evtData) => {
            setSelectedEventId(evtId);
            setSelectedEventData(evtData);
          }}
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

        {/* 08b. Animated News Heading Line Ticker */}
        <NewsTickerBar />

        {/* 10. Leaderboard Preview */}
        <LeaderboardSection />

        {/* 11. Mobile App Promotion */}
        <MobileAppSection />

        {/* 12. Contact & FAQ Section */}
        <section id="contact" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
            {/* Main Contact Card Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 text-left items-stretch">
                <div className="lg:col-span-5 flex flex-col h-full">
                  <ContactInfoSection />
                </div>
                <div className="lg:col-span-7 flex flex-col h-full lg:border-l lg:border-slate-100 lg:pl-10 xl:pl-12">
                  <ContactFormSection />
                </div>
              </div>
            </div>
            <FaqSection />
          </div>
        </section>

        {/* 13. Final Registration CTA */}
        <CtaSection
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

      </main>

      {/* 14. Footer */}
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
          eventData={selectedEventData}
          onClose={() => {
            setSelectedEventId(null);
            setSelectedEventData(null);
          }}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      )}

    </div>
  );
}
