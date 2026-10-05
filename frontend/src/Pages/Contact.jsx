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
        <section className="py-20 bg-gradient-to-b from-[#3f0701] to-[#1a0301] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <span className="text-xs font-mono font-bold text-red-200 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              TAMIL NADU STATEWIDE COMPETITION & CAROL FIESTA HELPDESK
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Event <span className="gradient-text">Enquiry & Secretariat</span>
            </h1>
            <p className="text-red-100/90 text-sm sm:text-base max-w-2xl mx-auto">
              Official helpdesk for the <strong>Christmas Carol Fiesta 2026 (Dec 12, Tirunelveli)</strong> and the <strong>Statewide 38-District Championship (Jan 10, 2027)</strong>.
            </p>
          </div>
        </section>

        {/* 03 & 04 Contact Info & Form */}
        <section className="py-16 bg-[#F8FAFC] text-slate-900">
          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl">
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

      </main>

      {/* 08 Footer */}
      <Footer onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Modals */}
      {isRegisterOpen && <RegistrationModal onClose={() => setIsRegisterOpen(false)} />}

    </div>
  );
}
