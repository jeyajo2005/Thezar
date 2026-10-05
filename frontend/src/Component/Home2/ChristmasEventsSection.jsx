import { useState } from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, Clock, Users, X, Gift, CheckCircle } from 'lucide-react';

export const CHRISTMAS_EVENTS = [
  {
    id: 'xmas-1',
    title: 'Christmas Eve Celebration',
    date: 'December 24, 2026',
    time: '06:00 PM - 11:30 PM',
    location: "St. Paul's Cathedral Arena, Chennai",
    badge: 'Opening Gala',
    desc: 'An enchanting candlelit musical gala featuring grand choral harmonies, symphony orchestra, and midnight bell ringing under falling snow.',
    image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=800&q=80',
    capacity: '2,500 Attendees',
    highlights: ['50-Member Youth Symphony', 'Midnight Candlelight Blessing', 'Festive Banquet & Hot Cocoa Bar'],
  },
  {
    id: 'xmas-2',
    title: 'Santa Meet & Greet',
    date: 'December 25, 2026',
    time: '10:00 AM - 05:00 PM',
    location: 'North Pole Pavilion & Toy Workshop',
    badge: 'Kids & Family Special',
    desc: 'Walk into Santa’s magical workshop with interactive elves, gingerbread baking stations, and personal family photo souvenirs with Santa himself.',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80',
    capacity: '1,800 Guests',
    highlights: ['Personal Gift Bag for Every Kid', 'Elf Workshop Craft Table', 'Live Storytelling by Mrs. Claus'],
  },
  {
    id: 'xmas-3',
    title: 'Winter Wonderland',
    date: 'December 26, 2026',
    time: '02:00 PM - 10:00 PM',
    location: 'Crystal Ice Palace & Snow Garden',
    badge: 'Trending Experience',
    desc: 'Experience sub-zero crystal ice sculptures, synchronized laser illuminations, artificial ice skating rink, and alpine winter delicacies.',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
    capacity: '3,000 Visitors',
    highlights: ['Sub-zero Ice Sculpture Trail', 'Live Ice Carving Battles', 'Festive Light & Drone Spectacle'],
  },
  {
    id: 'xmas-4',
    title: 'Christmas Market & Food Carnival',
    date: 'December 27 - 29, 2026',
    time: '11:00 AM - 09:30 PM',
    location: 'Grand Pine Boulevard & Courtyard',
    badge: 'Shopping & Dining',
    desc: 'Over 80+ boutique wooden chalets offering handmade Christmas ornaments, artisanal plum cakes, mulled spices, and holiday souvenirs.',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=800&q=80',
    capacity: '5,000 Daily Shoppers',
    highlights: ['80+ European Style Wooden Chalets', 'Artisan Bakeries & Plum Cake Contests', 'Acoustic Carol Buskers'],
  },
  {
    id: 'xmas-5',
    title: 'New Year Grand Celebration',
    date: 'December 31, 2026',
    time: '08:00 PM - 01:00 AM',
    location: 'Midnight Fireworks Sky Arena, Marina Beach',
    badge: 'Grand Finale Countdown',
    desc: 'Bid farewell to 2026 with celebrity DJ headliners, synchronized coast fireworks over the Bay of Bengal, and statewide trophy presentations.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=800&q=80',
    capacity: '10,000 Grand Audience',
    highlights: ['15-Minute Choreographed Fireworks', 'Live Music Headliners & Dance Troupe', 'TheZar Statewide Winner Honors'],
  },
];

export default function ChristmasEventsSection({ onOpenRegister }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="py-20 lg:py-28 relative overflow-hidden text-white">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c4120c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ffd700]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#380407] border border-[#ffd700]/50 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffd700] font-mono">
              ★ SEASONAL LINEUP 2026 ★
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
            FESTIVE EVENT <span className="gold-gradient-text">EXPERIENCES</span>
          </h2>

          <p className="font-christmas text-4xl sm:text-5xl text-amber-200 pt-1 drop-shadow-md">
            Unwrap the Wonder of the Holidays
          </p>

          <p className="text-rose-100/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Immerse yourself in our five signature winter celebrations designed for all generations, full of warmth, music, and holiday cheer.
          </p>

          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2" />
        </div>

        {/* 5 Cards Grid as Luxury Festive Holiday Gift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHRISTMAS_EVENTS.map((event, idx) => (
            <div
              key={event.id}
              className={`bg-gradient-to-b from-[#3a0508]/95 via-[#290305]/95 to-[#1a0203]/95 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex flex-col group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Event Image Banner with Overlay */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0203] via-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-gradient-to-r from-[#ffd700] to-[#f59e0b] text-[#240306] shadow-md border border-amber-300 backdrop-blur-md">
                    ★ {event.badge}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#ffd700] font-mono font-bold">
                    <Calendar className="w-4 h-4 text-[#ffd700]" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-rose-200/80 leading-relaxed line-clamp-3 font-light">
                    {event.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-red-950">
                  <div className="flex items-center gap-2 text-xs text-rose-200/70">
                    <MapPin className="w-4 h-4 text-[#ffd700] shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-rose-100 hover:text-white bg-white/5 hover:bg-white/10 border border-[#ffd700]/30 hover:border-[#ffd700] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffd700]" />
                    </button>

                    <button
                      onClick={onOpenRegister}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-md hover:scale-105 transition-transform cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Event Details Modal Popup */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-gradient-to-b from-[#3a0508] to-[#1c0204] rounded-3xl max-w-xl w-full p-6 sm:p-8 border-2 border-[#ffd700]/50 shadow-2xl relative animate-in zoom-in-95 duration-200 text-white">
            
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-[#ffd700]/30">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c0204] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono text-[#240306] bg-[#ffd700] border border-amber-300">
                  ★ {selectedEvent.badge}
                </span>
              </div>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              {selectedEvent.title}
            </h3>

            <p className="text-sm text-rose-100/90 mb-5 leading-relaxed font-light">
              {selectedEvent.desc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#ffd700]" />
                <span className="text-white font-semibold">{selectedEvent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ffd700]" />
                <span className="text-white font-semibold">{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <MapPin className="w-4 h-4 text-[#ffd700] shrink-0" />
                <span className="text-rose-200 font-medium truncate">{selectedEvent.location}</span>
              </div>
            </div>

            <div className="space-y-2 mb-6 text-left">
              <p className="text-xs uppercase font-bold text-[#ffd700] tracking-wider font-mono">
                Event Highlights:
              </p>
              {selectedEvent.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-rose-100">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedEvent(null);
                onOpenRegister();
              }}
              className="w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-[#240306]" />
              <span>Register for this Celebration</span>
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
