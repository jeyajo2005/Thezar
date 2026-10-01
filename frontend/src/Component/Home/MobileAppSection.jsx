import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, QrCode, Bell, Trophy, Bot, Calendar, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MobileAppSection() {
  const appFeatures = [
    { title: 'District Events & Venues', desc: 'Browse schedules and navigation for 38 districts.' },
    { title: 'Live Timetable & Stage Updates', desc: 'Real-time notifications when your round starts.' },
    { title: 'Verified Results & Points', desc: 'Instant judge scores and statewide leaderboard.' },
    { title: 'Digital Candidate Pass', desc: 'Fast QR check-in at all college auditoriums.' },
    { title: 'Instant Push Notifications', desc: 'Never miss an event briefing or schedule change.' },
    { title: '24/7 AI Event Assistant', desc: 'Instant answers to competition guidelines and FAQs.' },
  ];

  return (
    <section id="mobile-app" className="py-24 sm:py-32 bg-[#071426] text-white relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sleek Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 rounded-[44px] p-4 bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-blue-950/60">
              
              {/* Dynamic Island / Notch */}
              <div className="w-28 h-5 bg-black rounded-full mx-auto mb-3" />

              {/* Phone Screen */}
              <div className="bg-[#0B1730] rounded-[32px] p-5 border border-slate-700/80 text-left space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black">
                      TZ
                    </div>
                    <span className="text-xs font-black text-white">THEZAR APP</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/30">
                    LIVE
                  </span>
                </div>

                {/* Candidate Pass Card inside Phone */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-2xl text-white space-y-3 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-blue-100 block">CANDIDATE PASS</span>
                      <p className="text-sm font-black">Sumanth Raja</p>
                    </div>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">#TZ-3841</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl flex items-center justify-center w-28 h-28 mx-auto shadow-inner">
                    <QRCodeSVG value="https://thezar2026.tn.gov.in/pass/TZ-3841" size={96} />
                  </div>
                  <p className="text-[9px] text-center text-blue-100 font-mono">Scan for Instant Venue Entry</p>
                </div>

                {/* Notification Item inside Phone */}
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Stage 2 Starting</p>
                    <p className="text-[10px] text-slate-400">Tirunelveli Main Auditorium</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-cyan-400 tracking-wider">
              <span>[ Official Companion App ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
              Your TheZar Journey <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
                In Your Pocket.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-sans">
              Download the official TheZar mobile application for Android and iOS. Generate your QR candidate pass, track live stage schedules, receive real-time scores, and consult the AI Event Assistant.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {appFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD THE APP</span>
              </a>

              <span className="text-xs font-mono text-slate-400">
                Available on iOS App Store & Android APK
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
