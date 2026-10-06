import { useRef, useState, useEffect, useMemo } from 'react';
import christmasCakeImg from '../../assets/christmas_cake.jpg';
import christmasDecorImg from '../../assets/christmas_decor.jpg';
import christmasGiftsImg from '../../assets/christmas_gifts.jpg';
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
    id: 'xmas-cooking-celebration',
    title: 'Christmas Cooking Celebration',
    subtitle: 'A festive cooking experience filled with seasonal flavors',
    date: '22 Dec 2026',
    time: '10:00 AM – 04:00 PM',
    image: christmasCakeImg,
    badge: 'Festive Experience',
    ctaLabel: 'Explore Event',
    ctaAction: 'scroll',
    accentColor: '#9e0804',
  },
  {
    id: 'xmas-cooking-challenge',
    title: 'Christmas Special Cooking Challenge',
    subtitle: 'Compete in the ultimate festive cooking competition',
    date: '23 Dec 2026',
    time: '09:00 AM – 05:00 PM',
    image: christmasDecorImg,
    badge: 'Competition',
    ctaLabel: 'Register Now',
    ctaAction: 'register',
    accentColor: '#166534',
  },
  {
    id: 'xmas-family-food-festival',
    title: 'Christmas Family Food Festival',
    subtitle: 'Family-friendly festive celebration of food and community',
    date: '24–25 Dec 2026',
    time: '11:00 AM – 10:00 PM',
    image: christmasGiftsImg,
    badge: 'All Ages Welcome',
    ctaLabel: 'View Details',
    ctaAction: 'scroll',
    accentColor: '#854d0e',
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
