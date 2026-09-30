import { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import ContactInfoSection from '../Component/Contact/ContactInfoSection';
import ContactFormSection from '../Component/Contact/ContactFormSection';
import FaqSection from '../Component/Contact/FaqSection';
import RegistrationModal from '../Component/Modals/RegistrationModal';

export default function Contact() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 01 Header */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      <main className="flex-1 space-y-0">
        
        {/* 02 Contact Hero */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              SECRETARIAT & PARTICIPANT HELP DESK
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Get in <span className="gradient-text">Touch with Us</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Have questions regarding district venues, competition rules, or candidate pass generation? We are here to assist.
            </p>
          </div>
        </section>

        {/* 03 & 04 Contact Info & Form */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
            <div className="lg:col-span-5">
              <ContactInfoSection />
            </div>
            <div className="lg:col-span-7">
              <ContactFormSection />
            </div>
          </div>
        </section>

        {/* 07 FAQ */}
        <FaqSection />

      </main>

      {/* 08 Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Modals */}
      {isRegisterOpen && <RegistrationModal onClose={() => setIsRegisterOpen(false)} />}

    </div>
  );
}
