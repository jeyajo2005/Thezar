import { useState } from 'react';
import ChristmasNavbar from '../Component/Home2/ChristmasNavbar';
import ChristmasHero from '../Component/Home2/ChristmasHero';
import IndexBannerCarousel from '../Component/Home/IndexBannerCarousel';
import ChristmasAboutSection from '../Component/Home2/ChristmasAboutSection';
import ChristmasEventsSection from '../Component/Home2/ChristmasEventsSection';
import ChristmasExperienceSection from '../Component/Home2/ChristmasExperienceSection';
import ChristmasRegisterSection from '../Component/Home2/ChristmasRegisterSection';
import ChristmasContactSection from '../Component/Home2/ChristmasContactSection';
import ChristmasFooter from '../Component/Home2/ChristmasFooter';
import RegistrationModal from '../Component/Modals/RegistrationModal';

export default function Home2() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#c4120c] selection:text-white relative overflow-x-hidden">

      {/* 01. Glassmorphic Christmas Sticky Navbar */}
      <ChristmasNavbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02. Cinematic 3D Christmas Hero Section (Three.js Flying Santa, Decorated Tree & Floating Gifts) */}
        <ChristmasHero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 02B. Dynamic Storefront Index Banner Showcase (Synced Live from Admin CMS) */}
        <IndexBannerCarousel onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 03. The Spirit of Christmas: Story, 3D Wreath Visual & Animated Counters */}
        <ChristmasAboutSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 04. 5 Signature Christmas Events with 3D Glass Cards & Details Modal */}
        <ChristmasEventsSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 05. Immersive Parallax Winter Experience Journey */}
        <ChristmasExperienceSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 06. Christmas Pass Registration with 3D Gift Box Visual */}
        <ChristmasRegisterSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 07. Premium Christmas Contact & Arena Details */}
        <ChristmasContactSection />

      </main>

      {/* 08. Rich Dark Christmas Footer with Starfield & Newsletter */}
      <ChristmasFooter onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Booking / Registration Modal */}
      {isRegisterOpen && (
        <RegistrationModal onClose={() => setIsRegisterOpen(false)} />
      )}

    </div>
  );
}
