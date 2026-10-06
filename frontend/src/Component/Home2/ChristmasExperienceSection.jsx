import { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import reindeerImg from '../../assets/xmas_reindeer.jpg';
import treeImg from '../../assets/xmas_tree.jpg';
import sleighImg from '../../assets/xmas_sleigh.jpg';

const experiences = [
  {
    step: '01',
    title: 'Santa\'s Midnight Sleigh Flight',
    subtitle: 'Where Holiday Journeys Begin',
    desc: 'Watch Santa Claus riding his traditional golden sleigh pulled by reindeer galloping across rolling snow-covered hills under a warm sunset glow.',
    image: sleighImg,
    features: ['Golden Sleigh Display', 'Snow Drift Trail', 'Magical Star Canopy'],
  },
  {
    step: '02',
    title: 'Majestic Reindeer Pavilion',
    subtitle: 'Meet Santa\'s Golden-Harnessed Reindeer',
    desc: 'Step inside the peaceful winter stable to meet majestic reindeer adorned with delicate golden fairy lights, brass jingle bells, and piles of velvet wrapped gifts.',
    image: reindeerImg,
    features: ['Reindeer Petting Zone', 'Brass Jingle Bell Souvenirs', 'Golden Wish Postbox'],
  },
  {
    step: '03',
    title: 'Grand Christmas Tree Plaza',
    subtitle: '70-Foot Landmark of Lights & Presents',
    desc: 'Gather around our magnificent pine Christmas tree adorned with thousands of golden fairy lights, crimson baubles, a glowing star, and mountains of wrapped presents.',
    image: treeImg,
    features: ['70-Foot Decorated Tree', 'Statewide Carol Choirs', 'Hourly Light Shows'],
  },
  {
    step: '04',
    title: 'Midnight Fireworks & Award Gala',
    subtitle: 'The Grand Finale Spectacle',
    desc: 'As midnight approaches, witness a world-class pyrotechnic and synchronized drone light show painting the winter night sky with holiday blessings.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1000&q=80',
    features: ['Drone Light Art', 'Champion Trophies', 'Midnight Bell Blessing'],
  },
];

export default function ChristmasExperienceSection({ onOpenRegister }) {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#FAF7F2',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ maxWidth: '560px', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '40px', height: '1px', background: '#6B1A1A' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A' }}>
              Immersive Journey
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
            The Winter <span style={{ color: '#6B1A1A' }}>Experience</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#5C3D2E', lineHeight: 1.7 }}>
            Walk through a living winter story — from Santa's sleigh run to the illuminated tree plaza.
          </p>
        </div>

        {/* Step Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '2rem' }} className="exp-tabs">
          {experiences.map((e, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                textAlign: 'left',
                cursor: 'pointer',
                border: active === idx ? '1.5px solid #6B1A1A' : '1px solid rgba(107,26,26,0.08)',
                background: active === idx ? 'rgba(107,26,26,0.04)' : '#FFFFFF',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e2) => { if (active !== idx) e2.currentTarget.style.borderColor = 'rgba(107,26,26,0.2)'; }}
              onMouseLeave={(e2) => { if (active !== idx) e2.currentTarget.style.borderColor = 'rgba(107,26,26,0.08)'; }}
            >
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: active === idx ? '#6B1A1A' : '#8B7355',
              }}>
                {e.step}
              </span>
              <p style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#2C1810',
                margin: '0.25rem 0 0',
                lineHeight: 1.3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {e.title}
              </p>
            </button>
          ))}
        </div>

        {/* Active Experience */}
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            alignItems: 'center',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(107,26,26,0.08)',
            background: '#FFFFFF',
          }}
          className="exp-showcase"
        >
          {/* Image */}
          <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden' }}>
            <img
              src={exp.image}
              alt={exp.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, transition: 'transform 0.6s' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(44,24,16,0.7) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                Experience Zone {exp.step}
              </span>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 600, color: '#FFFFFF', marginTop: '0.2rem' }}>
                {exp.subtitle}
              </p>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '2rem' }}>
            <span style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: 'rgba(107,26,26,0.06)',
              color: '#6B1A1A',
              display: 'inline-block',
              marginBottom: '1rem',
            }}>
              Zone {exp.step}
            </span>

            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2C1810', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
              {exp.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#5C3D2E', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {exp.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {exp.features.map((f, i) => (
                <span key={i} style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  border: '1px solid rgba(107,26,26,0.15)',
                  color: '#5C3D2E',
                  background: 'rgba(107,26,26,0.03)',
                }}>
                  {f}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={onOpenRegister}
                style={{
                  padding: '0.75rem 1.8rem',
                  borderRadius: '9999px',
                  background: '#6B1A1A',
                  color: '#FAF7F2',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#4A0F0F'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#6B1A1A'}
              >
                Reserve
                <ArrowRight style={{ width: '13px', height: '13px' }} />
              </button>
              <button
                onClick={() => setActive((active + 1) % experiences.length)}
                style={{
                  padding: '0.75rem 1.2rem',
                  borderRadius: '9999px',
                  background: 'transparent',
                  color: '#6B1A1A',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  border: '1px solid rgba(107,26,26,0.2)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B1A1A'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.2)'}
              >
                Next Zone
                <ChevronRight style={{ width: '14px', height: '14px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-tabs { grid-template-columns: repeat(4, 1fr); }
        .exp-showcase { grid-template-columns: 1fr 1fr; }
        @media (max-width: 767px) {
          .exp-tabs { grid-template-columns: repeat(2, 1fr) !important; }
          .exp-showcase { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
