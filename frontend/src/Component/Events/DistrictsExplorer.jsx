import { useState } from 'react';
import { DISTRICTS_DATA } from '../../data/mockData';
import { Search, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function DistrictsExplorer({ onOpenRegister }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'South', 'North', 'Central', 'West', 'East'];

  const filteredDistricts = DISTRICTS_DATA.filter((dist) => {
    const matchesSearch = dist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dist.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || dist.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <section id="districts" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            [ 38 DISTRICTS OF TAMIL NADU ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            District Management & <span className="gradient-gold">Venues</span>
          </h2>
          <p className="text-slate-400 text-sm">
            THEZAR 2026 brings talent competitions to every corner of Tamil Nadu. Find your local district event schedule and register.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="glass-card rounded-2xl p-4 border border-slate-800 text-center">
            <p className="text-xs text-slate-400 font-mono uppercase">Total Districts</p>
            <p className="text-3xl font-black text-white mt-1">38</p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-[#9e0804]/30 text-center bg-[#9e0804]/20">
            <p className="text-xs text-red-300 font-mono uppercase">Live Now</p>
            <p className="text-3xl font-black text-red-300 mt-1 flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9e0804] animate-ping"></span>
              1
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-amber-500/30 text-center bg-amber-950/20">
            <p className="text-xs text-amber-400 font-mono uppercase">Upcoming Rounds</p>
            <p className="text-3xl font-black text-amber-400 mt-1">19</p>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-emerald-500/30 text-center bg-emerald-950/20">
            <p className="text-xs text-emerald-400 font-mono uppercase">Completed Rounds</p>
            <p className="text-3xl font-black text-emerald-400 mt-1">18</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#9e0804] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedRegion === reg
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 bg-slate-900 hover:text-white border border-slate-800'
                }`}
              >
                {reg} Region
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
          {filteredDistricts.map((dist) => (
            <div
              key={dist.id}
              className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all text-left flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {dist.code}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    dist.status === 'Live'
                      ? 'bg-[#9e0804] text-white animate-pulse'
                      : dist.status === 'Completed'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {dist.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mt-2 group-hover:text-red-300 transition-colors">
                  {dist.name} District
                </h3>

                <div className="space-y-1 mt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-300" />
                    <span>{dist.date}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{dist.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{dist.participants} Candidates</span>
                <button
                  onClick={onOpenRegister}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-[#9e0804] text-slate-200 hover:text-white font-bold transition-all flex items-center gap-1 text-[11px]"
                >
                  <span>Register</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
