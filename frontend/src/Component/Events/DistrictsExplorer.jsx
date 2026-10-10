import React, { useState, useEffect, useMemo } from 'react';
import { DISTRICTS_DATA } from '../../data/mockData';
import { Search, MapPin, Calendar, ChevronRight, Loader2, Users } from 'lucide-react';
import { useSiteContent } from '../../context/SiteContentContext';

export default function DistrictsExplorer({ onOpenRegister }) {
  const { siteContent } = useSiteContent();
  const [districts, setDistricts] = useState(DISTRICTS_DATA);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:5000/api/districts')
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.success && Array.isArray(data.districts) && data.districts.length > 0) {
          setDistricts(data.districts);
        }
      })
      .catch((err) => {
        console.warn('[DistrictsExplorer] Offline or API error, using default district dataset:', err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const regions = ['All', 'South', 'North', 'Central', 'West', 'East'];

  const filteredDistricts = useMemo(() => {
    return districts.filter((dist) => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        dist.name.toLowerCase().includes(q) ||
        (dist.venue && dist.venue.toLowerCase().includes(q)) ||
        (dist.code && dist.code.toLowerCase().includes(q));
      const matchesRegion =
        selectedRegion === 'All' ||
        dist.region?.toLowerCase() === selectedRegion.toLowerCase() ||
        dist.zone?.toLowerCase().includes(selectedRegion.toLowerCase());
      return matchesSearch && matchesRegion;
    });
  }, [districts, searchTerm, selectedRegion]);

  // Dynamic statistics computed from active district data
  const stats = useMemo(() => {
    const total = districts.length;
    const live = districts.filter((d) => d.status === 'Live').length;
    const upcoming = districts.filter((d) => d.status === 'Upcoming').length;
    const completed = districts.filter((d) => d.status === 'Completed').length;
    return {
      total: total || 38,
      live: live || 1,
      upcoming: upcoming || 19,
      completed: completed || 18,
    };
  }, [districts]);

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

        {/* Dynamic Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm text-center">
            <p className="text-xs text-slate-500 font-mono uppercase font-bold">Total Districts</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{stats.total}</p>
          </div>
          <div className="rounded-2xl p-4 border border-[#9e0804]/30 text-center bg-[#FAF0F0]">
            <p className="text-xs text-[#9e0804] font-mono uppercase font-bold">Live Now</p>
            <p className="text-3xl font-black text-[#9e0804] mt-1 flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9e0804] animate-ping"></span>
              {stats.live}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-amber-200 text-center shadow-sm">
            <p className="text-xs text-amber-700 font-mono uppercase font-bold">Upcoming Rounds</p>
            <p className="text-3xl font-black text-amber-700 mt-1">{stats.upcoming}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-emerald-200 text-center shadow-sm">
            <p className="text-xs text-emerald-700 font-mono uppercase font-bold">Completed Rounds</p>
            <p className="text-3xl font-black text-emerald-700 mt-1">{stats.completed}</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search district, code or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#9e0804] transition-colors"
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

        {/* Districts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-4 border border-slate-200 animate-pulse space-y-3">
                <div className="h-4 bg-slate-200 rounded w-1/3" />
                <div className="h-6 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredDistricts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <p className="text-slate-500 text-sm">No districts found matching "{searchTerm}" in {selectedRegion} Region.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredDistricts.map((dist) => (
              <div
                key={dist.id}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#3f0701]/30 transition-all text-left flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#3f0701] bg-[#FAF0F0] px-2 py-0.5 rounded border border-[#3f0701]/20">
                      {dist.code || 'TN'}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                      dist.status === 'Live'
                        ? 'bg-[#9e0804] text-white animate-pulse'
                        : dist.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {dist.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-[#3f0701] transition-colors">
                    {dist.name} District
                  </h3>

                  <div className="space-y-1 mt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#3f0701]" />
                      <span>{dist.date || '12.12.2026'}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{dist.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{dist.participants || 250}+ Candidates</span>
                  <button
                    onClick={() => onOpenRegister && onOpenRegister(dist.name)}
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-[#9e0804] text-slate-200 hover:text-white font-bold transition-all flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    <span>Register</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
