import { useState } from 'react';
import { Sparkles, Heart, Mail, CheckCircle2, Star } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ChristmasFooter({ onOpenRegister }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#120102] text-white pt-16 pb-12 border-t-2 border-[#ffd700]/30 relative overflow-hidden">
      
      {/* Background Subtle Star Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-8 left-12"><Star className="w-3.5 h-3.5 text-[#ffd700] fill-[#ffd700] animate-twinkle" /></div>
        <div className="absolute top-16 right-20"><Star className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" /></div>
        <div className="absolute bottom-12 left-1/3"><Star className="w-3 h-3 text-[#ffd700] fill-[#ffd700] animate-twinkle delay-200" /></div>
        <div className="absolute bottom-8 right-1/4"><Star className="w-2.5 h-2.5 text-amber-200 fill-amber-200 animate-pulse delay-500" /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] to-[#b45309] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#380407] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#ffd700]" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider gold-gradient-text">
                  THEZAR 2026
                </span>
                <p className="font-christmas text-sm text-amber-200 -mt-1">
                  Christmas Winter Carnival
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed font-light">
              Tamil Nadu’s premier collegiate, cultural, and holiday winter festival. Bringing together the magic of Christmas across all 38 districts.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: '#' },
                { icon: FacebookIcon, href: '#' },
                { icon: YoutubeIcon, href: '#' },
                { icon: TwitterIcon, href: '#' },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-[#ffd700]/30 text-[#ffd700] hover:scale-110 flex items-center justify-center transition-all shadow-sm"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ffd700] font-mono">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-rose-100/80 list-none p-0">
              <li><a href="#hero" className="hover:text-[#ffd700] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#ffd700] transition-colors">About Festival</a></li>
              <li><a href="#events" className="hover:text-[#ffd700] transition-colors">Winter Events</a></li>
              <li><a href="#experience" className="hover:text-[#ffd700] transition-colors">Experience Zones</a></li>
              <li><a href="#register" className="hover:text-[#ffd700] transition-colors">Book Passes</a></li>
              <li><a href="#contact" className="hover:text-[#ffd700] transition-colors">Contact Santa</a></li>
            </ul>
          </div>

          {/* Col 3: Festive Events (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ffd700] font-mono">
              Winter Events
            </p>
            <ul className="space-y-2 text-xs text-rose-100/80 list-none p-0">
              <li>Christmas Eve Gala</li>
              <li>Santa Meet & Greet</li>
              <li>Winter Wonderland</li>
              <li>Christmas Market</li>
              <li>New Year Fireworks</li>
              <li>Youth Carol Choirs</li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ffd700] font-mono">
              Santa's Newsletter
            </p>
            <p className="text-xs text-rose-100/80 leading-relaxed font-light">
              Subscribe to get holiday updates, secret Santa gift drops, and ticket discount alerts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400 text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You’re on Santa’s VIP Holiday List!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] text-xs text-white placeholder-rose-200/40 focus:outline-none transition-colors shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-md hover:scale-101 cursor-pointer transition-all"
                >
                  Join Festive Newsletter
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Greetings */}
        <div className="pt-8 border-t border-[#ffd700]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200/70 font-light">
          <p>© 2026 THEZAR. All Rights Reserved. Wishing you a season of peace, joy and love.</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#ffd700]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for Christmas 2026</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
