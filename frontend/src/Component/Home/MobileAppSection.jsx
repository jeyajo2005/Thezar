import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, QrCode, Bell, Trophy, Bot, Download, ArrowRight, Sparkles } from 'lucide-react';

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-20 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mobile Features */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
              [ MOBILE APP FOR PARTICIPANTS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Download <span className="gradient-text">TheZar Mobile App</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Available for Android and iOS candidates! Carry your digital event pass, track live scores, view instant district results, and interact with the AI Event Assistant.
            </p>

            {/* Features Bullet List matching Image 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <QrCode className="w-4 h-4" />
                  <span>QR Code Pass & Login</span>
                </div>
                <p className="text-xs text-slate-400">Scan at entrance for fast venue check-in without queue.</p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Bell className="w-4 h-4" />
                  <span>Real-time Live Alerts</span>
                </div>
                <p className="text-xs text-slate-400">Receive round notifications & stage time slot updates.</p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Trophy className="w-4 h-4" />
                  <span>Live District Standings</span>
                </div>
                <p className="text-xs text-slate-400">Check college & participant points instantly.</p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Bot className="w-4 h-4" />
                  <span>AI Assistant Queries</span>
                </div>
                <p className="text-xs text-slate-400">Ask event rules, lab locations & schedule timings 24/7.</p>
              </div>
            </div>

            {/* QR Download Box */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200">
                <QRCodeSVG value="https://thezar2026.app/download" size={110} />
              </div>
              <div className="space-y-2 text-left">
                <p className="text-sm font-bold text-white">Scan QR to Download Mobile App</p>
                <p className="text-xs text-slate-400">Android APK & iOS App Store Ready</p>
                <div className="flex gap-3 pt-1">
                  <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-2">
                    <Download className="w-3.5 h-3.5 text-rose-400" /> Google Play
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-2">
                    <Download className="w-3.5 h-3.5 text-amber-400" /> App Store
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Mobile App Screen Preview inspired by Section 4 of Image 2 */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Phone Frame Mockup */}
            <div className="w-72 sm:w-80 h-[580px] bg-slate-900 rounded-[45px] p-3 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-b-xl z-30"></div>

              {/* Mobile Screen Content */}
              <div className="w-full h-full bg-slate-950 rounded-[35px] overflow-hidden p-4 pt-8 flex flex-col justify-between text-left border border-slate-800">
                
                {/* App Top Bar */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg gradient-bg-pink flex items-center justify-center text-white font-bold text-xs">
                        T
                      </div>
                      <span className="text-sm font-bold text-white">THEZAR APP</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  {/* Profile Card */}
                  <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 space-y-1">
                    <p className="text-[10px] text-slate-400 font-mono">Welcome Back,</p>
                    <p className="text-sm font-bold text-white">Suman (Candidate)</p>
                    <p className="text-[11px] font-mono text-amber-400">TZR-2026-TVL-001245</p>
                  </div>

                  {/* Active District Card */}
                  <div className="bg-rose-950/40 p-3 rounded-2xl border border-rose-500/30 space-y-1">
                    <span className="text-[9px] font-bold uppercase bg-rose-500 text-white px-2 py-0.5 rounded">
                      Next Event Today
                    </span>
                    <p className="text-xs font-extrabold text-white mt-1">Tirunelveli District Round 2</p>
                    <p className="text-[10px] text-slate-300">10:00 AM • Main Auditorium</p>
                  </div>
                </div>

                {/* Mobile Leaderboard Widget */}
                <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-300">Live Leaderboard</span>
                    <span className="text-rose-400 font-mono font-bold">Your Rank: #4</span>
                  </div>
                  <div className="space-y-1 text-[10px]">
                    <div className="flex items-center justify-between bg-slate-950 p-1.5 rounded-lg text-slate-300">
                      <span>1. Arun Kumar</span>
                      <span className="font-mono text-amber-400 font-bold">950 pts</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-950 p-1.5 rounded-lg text-slate-300">
                      <span>2. Priya S</span>
                      <span className="font-mono text-amber-400 font-bold">920 pts</span>
                    </div>
                  </div>
                </div>

                {/* App Bottom Navigation */}
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 grid grid-cols-4 gap-1 text-center text-[9px] text-slate-400">
                  <div className="text-rose-400 font-bold">Home</div>
                  <div>Updates</div>
                  <div>Chat</div>
                  <div>Profile</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
