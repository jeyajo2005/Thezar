import heroSpeakerImg from '../../assets/Young_woman.png';
import { Calendar, MapPin, ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSiteContent } from '../../hooks/useSiteContent';

export default function Hero({ onOpenRegister, onReplayIntro, isRevealed = true }) {
  const { content } = useSiteContent();

  // Countdown timer to event start
  const calculateTimeLeft = () => {
    const targetDateStr = content?.heroCountdownDate || content?.countdownTargetDate || '2026-10-10T10:00:00+05:30';
    const target = new Date(targetDateStr);
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        background: '#FAF7F2',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Decorative ambient gradients */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-5%',
        width: '50vw',
        height: '50vw',
        maxWidth: '800px',
        maxHeight: '800px',
        background: 'radial-gradient(circle, rgba(107,26,26,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        maxWidth: '600px',
        maxHeight: '600px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '7rem 1.5rem 4rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
        className="hero-grid"
      >
        {/* LEFT: Text content */}
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Eyebrow label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(107,26,26,0.05)',
            border: '1px solid rgba(107,26,26,0.1)',
            borderRadius: '9999px',
          }}>
            <Sparkles style={{ width: '14px', height: '14px', color: '#6B1A1A' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A' }}>
              {content?.heroEyebrow || "Tamil Nadu's Grandest Stage"}
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(3.5rem, 6vw, 6rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#1A1A1A',
            margin: '0 0 1.25rem',
            letterSpacing: '-0.02em',
          }}>
            {content?.heroTitleLine1 || "The Taste"}<br />
            <span style={{ fontStyle: 'italic', color: '#6B1A1A', fontWeight: 700 }}>{content?.heroTitleLine2 || "of Tamil"}</span><br />
            {content?.heroTitleLine3 || "Nadu."}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#4A4A4A',
            lineHeight: 1.7,
            margin: '0 0 2.5rem',
            maxWidth: '520px',
            fontWeight: 400,
          }}>
            {content?.heroSubtitle || "Statewide Culinary Championship — 38 Districts, One Grand Stage. Unleashing extraordinary cooking talent across the cultural heart of India."}
          </p>

          {/* Premium Countdown */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            background: '#FFFFFF',
            padding: '1.25rem 2rem',
            borderRadius: '16px',
            border: '1px solid rgba(107,26,26,0.08)',
            boxShadow: '0 10px 40px rgba(107,26,26,0.05)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(107,26,26,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar style={{ width: '20px', height: '20px', color: '#6B1A1A' }} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B7355', marginBottom: '0.2rem' }}>
                  Countdown to Oct 10
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810' }}>{String(timeLeft.days).padStart(2, '0')}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B1A1A' }}>d</span>
                  </div>
                  <span style={{ color: 'rgba(107,26,26,0.2)' }}>:</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810' }}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B1A1A' }}>h</span>
                  </div>
                  <span style={{ color: 'rgba(107,26,26,0.2)' }}>:</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810' }}>{String(timeLeft.mins).padStart(2, '0')}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B1A1A' }}>m</span>
                  </div>
                  <span style={{ color: 'rgba(107,26,26,0.2)' }}>:</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810' }}>{String(timeLeft.secs).padStart(2, '0')}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B1A1A' }}>s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={onOpenRegister}
              className="premium-btn"
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(107,26,26,0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4A0F0F'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(107,26,26,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6B1A1A'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(107,26,26,0.25)'; }}
            >
              <span>Register Now</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
            
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  background: 'transparent',
                  color: '#6B1A1A',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: '1px solid rgba(107,26,26,0.2)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(107,26,26,0.04)'; e.currentTarget.style.borderColor = '#6B1A1A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(107,26,26,0.2)'; }}
              >
                <PlayCircle style={{ width: '18px', height: '18px' }} />
                <span>Replay Intro</span>
              </button>
            )}
          </div>
        </div>

        {/* RIGHT: Editorial image frame */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          
          {/* Subtle Background Circle */}
          <div style={{
            position: 'absolute',
            width: '80%',
            aspectRatio: '1/1',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(107,26,26,0.08) 0%, transparent 100%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }} />

          {/* Premium Image Container */}
          <div style={{
            width: '100%',
            maxWidth: '480px',
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(107,26,26,0.35), 0 0 40px rgba(107,26,26,0.2)',
            position: 'relative',
            zIndex: 1,
            border: '4px solid #FFFFFF',
            transform: 'rotate(-2deg)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 40px 100px rgba(107,26,26,0.45), 0 0 60px rgba(107,26,26,0.3)';
            e.currentTarget.style.borderColor = '#FAF7F2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'rotate(-2deg) scale(1)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(107,26,26,0.35), 0 0 40px rgba(107,26,26,0.2)';
            e.currentTarget.style.borderColor = '#FFFFFF';
          }}
          >
            <img
              src={heroSpeakerImg}
              alt="TheZar Cooking Championship"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center 20%',
                filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
                transition: 'filter 0.5s ease'
              }}
            />
            {/* Elegant vignette and overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 40%, rgba(26,10,10,0.5) 100%)', mixBlendMode: 'multiply' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(44,24,16,0.85) 100%)' }} />
          </div>

          {/* Floating Badges */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            zIndex: 10,
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '1rem 1.5rem',
            boxShadow: '0 12px 40px rgba(107,26,26,0.12)',
            border: '1px solid rgba(107,26,26,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'floatBadge 6s ease-in-out infinite',
          }}>
            <div style={{ width: '3px', height: '32px', background: '#6B1A1A', borderRadius: '4px' }} />
            <div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2C1810', fontFamily: "'Playfair Display', Georgia, serif", display: 'block', lineHeight: 1 }}>38</span>
              <span style={{ fontSize: '0.65rem', color: '#8B7355', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Districts</span>
            </div>
          </div>
          
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            zIndex: 10,
            background: '#6B1A1A',
            borderRadius: '9999px',
            padding: '0.6rem 1.25rem',
            boxShadow: '0 12px 30px rgba(107,26,26,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'floatBadge 5s ease-in-out infinite 1s',
          }}>
            <MapPin style={{ width: '14px', height: '14px', color: '#F2C4A0' }} />
            <span style={{ fontSize: '0.65rem', color: '#FAF7F2', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tirunelveli Hub</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBadge {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          .hero-grid > div:first-child {
            align-items: center !important;
          }
          .hero-grid > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child .premium-btn {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
