import { useState } from 'react';
import aboutAudienceImg from '../../assets/about_audience.jpg';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutTheZarSection({ onOpenRegister }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="about-thezar"
      style={{
        background: '#FAF7F2',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Oversized background watermark */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-2rem',
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(8rem, 18vw, 16rem)',
        fontWeight: 700,
        color: 'rgba(107,26,26,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>ABOUT</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="about-grid">

          {/* LEFT: Text */}
          <div style={{ textAlign: 'left' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A', fontFamily: 'monospace' }}>
                ABOUT THEZAR
              </span>
              <span style={{ width: '40px', height: '1.5px', background: '#6B1A1A', display: 'inline-block' }} />
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#2C1810',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.02em',
            }}>
              WHERE TALENT <br />
              <em style={{ color: '#6B1A1A', fontStyle: 'italic' }}>meets</em>{' '}
              OPPORTUNITY
            </h2>

            {/* Description */}
            <p style={{ fontSize: '1rem', color: '#5C3D2E', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px' }}>
              TheZar brings participants together across Tamil Nadu through district-level competitions, innovation, creativity and achievement. From competitions to cultural spectacles, this is the definitive stage for state champions.
            </p>

            {/* Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
              {[
                '38 District preliminary stages leading to Chennai Mega Finals',
                'Grand House Prize + Mega Cash Prize Pool for winners',
                'Direct mentorship and networking with state industry leaders',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: '#6B1A1A', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#4A2820', lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Stat row */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', padding: '1.25rem 1.5rem', background: 'white', borderRadius: '1rem', border: '1px solid rgba(107,26,26,0.1)', boxShadow: '0 4px 20px rgba(107,26,26,0.06)' }}>
              {[
                { num: '38', label: 'Districts' },
                { num: '1', label: 'Grand Winner' },
                { num: '3', label: 'Positions' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center', flex: 1 }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 700, color: '#6B1A1A', display: 'block', lineHeight: 1 }}>{stat.num}</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#9B6B4A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#events"
                style={{ padding: '0.85rem 2rem', borderRadius: '9999px', background: 'transparent', color: '#6B1A1A', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1.5px solid rgba(107,26,26,0.4)', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#6B1A1A'; e.currentTarget.style.color = '#FAF7F2'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B1A1A'; }}
              >
                <span>KNOW MORE</span>
                <ArrowRight style={{ width: '15px', height: '15px' }} />
              </a>
              {onOpenRegister && (
                <button
                  type="button"
                  onClick={onOpenRegister}
                  style={{ padding: '0.85rem 2rem', borderRadius: '9999px', background: '#6B1A1A', color: '#FAF7F2', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#4A0F0F'}
                  onMouseLeave={e => e.currentTarget.style.background = '#6B1A1A'}
                >
                  REGISTER NOW
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {/* Decorative ring */}
            <div style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', border: '1px solid rgba(107,26,26,0.08)', pointerEvents: 'none' }} />

            {/* Editorial number */}
            <span style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(6rem, 12vw, 10rem)', fontWeight: 700, color: 'rgba(107,26,26,0.05)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', zIndex: 0 }}>01</span>

            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '520px', borderRadius: '1.75rem', overflow: 'hidden', boxShadow: '0 30px 80px rgba(107,26,26,0.15)' }}
              className="about-img-wrap">
              <img
                src={aboutAudienceImg}
                alt="TheZar Audience & Statewide Symposium"
                style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,24,16,0.65) 0%, transparent 55%)', pointerEvents: 'none' }} />

              {/* Caption */}
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 10 }}>
                <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F2C4A0', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>STATEWIDE SYMPOSIUM</span>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white', margin: 0 }}>Annual Statewide Talent & Innovation Expo</p>
              </div>

              {/* Play button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 20, width: '64px', height: '64px', borderRadius: '50%', background: '#6B1A1A', border: '3px solid rgba(255,255,255,0.3)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 8px 30px rgba(107,26,26,0.4)' }}
                aria-label="Play Introduction Video"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1.1)'; e.currentTarget.style.background = '#4A0F0F'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1)'; e.currentTarget.style.background = '#6B1A1A'; }}
              >
                <Play style={{ width: '22px', height: '22px', fill: 'white', marginLeft: '3px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-img-wrap img { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
