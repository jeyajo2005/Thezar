import { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about-thezar', 'events', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);

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
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-[0_6px_25px_rgba(0,0,0,0.85)]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
      }`}
      style={{
        background: 'linear-gradient(90deg, #050102 0%, #0c0205 28%, #160309 60%, #2c050f 100%)',
        borderBottom: '1.5px solid rgba(212, 160, 23, 0.45)',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="w-full px-4 sm:px-8">
        <div className="flex items-center justify-between md:justify-center md:gap-9 lg:gap-12 h-[58px] md:h-[64px]">
          
          {/* ================= 1. LEFT NAVIGATION (HOME, ABOUT) ================= */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {/* Home Link */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="group flex flex-col items-center justify-center text-[15px] lg:text-[16px] font-medium transition-colors cursor-pointer select-none no-underline hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === 'home'
                    ? 'text-[#fef08a] font-bold'
                    : 'text-white/90 group-hover:text-amber-200'
                }`}
              >
                Home
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-300 mt-1 ${
                  activeSection === 'home'
                    ? 'w-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_#f59e0b]'
                    : 'w-0 bg-transparent group-hover:w-full group-hover:bg-amber-400/70'
                }`}
              />
            </a>

            {/* About Link */}
            <a
              href="#about-thezar"
              onClick={(e) => scrollToSection(e, 'about-thezar')}
              className="group flex flex-col items-center justify-center text-[15px] lg:text-[16px] font-medium transition-colors cursor-pointer select-none no-underline hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === 'about-thezar'
                    ? 'text-[#fef08a] font-bold'
                    : 'text-white/90 group-hover:text-amber-200'
                }`}
              >
                About
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-300 mt-1 ${
                  activeSection === 'about-thezar'
                    ? 'w-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_#f59e0b]'
                    : 'w-0 bg-transparent group-hover:w-full group-hover:bg-amber-400/70'
                }`}
              />
            </a>
          </nav>

          {/* ================= 2. CENTER IDENTITY (THEZAR EVENTS) ================= */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex flex-col items-center justify-center group cursor-pointer select-none no-underline hover:no-underline py-1"
            style={{ textDecoration: 'none' }}
            aria-label="THEZAR EVENTS - Home"
          >
            <div className="relative flex items-center justify-center">
              {/* Sparkle Glint on the Title */}
              <Sparkles className="w-3.5 h-3.5 text-amber-200/90 absolute -top-1 left-2 animate-pulse pointer-events-none" />

              <span
                className="text-[24px] sm:text-[28px] md:text-[32px] font-black uppercase tracking-[0.16em] leading-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  background: 'linear-gradient(180deg, #fff7d6 0%, #f6ce6d 38%, #d49c28 72%, #a67215 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 8px rgba(212,160,23,0.35))',
                }}
              >
                THEZAR
              </span>
            </div>

            {/* Sub-label: — EVENTS — */}
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-4 sm:w-6 h-[1px] bg-gradient-to-r from-transparent to-amber-400/80" />
              <span
                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em]"
                style={{
                  color: '#e7c276',
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                EVENTS
              </span>
              <span className="w-4 sm:w-6 h-[1px] bg-gradient-to-l from-transparent to-amber-400/80" />
            </div>
          </a>

          {/* ================= 3. RIGHT NAVIGATION (EVENTS, CONTACT) + CTA BUTTON ================= */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {/* Events Link */}
            <a
              href="#events"
              onClick={(e) => scrollToSection(e, 'events')}
              className="group flex flex-col items-center justify-center text-[15px] lg:text-[16px] font-medium transition-colors cursor-pointer select-none no-underline hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === 'events'
                    ? 'text-[#fef08a] font-bold'
                    : 'text-white/90 group-hover:text-amber-200'
                }`}
              >
                Events
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-300 mt-1 ${
                  activeSection === 'events'
                    ? 'w-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_#f59e0b]'
                    : 'w-0 bg-transparent group-hover:w-full group-hover:bg-amber-400/70'
                }`}
              />
            </a>

            {/* Contact Link */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group flex flex-col items-center justify-center text-[15px] lg:text-[16px] font-medium transition-colors cursor-pointer select-none no-underline hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span
                className={`transition-colors duration-200 ${
                  activeSection === 'contact'
                    ? 'text-[#fef08a] font-bold'
                    : 'text-white/90 group-hover:text-amber-200'
                }`}
              >
                Contact
              </span>
              <span
                className={`h-[2px] rounded-full transition-all duration-300 mt-1 ${
                  activeSection === 'contact'
                    ? 'w-full bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_8px_#f59e0b]'
                    : 'w-0 bg-transparent group-hover:w-full group-hover:bg-amber-400/70'
                }`}
              />
            </a>

            {/* Register Now Luxury Pill CTA Button */}
            <button
              onClick={onOpenRegister}
              className="group h-[42px] px-6 rounded-full text-[14px] font-semibold text-white tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_16px_rgba(212,160,23,0.30)] hover:shadow-[0_0_24px_rgba(212,160,23,0.55)]"
              style={{
                background: 'linear-gradient(135deg, #7e0c18 0%, #9e0804 50%, #5a050f 100%)',
                border: '1.5px solid #d4a017',
              }}
            >
              <User className="w-4 h-4 text-white" />
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 text-amber-300 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* ================= MOBILE CONTROLS ================= */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Compact Mobile Register Button */}
            <button
              onClick={onOpenRegister}
              className="h-[36px] px-4 rounded-full text-[12px] font-bold text-white tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
              style={{
                background: 'linear-gradient(135deg, #7e0c18 0%, #9e0804 50%, #5a050f 100%)',
                border: '1.5px solid #d4a017',
              }}
            >
              <User className="w-3.5 h-3.5 text-white" />
              <span>Register</span>
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full text-amber-300 bg-white/5 hover:bg-white/10 border border-amber-400/40 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-300" /> : <Menu className="w-5 h-5 text-amber-300" />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN DRAWER ================= */}
        {mobileMenuOpen && (
          <div
            className="md:hidden pb-5 pt-3 border-t border-amber-400/20 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200 text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(12,2,5,0.98) 0%, rgba(5,1,2,0.98) 100%)',
            }}
          >
            {[
              { name: 'Home', targetId: 'home' },
              { name: 'About', targetId: 'about-thezar' },
              { name: 'Events', targetId: 'events' },
              { name: 'Contact', targetId: 'contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => scrollToSection(e, link.targetId)}
                className={`block py-2.5 px-4 rounded-xl text-[15px] font-medium transition-colors no-underline cursor-pointer ${
                  activeSection === link.targetId
                    ? 'text-amber-300 bg-white/10 font-bold'
                    : 'text-white/90 hover:text-amber-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full h-11 rounded-full font-bold text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #7e0c18 0%, #9e0804 50%, #5a050f 100%)',
                  border: '1.5px solid #d4a017',
                }}
              >
                <User className="w-4 h-4 text-white" />
                <span>REGISTER CANDIDATE PASS</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
