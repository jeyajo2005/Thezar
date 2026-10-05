import { useState } from 'react';
import ChristmasSnowCanvas from '../Component/Home2/ChristmasSnowCanvas';
import ChristmasNavbar from '../Component/Home2/ChristmasNavbar';
import ChristmasHero from '../Component/Home2/ChristmasHero';
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
    <div className="min-h-screen bg-gradient-to-b from-[#400508] via-[#2d0305] to-[#180103] text-white flex flex-col font-sans selection:bg-[#ffd700] selection:text-[#380407] relative overflow-x-hidden">
      
      {/* 00. Continuous Falling Snow Particle Canvas */}
      <ChristmasSnowCanvas />

      {/* Ambient Bokeh and Warm Glow Lights in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#a8141b]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#ffd700]/10 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 left-10 w-[650px] h-[650px] bg-[#c4120c]/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#ffd700]/8 rounded-full blur-[140px]" />
      </div>

      {/* 01. Glassmorphic Christmas Sticky Navbar */}
      <ChristmasNavbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02. Cinematic 3D Christmas Hero Section (Three.js Flying Santa, Decorated Tree & Floating Gifts) */}
        <ChristmasHero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 03. The Spirit of Christmas: Story, 3D Wreath Visual & Animated Counters */}
        <ChristmasAboutSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 04. 5 Signature Christmas Events with 3D Glass Cards & Details Modal */}
        <ChristmasEventsSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 05. Immersive Parallax Winter Experience Journey */}
        <ChristmasExperienceSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 06. Christmas Pass Registration with 3D Gift Box Visual */}
        <ChristmasRegisterSection />

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
