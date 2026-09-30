import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

export default function CtaSection({ onOpenRegister }) {
  return (
    <section className="py-20 bg-slate-100 text-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Card Box matching Image 1 Section 5 */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-rose-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left relative overflow-hidden">
          
          {/* Left Text & Contact Info */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest bg-rose-100 px-3 py-1 rounded-full">
              [ HAVE QUESTIONS? CONTACT US! ]
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Your District Pass & Support
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our state secretariat and district convenors are available to assist with team registration, competition rules, and venue travel.
            </p>

            <div className="space-y-2 text-xs font-semibold text-slate-700 pt-1">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-rose-600" /> <strong>+91 98765 43210</strong> / +91 98400 11223</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-600" /> Anna Salai, Guindy, Chennai, Tamil Nadu 600025</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-rose-600" /> support@thezar2026.com</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-magenta-gradient shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Rounded Image Cut-out Frame matching Image 1 Section 5 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-rose-500 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="THEZAR Support Team"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
