import { useState, useEffect, useRef } from 'react';
import { Users, Trophy, Award, Building2, ArrowRight } from 'lucide-react';
import santaGiftImg from '../../assets/xmas_santa_gift.jpg';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCount(Math.floor((step / steps) * target));
            if (step >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const pillars = [
  { num: '01', title: 'Festival Heritage & Spirit', desc: 'Bringing together 38 districts in unity and holiday celebration.' },
  { num: '02', title: 'The Joy of Giving', desc: 'Over 5,000 winter meals & gift boxes distributed to children.' },
  { num: '03', title: 'Grand Winter Arenas', desc: 'Carols, symphony concerts, and Santa workshops.' },
  { num: '04', title: 'Statewide Honours', desc: 'Champion awards & festive prizes across arts and innovation.' },
];

const stats = [
  { label: 'Happy Guests', value: 1000, suffix: '+', icon: Users, sub: 'Across 38 Districts' },
  { label: 'Festive Events', value: 25, suffix: '+', icon: Trophy, sub: 'Competitions' },
  { label: 'Years Legacy', value: 15, suffix: '+', icon: Award, sub: 'Heritage of Joy' },
  { label: 'Partners', value: 50, suffix: '+', icon: Building2, sub: 'Sponsors & Patrons' },
];

export default function ChristmasAboutSection({ onOpenRegister }) {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#FAF7F2',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section header */}
        <div style={{ maxWidth: '560px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '40px', height: '1px', background: '#6B1A1A' }} />
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B1A1A',
            }}>
              Our Heritage
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#2C1810',
            lineHeight: 1.15,
            margin: '0 0 0.75rem',
          }}>
            The Spirit of <span style={{ color: '#6B1A1A' }}>Christmas</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#5C3D2E',
            lineHeight: 1.7,
          }}>
            TheZar Christmas brings collegiate excellence, warmth, and compassion under one majestic festive tent across Tamil Nadu.
          </p>
        </div>

        {/* Two-column editorial layout */}
        <div style={{ display: 'grid', gap: '2rem' }} className="about-grid">

          {/* Left: Image with editorial overlay */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '420px' }}>
            <img
              src={santaGiftImg}
              alt="The Spirit of Christmas at THEZAR"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                position: 'absolute',
                inset: 0,
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(44,24,16,0.85) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              zIndex: 10,
            }}>
              <span style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
              }}>
                The Gift of Magic & Cheer
              </span>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.4,
                marginTop: '0.35rem',
              }}>
                Spreading warmth across every home and campus in Tamil Nadu.
              </p>
            </div>
          </div>

          {/* Right: Content pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {pillars.map((p) => (
                <div
                  key={p.num}
                  style={{
                    padding: '1.5rem',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(107,26,26,0.08)',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(107,26,26,0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(107,26,26,0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(107,26,26,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'rgba(107,26,26,0.15)',
                  }}>
                    {p.num}
                  </span>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#2C1810',
                    margin: '0.5rem 0 0.3rem',
                  }}>
                    {p.title}
                  </h4>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#8B7355',
                    lineHeight: 1.5,
                  }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenRegister}
              style={{
                marginTop: '1.5rem',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontWeight: 700,
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                alignSelf: 'flex-start',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A0F0F';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6B1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Join the Celebration
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            marginTop: '3.5rem',
          }}
          className="stats-grid"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(107,26,26,0.08)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(107,26,26,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(107,26,26,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}>
                  <Icon style={{ width: '22px', height: '22px', color: '#6B1A1A' }} />
                </div>
                <p style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#6B1A1A',
                  lineHeight: 1,
                  margin: '0',
                }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2C1810', marginTop: '0.35rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: '0.7rem', color: '#8B7355', marginTop: '0.15rem' }}>
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        .stats-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
