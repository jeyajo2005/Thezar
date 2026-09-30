import { useState } from 'react';
import { LEADERBOARD_DATA } from '../../data/mockData';
import { Trophy, Award, Medal, Star, Flame } from 'lucide-react';

export default function LeaderboardSection() {
  const [tab, setTab] = useState('Individual');

  return (
    <section id="leaderboard" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            [ STATEWIDE COMPETITOR STANDINGS ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Results & <span className="gradient-gold">Leaderboard</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Live points tally updated across all 38 districts of Tamil Nadu after each competition round.
          </p>
        </div>

        {/* Leaderboard Card Container matching Image 2 Mobile/Web layout */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              {['Individual', 'College', 'District', 'Overall'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${
                    tab === t
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="space-y-3">
            {LEADERBOARD_DATA.map((user) => (
              <div
                key={user.rank}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 text-left ${
                  user.isUser
                    ? 'bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/40'
                    : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Rank Badge & Avatar */}
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                    user.rank === 1
                      ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/30'
                      : user.rank === 2
                      ? 'bg-slate-300 text-slate-950'
                      : user.rank === 3
                      ? 'bg-amber-700 text-white'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    {user.rank === 1 ? <Trophy className="w-5 h-5 fill-current" /> : user.rank}
                  </div>

                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{user.name}</h4>
                      {user.isUser && (
                        <span className="bg-rose-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                          Your Position
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{user.college}</p>
                  </div>
                </div>

                {/* Points & District */}
                <div className="text-right">
                  <span className="text-lg font-black font-mono text-amber-400">{user.points}</span>
                  <span className="text-xs text-slate-500 ml-1 font-mono">pts</span>
                  <p className="text-[11px] text-slate-400 font-medium">{user.district} District</p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
