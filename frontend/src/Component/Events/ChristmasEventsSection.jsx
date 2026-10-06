import { useRef, useState, useEffect, useMemo } from 'react';
import card1 from '../../assets/cards1.png';
import card2 from '../../assets/cards2.png';
import card3 from '../../assets/cards3.png';
import card4 from '../../assets/cards4.png';
import card5 from '../../assets/cards5.png';
import card6 from '../../assets/cards6.png';
import card7 from '../../assets/cards7.png';
import card8 from '../../assets/cards8.png';
import './christmas-events.css';

// generateSnowflakes utility — deterministic snowflake config generator
export function generateSnowflakes(count) {
  const snowflakes = [];
  for (let i = 0; i < count; i++) {
    const seed = i * 137.508;
    snowflakes.push({
      id: i,
      size: 3 + (seed % 7),
      left: (seed * 7.3) % 100,
      delay: (seed * 0.4) % 8,
      duration: 6 + (seed % 12),
      opacity: 0.3 + ((seed % 55) / 100),
      drift: -25 + (seed % 50),
    });
  }
  return snowflakes;
}

const CHRISTMAS_EVENTS = [
  {
    id: 'xmas-official-passes',
    title: 'TheZar Official VIP & Team Access Passes',
    subtitle: 'Event Organizer, Media Team, Decor, Stage & Support Team passes',
    date: 'Season 2026',
    time: 'All-Day Entry Access',
    image: card1,
    badge: 'Official Passes',
    ctaLabel: 'Register Pass',
    ctaAction: 'register',
    accentColor: '#9e0804',
  },
  {
    id: 'xmas-group-dance',
    title: 'Statewide Mega Group Dance Championship',
    subtitle: 'High-octane group dance performance on the golden concert stage',
    date: '12 Dec 2026',
    time: '04:00 PM – 09:00 PM',
    image: card2,
    badge: 'Championship Trophy',
    ctaLabel: 'Register Troupe',
    ctaAction: 'register',
    accentColor: '#dc2626',
  },
  {
    id: 'xmas-solo-dance',
    title: 'Solo Freestyle & Hip-Hop Dance Battle',
    subtitle: 'Tamil Nadu’s finest solo dancers battling for statewide championship',
    date: '12 Dec 2026',
    time: '01:00 PM – 04:00 PM',
    image: card3,
    badge: 'Solo Battle',
    ctaLabel: 'Register Solo',
    ctaAction: 'register',
    accentColor: '#ea580c',
  },
  {
    id: 'xmas-solo-singing',
    title: 'Statewide Solo Singing & Vocal Contest',
    subtitle: 'Mesmerizing solo vocal showcase with live acoustic orchestra',
    date: '12 Dec 2026',
    time: '10:00 AM – 02:00 PM',
    image: card4,
    badge: 'Golden Mic',
    ctaLabel: 'Register Singer',
    ctaAction: 'register',
    accentColor: '#16a34a',
  },
  {
    id: 'xmas-choirs-bands',
    title: 'Grand Carol Choirs & Music Band Symphony',
    subtitle: 'Festive choral groups and musical bands performing across 38 districts',
    date: '12 Dec 2026',
    time: '05:30 PM – 10:00 PM',
    image: card5,
    badge: 'Choir & Bands',
    ctaLabel: 'Register Choir',
    ctaAction: 'register',
    accentColor: '#7c3aed',
  },
  {
    id: 'xmas-santa-contest',
    title: 'Santa Claus Family Stage & Winter Carnival',
    subtitle: 'Family festive contest with winter gifts, photo souvenirs, and prizes',
    date: '12 Dec 2026',
    time: '11:00 AM – 06:00 PM',
    image: card6,
    badge: 'Kids & Family',
    ctaLabel: 'Join Contest',
    ctaAction: 'register',
    accentColor: '#b91c1c',
  },
  {
    id: 'xmas-kids-singing',
    title: 'Junior Carol Fiesta & Kids Singing Contest',
    subtitle: 'Young rising prodigies and junior choirs singing festive melodies',
    date: '12 Dec 2026',
    time: '09:00 AM – 01:00 PM',
    image: card7,
    badge: 'Junior Category',
    ctaLabel: 'Register Kids',
    ctaAction: 'register',
    accentColor: '#0284c7',
  },
  {
    id: 'xmas-kids-solo',
    title: 'Kids Solo Singing Vocal Prodigy',
    subtitle: 'Young solo prodigy competition on the grand TheZar arena stage',
    date: '12 Dec 2026',
    time: '02:00 PM – 05:00 PM',
    image: card8,
    badge: 'Solo Prodigy',
    ctaLabel: 'Register Solo',
    ctaAction: 'register',
    accentColor: '#d97706',
  },
];

// Task 4.1 — SnowfallLayer
function SnowfallLayer({ snowflakes, prefersReducedMotion }) {
  return (
    <div className="xmas-snow-layer" aria-hidden="true">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="xmas-snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            '--drift': `${flake.drift}px`,
            '--duration': `${flake.duration}s`,
            '--delay': `${flake.delay}s`,
            animationPlayState: prefersReducedMotion ? 'paused' : 'running',
          }}
        />
      ))}
    </div>
  );
}

// Task 4.2 — SectionHeader
function SectionHeader({ label, heading, subtitle }) {
  return (
    <div className="xmas-header">
      {/* Floating sparkle decorations */}
      <span className="xmas-sparkle" aria-hidden="true" style={{ top: '10%', left: '5%', fontSize: '1.2rem' }}>✦</span>
      <span className="xmas-sparkle" aria-hidden="true" style={{ top: '15%', right: '8%', fontSize: '0.9rem', animationDelay: '0.8s' }}>★</span>
      <span className="xmas-sparkle" aria-hidden="true" style={{ bottom: '20%', left: '10%', fontSize: '0.7rem', animationDelay: '1.5s' }}>✦</span>
      <span className="xmas-sparkle" aria-hidden="true" style={{ top: '30%', right: '5%', fontSize: '1rem', animationDelay: '2.2s' }}>❄</span>

      {/* Label pill */}
      <span className="xmas-label">{label}</span>

      {/* Decorative line */}
      <div className="decorative-maroon-line" />

      {/* Main heading */}
      <h2 className="xmas-heading">
        {heading.replace(' Events', '')} <span className="xmas-heading-accent">Events</span>
      </h2>

      {/* Subtitle */}
      <p className="xmas-subtitle">{subtitle}</p>
    </div>
  );
}

// Task 5.1 — ChristmasEventCard
function ChristmasEventCard({ event, onOpenRegister, inView, index }) {
  function handleCtaClick() {
    if (event.ctaAction === 'register') {
      onOpenRegister();
    } else if (event.ctaAction === 'scroll') {
      const el = document.getElementById('events');
      if (el) {
        const targetY = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  }

  const delay = index * 120;

  return (
    <div
      className={`xmas-card${inView ? ' xmas-card--visible' : ''}`}
      style={{ '--delay': `${delay}ms`, '--badge-color': event.accentColor }}
    >
      {/* Image area */}
      <div className="xmas-card__img-wrap">
        <img
          src={event.image}
          alt={`${event.title} — Christmas event image`}
          className="xmas-card__img"
        />
        <div className="xmas-card__overlay" />
        <span className="xmas-card__badge">{event.badge}</span>
      </div>

      {/* Card body */}
      <div className="xmas-card__body">
        <h3 className="xmas-card__title">{event.title}</h3>
        <p className="xmas-card__subtitle">{event.subtitle}</p>
        <div className="xmas-card__meta">
          <span>📅 {event.date}</span>
          <span>🕐 {event.time}</span>
        </div>
        <button
          className="xmas-cta-btn"
          onClick={handleCtaClick}
          type="button"
        >
          <span>{event.ctaLabel}</span>
          <svg
            className="xmas-cta-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ChristmasEventsSection({ onOpenRegister }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const snowflakes = useMemo(
    () => generateSnowflakes(isMobile ? 18 : 40),
    [isMobile]
  );

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="christmas-events" className="xmas-section">
      <SnowfallLayer snowflakes={snowflakes} prefersReducedMotion={prefersReducedMotion} />
      <div className="xmas-glow-bg" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="✦ CHRISTMAS SPECIAL ✦"
          heading="Christmas Events"
          subtitle="Celebrate the season with food, creativity and unforgettable moments."
        />
        <div className="xmas-cards-grid">
          {CHRISTMAS_EVENTS.map((event, index) => (
            <ChristmasEventCard
              key={event.id}
              event={event}
              onOpenRegister={onOpenRegister}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
