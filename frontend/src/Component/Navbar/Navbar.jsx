import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Heart, ArrowRight } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Districts', path: '/districts' },
    { name: 'About TheZar', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

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
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 no-underline hover:no-underline nav-link-clean group"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={thezarLogo}
              alt="TheZar Events 2026"
              className="h-8 sm:h-9 w-auto object-contain rounded-full group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wider uppercase font-sans">
              THEZAR <span className="text-[#3f0701]">2026</span>
            </span>
          </Link>

          {/* 2. Centered Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isCurrent =
                location.pathname === link.path ||
                (link.path === '/' && (location.pathname === '/' || location.pathname === ''));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link-clean text-[14px] font-semibold tracking-[-0.01em] relative transition-colors duration-200 no-underline hover:no-underline group ${
                    isCurrent
                      ? 'text-[#3f0701] bg-[#FAF0F0] px-3.5 py-1.5 rounded-full font-bold'
                      : 'hover:text-[#3f0701] py-1'
                  }`}
                  style={{
                    textDecoration: 'none',
                    color: isCurrent ? '#3f0701' : '#334155',
                  }}
                >
                  <span>{link.name}</span>
                  
                  {/* Custom Animated Gradient Underline (Active on hover only, never on initial load or active pill) */}
                  {!isCurrent && (
                    <span
                      className="absolute bottom-[-5px] left-0 w-0 h-[2px] rounded-full transition-all duration-250 ease-out group-hover:w-full pointer-events-none"
                      style={{
                        background: '#3f0701',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Actions: Circular Search, Circular Wishlist, Divider, and Rounded Pill Register */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Search Circular Button */}
            <button
              className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#FAF0F0] hover:border-[#3f0701]/30 hover:text-[#3f0701] hover:-translate-y-px transition-all duration-200 cursor-pointer"
              aria-label="Search"
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist / Heart Circular Button */}
            <button
              className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#FAF0F0] hover:border-[#3f0701]/30 hover:text-[#3f0701] hover:-translate-y-px transition-all duration-200 cursor-pointer"
              aria-label="Wishlist"
              style={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
              }}
            >
              <Heart className="w-4 h-4" />
            </button>

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
              className="w-[176px] h-[40px] rounded-full text-[13px] font-black uppercase tracking-wider flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer shadow-md shadow-[#D1A44C]/30 hover:scale-[1.02]"
              style={{
                borderRadius: '9999px',
                width: '176px',
                height: '40px',
                background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                color: '#071426',
                boxShadow: '0 4px 14px rgba(184, 133, 40, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ECC880 0%, #DCB056 50%, #C49132 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 133, 40, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(184, 133, 40, 0.35)';
              }}
            >
              <span className="font-extrabold text-[#071426]">REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 text-[#071426] transition-transform duration-200 group-hover:translate-x-[3px]" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Compact CTA */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="h-9 px-4 rounded-full text-xs font-black uppercase tracking-wider shadow-sm cursor-pointer"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                color: '#071426',
              }}
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full text-[#334155] hover:text-[#3f0701] bg-[#F8FAFC] hover:bg-[#FAF0F0] border border-[#E2E8F0] flex items-center justify-center transition-colors cursor-pointer"
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
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-full text-[14px] font-semibold text-[#334155] hover:text-[#3f0701] hover:bg-[#FAF0F0] transition-colors no-underline hover:no-underline nav-link-clean"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full h-11 rounded-full font-black text-[#071426] flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md"
                style={{
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                  color: '#071426',
                }}
              >
                <span className="font-extrabold text-[#071426]">REGISTER CANDIDATE PASS</span>
                <ArrowRight className="w-4 h-4 text-[#071426]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
