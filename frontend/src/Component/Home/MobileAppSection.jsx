import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Apple,
  Play,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Wifi,
  Trophy,
  Ticket,
  Bell,
  MapPin,
  Download,
  QrCode
} from 'lucide-react';

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-10 sm:py-14 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black tracking-tighter uppercase z-0 leading-none text-center w-full"
        style={{
          fontSize: 'clamp(60px, 13vw, 150px)',
          color: 'rgba(15, 23, 42, 0.035)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        MOBILE APP
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: App Availability, Download Badges & QR Code */}
            <div className="lg:col-span-6 text-left space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase">
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
                <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-black text-[#3f0701] tracking-[-0.035em] leading-[1.05] uppercase">
                  OUR APP IS AVAILABLE <br />
                  <span className="text-[#9e0804]">DOWNLOAD IT NOW</span>
                </h2>
                <div 
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-[#9e0804] text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase"
                  style={{ textDecoration: 'none' }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9e0804]" />
                  <span>NOW LIVE ON GOOGLE PLAY & APP STORE • FREE DOWNLOAD</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                Tamil Nadu's premier talent championship app is now available for download! Register for categories, upload your competition video reels, track real-time scores across all 38 districts, and access your instant QR venue entry pass.
              </p>

              {/* App Feature Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 max-w-md pt-0.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9e0804] shrink-0" />
                  <span>Instant QR Entry Pass</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9e0804] shrink-0" />
                  <span>Live District Standings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9e0804] shrink-0" />
                  <span>Reel Video Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9e0804] shrink-0" />
                  <span>100% Free for Everyone</span>
                </div>
              </div>

              {/* DOWNLOAD BUTTONS & QR CODE ROW */}
              <div className="pt-2 space-y-4">
                
                {/* Store Download Badges - Full Round Pill with ZERO Underline */}
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* Google Play Badge - Full Round Pill */}
                  <a
                    href="#playstore"
                    className="btn-no-underline inline-flex items-center gap-2.5 bg-[#01875f] hover:bg-[#00704e] text-white px-4 py-1.5 h-[38px] rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-emerald-400/30 no-underline hover:no-underline"
                    style={{ textDecoration: 'none', borderRadius: '9999px' }}
                  >
                    <Play className="w-3.5 h-3.5 fill-current shrink-0 text-white" />
                    <div className="text-left leading-none" style={{ textDecoration: 'none' }}>
                      <p 
                        className="text-[7.5px] font-mono text-emerald-100 uppercase tracking-wider font-semibold no-underline m-0 p-0"
                        style={{ textDecoration: 'none' }}
                      >
                        GET IT ON
                      </p>
                      <p 
                        className="text-[12px] font-bold text-white tracking-tight mt-0.5 no-underline m-0 p-0"
                        style={{ textDecoration: 'none' }}
                      >
                        Google Play
                      </p>
                    </div>
                  </a>

                  {/* Apple App Store Badge - Full Round Pill */}
                  <a
                    href="#appstore"
                    className="btn-no-underline inline-flex items-center gap-2.5 bg-[#0071e3] hover:bg-[#005bb5] text-white px-4 py-1.5 h-[38px] rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-sky-300/30 no-underline hover:no-underline"
                    style={{ textDecoration: 'none', borderRadius: '9999px' }}
                  >
                    <Apple className="w-4 h-4 fill-current shrink-0 text-white" />
                    <div className="text-left leading-none" style={{ textDecoration: 'none' }}>
                      <p 
                        className="text-[7.5px] font-mono text-sky-100 uppercase tracking-wider font-semibold no-underline m-0 p-0"
                        style={{ textDecoration: 'none' }}
                      >
                        Download on the
                      </p>
                      <p 
                        className="text-[12px] font-bold text-white tracking-tight mt-0.5 no-underline m-0 p-0"
                        style={{ textDecoration: 'none' }}
                      >
                        App Store
                      </p>
                    </div>
                  </a>

                </div>

                {/* QR Code Scan Card & Trust Verification Row */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  
                  {/* QR Code Scan Card */}
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
                    <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-inner shrink-0">
                      <QRCodeSVG value="https://thezar2026.tn.gov.in/app-download" size={46} />
                    </div>
                    <div className="text-left pr-1.5">
                      <p className="text-[10px] font-bold text-[#3f0701] font-mono leading-tight">Scan to Download</p>
                      <p className="text-[9px] text-slate-500 mt-0.5">Android APK & iOS Direct</p>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-col gap-1 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      Official Tamil Nadu Event App
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9e0804] shrink-0" />
                      Instant Admission QR Pass
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: THEZAR 2026 APP SCREEN DISPLAYING DOWNLOAD QR CODE */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
              
              {/* Soft Ambient Background Aura */}
              <div className="absolute w-72 h-72 bg-[#9e0804]/12 rounded-full blur-3xl pointer-events-none" />

              {/* SINGLE PHONE CONTAINER */}
              <div className="relative flex flex-col items-center">
                
                {/* iPhone Chassis Mockup */}
                <div className="relative w-[250px] sm:w-[265px] h-[520px] sm:h-[545px] rounded-[44px] p-[6px] bg-[#1a0503] border-[3px] border-[#3f0701] shadow-[0_25px_60px_-15px_rgba(63,7,1,0.4),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-300 z-10 group">
                  
                  {/* Hardware Buttons on Chassis */}
                  <div className="absolute -left-[4px] top-20 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                  <div className="absolute -left-[4px] top-30 w-[2.5px] h-7 bg-slate-500 rounded-l" />
                  <div className="absolute -right-[4px] top-24 w-[2.5px] h-10 bg-slate-500 rounded-r" />

                  {/* Top Earpiece Speaker Slit */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-slate-700 rounded-full z-40" />

                  {/* Screen Display (TheZar App Download QR Screen) */}
                  <div className="relative w-full h-full bg-[#FFFDFD] rounded-[38px] overflow-hidden flex flex-col justify-between border border-black/5 select-none text-slate-800">
                    
                    {/* Diagonal Glass Sheen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-30" />

                    {/* 1. TOP STATUS BAR */}
                    <div className="pt-2 px-4 flex items-center justify-between z-20 relative text-slate-900">
                      <span className="text-[10px] font-bold tracking-tight font-mono">9:41</span>
                      
                      {/* Dynamic Island Notch */}
                      <div className="w-18 h-4 bg-black rounded-full flex items-center justify-end px-1.5 shadow-inner">
                        <div className="w-2 h-2 rounded-full bg-[#0F172A] border border-slate-800" />
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-900">
                        <div className="flex items-end gap-[1px] h-2.5">
                          <span className="w-[1.5px] h-1 bg-slate-900 rounded-xs" />
                          <span className="w-[1.5px] h-1.5 bg-slate-900 rounded-xs" />
                          <span className="w-[1.5px] h-2 bg-slate-900 rounded-xs" />
                          <span className="w-[1.5px] h-2.5 bg-slate-900 rounded-xs" />
                        </div>
                        <Wifi className="w-2.5 h-2.5 text-slate-900" />
                        <div className="w-4 h-2 rounded-xs border border-slate-900 p-[1px] flex items-center">
                          <div className="w-full h-full bg-[#9e0804] rounded-2xs" />
                        </div>
                      </div>
                    </div>

                    {/* 2. THEZAR APP MAIN SCREEN: DOWNLOAD QR SHOWCASE */}
                    <div className="px-3.5 py-1.5 space-y-2 flex-1 flex flex-col justify-between z-20 overflow-hidden text-center">
                      
                      {/* Header App Bar */}
                      <div className="flex items-center justify-between pt-0.5 pb-1 border-b border-red-100/60 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#9e0804] to-[#c4120c] flex items-center justify-center text-white text-[10px] font-black shadow-xs">
                            TZ
                          </div>
                          <div className="leading-tight">
                            <p className="text-[11px] font-black text-[#3f0701] tracking-tight">TheZar 2026</p>
                            <p className="text-[8px] text-[#9e0804] font-semibold">Official Mobile App</p>
                          </div>
                        </div>

                        <span className="text-[7.5px] font-mono font-bold text-[#9e0804] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                          FREE APP
                        </span>
                      </div>

                      {/* Main Download QR Card with Camera Scan Brackets */}
                      <div className="bg-gradient-to-b from-[#FFF5F5] to-white border border-red-200/90 rounded-2xl p-2.5 shadow-sm space-y-1.5 text-center relative overflow-hidden">
                        
                        {/* Top Banner Tag */}
                        <div className="inline-flex items-center gap-1 bg-red-50 text-[#9e0804] border border-red-200 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          <Sparkles className="w-2.5 h-2.5 text-[#9e0804]" />
                          <span>Scan to Download App</span>
                        </div>

                        <p className="text-[12px] font-black text-[#3f0701] leading-tight tracking-tight">
                          Install on Any Phone
                        </p>

                        {/* Centered QR Code with Camera Scan Brackets */}
                        <div className="relative inline-block my-0.5 p-2 bg-white rounded-xl border border-red-100 shadow-inner">
                          {/* 4 Corner Camera Scan Brackets */}
                          <span className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#9e0804] rounded-tl" />
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#9e0804] rounded-tr" />
                          <span className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#9e0804] rounded-bl" />
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#9e0804] rounded-br" />

                          <QRCodeSVG 
                            value="https://thezar2026.tn.gov.in/app-download" 
                            size={112}
                            level="H"
                            includeMargin={false}
                          />
                        </div>

                        <p className="text-[8px] font-medium text-slate-500">
                          Point phone camera to install directly
                        </p>

                        {/* Store Badges inside the Screen */}
                        <div className="flex items-center justify-center gap-2 pt-0.5">
                          <span className="inline-flex items-center gap-1 bg-[#01875f] text-white text-[7.5px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>Google Play</span>
                          </span>
                          <span className="inline-flex items-center gap-1 bg-[#0071e3] text-white text-[7.5px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                            <Apple className="w-2.5 h-2.5 fill-current" />
                            <span>App Store</span>
                          </span>
                        </div>
                      </div>

                      {/* Official Event Pass Preview Card */}
                      <div className="bg-[#FFF9EE] border border-amber-200/80 rounded-xl p-2 text-left space-y-1 shadow-2xs">
                        <div className="flex items-center justify-between text-[8px] font-mono">
                          <span className="text-amber-900 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Ticket className="w-3 h-3 text-[#9e0804]" /> Instant Admission Pass
                          </span>
                          <span className="bg-amber-200/70 text-amber-950 font-bold px-1.5 py-0.5 rounded text-[7.5px]">#TZ-3841</span>
                        </div>
                        <p className="text-[8px] text-slate-600 leading-tight">
                          Sumanth Raja • Cooking Championship • Tirunelveli
                        </p>
                      </div>

                      {/* Official Verification Notice */}
                      <div className="pt-0.5 text-center">
                        <p className="text-[7.5px] font-mono text-[#9e0804] font-bold flex items-center justify-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          Official App • 100% Free for 38 Districts
                        </p>
                      </div>

                    </div>

                    {/* 3. iOS BOTTOM INDICATOR */}
                    <div className="pb-1.5 pt-0.5 flex justify-center z-20 bg-white border-t border-red-50">
                      <div className="w-20 h-1 bg-slate-900/60 rounded-full" />
                    </div>

                  </div>
                </div>

                {/* Perspective Shadow Beneath Single Phone */}
                <div className="w-36 sm:w-44 h-3 bg-slate-950/25 rounded-full blur-md mt-1.5" />
                
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
