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
    <section id="districts" className="py-20 bg-[#F8FAFC] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-[#3f0701] uppercase tracking-widest bg-[#FAF0F0] px-4 py-1.5 rounded-full border border-[#3f0701]/20">
            [ 38 DISTRICTS OF TAMIL NADU ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            District Management & <span className="text-[#3f0701]">Venues</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            THEZAR 2026 brings talent competitions to every corner of Tamil Nadu. Find your local district event schedule and register.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm text-center">
            <p className="text-xs text-slate-500 font-mono uppercase">Total Districts</p>
            <p className="text-3xl font-black text-slate-900 mt-1">38</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-rose-200 text-center shadow-sm">
            <p className="text-xs text-rose-600 font-mono uppercase font-bold">Live Now</p>
            <p className="text-3xl font-black text-rose-600 mt-1 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
              1
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-amber-200 text-center shadow-sm">
            <p className="text-xs text-amber-700 font-mono uppercase font-bold">Upcoming Rounds</p>
            <p className="text-3xl font-black text-amber-700 mt-1">19</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-emerald-200 text-center shadow-sm">
            <p className="text-xs text-emerald-700 font-mono uppercase font-bold">Completed Rounds</p>
            <p className="text-3xl font-black text-emerald-700 mt-1">18</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#3f0701] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[#3f0701] text-white shadow-sm'
                    : 'text-slate-600 bg-slate-100 hover:text-slate-900 border border-slate-200'
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
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#3f0701]/30 transition-all text-left flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#3f0701] bg-[#FAF0F0] px-2 py-0.5 rounded border border-[#3f0701]/20">
                    {dist.code}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    dist.status === 'Live'
                      ? 'bg-rose-500 text-white animate-pulse'
                      : dist.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {dist.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-2 group-hover:text-[#3f0701] transition-colors">
                  {dist.name} District
                </h3>

                <div className="space-y-1 mt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3f0701]" />
                    <span>{dist.date}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{dist.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{dist.participants} Candidates</span>
                <button
                  onClick={onOpenRegister}
                  className="px-3 py-1 rounded-lg bg-[#FAF0F0] hover:bg-[#3f0701] text-[#3f0701] hover:text-white font-bold transition-all flex items-center gap-1 text-[11px] cursor-pointer"
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
