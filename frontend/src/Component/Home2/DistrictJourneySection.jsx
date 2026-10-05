import { useState, useRef, useEffect } from 'react';
import { DISTRICTS_DATA } from '../../data/mockData';
import { MapPin, Calendar, ArrowRight, CheckCircle2, ChevronDown, Layers, Sparkles } from 'lucide-react';
import tnMapImg from '../../assets/tn_map_pink.png';

// Calibrated 774x1024 Native Coordinates matching tn_map_pink.png district boundaries perfectly
// const MAP_PINS_COORDINATES = {
//   1: { x: 230, y: 900, name: "Tirunelveli" },
//   2: { x: 360, y: 680, name: "Madurai" },
//   3: { x: 665, y: 220, name: "Chennai" },
//   4: { x: 135, y: 490, name: "Coimbatore" },
//   5: { x: 370, y: 360, name: "Salem" },
//   6: { x: 440, y: 520, name: "Trichy" },
//   7: { x: 230, y: 980, name: "Kanyakumari" },
//   8: { x: 510, y: 550, name: "Thanjavur" },
//   9: { x: 270, y: 390, name: "Erode" },
//   10: { x: 480, y: 180, name: "Vellore" },
//   11: { x: 360, y: 830, name: "Tuticorin" },
//   12: { x: 290, y: 560, name: "Dindigul" },
//   13: { x: 580, y: 440, name: "Cuddalore" },
//   14: { x: 590, y: 240, name: "Kanchipuram" },
//   15: { x: 550, y: 130, name: "Thiruvallur" },
//   16: { x: 370, y: 280, name: "Dharmapuri" },
//   17: { x: 340, y: 190, name: "Krishnagiri" },
//   18: { x: 350, y: 430, name: "Namakkal" },
//   19: { x: 340, y: 500, name: "Karur" },
//   20: { x: 460, y: 450, name: "Perambalur" },
//   21: { x: 510, y: 470, name: "Ariyalur" },
//   22: { x: 600, y: 610, name: "Nagapattinam" },
//   23: { x: 600, y: 500, name: "Mayiladuthurai" },
//   24: { x: 580, y: 570, name: "Tiruvarur" },
//   25: { x: 470, y: 590, name: "Pudukkottai" },
//   26: { x: 410, y: 650, name: "Sivagangai" },
//   27: { x: 500, y: 730, name: "Ramanathapuram" },
//   28: { x: 290, y: 700, name: "Virudhunagar" },
//   29: { x: 200, y: 610, name: "Theni" },
//   30: { x: 220, y: 770, name: "Tenkasi" },
//   31: { x: 100, y: 390, name: "Nilgiris" },
//   32: { x: 410, y: 220, name: "Tirupathur" },
//   33: { x: 550, y: 190, name: "Ranipet" },
//   34: { x: 470, y: 370, name: "Kallakurichi" },
//   35: { x: 540, y: 360, name: "Villupuram" },
//   36: { x: 610, y: 290, name: "Chengalpattu" },
//   37: { x: 490, y: 290, name: "Tiruvannamalai" },
//   38: { x: 670, y: 225, name: "Grand Finale - Chennai" },
// };


const MAP_PINS_COORDINATES = {
  1:  { x: 260, y: 898, name: "Tirunelveli" },
  2:  { x: 341, y: 668, name: "Madurai" },
  3:  { x: 717.2, y: 131,  name: "Chennai" },
  4:  { x: 165, y: 513, name: "Coimbatore" },
  5:  { x: 300, y: 342, name: "Salem" },
  6:  { x: 450, y: 500, name: "Trichy" },
  7:  { x: 230, y: 952, name: "Kanyakumari" },
  8:  { x: 565, y: 560, name: "Thanjavur" },
  9:  { x: 181, y: 364, name: "Erode" },
  10: { x: 456, y: 137, name: "Vellore" },
  11: { x: 350, y: 868, name: "Tuticorin" },
  12: { x: 275, y: 584, name: "Dindigul" },
  13: { x: 599, y: 376, name: "Cuddalore" },
  14: { x: 650, y: 167, name: "Kanchipuram" },
  15: { x: 690, y: 75,  name: "Thiruvallur" },
  16: { x: 319, y: 275, name: "Dharmapuri" },
  17: { x: 320, y: 184, name: "Krishnagiri" },
  18: { x: 350, y: 409, name: "Namakkal" },
  19: { x: 330, y: 484, name: "Karur" },
  20: { x: 480, y: 430, name: "Perambalur" },
  21: { x: 550, y: 434, name: "Ariyalur" },
  22: { x: 640, y: 540, name: "Nagapattinam" },
  23: { x: 620, y: 450, name: "Mayiladuthurai" },
  24: { x: 590, y: 540, name: "Tiruvarur" },
  25: { x: 460, y: 584, name: "Pudukkottai" },
  26: { x: 440, y: 668, name: "Sivagangai" },
  27: { x: 470, y: 760, name: "Ramanathapuram" },
  28: { x: 299, y: 754, name: "Virudhunagar" },
  29: { x: 230, y: 668, name: "Theni" },
  30: { x: 217, y: 801, name: "Tenkasi" },
  31: { x: 100,  y: 400, name: "Nilgiris" },
  32: { x: 435, y: 217, name: "Tirupathur" },
  33: { x: 590, y: 117, name: "Ranipet" },
  34: { x: 500, y: 360, name: "Kallakurichi" },
  35: { x: 590, y: 309, name: "Villupuram" },
  36: { x: 650, y: 230, name: "Chengalpattu" },
  37: { x: 490, y: 225, name: "Tiruvannamalai" },
  38: { x: 238, y: 488, name: "Tirupur" },

  // Grand Finale should be at Chennai
  39: { x: 712, y: 131, name: "Grand Finale - Chennai" },
};

/**
 * Native HTML5 Canvas 2D Engine Map Component (774x1024 Pixel Alignment)
 */
function HTML5CanvasMap({ selectedDistrictId, setSelectedDistrictId, hoveredDistrictId, setHoveredDistrictId }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const bgImgRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = tnMapImg;
    img.onload = () => {
      bgImgRef.current = img;
      setImgLoaded(true);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pulseStep = 0;

    const render = () => {
      pulseStep += 0.04;
      const width = canvas.width;   // 774
      const height = canvas.height; // 1024

      ctx.clearRect(0, 0, width, height);

      // 1. Draw 100% exact background map without letterboxing
      if (bgImgRef.current && imgLoaded) {
        ctx.drawImage(bgImgRef.current, 0, 0, width, height);
      }

      // 2. Draw animated radar connector lines from selected district node to adjacent districts
      const activeCoord = MAP_PINS_COORDINATES[selectedDistrictId] || { x: 387, y: 512 };

      DISTRICTS_DATA.forEach((dist) => {
        const coord = MAP_PINS_COORDINATES[dist.id] || { x: 387, y: 512 };
        const distToActive = Math.hypot(coord.x - activeCoord.x, coord.y - activeCoord.y);

        if (distToActive < 200 && dist.id !== selectedDistrictId) {
          ctx.beginPath();
          ctx.setLineDash([5, 5]);
          ctx.moveTo(activeCoord.x, activeCoord.y);
          ctx.lineTo(coord.x, coord.y);
          ctx.strokeStyle = 'rgba(225, 29, 72, 0.40)';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 3. Draw all 38 District Nodes on Canvas Grid
      DISTRICTS_DATA.forEach((dist) => {
        const coord = MAP_PINS_COORDINATES[dist.id] || { x: 387, y: 512 };
        const isSelected = dist.id === selectedDistrictId;
        const isHovered = dist.id === hoveredDistrictId;
        const isLive = dist.status === 'Live';

        // Outer Pulsing Glow Aura
        if (isSelected || isLive) {
          const pulseRadius = (isSelected ? 24 : 16) + Math.sin(pulseStep) * 5;
          ctx.beginPath();
          ctx.arc(coord.x, coord.y, Math.max(pulseRadius, 4), 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? 'rgba(225, 29, 72, 0.38)' : 'rgba(244, 63, 94, 0.30)';
          ctx.fill();
        }

        // Hover Highlight Ring
        if (isHovered && !isSelected) {
          ctx.beginPath();
          ctx.arc(coord.x, coord.y, 18, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(225, 29, 72, 0.25)';
          ctx.fill();
        }

        // Node Circle Body
        const radius = isSelected ? 13 : isHovered ? 10 : 7.5;
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, radius, 0, Math.PI * 2);

        if (isSelected) {
          const grad = ctx.createRadialGradient(coord.x, coord.y, 2, coord.x, coord.y, 15);
          grad.addColorStop(0, '#c4120c');
          grad.addColorStop(1, '#9e0804');
          ctx.fillStyle = grad;
        } else if (isHovered) {
          ctx.fillStyle = '#9e0804';
        } else if (isLive) {
          ctx.fillStyle = '#730502';
        } else {
          ctx.fillStyle = '#475569';
        }

        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = isSelected ? 3 : 2;
        ctx.stroke();

        // Inner White Dot Core
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, isSelected ? 4.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Canvas Tooltip Card for Selected / Hovered
        if (isSelected || isHovered) {
          const labelText = dist.name;
          ctx.font = `bold ${isSelected ? '15px' : '13px'} 'Plus Jakarta Sans', sans-serif`;
          const textWidth = ctx.measureText(labelText).width;
          const padX = 12;
          const rectW = textWidth + padX * 2;
          const rectH = 30;
          const rectX = coord.x - rectW / 2;
          const rectY = coord.y - radius - 34;

          // Tooltip Dark Card
          ctx.fillStyle = isSelected ? '#3f0701' : '#240401';
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(rectX, rectY, rectW, rectH, 15);
          } else {
            ctx.rect(rectX, rectY, rectW, rectH);
          }
          ctx.fill();
          ctx.strokeStyle = '#9e0804';
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Tooltip Text Label
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(labelText, coord.x, rectY + rectH / 2);
        }
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [selectedDistrictId, hoveredDistrictId, imgLoaded]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    let foundId = null;

    DISTRICTS_DATA.forEach((dist) => {
      const coord = MAP_PINS_COORDINATES[dist.id] || { x: 387, y: 512 };
      const distance = Math.hypot(mouseX - coord.x, mouseY - coord.y);
      if (distance <= 22) {
        foundId = dist.id;
      }
    });

    setHoveredDistrictId(foundId);
  };

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    DISTRICTS_DATA.forEach((dist) => {
      const coord = MAP_PINS_COORDINATES[dist.id] || { x: 387, y: 512 };
      const distance = Math.hypot(mouseX - coord.x, mouseY - coord.y);
      if (distance <= 26) {
        setSelectedDistrictId(dist.id);
      }
    });
  };

  return (
    <div className="relative w-full aspect-[774/1024] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={774}
        height={1024}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredDistrictId(null)}
        onClick={handleClick}
        className="w-full h-full object-fill cursor-pointer select-none filter drop-shadow-md rounded-2xl"
      />
    </div>
  );
}

export default function DistrictJourneySection({ onOpenRegister }) {
  const [selectedDistrictId, setSelectedDistrictId] = useState(1);
  const [hoveredDistrictId, setHoveredDistrictId] = useState(null);
  const [mapMode, setMapMode] = useState('canvas'); // 'canvas' | 'svg'

  const selectedDistrict =
    DISTRICTS_DATA.find((d) => d.id === selectedDistrictId) || DISTRICTS_DATA[0];

  const activeCoord = MAP_PINS_COORDINATES[selectedDistrict.id] || { x: 387, y: 512 };

  return (
    <section id="districts" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
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

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: Info Card & Selector */}
          <div className="lg:col-span-6 space-y-8 text-left">

            {/* Header Badge */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
                  WHERE WE OPERATE
                </span>
                <div
                  className="w-10 h-[2px] rounded-full"
                  style={{
                    backgroundColor: '#3f0701',
                    boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
                  }}
                />
              </div>

              <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#3f0701] tracking-[-0.035em] uppercase leading-[1.05]">
                38 DISTRICTS. <br />
                <span className="text-[#9e0804]">ONE GRAND STAGE.</span>
              </h2>

              <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed pt-1">
                TheZar brings competition stages across all 38 districts of Tamil Nadu. Select any district from the dropdown or click directly on the map to view venue details, dates, and live qualifier rounds.
              </p>
            </div>

            {/* Quick District Selector Dropdown */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#9e0804] shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Select District / Region
                </label>
                <div className="relative">
                  <select
                    value={selectedDistrictId}
                    onChange={(e) => setSelectedDistrictId(Number(e.target.value))}
                    className="w-full bg-transparent text-sm sm:text-base font-bold text-[#3f0701] focus:outline-none appearance-none cursor-pointer pr-6 py-0.5"
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
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#9e080430] shadow-md relative overflow-hidden transition-all duration-300"
              style={{
                borderLeft: '5px solid #9e0804',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold font-mono bg-[#9e080410] text-[#9e0804] px-3 py-1 rounded-full uppercase tracking-wider" style={{ borderRadius: '9999px' }}>
                      {selectedDistrict.code} • {selectedDistrict.region} TN
                    </span>
                    {selectedDistrict.status === 'Live' ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-red-300 font-mono bg-[#9e0804]/30 px-2.5 py-0.5 rounded-full" style={{ borderRadius: '9999px' }}>
                        <span className="w-2 h-2 rounded-full bg-[#9e0804] animate-pulse"></span>
                        LIVE NOW
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                        {selectedDistrict.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3f0701]">
                    {selectedDistrict.name} District Round
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#9e0804] shrink-0" />
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
                className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-white transition-all cursor-pointer shadow-xl shadow-[#9e0804]/25 inline-flex items-center justify-center gap-2.5 group"
                style={{
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
                }}
              >
                <span>Register for {selectedDistrict.name} Round</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Pixel-Perfect Map Display Container */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">

            <div className="relative w-full max-w-[480px] bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xl overflow-hidden group">

              {/* Card Header Switcher */}
              <div className="flex items-center justify-between mb-3 z-20 relative">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#9e0804] uppercase bg-[#9e080410] px-3 py-1 rounded-full border border-[#9e080420] flex items-center gap-1.5" style={{ borderRadius: '9999px' }}>
                  <Sparkles className="w-3 h-3 text-[#9e0804]" />
                  TN 38 DISTRICTS MAP
                </span>

                {/* Map Mode Toggle Switch */}
                <div className="inline-flex p-0.5 bg-slate-100 rounded-full border border-slate-200 text-[10px] font-bold">
                  <button
                    onClick={() => setMapMode('canvas')}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${mapMode === 'canvas' ? 'bg-[#3f0701] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <Layers className="w-3 h-3" />
                    Canvas Engine
                  </button>
                  <button
                    onClick={() => setMapMode('svg')}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${mapMode === 'svg' ? 'bg-[#3f0701] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    Vector Pin Overlay
                  </button>
                </div>
              </div>

              {/* Map Canvas / SVG Layer with 100% 774x1024 Pixel Alignment */}
              {mapMode === 'canvas' ? (
                <HTML5CanvasMap
                  selectedDistrictId={selectedDistrictId}
                  setSelectedDistrictId={setSelectedDistrictId}
                  hoveredDistrictId={hoveredDistrictId}
                  setHoveredDistrictId={setHoveredDistrictId}
                />
              ) : (
                <div className="relative w-full aspect-[774/1024] flex items-center justify-center rounded-2xl overflow-hidden">

                  {/* Pink Map Image stretching 100% without letterbox padding */}
                  <img
                    src={tnMapImg}
                    alt="Tamil Nadu District Map"
                    className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none filter drop-shadow-md"
                  />

                  {/* Pixel-Perfect Calibrated SVG Layer */}
                  <svg
                    viewBox="0 0 774 1024"
                    className="absolute inset-0 w-full h-full select-none z-10"
                  >
                    <defs>
                      <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9e0804" />
                        <stop offset="100%" stopColor="#c4120c" />
                      </linearGradient>

                      <filter id="glowPin" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Connecting Vector Line to Selected Pin */}
                    <line
                      x1="387"
                      y1="512"
                      x2={activeCoord.x}
                      y2={activeCoord.y}
                      stroke="#9e0804"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="opacity-60 animate-pulse"
                    />

                    {/* All 38 District Interactive Node Pins */}
                    {DISTRICTS_DATA.map((dist) => {
                      const coord = MAP_PINS_COORDINATES[dist.id] || { x: 387, y: 512 };
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
                              r={isSelected ? "24" : "16"}
                              fill={isSelected ? "rgba(158, 8, 4, 0.45)" : "rgba(115, 5, 2, 0.35)"}
                              className="animate-ping"
                            />
                          )}

                          {/* Outer Node Body */}
                          <circle
                            r={isSelected ? "14" : isHovered ? "11" : "7.5"}
                            fill={isSelected ? "url(#roseGradient)" : isHovered ? "#9e0804" : isLive ? "#730502" : "#475569"}
                            stroke="#FFFFFF"
                            strokeWidth={isSelected ? "3" : "2"}
                            filter={isSelected ? "url(#glowPin)" : "none"}
                            className="transition-all duration-300"
                          />

                          {/* Inner White Core */}
                          <circle
                            r={isSelected ? "4.5" : "2.5"}
                            fill="#FFFFFF"
                          />

                          {/* Floating District Name Tag */}
                          {(isSelected || isHovered) && (
                            <g transform="translate(0, -30)" className="pointer-events-none z-30">
                              <rect
                                x="-42"
                                y="-18"
                                width="84"
                                height="26"
                                rx="13"
                                fill={isSelected ? "#071426" : "#1E293B"}
                                stroke="#9e0804"
                                strokeWidth="1.8"
                                className="shadow-2xl"
                              />
                              <text
                                x="0"
                                y="-3"
                                textAnchor="middle"
                                fill="#FFFFFF"
                                fontSize="12"
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
              )}

              {/* Map Footer Legend */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-semibold bg-slate-50 px-4 py-2 rounded-full border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9e0804]"></span>
                    Selected
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9e0804] animate-pulse"></span>
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
