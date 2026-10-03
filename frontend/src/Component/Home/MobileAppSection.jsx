import { QRCodeSVG } from 'qrcode.react';
import { Apple, Play, Smartphone, Bell, CheckCircle2, ShieldCheck, Sparkles, Wifi, BatteryCharging, Radio, Trophy, Award, Flame, Crown } from 'lucide-react';

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-12 sm:py-16 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(70px, 14vw, 170px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        MOBILE APP
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: App Download Info, Store Badges & QR Code */}
            <div className="lg:col-span-6 text-left space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold text-[#3f0701] tracking-[0.18em] uppercase">
                  OFFICIAL MOBILE APP
                </span>
                <div
                  className="w-10 h-[2px] rounded-full"
                  style={{
                    backgroundColor: '#3f0701',
                    boxShadow: '0 0 8px rgba(63, 7, 1, 0.30)',
                  }}
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-black text-[#3f0701] tracking-[-0.035em] leading-[1.05] uppercase">
                  DOWNLOAD <br />
                  <span className="text-[#3f0701] underline decoration-[#3f0701]/30">THIS APP</span>
                </h2>
                <div className="inline-flex items-center gap-2 bg-[#FAF0F0] border border-[#3f0701]/20 text-[#3f0701] text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase" style={{ borderRadius: '9999px' }}>
                  <Sparkles className="w-3.5 h-3.5 text-[#3f0701]" />
                  <span>OPTIMIZED FOR 6.3" DISPLAY • ZERO BEZELS</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                Track live district leaderboards, upload your video reels, receive instantaneous admission pass updates, and view real-time scorecards across all 38 districts of Tamil Nadu.
              </p>

              {/* DOWNLOAD BUTTONS & QR CODE ROW */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* Store Download Badges */}
                <div className="space-y-3">
                  
                  {/* Apple App Store */}
                  <a
                    href="#appstore"
                    className="flex items-center gap-3 bg-[#3f0701] hover:bg-[#580c04] text-white px-5 py-3 rounded-2xl shadow-md transition-colors w-52 border border-[#3f0701]/40"
                    style={{ borderRadius: '9999px' }}
                  >
                    <Apple className="w-6 h-6 text-white shrink-0 fill-current" />
                    <div className="text-left leading-tight">
                      <p className="text-[9px] font-mono text-slate-300 uppercase">Download on the</p>
                      <p className="text-sm font-bold text-white">App Store</p>
                    </div>
                  </a>

                  {/* Google Play Store */}
                  <a
                    href="#playstore"
                    className="flex items-center gap-3 bg-[#3f0701] hover:bg-[#580c04] text-white px-5 py-3 rounded-2xl shadow-md transition-colors w-52 border border-[#3f0701]/40"
                    style={{ borderRadius: '9999px' }}
                  >
                    <Play className="w-6 h-6 text-white shrink-0 fill-current" />
                    <div className="text-left leading-tight">
                      <p className="text-[9px] font-mono text-slate-300 uppercase">GET IT ON</p>
                      <p className="text-sm font-bold text-white">Google Play</p>
                    </div>
                  </a>

                </div>

                {/* QR Code Scan Card */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center space-y-1.5">
                  <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-inner">
                    <QRCodeSVG value="https://thezar2026.tn.gov.in/app-download" size={88} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-600 font-mono">Scan to Download</p>
                </div>

              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Official TN Event App
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3f0701]" />
                  Instant QR Entry Pass
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: REALISTIC 6.3" SMARTPHONES WITH ULTRA-SLIM BEZEL & CHIN */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-6 lg:pt-0">
              
              {/* Soft Ambient Background Aura */}
              <div className="absolute w-80 h-80 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex items-center justify-center gap-4 sm:gap-6">
                
                {/* ========================================================= */}
                {/* PHONE 1: 6.3-inch Real Flagship (Tilted Left - Live Pass) */}
                {/* ========================================================= */}
                <div className="relative flex flex-col items-center">
                  <div className="relative w-[210px] sm:w-[245px] h-[440px] sm:h-[490px] rounded-[44px] p-[5px] bg-[#240401] border-[2.5px] border-[#3f0701] shadow-[0_25px_50px_-12px_rgba(63,7,1,0.5),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.25)] transform -rotate-6 hover:rotate-0 transition-all duration-500 z-10 group">
                    
                    {/* Hardware Buttons on Chassis */}
                    <div className="absolute -left-[3.5px] top-20 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                    <div className="absolute -left-[3.5px] top-30 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                    <div className="absolute -right-[3.5px] top-24 w-[2.5px] h-10 bg-slate-500 rounded-r" />

                    {/* Top Earpiece Speaker Slit */}
                    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-slate-700 rounded-full z-40" />

                    {/* 6.3" Screen Display (Ultra-thin uniform bezel & chin: rounded-[39px]) */}
                    <div className="relative w-full h-full bg-[#150201] rounded-[39px] overflow-hidden flex flex-col justify-between border border-white/5">
                      
                      {/* Diagonal Glass Sheen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-30" />

                      {/* Top Status Bar with Dynamic Island */}
                      <div className="pt-2 px-4 flex items-center justify-between z-20 relative text-white">
                        <span className="text-[10px] font-bold font-mono tracking-tight">9:41</span>
                        
                        {/* Dynamic Island Pill Notch */}
                        <div className="w-18 h-4 bg-black rounded-full flex items-center justify-end px-1.5 shadow-inner">
                          <div className="w-2 h-2 rounded-full bg-[#0F172A] border border-slate-800" />
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-white">
                          <Wifi className="w-2.5 h-2.5" />
                          <div className="w-4 h-2 rounded-xs border border-white p-[1px] flex items-center">
                            <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* Screen Inner Content */}
                      <div className="px-3.5 py-1 space-y-2.5 text-left flex-1 flex flex-col justify-between">
                        
                        {/* App Header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-md bg-[#3f0701] flex items-center justify-center text-white text-[9px] font-black border border-white/20">
                              TZ
                            </div>
                            <span className="text-[10px] font-extrabold text-white">TheZar 2026</span>
                          </div>
                          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ACTIVE PASS
                          </span>
                        </div>

                        {/* Candidate QR Card */}
                        <div className="bg-gradient-to-br from-[#3f0701] via-[#580c04] to-[#240401] p-3 rounded-2xl text-white text-center shadow-lg relative overflow-hidden border border-white/10">
                          <div className="flex justify-between items-center text-[9px] font-mono text-rose-100 pb-1">
                            <span>ENTRY PASS</span>
                            <span className="bg-white/20 px-1.5 py-0.5 rounded">#TZ-3841</span>
                          </div>
                          <p className="text-xs font-black text-white">Sumanth Raja</p>
                          <div className="bg-white p-1.5 rounded-xl inline-block shadow-md my-1">
                            <QRCodeSVG value="https://thezar2026.tn.gov.in/pass/TZ-3841" size={76} />
                          </div>
                          <p className="text-[8px] font-mono text-rose-100">Scan at Tirunelveli Venue</p>
                        </div>

                        {/* Event Details Card */}
                        <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700/80 text-[10px] space-y-1">
                          <div className="flex justify-between items-center text-slate-300">
                            <span className="font-bold text-white">Cooking Championship</span>
                            <span className="text-amber-400 font-mono text-[9px]">10:00 AM</span>
                          </div>
                          <p className="text-[9px] text-slate-400">ABC Engg College, Tirunelveli</p>
                        </div>

                      </div>

                      {/* Razor-thin Chin + iOS Home Indicator Bar */}
                      <div className="pb-1.5 flex justify-center z-20">
                        <div className="w-24 h-1 bg-white/40 rounded-full" />
                      </div>

                    </div>
                  </div>
                  {/* Perspective Shadow Beneath Left Phone */}
                  <div className="w-36 sm:w-44 h-3.5 bg-slate-950/30 rounded-full blur-md mt-1" />
                </div>


                {/* ========================================================= */}
                {/* PHONE 2: 6.3-inch Flagship (Tilted Right - Leaderboard Feed) */}
                {/* ========================================================= */}
                <div className="relative flex flex-col items-center">
                  <div className="relative w-[220px] sm:w-[255px] h-[455px] sm:h-[505px] rounded-[44px] p-[5px] bg-[#1a2332] border-[2.5px] border-slate-600/90 shadow-[0_30px_60px_-12px_rgba(7,20,38,0.55),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 group">
                    
                    {/* Hardware Buttons on Chassis */}
                    <div className="absolute -left-[3.5px] top-24 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                    <div className="absolute -left-[3.5px] top-34 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                    <div className="absolute -right-[3.5px] top-28 w-[2.5px] h-10 bg-slate-500 rounded-r" />

                    {/* Top Earpiece Speaker Slit */}
                    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-slate-700 rounded-full z-40" />

                    {/* 6.3" Screen Display (Ultra-thin uniform bezel & chin: rounded-[39px]) */}
                    <div className="relative w-full h-full bg-[#081224] rounded-[39px] overflow-hidden flex flex-col justify-between border border-white/5">
                      
                      {/* Diagonal Glass Sheen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-30" />

                      {/* Top Status Bar with Dynamic Island */}
                      <div className="pt-2 px-4 flex items-center justify-between z-20 relative text-white">
                        <span className="text-[10px] font-bold font-mono tracking-tight">9:41</span>
                        
                        {/* Dynamic Island Pill Notch */}
                        <div className="w-18 h-4 bg-black rounded-full flex items-center justify-end px-1.5 shadow-inner">
                          <div className="w-2 h-2 rounded-full bg-[#0F172A] border border-slate-800" />
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-white">
                          <Wifi className="w-2.5 h-2.5" />
                          <div className="w-4 h-2 rounded-xs border border-white p-[1px] flex items-center">
                            <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* Screen Inner Content (Live Leaderboard Feed) */}
                      <div className="px-3.5 py-1 space-y-2.5 text-left flex-1 flex flex-col justify-between">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <Trophy className="w-4 h-4 text-amber-400" />
                            <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">LIVE STANDINGS</span>
                          </div>
                          <span className="text-[8px] font-mono text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-500/40">
                            38 DISTRICTS
                          </span>
                        </div>

                        {/* Top Rank 1 Feature Card */}
                        <div className="bg-gradient-to-r from-amber-500/20 via-slate-800/90 to-slate-800/90 p-2.5 rounded-2xl border border-amber-500/40 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono font-bold text-amber-400 uppercase flex items-center gap-1">
                              <Crown className="w-3 h-3 fill-amber-400" /> #1 STATEWIDE
                            </span>
                            <span className="text-[10px] font-mono font-black text-amber-300">3,890 PTS</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                              1
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-black text-white truncate">Robert Fox</p>
                              <p className="text-[8px] text-slate-400">Chennai • Master Chef</p>
                            </div>
                          </div>
                        </div>

                        {/* Rank 2 & 3 Quick Rows */}
                        <div className="space-y-1.5">
                          <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700/60 flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                              <span className="w-4 text-center font-mono font-bold text-sky-400">#2</span>
                              <span className="font-bold text-white">Wade Warren</span>
                            </div>
                            <span className="font-mono text-slate-300">3,546 pts</span>
                          </div>

                          <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700/60 flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                              <span className="w-4 text-center font-mono font-bold text-rose-400">#3</span>
                              <span className="font-bold text-white">Jane Cooper</span>
                            </div>
                            <span className="font-mono text-slate-300">3,420 pts</span>
                          </div>
                        </div>

                        {/* Live Round Notification Banner */}
                        <div className="bg-rose-500/15 border border-rose-500/30 p-2 rounded-xl text-[9px] text-slate-300 flex items-center gap-1.5">
                          <Flame className="w-3 h-3 text-rose-500 shrink-0" />
                          <span className="truncate">Tirunelveli Round 1 Videos Live</span>
                        </div>

                      </div>

                      {/* Razor-thin Chin + iOS Home Indicator Bar */}
                      <div className="pb-1.5 flex justify-center z-20">
                        <div className="w-24 h-1 bg-white/40 rounded-full" />
                      </div>

                    </div>
                  </div>
                  {/* Perspective Shadow Beneath Right Phone */}
                  <div className="w-40 sm:w-48 h-3.5 bg-slate-950/35 rounded-full blur-md mt-1" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
