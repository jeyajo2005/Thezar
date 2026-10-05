import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function ChristmasContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden text-white">
      
      {/* Ambient Lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c4120c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ffd700]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#380407] border border-[#ffd700]/50 shadow-md">
            <Mail className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffd700] font-mono">
              ★ GET IN TOUCH ★
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
            CONNECT WITH <span className="gold-gradient-text">SANTA'S TEAM</span>
          </h2>

          <p className="font-christmas text-4xl sm:text-5xl text-amber-200 pt-1 drop-shadow-md">
            We’d Love to Hear From You
          </p>

          <p className="text-rose-100/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Have questions regarding group bookings, stage performances, food stall rentals, or festival schedules? Drop us a note!
          </p>

          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2" />
        </div>

        {/* 2-Column Split: Contact Info Card + Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Info Card (Festive Velvet Crimson Container from Reference Deck) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#4d070c] via-[#350408] to-[#1c0204] text-white rounded-3xl p-8 border-2 border-[#ffd700]/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="space-y-6">
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                  Festival Headquarters
                </h3>
                <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-light">
                  Our festive concierge desk is open daily throughout December to assist guests and participants statewide.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#ffd700]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ffd700] font-mono">Arena Location</p>
                    <p className="text-sm text-white font-medium">Grand Winter Pavilion, Marina Esplanade, Chennai, TN</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#ffd700]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ffd700] font-mono">Winter Helpline</p>
                    <p className="text-sm text-white font-medium">+91 98765 43210 / +91 44 2828 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#ffd700]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ffd700] font-mono">Festive Support Email</p>
                    <p className="text-sm text-white font-medium">christmas@thezar.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#ffd700]/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#ffd700] font-mono">Operating Hours</p>
                    <p className="text-sm text-white font-medium">Monday – Sunday: 09:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Festive Seal */}
            <div className="pt-6 border-t border-[#ffd700]/20 mt-6 flex items-center gap-2 text-xs font-mono text-amber-200">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              <span>★ Official THEZAR Festive Desk 2026 ★</span>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#3d0509]/95 via-[#290306]/95 to-[#160103]/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-[#ffd700]/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative">
              {sent ? (
                <div className="py-14 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Message Dispatched to Santa!
                  </h3>
                  <p className="text-sm text-rose-100 max-w-sm mx-auto leading-relaxed font-light">
                    Thank you, <strong className="text-[#ffd700]">{formData.name}</strong>. Our holiday team will review your message and reply back within 2-4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-[#ffd700]/40 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rachel Adams"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rachel@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                      Your Message / Inquiry *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you celebrate..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-lg hover:scale-101 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#240306]" />
                      <span>Send Message to Santa</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
