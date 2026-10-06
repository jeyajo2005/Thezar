import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';
import footerLuxuryBg from '../../assets/footer_luxury_bg.png';

// Social Media Icons
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

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Footer({ onOpenRegister }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.hash = '#' + targetId;
    }
  };

  return (
    <footer 
      className="w-full relative overflow-hidden bg-[#FAF7F2] text-[#2C1810]"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background Luxury Ribbon Art Layer matching reference */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-95 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${footerLuxuryBg})`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
        aria-hidden="true"
      />

      {/* Subtle Warm Gradient Overlay for Pristine Readability */}
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/50 to-white/75"
        aria-hidden="true"
      />

      {/* Decorative Gold Top Edge Accent */}
      <div className="relative w-full h-[3px] bg-gradient-to-r from-[#D4AF37]/30 via-[#6B1414] to-[#D4AF37]/40" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 md:pt-20 pb-12">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 text-left">
          
          {/* Column 1: Brand & Identity (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md border border-[#D4AF37]/40 flex items-center justify-center transition-transform hover:scale-105">
                <img 
                  src={thezarLogo} 
                  alt="THEZAR Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-black tracking-wider bg-gradient-to-r from-[#6B1414] via-[#8B1A1A] to-[#4A0A0A] bg-clip-text text-transparent block">
                  THEZAR
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] block -mt-0.5">
                  State Youth Championship
                </span>
              </div>
            </div>

            <p className="text-sm text-[#4A3B3E] leading-relaxed font-normal max-w-sm">
              Tamil Nadu’s premier youth talent championship and cultural festival platform. Dedicated to discovering, celebrating, and empowering extraordinary talents across all 38 districts.
            </p>

            {/* Social Icons Bar */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B1414] mb-3 flex items-center gap-2">
                <span>Connect With Us</span>
                <span className="w-8 h-[1px] bg-[#D4AF37]" />
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' },
                  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                  { icon: WhatsAppIcon, href: 'https://wa.me/919790351878', label: 'WhatsApp' },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-white hover:bg-[#6B1414] text-[#6B1414] hover:text-[#FAF7F2] border border-[#D4AF37]/50 shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#D4AF37]"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2.5 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B1414] font-sans">
                Navigation
              </p>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B38728] mt-1.5" />
            </div>
            <ul className="space-y-2.5 text-sm text-[#4A3B3E] list-none p-0 m-0">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about-thezar' },
                { label: 'Events & Schedule', id: 'events' },
                { label: '38 Districts Gallery', id: 'districts' },
                { label: 'Event Registration', action: onOpenRegister },
                { label: 'Contact & FAQ', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={(e) => link.action ? link.action() : scrollToSection(e, link.id)}
                    className="group flex items-center gap-2 text-left text-[#4A3B3E] hover:text-[#6B1414] transition-colors font-medium bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span className="text-[#D4AF37] text-xs transition-transform group-hover:translate-x-1 font-bold">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secretariat & Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B1414] font-sans">
                Central Secretariat
              </p>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B38728] mt-1.5" />
            </div>
            <div className="space-y-3.5 text-sm text-[#4A3B3E]">
              <a 
                href="mailto:thezarevents@gmail.com" 
                className="flex items-center gap-3 text-[#4A3B3E] hover:text-[#6B1414] transition-colors group no-underline"
                style={{ color: '#4A3B3E', textDecoration: 'none' }}
              >
                <div className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#6B1414] group-hover:bg-[#6B1414]/5 transition-all">
                  <Mail className="w-3.5 h-3.5 text-[#6B1414]" />
                </div>
                <span className="text-xs sm:text-sm font-medium">thezarevents@gmail.com</span>
              </a>

              <a 
                href="tel:+919790351878" 
                className="flex items-center gap-3 text-[#4A3B3E] hover:text-[#6B1414] transition-colors group no-underline"
                style={{ color: '#4A3B3E', textDecoration: 'none' }}
              >
                <div className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#6B1414] group-hover:bg-[#6B1414]/5 transition-all">
                  <Phone className="w-3.5 h-3.5 text-[#6B1414]" />
                </div>
                <span className="text-xs sm:text-sm font-medium font-mono">97903 51878</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6B1414]" />
                </div>
                <div className="text-xs leading-relaxed">
                  <strong className="block text-[#6B1414] font-semibold">Secretariat Office:</strong>
                  Tirunelveli 627001, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Updates (3.5 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B1414] font-sans">
                Official Newsletter
              </p>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B38728] mt-1.5" />
            </div>
            
            <p className="text-xs text-[#4A3B3E] leading-relaxed">
              Keep up on championship schedules, district fixtures, and exclusive stage announcements.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C7A7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/90 border border-[#D4AF37]/50 focus:border-[#6B1414] text-xs text-[#2C1810] placeholder-[#8C7A7C] focus:outline-none transition-all shadow-sm focus:ring-2 focus:ring-[#6B1414]/15"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6B1414] via-[#8B1A1A] to-[#6B1414] hover:from-[#540F0F] hover:to-[#781717] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-[#D4AF37]/40"
                >
                  <span>Join Official Bulletin</span>
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider with Gold Accent */}
        <div className="mt-14 pt-6 border-t border-[#D4AF37]/35 relative">
          <div className="absolute left-1/2 -top-[5px] -translate-x-1/2 w-12 h-[3px] bg-[#D4AF37] rounded-full" />
        </div>

        {/* Bottom Bar: Trust Badges, Legal Links, and Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 text-xs text-[#5D4A4D]">
          
          {/* Trust Badge & Districs */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/50 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-bold text-[11px] tracking-wider uppercase text-[#6B1414]">
                Trusted Events
              </span>
            </div>
            <span className="hidden sm:inline text-[#8C7A7C]">•</span>
            <span className="text-[11px] font-semibold text-[#6B1414]">
              38 Districts Championship
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-3 text-[11px] text-[#6B1414] font-medium">
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-[#6B1414]">Privacy Policy</button>
            <span className="text-[#D4AF37]">•</span>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-[#6B1414]">Terms &amp; Conditions</button>
            <span className="text-[#D4AF37]">•</span>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-[#6B1414]">Refund Policy</button>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <p className="m-0 font-normal">
              © 2026 <strong className="text-[#6B1414] font-semibold">THEZAR</strong>. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="px-4 py-1.5 rounded-full bg-white hover:bg-[#6B1414] text-[#6B1414] hover:text-[#FAF7F2] border border-[#D4AF37]/60 shadow-sm hover:shadow text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
