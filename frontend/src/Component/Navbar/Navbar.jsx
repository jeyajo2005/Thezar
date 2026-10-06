import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial state correctly
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', targetId: 'home' },
    { name: 'Events', targetId: 'events' },
    { name: 'Districts', targetId: 'districts' },
    { name: 'About Us', targetId: 'about-thezar' },
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
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        // Always visible, elegant background
        backgroundColor: '#FFFFFF',
        // Subtle shadow appears only when scrolled, but border is always there
        borderBottom: '1px solid rgba(107, 26, 26, 0.08)',
        boxShadow: scrolled ? '0 4px 20px rgba(107, 26, 26, 0.05)' : 'none',
        transition: 'box-shadow 0.3s ease',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* 1. Logo & Brand Text */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              flexShrink: 0,
              textDecoration: 'none',
            }}
          >
            <img
              src={thezarLogo}
              alt="TheZar Logo"
              style={{
                height: '2.5rem',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <span
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2C1810',
              }}
            >
              THEZAR <span style={{ color: '#6B1A1A' }}>2026</span>
            </span>
          </a>

          {/* 2. Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="md-nav"
          >
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.targetId;
              return (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  className="nav-link-clean"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: isCurrent ? '#6B1A1A' : '#4A4A4A',
                    position: 'relative',
                    transition: 'color 0.2s ease',
                    display: 'inline-block',
                    padding: '0.5rem 0',
                  }}
                  onMouseEnter={(e) => {
                    if (!isCurrent) e.currentTarget.style.color = '#6B1A1A';
                  }}
                  onMouseLeave={(e) => {
                    if (!isCurrent) e.currentTarget.style.color = '#4A4A4A';
                  }}
                >
                  {link.name}
                  {/* Subtle Gold/Burgundy Active/Hover Indicator */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: isCurrent ? '100%' : '0%',
                      height: '2px',
                      borderRadius: '9999px',
                      backgroundColor: '#6B1A1A',
                      transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    className={isCurrent ? '' : 'nav-underline'}
                  />
                </a>
              );
            })}
          </nav>

          {/* 3. Desktop Actions */}
          <div
            style={{ display: 'none', alignItems: 'center', gap: '1rem', flexShrink: 0 }}
            className="md-actions"
          >
            {/* Register button */}
            <button
              onClick={onOpenRegister}
              style={{
                borderRadius: '9999px',
                padding: '0 1.5rem',
                height: '42px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 12px rgba(107, 26, 26, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A0F0F';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(107, 26, 26, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6B1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(107, 26, 26, 0.15)';
              }}
            >
              <span>Register Now</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* Mobile Actions: compact register + hamburger */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            className="mobile-actions"
          >
            <button
              onClick={onOpenRegister}
              style={{
                height: '36px',
                padding: '0 1rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(107, 26, 26, 0.15)',
              }}
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(107, 26, 26, 0.04)',
                border: '1px solid rgba(107, 26, 26, 0.1)',
                color: '#6B1A1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {mobileMenuOpen
                ? <X style={{ width: '20px', height: '20px' }} />
                : <Menu style={{ width: '20px', height: '20px' }} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                color: '#2C1810',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              THEZAR <span style={{ color: '#6B1A1A' }}>2026</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(107, 26, 26, 0.04)',
                border: '1px solid rgba(107, 26, 26, 0.1)',
                color: '#6B1A1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Close menu"
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          </div>

          {/* Large nav links */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => {
              const isCurrent = activeSection === link.targetId;
              return (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  style={{
                    display: 'block',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: isCurrent ? '#6B1A1A' : '#2C1810',
                    textDecoration: 'none',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(107, 26, 26, 0.08)',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Register button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            style={{
              marginTop: '2rem',
              width: '100%',
              padding: '1.2rem',
              borderRadius: '9999px',
              background: '#6B1A1A',
              color: '#FAF7F2',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(107, 26, 26, 0.2)',
            }}
          >
            Register Now
          </button>
        </div>
      )}

      {/* Inline styles for responsive desktop/mobile visibility */}
      <style>{`
        @media (min-width: 992px) {
          .md-nav { display: flex !important; }
          .md-actions { display: flex !important; }
          .mobile-actions { display: none !important; }
        }
        @media (max-width: 991px) {
          .md-nav { display: none !important; }
          .md-actions { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
        .nav-link-clean:hover .nav-underline {
          width: 100% !important;
        }
      `}</style>
    </header>
  );
}
