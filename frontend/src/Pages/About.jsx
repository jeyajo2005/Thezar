import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import AboutStorySection from '../Component/About/AboutStorySection';
import VisionMissionSection from '../Component/About/VisionMissionSection';
import CoreValuesSection from '../Component/About/CoreValuesSection';
import RegistrationModal from '../Component/Modals/RegistrationModal';

export default function About() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 01 Header */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02 About Hero */}
        <section className="py-20 bg-gradient-to-b from-[#3f0701] to-[#240401] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              ABOUT THEZAR PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Celebrating <span className="text-white underline decoration-white/40">Youth & Talent</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Learn about our journey, vision, and mission to empower participants across all 38 districts of Tamil Nadu.
            </p>
          </div>
        </section>

        {/* 03 Our Story */}
        <AboutStorySection />

        {/* 04 & 05 Vision & Mission */}
        <VisionMissionSection />

        {/* 08 Core Values */}
        <CoreValuesSection />

        {/* 09 CTA */}
        <section className="py-16 bg-slate-950 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-3xl font-black text-white">Be Part of THEZAR 2026</h2>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform cursor-pointer"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                color: '#071426',
              }}
            >
              <span className="font-extrabold text-[#071426]">Register Candidate Pass &rarr;</span>
            </button>
          </div>
        </section>

      </main>

      {/* 10 Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Modals */}
      {isRegisterOpen && <RegistrationModal onClose={() => setIsRegisterOpen(false)} />}

    </div>
  );
}
