import { useState } from 'react';
import { DISTRICTS_DATA } from '../../data/mockData';
import { Search, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function DistrictJourneySection({ onOpenRegister }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'South', 'North', 'Central', 'West', 'East'];

  const filteredDistricts = DISTRICTS_DATA.filter((dist) => {
    const matchesSearch =
      dist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dist.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || dist.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="districts" className="py-24 sm:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "DISTRICTS" */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        DISTRICTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#2563EB] tracking-[0.18em] uppercase">
              THEZAR ACROSS TAMIL NADU
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#D4A72C',
                boxShadow: '0 0 8px rgba(212, 167, 44, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
            THEZAR ACROSS <span className="text-[#2563EB]">TAMIL NADU</span>
          </h2>
          <p className="text-[11px] sm:text-[12px] font-bold text-[#06B6D4] tracking-[0.12em] uppercase">
            38 DISTRICTS • ONE JOURNEY • ONE GRAND STAGE
          </p>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed pt-1">
            Preliminary collegiate rounds taking place across every district, leading to the Grand Statewide Finale at Chennai.
          </p>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 text-center">
            <p className="text-xs text-slate-500 font-mono uppercase font-bold">Total Districts</p>
            <p className="text-3xl sm:text-4xl font-black text-[#071426] mt-1 font-mono">38</p>
          </div>
          <div className="bg-cyan-50/60 rounded-2xl p-5 border border-cyan-200/80 text-center">
            <p className="text-xs text-cyan-700 font-mono uppercase font-bold">Live Now</p>
            <p className="text-3xl sm:text-4xl font-black text-cyan-600 mt-1 font-mono flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
              1
            </p>
          </div>
          <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-200/80 text-center">
            <p className="text-xs text-blue-700 font-mono uppercase font-bold">Upcoming Rounds</p>
            <p className="text-3xl sm:text-4xl font-black text-blue-600 mt-1 font-mono">19</p>
          </div>
          <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200/80 text-center">
            <p className="text-xs text-emerald-700 font-mono uppercase font-bold">Completed Stages</p>
            <p className="text-3xl sm:text-4xl font-black text-emerald-600 mt-1 font-mono">18</p>
          </div>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#F8FAFC] p-3 sm:p-4 rounded-2xl border border-slate-200/80">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === region
                    ? 'bg-[#071426] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {filteredDistricts.slice(0, 9).map((dist) => (
            <div
              key={dist.id}
              className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/70 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-white px-2.5 py-0.5 rounded-md border border-slate-200 text-slate-600 uppercase">
                    {dist.code} • {dist.region} TN
                  </span>
                  {dist.status === 'Live' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-600 font-mono">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      ● Live
                    </span>
                  ) : dist.status === 'Completed' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 font-mono">
                      <CheckCircle2 className="w-3 h-3" />
                      ✓ Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 font-mono">
                      ○ Upcoming
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-base font-extrabold text-[#071426] group-hover:text-blue-600 transition-colors">
                    {dist.name} District
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 truncate">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{dist.venue}</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500">{dist.date}</span>
                <button
                  onClick={onOpenRegister}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Pass</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
