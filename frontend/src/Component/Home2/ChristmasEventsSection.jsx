import { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Clock, X, CheckCircle } from 'lucide-react';
import card1 from '../../assets/cards1.png';
import card2 from '../../assets/cards2.png';
import card3 from '../../assets/cards3.png';
import card4 from '../../assets/cards4.png';
import card5 from '../../assets/cards5.png';
import card6 from '../../assets/cards6.png';
import card7 from '../../assets/cards7.png';
import card8 from '../../assets/cards8.png';

export const CHRISTMAS_EVENTS = [
  {
    id: 'xmas-1',
    title: 'TheZar Official VIP & Team Access Passes',
    date: 'Season 2026',
    time: 'All-Day Entry Access',
    location: "Tirunelveli District Arena",
    badge: 'Official Passes',
    desc: 'Official credential passes for Event Organizers, Media Teams, Decor Teams, and Support Crew with VIP backstage access.',
    image: card1,
    capacity: 'VIP Delegations',
    highlights: ['All-Access Stage Credentials', 'Official Lanyard & ID Pass', 'VIP Lounge & Reserved Seating'],
  },
  {
    id: 'xmas-2',
    title: 'Statewide Mega Group Dance Championship',
    date: 'Dec 12, 2026',
    time: '04:00 PM',
    location: 'Tirunelveli District Arena',
    badge: 'Grand Dance Stage',
    desc: 'High-octane group dance performance with state-of-the-art concert lighting, fireworks, and celebrity choreographers.',
    image: card2,
    capacity: '1,500 Participants',
    highlights: ['Multi-District Dance Troupes', 'Live Concert Pyrotechnics', 'State Championship Trophy & Cash Pool'],
  },
  {
    id: 'xmas-3',
    title: 'Solo Freestyle & Hip-Hop Dance Battle',
    date: 'Dec 12, 2026',
    time: '01:00 PM',
    location: 'Open Stage Arena',
    badge: 'Solo Battle',
    desc: 'Electrifying solo dance battle showcasing Tamil Nadu’s top dancers battling for statewide championship honors.',
    image: card3,
    capacity: '500 Solo Dancers',
    highlights: ['1-on-1 Elimination Rounds', 'Celebrity Judge Scoring', 'Statewide Solo Gold Medal'],
  },
  {
    id: 'xmas-4',
    title: 'Statewide Solo Singing & Vocal Contest',
    date: 'Dec 12, 2026',
    time: '10:00 AM',
    location: 'Acoustic Concert Hall',
    badge: 'Live Vocals',
    desc: 'Mesmerizing solo vocal performances with live acoustic orchestration on the golden TheZar concert stage.',
    image: card4,
    capacity: '800 Vocalists',
    highlights: ['Live Acoustic Accompaniment', 'Studio Recording Contract Opportunity', 'Golden Mic Award'],
  },
  {
    id: 'xmas-5',
    title: 'Grand Carol Choirs & Music Band Symphony',
    date: 'Dec 12, 2026',
    time: '05:30 PM',
    location: 'Cathedral Grand Stage',
    badge: 'Choir & Bands',
    desc: 'Magnificent festive choral groups and musical bands performing timeless carols and cultural melodies across Tamil Nadu.',
    image: card5,
    capacity: '2,500 Attendees',
    highlights: ['Multi-Voice Choral Harmony', 'Live Brass & String Bands', 'Statewide Rolling Trophy'],
  },
  {
    id: 'xmas-6',
    title: 'Santa Claus Family Stage & Winter Carnival',
    date: 'Dec 12, 2026',
    time: '11:00 AM',
    location: 'North Pole Pavilion',
    badge: 'Kids & Family',
    desc: 'Step into Santa’s magical winter stage featuring giant Christmas trees, snowman displays, and gift distributions.',
    image: card6,
    capacity: '2,000 Families',
    highlights: ['Gift Bag for Every Registered Kid', 'Family Stage Souvenir Photos', 'Santa Carol Sing-Along'],
  },
  {
    id: 'xmas-7',
    title: 'Junior Carol Fiesta & Kids Singing Contest',
    date: 'Dec 12, 2026',
    time: '09:00 AM',
    location: 'Junior Arena Stage',
    badge: 'Kids Category',
    desc: 'Young rising prodigies and junior choirs singing festive melodies in traditional attire before an audience of thousands.',
    image: card7,
    capacity: '1,000 Junior Contestants',
    highlights: ['Traditional Festive Attire Theme', 'Special Junior Talent Awards', 'Medals & Certificates for All'],
  },
  {
    id: 'xmas-8',
    title: 'Kids Solo Singing Vocal Prodigy',
    date: 'Dec 12, 2026',
    time: '02:00 PM',
    location: 'Grand Concert Hall',
    badge: 'Solo Prodigy',
    desc: 'Young solo prodigy competition on the grand TheZar arena stage with acoustic backup.',
    image: card8,
    capacity: '400 Contestants',
    highlights: ['Solo Acoustic Spotlight', 'Statewide Rising Star Trophy', 'Masterclass Invitation'],
  },
];

export default function ChristmasEventsSection({ onOpenRegister }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleCardClick = (index, evt) => {
    if (index === activeIndex) {
      setSelectedEvent(evt);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="events"
      style={{
        padding: '6rem 0 8rem',
        background: '#FAF7F2',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A', display: 'block', marginBottom: '1rem' }}>
            Seasonal Lineup
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#2C1810', margin: '0 0 1rem', lineHeight: 1.1 }}>
            Festive Event Experiences
          </h2>
          <p style={{ color: '#4A4A4A', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Immerse yourself in five signature winter celebrations designed for all generations.
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
          {CHRISTMAS_EVENTS.map((evt, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            
            // Coverflow transformations
            const translateX = offset * 180; // horizontal spacing
            const translateZ = isCenter ? 0 : -absOffset * 150; // push back
            const scale = isCenter ? 1 : 1 - (absOffset * 0.15); // scale down
            const opacity = isCenter ? 1 : Math.max(0, 1 - (absOffset * 0.35));
            const zIndex = 100 - absOffset;

            return (
              <div
                key={evt.id}
                onClick={() => handleCardClick(index, evt)}
                style={{
                  position: 'absolute',
                  width: '340px',
                  height: '480px',
                  borderRadius: '32px',
                  background: '#FFFFFF',
                  overflow: 'hidden',
                  boxShadow: isCenter ? '0 30px 60px rgba(107,26,26,0.15)' : '0 10px 30px rgba(44,24,16,0.08)',
                  transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  cursor: isCenter ? 'default' : 'pointer',
                  display: opacity > 0 ? 'flex' : 'none',
                  flexDirection: 'column'
                }}
              >
                {/* Top Image Half */}
                <div style={{ height: '55%', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={evt.image}
                    alt={evt.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Subtle vignette/gradient for depth */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(26,10,10,0.4) 100%)' }} />
                  
                  <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: '#6B1A1A', padding: '0.4rem 0.8rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {evt.badge}
                  </div>
                </div>

                {/* Bottom Content Half */}
                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <MapPin style={{ width: '14px', height: '14px', color: '#6B1A1A' }} />
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {evt.location}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 800, color: '#2C1810', margin: '0 0 0.5rem', lineHeight: 1.2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {evt.title}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: '#888', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
                      {evt.desc}
                    </p>
                  </div>

                  {/* Stats Grid & Action Button */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.65rem', color: '#888', fontWeight: 600, marginBottom: '0.2rem' }}>Date</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: '#2C1810' }}>
                          <Calendar style={{ width: '12px', height: '12px', color: '#6B1A1A' }} />
                          {evt.date}
                        </span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.65rem', color: '#888', fontWeight: 600, marginBottom: '0.2rem' }}>Time</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: '#2C1810' }}>
                          <Clock style={{ width: '12px', height: '12px', color: '#6B1A1A' }} />
                          {evt.time}
                        </span>
                      </div>
                    </div>

                    {/* Prominent Circular Action Button (Click triggers modal details) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCenter) setSelectedEvent(evt);
                        else handleCardClick(index, evt);
                      }}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: isCenter ? '#2C1810' : '#FAF7F2',
                        border: isCenter ? 'none' : '1px solid rgba(107,26,26,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: isCenter ? '0 8px 20px rgba(44,24,16,0.3)' : 'none',
                        transition: 'all 0.3s',
                        flexShrink: 0
                      }}
                      onMouseEnter={e => {
                        if (isCenter) {
                          e.currentTarget.style.background = '#6B1A1A';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (isCenter) {
                          e.currentTarget.style.background = '#2C1810';
                          e.currentTarget.style.transform = 'scale(1)';
                        }
                      }}
                    >
                      <ArrowRight style={{ width: '18px', height: '18px', color: isCenter ? '#FFF' : '#6B1A1A' }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          {CHRISTMAS_EVENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                background: activeIndex === i ? '#6B1A1A' : 'rgba(107,26,26,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(107,26,26,0.04) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />

      {/* Modal Overlay */}
      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(26,10,10,0.6)',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(107,26,26,0.06)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B1A1A',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(107,26,26,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(107,26,26,0.06)'}
            >
              <X style={{ width: '18px', height: '18px' }} />
            </button>

            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img src={selectedEvent.image} alt={selectedEvent.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
            </div>

            <span style={{ padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', background: '#FAF7F2', color: '#6B1A1A', display: 'inline-block', marginBottom: '1rem', border: '1px solid rgba(107,26,26,0.1)' }}>
              {selectedEvent.badge}
            </span>

            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', fontWeight: 800, color: '#2C1810', margin: '0 0 0.5rem' }}>
              {selectedEvent.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#4A4A4A', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedEvent.desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', padding: '1.25rem', borderRadius: '16px', background: '#FAF7F2', border: '1px solid rgba(107,26,26,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#2C1810', fontWeight: 700 }}>
                <Calendar style={{ width: '16px', height: '16px', color: '#6B1A1A' }} /> {selectedEvent.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#2C1810', fontWeight: 700 }}>
                <Clock style={{ width: '16px', height: '16px', color: '#6B1A1A' }} /> {selectedEvent.time}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#2C1810', fontWeight: 700, gridColumn: 'span 2' }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#6B1A1A', flexShrink: 0 }} /> {selectedEvent.location}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B1A1A', marginBottom: '0.75rem' }}>Highlights</p>
              {selectedEvent.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#4A4A4A', marginBottom: '0.5rem', fontWeight: 500 }}>
                  <CheckCircle style={{ width: '16px', height: '16px', color: '#6B1A1A', flexShrink: 0 }} />
                  {h}
                </div>
              ))}
            </div>

            <button
              onClick={() => { setSelectedEvent(null); onOpenRegister(); }}
              style={{
                width: '100%',
                padding: '1.1rem',
                borderRadius: '9999px',
                background: '#6B1A1A',
                color: '#FAF7F2',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                transition: 'all 0.3s',
                boxShadow: '0 8px 25px rgba(107,26,26,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A0F0F';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(107,26,26,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#6B1A1A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(107,26,26,0.2)';
              }}
            >
              Register for this Event
              <ArrowRight style={{ width: '18px', height: '18px' }} />
            </button>
          </div>
        </div>
      )}

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 768px) {
          #events > div > div:nth-child(2) {
            transform: scale(0.85);
          }
        }
      `}</style>
    </section>
  );
}
