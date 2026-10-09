import { Mic, Users, Sparkles, Award, ArrowUpRight, Trophy, Music, Disc } from 'lucide-react';
import speakerImg from '../../assets/about_audience.jpg';
import { useSiteContent } from '../../context/SiteContentContext';

const ICON_MAP = {
  Mic: Mic,
  Users: Users,
  Sparkles: Sparkles,
  Award: Award,
  Trophy: Trophy,
  Music: Music,
  Disc: Disc
};

export default function CategoryGridSection({ onOpenRegister }) {
  const { siteContent } = useSiteContent();

  const categories = siteContent.competitionCategories && siteContent.competitionCategories.length > 0
    ? siteContent.competitionCategories
    : [
        {
          id: 'singing',
          categoryNum: 'Category I',
          title: 'Solo Vocal & Carol Singing',
          subtitle: 'Kids Under 15 & Adults Open',
          entryFee: '₹699 per entry',
          iconName: 'Mic',
          color: 'bg-amber-500/15 text-amber-900 border-amber-200',
          badgeBg: 'bg-amber-100 text-amber-800',
          description: 'Acoustic festive singing with live jury evaluation. Kids (under 15) and adult open tracks available.',
          prizes: '1st Prize ₹15,000 / 2nd Prize ₹10,000',
          venue: 'Tirunelveli District Arena'
        },
        {
          id: 'choir',
          categoryNum: 'Category II',
          title: 'Choir & Music Bands',
          subtitle: 'Troupe & Band Harmony',
          entryFee: '₹199 per member',
          iconName: 'Users',
          color: 'bg-[#9e0804]/15 text-[#9e0804] border-[#9e0804]/30',
          badgeBg: 'bg-[#9e0804]/15 text-[#9e0804]',
          description: 'Grand choir and band competition for church, school, college, and independent ensembles.',
          prizes: '1st Prize ₹50,000 / 2nd Prize ₹25,000',
          venue: 'Main Auditorium Stage'
        },
        {
          id: 'dance',
          categoryNum: 'Category III',
          title: 'Choreography Dance Showcase',
          subtitle: 'Solo & Group Choreography',
          entryFee: 'Solo ₹699 / Group ₹199 per head',
          iconName: 'Sparkles',
          color: 'bg-purple-500/15 text-purple-900 border-purple-200',
          badgeBg: 'bg-purple-100 text-purple-800',
          description: 'Dynamic festive dance battles featuring creative choreography, rhythm, costumes, and stage synchrony.',
          prizes: '1st Prize ₹25,000 / 2nd Prize ₹15,000',
          venue: 'Grand Stage Arena'
        },
        {
          id: 'santa',
          categoryNum: 'Category IV',
          title: 'Santa Claus Contest',
          subtitle: 'Special Stage Character Act',
          entryFee: '₹699 per entry',
          iconName: 'Award',
          color: 'bg-emerald-500/15 text-emerald-900 border-emerald-200',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          description: 'Festive character presentation, costume creativity, cheerful crowd interaction, and stage presence.',
          prizes: 'Grand Prize ₹20,000',
          venue: 'Festive Center Stage'
        }
      ];

  return (
    <section id="competitions" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(60px, 12vw, 150px)',
          color: 'rgba(15, 23, 42, 0.03)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        COMPETITIONS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
              {siteContent.competitionsEyebrow || 'OFFICIAL COMPETITION CATEGORIES • TIRUNELVELI'}
            </span>
            <div
              className="w-10 h-[2px] rounded-full"
              style={{
                backgroundColor: '#3f0701',
                boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
              }}
            />
          </div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#071426] tracking-[-0.035em] uppercase leading-[1.05]">
            {siteContent.competitionsTitle || 'CAROL FIESTA 2026'}{' '}
            <span className="text-[#9e0804]">{siteContent.competitionsHighlight || 'CATEGORIES'}</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
            {siteContent.competitionsSubtitle ||
              'Four exciting competition tracks featuring solo singing, live choir bands, choreography dance, and special Santa Claus performances with grand cash awards and trophies!'}
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="space-y-6">
          
          {/* TOP WIDE HERO BENTO CARD */}
          <div className="relative rounded-3xl bg-[#3f0701] p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-[#3f0701]/50">
            {/* Background Accent Lines */}
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full border border-[#9e0804]/20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column Info */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-[#9e0804]/20 border border-[#9e0804]/40 text-red-300 text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteContent.featuredBadge || 'TIRUNELVELI DISTRICT ARENA • DEC 12, 2026'}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                  {siteContent.featuredTitle || 'Christmas Carol Fiesta'} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-red-400 to-red-200">
                    {siteContent.featuredSubtitle || 'Grand Stage Competitions'}
                  </span>
                </h3>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
                  {siteContent.featuredDescription ||
                    'Take the acoustic spotlight and compete among Tamil Nadu’s top vocalists, choir troupes, and dance performers. Instant digital entry passes and certified jury evaluations!'}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenRegister}
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] text-white font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-red-900/30 hover:scale-105 transition-transform cursor-pointer"
                    style={{ borderRadius: '9999px' }}
                  >
                    <span>Register for Competitions</span>
                    <div className="w-7 h-7 rounded-full bg-[#3f0701]/10 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#3f0701]" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column Highlight Box */}
              <div className="lg:col-span-5 flex flex-col items-end justify-center">
                <div className="w-full max-w-sm bg-white text-slate-900 rounded-2xl p-6 shadow-2xl space-y-4 border border-slate-100 relative">
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-[#3f0701] tracking-tight">{categories.length} Categories</p>
                      <p className="text-xs text-slate-500 font-medium">Singing • Choirs • Dance • Santa</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#9e0804] flex items-center justify-center font-bold">
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                      <span className="text-slate-600">Event Host</span>
                      <span className="text-[#9e0804] font-bold">{siteContent.featuredDistrict || 'Tirunelveli District'}</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-50/70 border border-red-100 font-semibold">
                      <span className="text-slate-800">Prize Pool</span>
                      <span className="text-[#9e0804] font-bold">{siteContent.featuredPrize || '₹50,000 + Trophy'}</span>
                    </div>
                  </div>

                  {/* Pill Tags */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-bold">
                    {categories.map((c, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 flex items-center gap-1">
                        {c.categoryNum || `Track ${i + 1}`} <ArrowUpRight className="w-3 h-3 text-[#9e0804]" />
                      </span>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* DYNAMIC CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {categories.map((cat, idx) => {
              const IconComponent = ICON_MAP[cat.iconName] || Trophy;
              return (
                <div
                  key={cat.id || idx}
                  className="rounded-3xl p-7 flex flex-col justify-between border shadow-sm hover:shadow-md transition-all group relative min-h-[300px] bg-white border-slate-200/80"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${cat.color || 'bg-red-50 text-[#9e0804]'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${cat.badgeBg || 'bg-slate-100 text-slate-800'}`}>
                        {cat.categoryNum || `Category ${idx + 1}`}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-[#3f0701] tracking-tight leading-snug">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] font-bold text-[#9e0804] uppercase tracking-wider mt-0.5 font-mono">
                      {cat.subtitle}
                    </p>

                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 space-y-2 mt-4">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>Prize</span>
                      <span className="text-[#9e0804] font-bold">{cat.prizes}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>Fee</span>
                      <span className="text-slate-900 font-bold">{cat.entryFee}</span>
                    </div>

                    <button
                      onClick={onOpenRegister}
                      className="w-full mt-2 py-2.5 rounded-full bg-[#071426] text-white text-xs font-bold flex items-center justify-center gap-1.5 group-hover:bg-[#9e0804] transition-colors cursor-pointer"
                      style={{ borderRadius: '9999px' }}
                    >
                      <span>Register {cat.categoryNum || 'Now'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
