import { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, ArrowRight } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['home', 'events', 'districts', 'about-thezar', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Events', targetId: 'events' },
    { name: 'Districts', targetId: 'districts' },
    { name: 'About TheZar', targetId: 'about-thezar' },
    { name: 'Contact', targetId: 'contact' },
  ];

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
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? 'shadow-[0_2px_12px_rgba(15,23,42,0.06)]' : 'shadow-[0_2px_12px_rgba(15,23,42,0.04)]'
      }`}
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #F1F5F9',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-center justify-between h-[62px] md:h-[68px] min-h-[62px] md:min-h-[68px]">
          
          {/* 1. Official TheZar Logo & Brand Text */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-2.5 shrink-0 no-underline hover:no-underline nav-link-clean group cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-sm flex items-center justify-center shrink-0 border border-amber-400/50 bg-[#3a0604]">
              <img
                src={thezarLogo}
                alt="TheZar Events 2026"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wider uppercase font-sans">
              THEZAR <span className="text-[#9e0804]">2026</span>
            </span>
          </a>

          {/* 2. Centered Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.targetId;

              return (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  className={`nav-link-clean text-[14px] font-semibold tracking-[-0.01em] relative transition-colors duration-200 no-underline hover:no-underline group cursor-pointer ${
                    isCurrent
                      ? 'text-[#9e0804] bg-[#9e080415] px-3.5 py-1.5 rounded-full font-bold'
                      : 'hover:text-[#9e0804] py-1 text-slate-700'
                  }`}
                  style={{
                    textDecoration: 'none',
                    color: isCurrent ? '#9e0804' : '#334155',
                  }}
                >
                  <span>{link.name}</span>
                  
                  {!isCurrent && (
                    <span
                      className="absolute bottom-[-5px] left-0 w-0 h-[2px] rounded-full transition-all duration-250 ease-out group-hover:w-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, #9e0804, #c4120c)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Actions: Circular Search, Circular Wishlist, Divider, and Rounded Pill Register */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Search Circular Button */}
            {/* <button
              onClick={(e) => scrollToSection(e, 'events')}
              className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#9e080410] hover:border-[#9e080430] hover:text-[#9e0804] hover:-translate-y-px transition-all duration-200 cursor-pointer"
              aria-label="Search"
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <Search className="w-4 h-4" />
            </button> */}

            {/* Wishlist / Heart Circular Button */}
            {/* <button
              onClick={(e) => scrollToSection(e, 'competitions')}
              className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#9e080410] hover:border-[#9e080430] hover:text-[#9e0804] hover:-translate-y-px transition-all duration-200 cursor-pointer"
              aria-label="Wishlist"
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <Heart className="w-4 h-4" />
            </button> */}

            {/* Subtle Vertical Divider */}
            <span
              className="w-[1px] h-6 bg-[#E2E8F0] mx-1"
              style={{
                width: '1px',
                height: '24px',
                backgroundColor: '#E2E8F0',
              }}
            />

            {/* Primary Pill Button: Register Now */}
            <button
              onClick={onOpenRegister}
              className="w-[176px] h-[40px] rounded-full text-[14px] font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-250 cursor-pointer"
              style={{
                borderRadius: '9999px',
                width: '176px',
                height: '40px',
                background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
                boxShadow: '0 8px 20px rgba(158, 8, 4, 0.20)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #730502 0%, #9e0804 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(158, 8, 4, 0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #9e0804 0%, #730502 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(158, 8, 4, 0.20)';
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Compact CTA */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="h-9 px-4 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm cursor-pointer"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
              }}
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full text-[#334155] hover:text-[#071426] bg-[#F8FAFC] hover:bg-[#9e080410] border border-[#E2E8F0] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-200 space-y-1 text-left animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => scrollToSection(e, link.targetId)}
                className="block px-4 py-2.5 rounded-full text-[14px] font-semibold text-[#334155] hover:text-[#9e0804] hover:bg-[#9e080410] transition-colors no-underline hover:no-underline nav-link-clean cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full h-11 rounded-full font-bold text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md"
                style={{
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
                }}
              >
                <span>REGISTER CANDIDATE PASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
