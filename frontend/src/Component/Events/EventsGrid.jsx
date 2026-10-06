import { useState, useEffect } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventsGrid({ onOpenRegister, onSelectEvent }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Live Now', 'Technical', 'Cultural', 'Quiz', 'Innovation'];

  const filteredEvents = EVENTS_LIST.filter((evt) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Live Now') return evt.status === 'Live';
    return evt.competitions?.some((c) => c.type === filterCategory);
  });

  // Ensure active index is valid when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filterCategory]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="events" style={{
      padding: '6rem 0',
      background: '#FAF7F2',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A', display: 'block', marginBottom: '1rem' }}>
            TheZar 2026 Schedule
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#2C1810', margin: '0 0 1rem', lineHeight: 1.1 }}>
            Explore Events
          </h2>
          <p style={{ color: '#4A4A4A', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Discover upcoming district rounds and grand finale stages. Experience the magic of Tamil Nadu's greatest championship.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginTop: '2.5rem' }}>
            {categories.map(cat => {
              const isSelected = filterCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '9999px',
                    border: isSelected ? '1px solid #6B1A1A' : '1px solid rgba(107,26,26,0.15)',
                    background: isSelected ? '#6B1A1A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#4A4A4A',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 8px 20px rgba(107,26,26,0.2)' : '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Coverflow Carousel */}
        <div style={{ position: 'relative', height: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
          {filteredEvents.length === 0 ? (
            <div style={{ color: '#4A4A4A', fontWeight: 600 }}>No events found for this category.</div>
          ) : (
            filteredEvents.map((evt, index) => {
              // Calculate offset from active index
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              
              // Only show nearby cards
              if (absOffset > 2) return null;

              // Coverflow transformations
              const translateX = offset * 180; // horizontal spacing
              const translateZ = isCenter ? 0 : -absOffset * 150; // push back
              const scale = isCenter ? 1 : 1 - (absOffset * 0.15); // scale down
              const opacity = isCenter ? 1 : 1 - (absOffset * 0.3);
              const zIndex = 100 - absOffset;

              return (
                <div
                  key={evt.id}
                  onClick={() => handleCardClick(index)}
                  style={{
                    position: 'absolute',
                    width: '340px',
                    height: '480px',
                    borderRadius: '32px',
                    background: '#FFFFFF',
                    overflow: 'hidden',
                    boxShadow: isCenter ? '0 30px 60px rgba(44,24,16,0.15)' : '0 10px 30px rgba(44,24,16,0.08)',
                    transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    cursor: isCenter ? 'default' : 'pointer',
                    display: 'flex',
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
                    {/* Dark gradient for text visibility if needed */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)' }} />
                    
                    {evt.status === 'Live' && (
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#6B1A1A', color: '#FFF', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                        LIVE NOW
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Half */}
                  <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <MapPin style={{ width: '14px', height: '14px', color: '#6B1A1A' }} />
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4A4A4A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {evt.district} District
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 800, color: '#2C1810', margin: 0, lineHeight: 1.2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {evt.title}
                      </h3>
                    </div>

                    {/* Stats Grid & Action Button */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1rem' }}>
                      <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div>
                          <span style={{ display: 'block', fontSize: '0.65rem', color: '#888', fontWeight: 600, marginBottom: '0.2rem' }}>Date</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: '#2C1810' }}>
                            <Calendar style={{ width: '12px', height: '12px', color: '#6B1A1A' }} />
                            {evt.date.split(' ')[0]}
                          </span>
                        </div>
                        <div>
                          <span style={{ display: 'block', fontSize: '0.65rem', color: '#888', fontWeight: 600, marginBottom: '0.2rem' }}>Time</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: '#2C1810' }}>
                            <Clock style={{ width: '12px', height: '12px', color: '#6B1A1A' }} />
                            {evt.time.split(' ')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Prominent Circular Action Button */}
                      {isCenter && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            onClick={() => onSelectEvent && onSelectEvent(evt.id)}
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '50%',
                              background: '#FAF7F2',
                              border: '1px solid rgba(107,26,26,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#f0ebe1'}
                            onMouseLeave={e => e.currentTarget.style.background = '#FAF7F2'}
                          >
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6B1A1A' }}>i</span>
                          </button>
                          <button
                            onClick={onOpenRegister}
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '50%',
                              background: '#2C1810',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              boxShadow: '0 8px 20px rgba(44,24,16,0.3)',
                              transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = '#6B1A1A';
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = '#2C1810';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <ArrowRight style={{ width: '20px', height: '20px', color: '#FFF' }} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Slider Controls */}
        {filteredEvents.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            {[...Array(filteredEvents.length)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
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
        )}
      </div>

      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(107,26,26,0.03) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)', borderRadius: '50%', zIndex: 0 }} />
      
      {/* Responsive adjustments */}
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
