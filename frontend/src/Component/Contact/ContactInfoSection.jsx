import { MapPin, Phone, Mail, Sparkles, Clock } from 'lucide-react';

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

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function ContactInfoSection() {
  return (
    <div className="h-full flex flex-col justify-between text-left space-y-4">
      <div className="space-y-3.5">
        {/* Decorative Tag & Line - Exactly matches right side top */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold text-[#9e0804] tracking-[0.18em] uppercase font-mono">
            OFFICIAL EVENT ENQUIRY
          </span>
          <div
            className="w-8 h-[2px] rounded-full"
            style={{
              backgroundColor: '#9e0804',
              boxShadow: '0 0 8px rgba(158, 8, 4, 0.40)',
            }}
          />
        </div>

        {/* Main Title & Description */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#3f0701] tracking-tight leading-tight">
            Get in touch
          </h2>
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            Official enquiry desk for Tamil Nadu's grand talent championships — starting with the <strong>Christmas Carol Fiesta (Dec 12, 2026)</strong> and the <strong>Statewide 38-District League Launch (Jan 10, 2027)</strong> in Tirunelveli.
          </p>
        </div>

        {/* Event Schedule Roadmap Highlight Card - Compact */}
        <div className="bg-gradient-to-br from-[#FFF5F5] via-[#FFF9F9] to-white p-3 rounded-xl border border-red-200/80 shadow-2xs space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#9e0804] font-mono text-[10px] font-bold tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-[#9e0804]" />
            <span>KEY EVENT TIMELINE • TIRUNELVELI</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            {/* Milestone 1: Carol Fiesta */}
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9e0804] mt-1 shrink-0" />
              <div>
                <p className="font-extrabold text-[#3f0701] text-[11px]">
                  Christmas Carol Fiesta 2026 • <span className="text-[#9e0804]">Dec 12, 2026</span>
                </p>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Singing &amp; Dancing Fest (Choirs, Bands, Dance &amp; Santa Competitions).
                </p>
              </div>
            </div>

            {/* Milestone 2: Statewide League Kickoff */}
            <div className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <div>
                <p className="font-extrabold text-[#3f0701] text-[11px]">
                  Statewide Tamil Nadu Championship • <span className="text-[#9e0804]">Jan 10, 2027</span>
                </p>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Statewide championship kickoff starting from Tirunelveli across all 38 districts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Contact Cards - Compact, Clean, Single Email & Single Phone */}
        <div className="space-y-2">
          {/* Item 1: Venue & Secretariat Location */}
          <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-[#9e0804]/40 hover:bg-red-50/20 transition-all duration-200 group shadow-xs">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9e0804] to-[#c4120c] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <h4 className="text-xs font-bold text-[#3f0701] leading-snug">Event Venue &amp; Secretariat</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Main Stage Hub: Tirunelveli, Tamil Nadu<br />
                Central Secretariat: Tirunelveli 627001, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Item 2: Official Email - Single Mail ID */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-[#9e0804]/40 hover:bg-red-50/20 transition-all duration-200 group shadow-xs">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#730502] to-[#9e0804] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-[#3f0701] leading-snug">Email us</h4>
              <a
                href="mailto:thezarevents@gmail.com"
                className="text-[11px] text-slate-600 hover:text-[#9e0804] transition-colors block font-medium truncate"
              >
                thezarevents@gmail.com
              </a>
            </div>
          </div>

          {/* Item 3: Helplines - Single Contact Number */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-[#9e0804]/40 hover:bg-red-50/20 transition-all duration-200 group shadow-xs">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#9e0804] to-[#f43f5e] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-[#3f0701] leading-snug">Event Helpdesk &amp; Convenors</h4>
              <a
                href="tel:+919790351878"
                className="text-[11px] text-slate-600 hover:text-[#9e0804] font-mono font-medium block"
              >
                +91 97903 51878
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Follow our social media & Active Hours - Aligns perfectly with right side SLA footer */}
      <div className="pt-2.5 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#3f0701] uppercase tracking-wider">
              Follow us:
            </span>
            <div className="flex items-center gap-1.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xs"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xs"
                style={{
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-7 h-7 rounded-full bg-[#000000] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xs"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xs"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/80 shrink-0 font-medium">
            <Clock className="w-3 h-3 text-[#9e0804]" />
            <span>9:00 AM – 8:00 PM IST</span>
          </div>
        </div>
      </div>
    </div>
  );
}
