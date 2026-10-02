import { Trophy, Mail, Phone, MapPin, ArrowUp, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071426] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-400 flex items-center justify-center text-white shadow-md shadow-rose-500/25">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase font-sans">
                THEZAR <span className="text-rose-500">2026</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              38 DISTRICTS • MULTI-DISCIPLINARY COMPETITIONS • ONE GRAND STAGE.
              The official premier collegiate conference and competition platform across Tamil Nadu.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-2 text-slate-300 font-mono text-[11px]">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Tamil Nadu Collegiate League</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Season 2026 - 2027</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 no-underline hover:text-rose-400 transition-colors">Home Page</a></li>
              <li><a href="#events" className="text-slate-400 no-underline hover:text-rose-400 transition-colors">Upcoming Events</a></li>
              <li><a href="#districts" className="text-slate-400 no-underline hover:text-rose-400 transition-colors">38 Districts</a></li>
              <li><a href="#about-thezar" className="text-slate-400 no-underline hover:text-rose-400 transition-colors">About TheZar</a></li>
              <li><a href="#contact" className="text-slate-400 no-underline hover:text-rose-400 transition-colors">Contact Helpdesk</a></li>
            </ul>
          </div>

          {/* Col 3: Participant Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Participant</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenRegister}
                  className="hover:text-rose-300 transition-colors text-left cursor-pointer"
                >
                  Register Candidate Pass
                </button>
              </li>
              <li><a href="#mobile-app" className="text-slate-400 no-underline hover:text-rose-300 transition-colors">Download Mobile App</a></li>
              <li><a href="#leaderboard" className="text-slate-400 no-underline hover:text-rose-300 transition-colors">Statewide Leaderboard</a></li>
              <li><a href="#competitions" className="text-slate-400 no-underline hover:text-rose-300 transition-colors">Competition Guidelines</a></li>
              <li><a href="#events" className="text-slate-400 no-underline hover:text-rose-300 transition-colors">Venue & Schedule Map</a></li>
            </ul>
          </div>

          {/* Col 4: Secretariat & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Support & Help</h4>
            <div className="space-y-2.5 text-slate-400 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Anna Salai, Guindy, Chennai</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-300 shrink-0" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>secretariat@thezar2026.tn.gov.in</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 94444 12345</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 THEZAR Platform. All rights reserved across 38 Districts of Tamil Nadu.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-rose-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
