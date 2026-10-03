import { Trophy, Mail, Phone, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3f0701] border-t border-white/10 text-white/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={thezarLogo}
                alt="TheZar 2026 Logo"
                className="h-8 sm:h-9 w-auto object-contain rounded-full"
              />
              <span className="text-sm sm:text-base font-extrabold text-white tracking-wider uppercase font-sans">
                THEZAR <span className="text-white">2026</span>
              </span>
            </div>
            
            <p className="text-white/80 text-xs leading-relaxed max-w-sm">
              38 DISTRICTS • MULTI-DISCIPLINARY COMPETITIONS • ONE GRAND STAGE.
              The official premier state conference and competition platform across Tamil Nadu.
            </p>
            
            <div className="pt-2 flex flex-wrap items-center gap-2 text-white font-mono text-[11px]">
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-lg">Tamil Nadu Championship League</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-lg">Season 2026 - 2027</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 no-underline hover:text-white transition-colors">Home Page</a></li>
              <li><a href="#events" className="text-white/70 no-underline hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#districts" className="text-white/70 no-underline hover:text-white transition-colors">38 Districts</a></li>
              <li><a href="#about-thezar" className="text-white/70 no-underline hover:text-white transition-colors">About TheZar</a></li>
              <li><a href="#contact" className="text-white/70 no-underline hover:text-white transition-colors">Contact Helpdesk</a></li>
            </ul>
          </div>

          {/* Col 3: Participant Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Participant</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenRegister}
                  className="text-white/70 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Register Candidate Pass
                </button>
              </li>
              <li><a href="#mobile-app" className="text-white/70 no-underline hover:text-white transition-colors">Download Mobile App</a></li>
              <li><a href="#leaderboard" className="text-white/70 no-underline hover:text-white transition-colors">Statewide Leaderboard</a></li>
              <li><a href="#competitions" className="text-white/70 no-underline hover:text-white transition-colors">Competition Guidelines</a></li>
              <li><a href="#events" className="text-white/70 no-underline hover:text-white transition-colors">Venue & Schedule Map</a></li>
            </ul>
          </div>

          {/* Col 4: Secretariat & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">Support & Help</h4>
            <div className="space-y-2.5 text-white/80 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Anna Salai, Guindy, Chennai</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>secretariat@thezar2026.tn.gov.in</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>WhatsApp: +91 94444 12345</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© 2026 THEZAR Platform. All rights reserved across 38 Districts of Tamil Nadu.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
