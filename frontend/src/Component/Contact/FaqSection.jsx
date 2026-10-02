import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in THEZAR 2026?',
      a: 'Any resident or participant from any district across Tamil Nadu.'
    },
    {
      q: 'How do I obtain my Candidate Pass?',
      a: 'Click "Register Now" in the header, fill out your details, and your unique QR code pass will be generated instantly.'
    },
    {
      q: 'Can I participate in multiple competition tracks?',
      a: 'Yes! You can register for one track in your home district (e.g. Hackathon) and an individual track (e.g. Quiz).'
    },
    {
      q: 'Are there any registration fees?',
      a: 'Registration is free for all official district participants.'
    }
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 text-left space-y-6">
        <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest">[ 07 • FAQ ]</span>
        <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden cursor-pointer"
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div className="p-4 flex items-center justify-between font-bold text-xs sm:text-sm text-white">
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-rose-500' : ''}`} />
              </div>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
