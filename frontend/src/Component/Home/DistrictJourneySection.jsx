import { useState } from 'react';
import { DISTRICTS_DATA } from '../../data/mockData';
import { MapPin, Calendar, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import tnMapImg from '../../assets/tn_map_pink.png';

// Calibrated Coordinates (x, y) on a 500x670 SVG canvas matching tn_map_pink.png district boundaries
const MAP_PINS_COORDINATES = {
  1: { x: 205, y: 575, name: "Tirunelveli" },
  2: { x: 235, y: 455, name: "Madurai" },
  3: { x: 435, y: 205, name: "Chennai" },
  4: { x: 125, y: 345, name: "Coimbatore" },
  5: { x: 280, y: 265, name: "Salem" },
  6: { x: 295, y: 380, name: "Trichy" },
  7: { x: 185, y: 635, name: "Kanyakumari" },
  8: { x: 350, y: 405, name: "Thanjavur" },
  9: { x: 195, y: 260, name: "Erode" },
  10: { x: 335, y: 135, name: "Vellore" },
  11: { x: 250, y: 580, name: "Tuticorin" },
  12: { x: 200, y: 405, name: "Dindigul" },
  13: { x: 405, y: 335, name: "Cuddalore" },
  14: { x: 400, y: 195, name: "Kanchipuram" },
  15: { x: 420, y: 95, name: "Thiruvallur" },
  16: { x: 250, y: 220, name: "Dharmapuri" },
  17: { x: 235, y: 155, name: "Krishnagiri" },
  18: { x: 240, y: 315, name: "Namakkal" },
  19: { x: 240, y: 370, name: "Karur" },
  20: { x: 310, y: 340, name: "Perambalur" },
  21: { x: 350, y: 355, name: "Ariyalur" },
  22: { x: 415, y: 455, name: "Nagapattinam" },
  23: { x: 410, y: 385, name: "Mayiladuthurai" },
  24: { x: 395, y: 430, name: "Tiruvarur" },
  25: { x: 325, y: 440, name: "Pudukkottai" },
  26: { x: 295, y: 475, name: "Sivagangai" },
  27: { x: 350, y: 530, name: "Ramanathapuram" },
  28: { x: 205, y: 505, name: "Virudhunagar" },
  29: { x: 155, y: 445, name: "Theni" },
  30: { x: 165, y: 555, name: "Tenkasi" },
  31: { x: 80, y: 245, name: "Nilgiris" },
  32: { x: 285, y: 170, name: "Tirupathur" },
  33: { x: 390, y: 150, name: "Ranipet" },
  34: { x: 325, y: 275, name: "Kallakurichi" },
  35: { x: 380, y: 280, name: "Villupuram" },
  36: { x: 420, y: 240, name: "Chengalpattu" },
  37: { x: 350, y: 210, name: "Tiruvannamalai" },
  38: { x: 438, y: 212, name: "Grand Finale - Chennai" },
};

export default function DistrictJourneySection({ onOpenRegister }) {
  const [selectedDistrictId, setSelectedDistrictId] = useState(1);
  const [hoveredDistrictId, setHoveredDistrictId] = useState(null);

  const selectedDistrict =
    DISTRICTS_DATA.find((d) => d.id === selectedDistrictId) || DISTRICTS_DATA[0];

  const activeCoord = MAP_PINS_COORDINATES[selectedDistrict.id] || { x: 250, y: 300 };

  return (
    <section id="districts" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.03)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        TAMIL NADU
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Split: Details Left, Pink Picture Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Section Header, District Selector, Active Info Card & CTA Button */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Header Badge */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold text-[#E11D48] tracking-[0.18em] uppercase">
                  WHERE WE OPERATE
                </span>
                <div
                  className="w-10 h-[2px] rounded-full"
                  style={{
                    backgroundColor: '#D4A72C',
                    boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
                  }}
                />
              </div>
              
              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
                38 DISTRICTS. <br />
                <span className="text-[#E11D48]">ONE GRAND STAGE.</span>
              </h2>

              <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed pt-1">
                TheZar brings competition stages across all 38 districts of Tamil Nadu. Select any district from the dropdown or click on the Tamil Nadu map to view venue details, dates, and live qualifier rounds.
              </p>
            </div>

            {/* Quick District Selector Dropdown */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#E11D48] shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Select District / Region
                </label>
                <div className="relative">
                  <select
                    value={selectedDistrictId}
                    onChange={(e) => setSelectedDistrictId(Number(e.target.value))}
                    className="w-full bg-transparent text-sm sm:text-base font-bold text-[#071426] focus:outline-none appearance-none cursor-pointer pr-6 py-0.5"
                  >
                    {DISTRICTS_DATA.map((dist) => (
                      <option key={dist.id} value={dist.id}>
                        {dist.name} ({dist.region} TN) — {dist.status}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Selected District Highlight Card */}
            <div
              className="bg-white p-6 sm:p-7 rounded-2xl border border-rose-100 shadow-md relative overflow-hidden transition-all duration-300"
              style={{
                borderLeft: '5px solid #E11D48',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold font-mono bg-rose-50 text-[#E11D48] px-3 py-1 rounded-full uppercase tracking-wider" style={{ borderRadius: '9999px' }}>
                      {selectedDistrict.code} • {selectedDistrict.region} TN
                    </span>
                    {selectedDistrict.status === 'Live' ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-rose-600 font-mono bg-rose-100/70 px-2.5 py-0.5 rounded-full" style={{ borderRadius: '9999px' }}>
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        LIVE NOW
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                        {selectedDistrict.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071426]">
                    {selectedDistrict.name} District Round
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Date & Schedule</p>
                    <p className="font-bold text-slate-800">{selectedDistrict.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Official Venue</p>
                    <p className="font-semibold text-slate-700 truncate">{selectedDistrict.venue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dual Tone Pill CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-white transition-all cursor-pointer shadow-xl shadow-rose-500/25 inline-flex items-center justify-center gap-2.5 group"
                style={{
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
                }}
              >
                <span>Register for {selectedDistrict.name} Round</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Pink Tamil Nadu District Map Picture with Calibrated SVG Overlay */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[480px] bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-xl overflow-hidden group">
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-6 z-20 pointer-events-none">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#E11D48] uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100" style={{ borderRadius: '9999px' }}>
                  TAMIL NADU 38 DISTRICTS MAP
                </span>
              </div>

              {/* Aspect Ratio Container (500x670) Matching Image Aspect Ratio */}
              <div className="relative w-full aspect-[500/670] flex items-center justify-center">
                
                {/* User's Pink Tamil Nadu District Map Picture */}
                <img
                  src={tnMapImg}
                  alt="Tamil Nadu District Map"
                  className="w-full h-full object-contain filter drop-shadow-md select-none transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Calibrated Interactive SVG Pin Layer */}
                <svg
                  viewBox="0 0 500 670"
                  className="absolute inset-0 w-full h-full select-none z-10"
                >
                  <defs>
                    <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E11D48" />
                      <stop offset="100%" stopColor="#FB7185" />
                    </linearGradient>

                    <filter id="glowPin" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Connecting Dashed Line to Active Pin */}
                  <line
                    x1="250"
                    y1="335"
                    x2={activeCoord.x}
                    y2={activeCoord.y}
                    stroke="#E11D48"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    className="opacity-60 animate-pulse"
                  />

                  {/* All 38 District Interactive Node Pins */}
                  {DISTRICTS_DATA.map((dist) => {
                    const coord = MAP_PINS_COORDINATES[dist.id] || { x: 250, y: 335 };
                    const isSelected = dist.id === selectedDistrictId;
                    const isHovered = dist.id === hoveredDistrictId;
                    const isLive = dist.status === 'Live';

                    return (
                      <g
                        key={dist.id}
                        transform={`translate(${coord.x}, ${coord.y})`}
                        onClick={() => setSelectedDistrictId(dist.id)}
                        onMouseEnter={() => setHoveredDistrictId(dist.id)}
                        onMouseLeave={() => setHoveredDistrictId(null)}
                        className="cursor-pointer group/pin"
                      >
                        {/* Pulse Ring for Selected or Live District */}
                        {(isSelected || isLive) && (
                          <circle
                            r={isSelected ? "18" : "12"}
                            fill={isSelected ? "rgba(225, 29, 72, 0.35)" : "rgba(244, 63, 94, 0.3)"}
                            className="animate-ping"
                          />
                        )}

                        {/* Outer Pin Body */}
                        <circle
                          r={isSelected ? "11" : isHovered ? "9" : "5.5"}
                          fill={isSelected ? "url(#roseGradient)" : isHovered ? "#E11D48" : isLive ? "#F43F5E" : "#94A3B8"}
                          stroke="#FFFFFF"
                          strokeWidth={isSelected ? "2.5" : "1.8"}
                          filter={isSelected ? "url(#glowPin)" : "none"}
                          className="transition-all duration-300"
                        />

                        {/* White Inner Core */}
                        <circle
                          r={isSelected ? "4" : "1.8"}
                          fill="#FFFFFF"
                        />

                        {/* Floating District Label Tag on Hover/Selection */}
                        {(isSelected || isHovered) && (
                          <g transform="translate(0, -22)" className="pointer-events-none z-30">
                            <rect
                              x="-32"
                              y="-16"
                              width="64"
                              height="20"
                              rx="10"
                              fill={isSelected ? "#071426" : "#1E293B"}
                              stroke="#FFFFFF"
                              strokeWidth="1.5"
                              className="shadow-xl"
                            />
                            <text
                              x="0"
                              y="-3"
                              textAnchor="middle"
                              fill="#FFFFFF"
                              fontSize="9.5"
                              fontWeight="bold"
                              fontFamily="sans-serif"
                            >
                              {dist.name}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>

              </div>

              {/* Map Footer Legend */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-semibold bg-slate-50 px-4 py-2 rounded-full border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]"></span>
                    Selected
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                    Live Round
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    Upcoming
                  </span>
                </div>
                <span className="font-mono text-slate-600 font-bold hidden sm:inline">
                  38 DISTRICTS
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
