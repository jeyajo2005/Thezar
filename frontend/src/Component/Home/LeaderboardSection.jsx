import { useState } from 'react';
import { LEADERBOARD_DATA } from '../../data/mockData';
import { Trophy, ArrowRight } from 'lucide-react';

export default function LeaderboardSection() {
  const [tab, setTab] = useState('Individual');

  return (
    <section id="leaderboard" className="py-24 sm:py-32 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* 1. Oversized Faint Watermark Text: "RANKINGS" */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        RANKINGS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#E11D48] tracking-[0.18em] uppercase">
              LIVE STANDINGS
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
            THEZAR <span className="text-[#E11D48]">LEADERBOARD</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
            Live points tally updated across all 38 districts of Tamil Nadu after each competition round.
          </p>
        </div>

        {/* Leaderboard Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xl text-left">
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
              {['Individual', 'College', 'District'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
                    tab === t
                      ? 'bg-[#071426] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#071426]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Leaderboard List (Top 5 Participants) */}
          <div className="space-y-3">
            {LEADERBOARD_DATA.slice(0, 5).map((user) => (
              <div
                key={user.rank}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                  user.isUser
                    ? 'bg-rose-50/70 border-rose-300 shadow-sm'
                    : 'bg-[#F8FAFC] border-slate-200/70 hover:border-slate-300'
                }`}
              >
                {/* Rank Badge & Profile Info */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${
                      user.rank === 1
                        ? 'bg-amber-400 text-[#071426] shadow-md shadow-amber-400/25'
                        : user.rank === 2
                        ? 'bg-slate-300 text-slate-800'
                        : user.rank === 3
                        ? 'bg-amber-700 text-white'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {user.rank === 1 ? <Trophy className="w-5 h-5 fill-current" /> : `#${user.rank}`}
                  </div>

                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-black text-[#071426] truncate">
                        {user.name}
                      </h4>
                      {user.isUser && (
                        <span className="bg-rose-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase shrink-0 font-mono">
                          Your Rank
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 truncate">{user.college}</p>
                  </div>
                </div>

                {/* Points & District */}
                <div className="text-right shrink-0">
                  <div className="flex items-baseline justify-end gap-1 font-mono">
                    <span className="text-lg sm:text-2xl font-black text-rose-600">{user.points}</span>
                    <span className="text-[11px] text-slate-400 font-bold uppercase">pts</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{user.district} District</p>
                </div>

              </div>
            ))}
          </div>

          {/* Full Leaderboard CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <button
              className="inline-flex items-center gap-2 text-xs font-extrabold text-rose-600 hover:text-rose-800 uppercase tracking-widest cursor-pointer"
            >
              <span>VIEW FULL LEADERBOARD (38 DISTRICTS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
