import { useState, useRef } from 'react';
import { EVENTS_LIST } from '../../data/mockData';
import { Calendar, MapPin, ArrowRight, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventsGrid({ onOpenRegister, onSelectEvent }) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);

  const categories = ['All', 'Live Now', 'Technical', 'Cultural', 'Quiz', 'Innovation'];

  const filteredEvents = EVENTS_LIST.filter((evt) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Live Now') return evt.status === 'Live';
    return evt.competitions?.some((c) => c.type === filterCategory);
  });

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const scrollRatio = scrollLeft / maxScroll;
      const dotIndex = Math.min(2, Math.floor(scrollRatio * 3 + 0.3));
      setActiveDot(dotIndex);
    }
  };

  const scrollToDot = (idx) => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (idx / 2) * maxScroll;
      sliderRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      setActiveDot(idx);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "SCHEDULE" */}
      <div
        className="absolute top-12 sm:top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        SCHEDULE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="text-left space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-[#3f0701] tracking-[0.18em] uppercase">
                UPCOMING EVENTS
              </span>
              <div
                className="w-10 h-[2px] rounded-full"
                style={{
                  backgroundColor: '#3f0701',
                  boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
                }}
              />
            </div>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#3f0701] tracking-[-0.035em] uppercase leading-[1.05]">
              UPCOMING <span className="text-[#3f0701] underline decoration-[#3f0701]/30">EVENTS</span>
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Discover what's happening across TheZar. Preliminary district rounds and live stages across 38 districts of Tamil Nadu.
            </p>
          </div>

          {/* Filter Pills & Slider Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {/* Filter Pills Container */}
            <div
              className="inline-flex flex-nowrap items-center gap-1.5 sm:gap-2 bg-white p-2 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full shrink-0"
              style={{ borderRadius: '9999px' }}
            >
              {categories.map((cat) => {
                const isSelected = filterCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className="px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                    style={{
                      borderRadius: '9999px',
                      background: isSelected ? 'linear-gradient(135deg, #3f0701 0%, #580c04 100%)' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#475569',
                      boxShadow: isSelected ? '0 4px 12px rgba(63, 7, 1, 0.25)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.color = '#3f0701';
                        e.currentTarget.style.backgroundColor = '#FAF0F0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.color = '#475569';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Slider Navigation Arrow Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#FAF0F0] hover:border-[#3f0701]/30 text-slate-700 hover:text-[#3f0701] flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                style={{ borderRadius: '9999px' }}
                aria-label="Previous events"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#FAF0F0] hover:border-[#3f0701]/30 text-slate-700 hover:text-[#3f0701] flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                style={{ borderRadius: '9999px' }}
                aria-label="Next events"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Event Cards Interactive Horizontal Slider Container (Hidden Scrollbar) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[380px] bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              {/* Event Image with Badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3f0701]/75 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {evt.status === 'Live' ? (
                    <span className="inline-flex items-center gap-1.5 bg-[#3f0701] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md" style={{ borderRadius: '9999px' }}>
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      LIVE NOW
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#3f0701] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm" style={{ borderRadius: '9999px' }}>
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      UPCOMING
                    </span>
                  )}
                </div>

                {/* District Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="text-red-200 font-bold uppercase tracking-[0.12em] text-[11px] sm:text-[12px]">
                    {evt.district} DISTRICT
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold" style={{ borderRadius: '9999px' }}>
                    Round 2
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#3f0701] tracking-tight group-hover:text-[#580c04] transition-colors line-clamp-1">
                    {evt.title}
                  </h3>
                  <div className="space-y-1.5 text-[13px] sm:text-[14px] text-[#64748B] font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#3f0701] shrink-0" />
                      <span>{evt.date} • {evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectEvent && onSelectEvent(evt.id)}
                    className="inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-bold text-slate-700 hover:text-[#3f0701] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={onOpenRegister}
                    className="px-5 py-2 rounded-full text-[13px] font-black transition-transform hover:scale-105 cursor-pointer shadow-md inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0"
                    style={{
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #E0B970 0%, #D1A44C 50%, #B88528 100%)',
                      color: '#071426',
                      boxShadow: '0 4px 14px rgba(184, 133, 40, 0.30)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>Register</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#071426] shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three Dot Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                activeDot === idx
                  ? 'w-7 h-2.5 rounded-full bg-[#3f0701] shadow-sm shadow-[#3f0701]/30'
                  : 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-10 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 font-bold text-xs uppercase tracking-widest transition-all shadow-sm no-underline hover:no-underline group"
            style={{
              color: '#3f0701',
              borderColor: '#3f0701',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3f0701';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#3f0701';
            }}
          >
            <span>EXPLORE ALL 38 DISTRICT ROUNDS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
