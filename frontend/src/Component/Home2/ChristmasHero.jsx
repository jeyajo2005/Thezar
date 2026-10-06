import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, MapPin, Play } from 'lucide-react';
import santaHeroImg from '../../assets/premium_xmas_santa.jpg';

const COUNTDOWN_TARGET = new Date('2026-12-25T00:00:00+05:30');

function useCountdown() {
  const calc = () => {
    const diff = COUNTDOWN_TARGET - new Date();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      mins: Math.floor((diff / 60000) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  };
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function ChristmasHero({ onOpenRegister }) {
  const { days, hours, mins, secs } = useCountdown();
  const heroRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setParallaxY(window.scrollY * 0.3);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: '#0a0a0a',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* ── Cinematic background image with parallax ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={santaHeroImg}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: `translateY(-${parallaxY}px)`,
            willChange: 'transform',
          }}
        />
        {/* Gradient overlays for depth and text readability */}
        {/* Deep dark gradient on the left for text contrast, fading to transparent on the right */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(15,5,5,0.85) 0%, rgba(30,10,10,0.5) 40%, transparent 100%)',
        }} />
        {/* Subtle dark gradient from bottom for layout grounding */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(10,5,5,0.7) 0%, transparent 30%)',
        }} />
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        <div style={{ maxWidth: '640px' }}>

          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              opacity: 0,
              animation: 'heroFadeUp 0.8s ease forwards 0.2s',
            }}
          >
            <span style={{
              width: '32px',
              height: '1px',
              background: 'rgba(255,255,255,0.5)',
              display: 'inline-block',
            }} />
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              THEZAR Christmas Carnival 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#FFFFFF',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.02em',
              opacity: 0,
              animation: 'heroFadeUp 0.8s ease forwards 0.4s',
            }}
          >
            Where Tamil Nadu
            <br />
            <em style={{ fontStyle: 'italic', color: '#F2C4A0' }}>Celebrates</em>
            <br />
            Christmas.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 0 2rem',
              fontWeight: 400,
              opacity: 0,
              animation: 'heroFadeUp 0.8s ease forwards 0.6s',
            }}
          >
            Five festive experiences. 38 districts. One grand winter stage.
            The magic of Christmas awaits you.
          </p>

          {/* Info pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
              opacity: 0,
              animation: 'heroFadeUp 0.8s ease forwards 0.7s',
            }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.08)',
            }}>
              <Calendar style={{ width: '13px', height: '13px' }} />
              Dec 24 – 31, 2026
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.08)',
            }}>
              <MapPin style={{ width: '13px', height: '13px' }} />
              Tirunelveli, Tamil Nadu
            </span>
          </div>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'heroFadeUp 0.8s ease forwards 0.8s',
            }}
          >
            <button
              onClick={onOpenRegister}
              style={{
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(107,26,26,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A0F0F';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(107,26,26,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6B1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(107,26,26,0.3)';
              }}
            >
              Register Now
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>

            <a
              href="#events"
              style={{
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              }}
            >
              <Play style={{ width: '14px', height: '14px' }} />
              Explore Events
            </a>
          </div>
        </div>

        {/* ── Countdown strip at bottom ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            opacity: 0,
            animation: 'heroFadeUp 0.8s ease forwards 1s',
          }}
          className="hero-countdown-strip"
        >
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            Countdown
          </span>
          {[
            { val: days, label: 'Days' },
            { val: hours, label: 'Hrs' },
            { val: mins, label: 'Min' },
            { val: secs, label: 'Sec' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#FFFFFF',
                display: 'block',
                lineHeight: 1,
              }}>
                {String(val).padStart(2, '0')}
              </span>
              <span style={{
                fontSize: '0.55rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 767px) {
          .hero-countdown-strip {
            position: static !important;
            margin-top: 2.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
