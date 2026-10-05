import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import thezarLogo from '../../assets/thezar_logo.png';

// Social Media Icons with Official Brand Vector Graphics
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function Footer({ onOpenRegister }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.hash = '#' + targetId;
    }
  };

  return (
    <footer className="w-full relative selection:bg-[#9e0804] selection:text-white">

      {/* ========================================================
          1. TOP DECORATIVE SECTION: CONTINUOUS REALISTIC CITY SKYLINE SILHOUETTE
          Updated to exact user swatch color: #071426 (Midnight Black / Deep Slate)
          - Transparent sky above silhouette allowing clean page background to shine through
          - Seamless, zero-gap transition directly into the #071426 footer body
          ======================================================== */}
      <div className="w-full leading-none overflow-hidden -mb-[1px] pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 sm:h-24 md:h-28 lg:h-32 xl:h-36 block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Secondary depth layer (distant city skyline silhouette) */}
          <path
            d="M 0,120 
               L 0,78 
               L 10,78 L 10,54 L 26,54 L 26,72 
               L 45,72 L 45,40 L 58,40 L 58,22 L 60,22 L 60,40 L 74,40 L 74,68 
               L 105,68 L 105,48 L 122,48 L 122,32 L 134,32 L 134,48 L 148,48 L 148,70 
               L 178,70 L 178,38 L 195,38 L 195,16 L 197,16 L 197,38 L 212,38 L 212,65 
               L 245,65 L 245,45 L 268,45 L 268,70 
               L 298,70 L 298,32 L 315,32 L 315,18 L 317,18 L 317,32 L 332,32 L 332,68 
               L 368,68 L 368,50 L 392,50 L 392,34 L 408,34 L 408,50 L 424,50 L 424,70 
               L 455,70 L 455,36 L 474,36 L 474,14 L 476,14 L 476,36 L 492,36 L 492,64 
               L 522,64 L 522,46 L 544,46 L 544,68 
               L 572,68 L 572,36 L 590,36 L 590,22 L 605,22 L 605,36 L 618,36 L 618,62 
               L 652,62 L 652,38 L 672,38 L 672,18 L 674,18 L 674,38 L 688,38 L 688,68 
               L 720,68 L 720,48 L 740,48 L 740,26 L 754,26 L 754,48 L 768,48 L 768,72 
               L 802,72 L 802,34 L 820,34 L 820,14 L 822,14 L 822,34 L 836,34 L 836,64 
               L 868,64 L 868,44 L 892,44 L 892,68 
               L 922,68 L 922,35 L 940,35 L 940,20 L 942,20 L 942,35 L 956,35 L 956,65 
               L 988,65 L 988,48 L 1008,48 L 1008,32 L 1024,32 L 1024,48 L 1038,48 L 1038,70 
               L 1072,70 L 1072,36 L 1090,36 L 1090,16 L 1092,16 L 1092,36 L 1106,36 L 1106,62 
               L 1138,62 L 1138,42 L 1160,42 L 1160,68 
               L 1192,68 L 1192,34 L 1210,34 L 1210,20 L 1225,20 L 1225,34 L 1238,34 L 1238,65 
               L 1272,65 L 1272,38 L 1290,38 L 1290,18 L 1292,18 L 1292,38 L 1308,38 L 1308,68 
               L 1338,68 L 1338,46 L 1358,46 L 1358,28 L 1374,28 L 1374,46 L 1390,46 L 1390,70 
               L 1440,70 
               L 1440,120 L 0,120 Z"
            fill="#0f2540"
            opacity="0.5"
          />

          {/* Primary Foreground City Skyline Silhouette - Solid #071426 */}
          <path
            d="M 0,120
               L 0,68
               L 12,68 L 12,56 L 24,56 L 24,70 L 34,70
               L 34,44 L 42,44 L 42,24 L 44,24 L 44,44 L 54,44
               L 54,62 L 68,62 L 68,50 L 78,38 L 92,38 L 92,50 L 102,50
               L 102,72 L 116,72 L 116,46 L 130,46 L 130,34 L 140,34 L 140,46 L 150,46
               L 150,64 L 168,64 L 168,30 L 184,30 L 184,16 L 186,16 L 186,30 L 198,30
               L 198,54 L 218,54 L 218,72 L 234,72
               L 234,48 L 244,36 L 260,36 L 260,48 L 270,48
               L 270,60 L 288,60 L 288,32 L 298,32 L 298,14 L 300,14 L 300,32 L 310,32
               L 310,52 L 328,52 L 328,74 L 344,74
               L 344,42 L 365,42 L 365,58 L 382,58
               L 382,44 L 394,32 L 410,32 L 410,44 L 420,44
               L 420,62 L 436,62
               L 436,28 L 450,28 L 450,12 L 452,12 L 452,28 L 466,28
               L 466,54 L 486,54 L 486,68 L 502,68
               L 502,44 L 518,44 L 518,34 L 528,34 L 528,44 L 538,44
               L 538,58 L 555,58 L 555,44 L 568,30 L 585,30 L 585,44 L 595,44
               L 595,66 L 612,66
               L 612,36 L 628,36 L 628,18 L 630,18 L 630,36 L 642,36
               L 642,52 L 660,52 L 660,72 L 676,72
               L 676,42 L 696,42 L 696,56 L 712,56
               L 712,30 L 724,18 L 734,18 L 734,6 L 736,6 L 736,18 L 746,18 L 746,30 L 758,30
               L 758,54 L 775,54 L 775,68 L 792,68
               L 792,44 L 808,44 L 808,32 L 818,32 L 818,44 L 828,44
               L 828,62 L 846,62
               L 846,34 L 860,34 L 860,16 L 862,16 L 862,34 L 874,34
               L 874,52 L 894,52 L 894,72 L 910,72
               L 910,42 L 930,42 L 930,58 L 946,58
               L 946,44 L 958,30 L 976,30 L 976,44 L 986,44
               L 986,64 L 1004,64
               L 1004,32 L 1020,32 L 1020,14 L 1022,14 L 1022,32 L 1034,32
               L 1034,54 L 1054,54 L 1054,68 L 1070,68
               L 1070,42 L 1090,42 L 1090,58 L 1106,58
               L 1106,24 L 1120,24 L 1120,8 L 1122,8 L 1122,24 L 1134,24
               L 1134,48 L 1154,48 L 1154,66 L 1170,66
               L 1170,36 L 1188,36 L 1188,54 L 1204,54
               L 1204,42 L 1218,28 L 1235,28 L 1235,42 L 1246,42
               L 1246,60 L 1264,60
               L 1264,32 L 1278,32 L 1278,16 L 1280,16 L 1280,32 L 1292,32
               L 1292,54 L 1312,54 L 1312,70 L 1330,70
               L 1330,42 L 1348,42 L 1348,56 L 1366,56
               L 1366,38 L 1380,26 L 1396,26 L 1396,38 L 1408,38
               L 1408,58 L 1440,58
               L 1440,120
               L 0,120 Z"
            fill="#071426"
          />
        </svg>
      </div>

      {/* ========================================================
          2. MAIN FOOTER CONTENT: 4-COLUMN GRID
          - Color Scheme: User swatch color #071426
          - Removed harsh white borders, replaced with subtle #132a48 dividers
          - Rounded pill-shaped buttons (no boxy design)
          - Authentic social media platform brand colors
          ======================================================== */}
      <div className="w-full bg-[#071426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">

            {/* ================= COLUMN 1: ABOUT US ================= */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase border-b border-[#132a48] pb-2">
                ABOUT US
              </h3>

              <div className="flex items-center gap-2.5 pt-1">
                <img
                  src={thezarLogo}
                  alt="TheZar Logo"
                  className="w-8 h-8 rounded-full object-contain bg-white/10 p-0.5"
                />
                <span className="font-extrabold text-white text-base tracking-wide">
                  TheZar Events
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                Tamil Nadu’s premier youth talent championship and cultural festival platform. Dedicated to discovering, celebrating, and empowering extraordinary talents across all 38 districts.
              </p>

              {/* Social Media Links with ORIGINAL BRAND COLORS */}
              <div className="pt-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Connect With Us
                </p>
                <div className="flex items-center gap-2.5">
                  {/* Facebook - Official #1877F2 */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md shadow-blue-900/30"
                  >
                    <FacebookIcon />
                  </a>

                  {/* Instagram - Official Signature Radial Gradient */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md shadow-pink-900/30"
                    style={{
                      background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    }}
                  >
                    <InstagramIcon />
                  </a>

                  {/* YouTube - Official #FF0000 */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md shadow-red-900/30"
                  >
                    <YoutubeIcon />
                  </a>

                  {/* Twitter / X - Official Sleek Black / Dark */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-9 h-9 rounded-full bg-[#000000] border border-slate-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md shadow-black/40"
                  >
                    <TwitterIcon />
                  </a>

                  {/* WhatsApp - Official #25D366 */}
                  <a
                    href="https://wa.me/919790351878"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md shadow-emerald-900/30"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= COLUMN 2: ADDRESS ================= */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase border-b border-[#132a48] pb-2">
                ADDRESS
              </h3>

              <div className="space-y-3.5 text-xs sm:text-[13px] pt-1">
                {/* Email */}
                <div>
                  <a
                    href="mailto:thezarevents@gmail.com"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2.5 font-medium group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center shrink-0 group-hover:bg-[#9e0804] group-hover:border-[#9e0804] transition-colors">
                      <Mail className="w-3.5 h-3.5 text-sky-300 group-hover:text-white" />
                    </div>
                    <span className="truncate">thezarevents@gmail.com</span>
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <a
                    href="tel:+919790351878"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2.5 font-mono font-medium group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                    </div>
                    <span>97903 51878</span>
                  </a>
                </div>

                {/* Secretariat Address */}
                <div className="flex items-start gap-2.5 text-slate-300 leading-relaxed">
                  <div className="w-8 h-8 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs">Central Secretariat:</span>
                    <span>Tirunelveli 627001, Tamil Nadu</span>
                  </div>
                </div>

                {/* Event Hub */}
                <div className="pl-10 text-[11px] text-slate-400 font-medium">
                  Main Event Stage: Tirunelveli Hub
                </div>
              </div>
            </div>

            {/* ================= COLUMN 3: COMPANY ================= */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase border-b border-[#132a48] pb-2">
                COMPANY
              </h3>

              {/* Links with '>' bullet styling matching reference screenshot */}
              <ul className="space-y-2.5 text-xs sm:text-[13px] pt-1">
                <li>
                  <button
                    onClick={(e) => scrollToSection(e, 'home')}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => scrollToSection(e, 'about-thezar')}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>About Us</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => scrollToSection(e, 'events')}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>Events &amp; Schedule</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => scrollToSection(e, 'districts')}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>38 Districts Gallery</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenRegister}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>Event Registration</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 cursor-pointer group text-left"
                  >
                    <span className="text-rose-400 group-hover:text-red-400 font-bold">&gt;</span>
                    <span>Contact &amp; FAQ</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* ================= COLUMN 4: NEWSLETTER ================= */}
            <div className="space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase border-b border-[#132a48] pb-2">
                NEWSLETTER
              </h3>

              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed pt-1">
                Keep up on our always evolving championship schedules, district fixtures, and exclusive announcements. Enter your e-mail and subscribe to our newsletter.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-full bg-[#0c1f38] border border-emerald-500/50 text-xs text-emerald-300 flex items-center justify-center gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing to TheZar!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="pt-1">
                  {/* Exact Reference Design: Seamless Pill Bar with Paper Plane Send Button */}
                  <div
                    className="flex items-stretch w-full bg-[#0c1f38] border border-[#163761] overflow-hidden shadow-inner focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/20 transition-all"
                    style={{ borderRadius: '9999px' }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 bg-transparent pl-5 pr-3 py-3 text-xs text-white placeholder-slate-400 focus:outline-none min-w-0 border-0"
                      style={{ outline: 'none', boxShadow: 'none' }}
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to Newsletter"
                      className="px-4 bg-[#142c4c] hover:bg-[#9e0804] text-white flex items-center justify-center transition-all duration-200 cursor-pointer border-0 border-l border-[#163761] group shrink-0"
                      style={{
                        borderTopRightRadius: '9999px',
                        borderBottomRightRadius: '9999px',
                      }}
                    >
                      <Send className="w-4 h-4 text-slate-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* ========================================================
              3. BOTTOM FOOTER AREA (TRUST, PAYMENT & COPYRIGHT)
              - Removed harsh white borders, replaced with subtle #132a48 dividers
              - Pill shaped badges and back-to-top button
              ======================================================== */}
          <div className="mt-12 pt-8 border-t border-[#132a48] space-y-6">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Left: Trust & Security Badges (Pill Rounded) */}
              <div className="flex items-center gap-3 shrink-0">
                {/* Trust Badge 1 */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c1f38] border border-[#163761]/60 text-[11px] text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block font-black text-white text-[10px] tracking-wider uppercase">TRUSTED EVENTS</span>
                    <span className="text-[9px] text-slate-400">Official Portal</span>
                  </div>
                </div>

                {/* Trust Badge 2 (PCI DSS) */}
                {/* <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0c1f38] border border-[#163761]/60 text-[11px] font-mono font-bold text-white">
                  <span className="text-rose-400 font-black">PCI</span>
                  <span className="text-white text-[10px]">DSS</span>
                  <span className="text-[9px] text-emerald-400 font-sans font-normal ml-0.5">COMPLIANT</span>
                </div> */}
              </div>

              {/* Center: TheZar Championship details & Mini District Pills */}
              <div className="text-center space-y-2 max-w-md">
                <p className="text-xs text-slate-300 font-medium">
                  Official Festival Platform of Tamil Nadu Statewide Talent Championship &amp; Christmas Carol Fiesta.
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  thezarevents@gmail.com • 97903 51878
                </p>
                <span
                  className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-[#0c1f38] border border-[#163761]/50 text-slate-300 uppercase tracking-wider"
                >
                  38 Districts Championship
                </span>
                {/* Miniature District Badges (Pill Rounded) */}
                {/* <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {['Tirunelveli', 'Chennai', 'Madurai', 'Coimbatore', 'Salem', 'Trichy', 'Kanyakumari', '+31 Districts'].map((d, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-[#0c1f38] border border-[#163761]/50 text-slate-300 uppercase tracking-wider"
                    >
                      {d}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* Right: Payment Provider Badges (Pill Rounded) */}
              <div className="flex items-center gap-2.5 shrink-0">
                {/* UPI */}
                <div className="h-7 px-3 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center text-white font-extrabold text-[11px] tracking-wider">
                  UPI
                </div>

                {/* Mastercard */}
                <div className="h-7 px-3 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center gap-0.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] opacity-90 -mr-1" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90" />
                </div>

                {/* Visa */}
                <div className="h-7 px-3.5 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center text-white font-black italic text-xs tracking-wider">
                  VISA
                </div>

                {/* RuPay */}
                <div className="h-7 px-3 rounded-full bg-[#0c1f38] border border-[#163761]/60 flex items-center justify-center text-white font-bold text-[10px] tracking-wide">
                  RuPay
                </div>
              </div>

            </div>

            {/* Legal Links, Copyright & Back to Top (Pill Rounded) */}
            <div className="pt-4 border-t border-[#132a48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <p>© 2026 TheZar. All rights reserved.</p>

              <div className="flex items-center gap-4 text-[11px]">
                <button
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
                <span>•</span>
                <button
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Refund Policy
                </button>
              </div>

              {/* Back to Top - Fully Rounded Pill */}
              <button
                onClick={scrollToTop}
                className="px-4 py-2 rounded-full bg-[#0c1f38] hover:bg-[#9e0804] text-white border border-[#163761]/60 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer hover:-translate-y-0.5 shadow-sm"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-slate-300" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
