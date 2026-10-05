import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is the Christmas Carol Fiesta 2026?',
      a: 'The Christmas Carol Fiesta 2026 is a grand pre-launch celebration and competition held on December 12, 2026 in Tirunelveli, Tamil Nadu. It unites musical talents, choirs, dancers, and families for an extraordinary holiday festival before the statewide league.'
    },
    {
      q: 'What are the 4 competition categories in the Carol Fiesta?',
      a: 'Category I: Kids Solo & Adult Solo Singing | Category II: Family Choir, School/College Choir, Church/Congregation Choir, and Music Bands | Category III: Solo Dance & Group Dance | Category IV: Santa Claus Competition.'
    },
    {
      q: 'When does the Statewide Tamil Nadu Championship League officially begin?',
      a: 'The overall statewide championship officially launches from Tirunelveli on January 10, 2027, and expands across all 38 districts of Tamil Nadu featuring cooking championships, cultural arts, and digital reel contests.'
    },
    {
      q: 'Who can participate in these events?',
      a: 'Participation is open to all residents and teams across Tamil Nadu — individuals, kids, families, church congregations, schools, colleges, and independent music or dance troupes.'
    },
    {
      q: 'How do I obtain the official Venue Entry Pass?',
      a: 'You can submit your registration online on this website or download the TheZar Mobile App. Your verified QR code entry pass is generated instantly for scanning at venue gates.'
    }
  ];

  return (
    <div className="pt-6">
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase font-mono">
            FAQ • EVENT GUIDELINES
          </span>
          <div
            className="w-10 h-[2px] rounded-full"
            style={{
              backgroundColor: '#9e0804',
              boxShadow: '0 0 8px rgba(158, 8, 4, 0.40)',
            }}
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#3f0701] tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                openFaq === idx
                  ? 'bg-white border-[#9e0804]/40 shadow-sm'
                  : 'bg-white/80 border-slate-200/90 hover:border-slate-300 shadow-2xs'
              }`}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div className="p-4 sm:p-5 flex items-center justify-between font-bold text-xs sm:text-sm text-[#3f0701]">
                <span className="flex items-center gap-2">
                  <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${openFaq === idx ? 'text-[#9e0804]' : 'text-slate-400'}`} />
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#9e0804]' : ''}`} />
              </div>
              {openFaq === idx && (
                <div className="px-5 pb-4 text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
