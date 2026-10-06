import { useState } from 'react';
import { Trophy, ArrowRight, Crown, TrendingUp, Sparkles, Star } from 'lucide-react';
import rank1Img from '../../assets/rank1_avatar.jpg';
import rank2Img from '../../assets/rank2_avatar.jpg';
import rank3Img from '../../assets/rank3_avatar.jpg';
import { useSiteContent } from '../../context/SiteContentContext';

const AVATAR_MAP = [rank2Img, rank1Img, rank3Img];

export default function LeaderboardSection() {
  const { siteContent } = useSiteContent();
  const [tab, setTab] = useState('Individual');

  const topThree = (siteContent.leaderboardTopThree && siteContent.leaderboardTopThree.length > 0)
    ? siteContent.leaderboardTopThree.map((item, idx) => ({
        ...item,
        avatar: AVATAR_MAP[idx % AVATAR_MAP.length] || rank1Img,
        badgeBg: idx === 1 ? 'bg-[#F59E0B] text-white' : idx === 0 ? 'bg-[#38BDF8] text-white' : 'bg-[#F43F5E] text-white',
        ringColor: idx === 1 ? 'border-[#F59E0B]' : idx === 0 ? 'border-[#38BDF8]' : 'border-[#F43F5E]',
        lineColor: idx === 1 ? 'bg-[#F59E0B]' : idx === 0 ? 'bg-[#38BDF8]' : 'bg-[#F43F5E]',
        isCrown: idx === 1
      }))
    : [
        {
          rank: 2,
          name: 'Wade Warren',
          district: 'Tirunelveli',
          score: '3,546',
          subtitle: 'Solo Vocal Champion',
          avatar: rank2Img,
          badgeBg: 'bg-[#38BDF8] text-white',
          ringColor: 'border-[#38BDF8]',
          lineColor: 'bg-[#38BDF8]',
        },
        {
          rank: 1,
          name: 'Robert Fox',
          district: 'Chennai',
          score: '3,890',
          subtitle: 'Statewide Carol Champion',
          avatar: rank1Img,
          badgeBg: 'bg-[#F59E0B] text-white',
          ringColor: 'border-[#F59E0B]',
          lineColor: 'bg-[#F59E0B]',
          isCrown: true,
        },
        {
          rank: 3,
          name: 'Jane Cooper',
          district: 'Madurai',
          score: '3,420',
          subtitle: 'South Region Leader',
          avatar: rank3Img,
          badgeBg: 'bg-[#F43F5E] text-white',
          ringColor: 'border-[#F43F5E]',
          lineColor: 'bg-[#F43F5E]',
        },
      ];

  const tableData = [
    {
      rank: 4,
      name: 'Esther Howard',
      district: 'Tirunelveli',
      score: '1,878',
      rankChange: '#4',
      improvement: '+335',
      reelViews: '14.2k',
      avatar: rank1Img,
      isUser: true,
    },
    {
      rank: 5,
      name: 'Floyd Miles',
      district: 'Coimbatore',
      score: '1,720',
      rankChange: '#5',
      improvement: '+245',
      reelViews: '11.8k',
      avatar: rank2Img,
      isUser: false,
    },
    {
      rank: 6,
      name: 'Devon Lane',
      district: 'Salem',
      score: '1,650',
      rankChange: '#6',
      improvement: '+543',
      reelViews: '9.4k',
      avatar: rank3Img,
      isUser: false,
    },
    {
      rank: 7,
      name: 'Savannah Nguyen',
      district: 'Trichy',
      score: '1,590',
      rankChange: '#7',
      improvement: '+212',
      reelViews: '8.9k',
      avatar: rank2Img,
      isUser: false,
    },
    {
      rank: 8,
      name: 'Guy Hawkins',
      district: 'Vellore',
      score: '1,480',
      rankChange: '#8',
      improvement: '+178',
      reelViews: '7.5k',
      avatar: rank1Img,
      isUser: false,
    },
  ];

  return (
    <section id="leaderboard" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
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
            <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
              {siteContent.leaderboardEyebrow || 'LIVE STANDINGS'}
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#3f0701',
                boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
            {siteContent.leaderboardTitle || 'THEZAR LEADERBOARD'}
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
            {siteContent.leaderboardSubtitle || 'Live points tally updated across all 38 districts of Tamil Nadu after each competition round.'}
          </p>
        </div>

        {/* TOP 3 PODIUM SHOWCASE (MATCHING REFERENCE DESIGN) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl space-y-8">
          
          {/* Top 3 Avatars Row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 items-end pt-4 pb-2">
            
            {/* RANK 2 (LEFT) */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="relative">
                <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 ${topThree[0].ringColor} p-1 bg-white shadow-lg group-hover:scale-105 transition-transform`}>
                  <img
                    src={topThree[0].avatar}
                    alt={topThree[0].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Score Badge */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${topThree[0].badgeBg} text-[10px] sm:text-xs font-black font-mono px-2.5 py-0.5 rounded-full shadow-md`} style={{ borderRadius: '9999px' }}>
                  {topThree[0].score}
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-sm sm:text-base font-black text-[#3f0701] tracking-tight">{topThree[0].name}</h4>
                <p className="text-[11px] text-slate-500 font-semibold">{topThree[0].district}</p>
              </div>
              <div className={`w-full h-1.5 rounded-full ${topThree[0].lineColor} mt-2`} />
            </div>

            {/* RANK 1 (CENTER - ELEVATED CHAMPION) */}
            <div className="flex flex-col items-center text-center space-y-2 group -mt-6 sm:-mt-8">
              {/* Golden Crown */}
              <div className="text-amber-500 animate-bounce">
                <Crown className="w-8 h-8 sm:w-10 sm:h-10 fill-amber-400 text-amber-500 filter drop-shadow-md" />
              </div>

              <div className="relative">
                <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 ${topThree[1].ringColor} p-1 bg-white shadow-2xl group-hover:scale-105 transition-transform filter drop-shadow-lg`}>
                  <img
                    src={topThree[1].avatar}
                    alt={topThree[1].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Score Badge */}
                <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 ${topThree[1].badgeBg} text-xs sm:text-sm font-black font-mono px-3 py-0.5 rounded-full shadow-lg`} style={{ borderRadius: '9999px' }}>
                  {topThree[1].score}
                </div>
              </div>
              <div className="pt-3">
                <h4 className="text-base sm:text-lg font-black text-[#3f0701] tracking-tight">{topThree[1].name}</h4>
                <p className="text-xs text-amber-600 font-extrabold uppercase tracking-wider">{topThree[1].district} Champion</p>
              </div>
              <div className={`w-full h-2 rounded-full ${topThree[1].lineColor} mt-2`} />
            </div>

            {/* RANK 3 (RIGHT) */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="relative">
                <div className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 ${topThree[2].ringColor} p-1 bg-white shadow-lg group-hover:scale-105 transition-transform`}>
                  <img
                    src={topThree[2].avatar}
                    alt={topThree[2].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Score Badge */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${topThree[2].badgeBg} text-[10px] sm:text-xs font-black font-mono px-2.5 py-0.5 rounded-full shadow-md`} style={{ borderRadius: '9999px' }}>
                  {topThree[2].score}
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-sm sm:text-base font-black text-[#3f0701] tracking-tight">{topThree[2].name}</h4>
                <p className="text-[11px] text-slate-500 font-semibold">{topThree[2].district}</p>
              </div>
              <div className={`w-full h-1.5 rounded-full ${topThree[2].lineColor} mt-2`} />
            </div>

          </div>

          {/* FEATURED "YOUR PERFORMANCE" CARD (MATCHING REFERENCE DESIGN) */}
          <div className="bg-[#9e080410] rounded-2xl p-4 sm:p-5 border border-[#9e080430] text-left shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <img
                src={tableData[0].avatar}
                alt={tableData[0].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#9e0804] shadow-md shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-extrabold text-[#071426] truncate">{tableData[0].name}</h4>
                  <span className="bg-[#9e0804] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase" style={{ borderRadius: '9999px' }}>
                    Your Performance
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{tableData[0].district} District Leader</p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="flex items-center gap-6 text-xs sm:text-sm font-mono w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#9e080430]">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase font-sans">Score</p>
                <p className="font-extrabold text-slate-900">{tableData[0].score}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase font-sans">Rank</p>
                <p className="font-extrabold text-[#9e0804]">{tableData[0].rankChange}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase font-sans">Improvement</p>
                <p className="font-extrabold text-emerald-600 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {tableData[0].improvement}
                </p>
              </div>
            </div>
          </div>

          {/* TABLE RANKINGS LIST (MATCHING REFERENCE IMAGE TABLE STYLE) */}
          <div className="space-y-2.5 text-left pt-2">
            <div className="hidden sm:grid grid-cols-12 px-4 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              <span className="col-span-5">Candidate / District</span>
              <span className="col-span-2 text-center">Score</span>
              <span className="col-span-2 text-center">Rank</span>
              <span className="col-span-3 text-right">Improvement</span>
            </div>

            {tableData.slice(1).map((row) => (
              <div
                key={row.rank}
                className="bg-[#F8FAFC] hover:bg-slate-100/80 rounded-2xl p-4 border border-slate-200/70 transition-colors grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
              >
                {/* Candidate Info */}
                <div className="sm:col-span-5 flex items-center gap-3">
                  <img
                    src={row.avatar}
                    alt={row.name}
                    className="w-10 h-10 rounded-full object-cover border border-white shadow-xs shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="text-sm font-bold text-[#3f0701] truncate">{row.name}</h5>
                    <p className="text-[11px] text-slate-500 font-medium">{row.district} District</p>
                  </div>
                </div>

                {/* Score */}
                <div className="sm:col-span-2 text-left sm:text-center font-mono font-bold text-slate-800 text-sm">
                  <span className="sm:hidden text-xs text-slate-400 font-sans mr-2">Score:</span>
                  {row.score}
                </div>

                {/* Rank */}
                <div className="sm:col-span-2 text-left sm:text-center font-mono font-bold text-[#3f0701] text-sm">
                  <span className="sm:hidden text-xs text-slate-400 font-sans mr-2">Rank:</span>
                  <span className="bg-slate-200/70 px-2 py-0.5 rounded-md text-xs">{row.rankChange}</span>
                </div>

                {/* Improvement */}
                <div className="sm:col-span-3 text-left sm:text-right font-mono font-bold text-emerald-600 text-sm flex items-center sm:justify-end gap-1">
                  <span className="sm:hidden text-xs text-slate-400 font-sans mr-2">Improvement:</span>
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{row.improvement}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Full Leaderboard Button */}
          {/* <div className="pt-4 border-t border-slate-100 text-center">
            <button
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#9e0804] hover:text-[#730502] uppercase tracking-widest cursor-pointer"
            >
              <span>VIEW FULL LEADERBOARD (38 DISTRICTS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div> */}

        </div>

      </div>
    </section>
  );
}
