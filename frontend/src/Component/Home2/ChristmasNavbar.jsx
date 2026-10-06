import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Experience', href: '#experience' },
  { name: 'Register', href: '#register' },
  { name: 'Contact', href: '#contact' },
];

export default function ChristmasNavbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(107,26,26,0.08)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(107,26,26,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Brand */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 800,
              fontSize: '1.35rem',
              letterSpacing: '0.12em',
              color: '#6B1A1A',
            }}>
              THEZAR
            </span>
            <span style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#6B1A1A',
              border: '1.5px solid rgba(107,26,26,0.3)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
            }}>
              2026
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="thezar-desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#2C1810',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  position: 'relative',
                  paddingBottom: '0.25rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6B1A1A';
                  e.currentTarget.querySelector('.nav-line').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#2C1810';
                  e.currentTarget.querySelector('.nav-line').style.width = '0';
                }}
              >
                {link.name}
                <span
                  className="nav-line"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0',
                    height: '1.5px',
                    backgroundColor: '#6B1A1A',
                    transition: 'width 0.25s ease',
                    borderRadius: '999px',
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="thezar-desktop-cta">
            <button
              onClick={onOpenRegister}
              style={{
                padding: '0.6rem 1.6rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A0F0F';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(107,26,26,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6B1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Register Now</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="thezar-mobile-btn"
            style={{
              display: 'none',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(107,26,26,0.06)',
              border: '1px solid rgba(107,26,26,0.12)',
              color: '#6B1A1A',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen
              ? <X style={{ width: '20px', height: '20px' }} />
              : <Menu style={{ width: '20px', height: '20px' }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#FAF7F2',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 800,
              fontSize: '1.2rem',
              color: '#6B1A1A',
              letterSpacing: '0.12em',
            }}>
              THEZAR
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
              aria-label="Close menu"
            >
              <X style={{ width: '28px', height: '28px', color: '#2C1810' }} />
            </button>
          </div>

          <nav style={{ flex: 1 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#2C1810',
                  textDecoration: 'none',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(107,26,26,0.1)',
                  transition: 'color 0.2s',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
            style={{
              marginTop: '2rem',
              width: '100%',
              padding: '1rem',
              borderRadius: '9999px',
              background: '#6B1A1A',
              color: '#FAF7F2',
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Register Now
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .thezar-desktop-nav { display: flex !important; }
          .thezar-desktop-cta { display: flex !important; }
          .thezar-mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .thezar-desktop-nav { display: none !important; }
          .thezar-desktop-cta { display: none !important; }
          .thezar-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
