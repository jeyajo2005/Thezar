import { Trophy, Heart, Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenRegister, onSelectNavTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg-pink flex items-center justify-center text-white">
                <Trophy className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                THEZAR<span className="text-rose-500">.2026</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              38 DISTRICTS • MULTIPLE COMPETITIONS • ONE GRAND STAGE.
              Empowering Young Minds, Celebrating Talent Across Tamil Nadu. Official collegiate league platform.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">Tamil Nadu Statewide League</span>
              <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">2026 - 2027</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-rose-400 transition-colors">Home Page</a></li>
              <li><a href="#events" className="hover:text-rose-400 transition-colors">Upcoming Events</a></li>
              <li><a href="#districts" className="hover:text-rose-400 transition-colors">38 Districts Directory</a></li>
              <li><a href="#competitions" className="hover:text-rose-400 transition-colors">Competition Tracks</a></li>
              <li><a href="#leaderboard" className="hover:text-rose-400 transition-colors">State Leaderboard</a></li>
            </ul>
          </div>

          {/* Col 3: Key Features (Image 2 Section 8) */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Platform Features</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-amber-400">Event Registration Pass</span></li>
              <li><span className="hover:text-amber-400">Districtwise Management</span></li>
              <li><span className="hover:text-amber-400">Schedule & Live Updates</span></li>
              <li><span className="hover:text-amber-400">Results & Leaderboard</span></li>
              <li><span className="hover:text-amber-400">Mobile App with QR Login</span></li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Secretariat & Help</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-500 shrink-0" /> Anna Salai, Guindy, Chennai</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400 shrink-0" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-pink-400 shrink-0" /> info@thezar2026.tn.gov.in</p>
              <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-emerald-400 shrink-0" /> www.thezar2026.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 THEZAR Platform. All rights reserved across 38 Districts of Tamil Nadu.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-rose-500" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
