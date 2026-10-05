import { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, User, Mail, Phone, Users, Calendar, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import treeImg from '../../assets/xmas_tree.jpg';

export default function ChristmasRegisterSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '1',
    event: 'Christmas Eve Celebration (Dec 24)',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#c4120c', '#10b981', '#ffffff'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  return (
    <section id="register" className="py-20 lg:py-28 relative overflow-hidden text-white">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c4120c]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#380407] border border-[#ffd700]/50 shadow-md">
            <Gift className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffd700] font-mono">
              ★ SECURE YOUR INVITATION ★
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide">
            CHRISTMAS PASS <span className="gold-gradient-text">REGISTRATION</span>
          </h2>

          <p className="font-christmas text-4xl sm:text-5xl text-amber-200 pt-1 drop-shadow-md">
            A Season of Magic Awaits You
          </p>

          <p className="text-rose-100/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Reserve your entry passes for our signature Christmas celebrations, concerts, and winter markets. Limited passes per session.
          </p>

          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2" />
        </div>

        {/* 2-Column Container: Form + 3D Gift Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* LEFT: Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#3d0509]/95 via-[#290306]/95 to-[#160103]/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-[#ffd700]/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Pass Reserved Successfully!
                  </h3>
                  <p className="text-sm text-rose-100 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong className="text-[#ffd700]">{formData.fullName}</strong>! Your Christmas pass for <strong className="text-white">{formData.event}</strong> has been registered. An official entry confirmation and QR ticket has been sent to {formData.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-[#ffd700]/40 transition-colors cursor-pointer"
                  >
                    Register Another Guest
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-[#ffd700]/30 focus:border-[#ffd700] focus:bg-black/60 text-sm text-white placeholder-rose-200/40 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Number of Guests & Event Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#290306] border border-[#ffd700]/30 focus:border-[#ffd700] text-sm text-white focus:outline-none transition-colors cursor-pointer appearance-none"
                        >
                          <option value="1">1 Person (Single)</option>
                          <option value="2">2 Persons (Couple)</option>
                          <option value="3">3 - 4 Persons (Family)</option>
                          <option value="5+">5+ Persons (Group)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#ffd700] mb-1.5 font-mono">
                        Choose Event *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-rose-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.event}
                          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#290306] border border-[#ffd700]/30 focus:border-[#ffd700] text-sm text-white focus:outline-none transition-colors cursor-pointer appearance-none truncate"
                        >
                          <option value="Christmas Eve Celebration (Dec 24)">Christmas Eve Celebration (Dec 24)</option>
                          <option value="Santa Meet & Greet (Dec 25)">Santa Meet & Greet (Dec 25)</option>
                          <option value="Winter Wonderland (Dec 26)">Winter Wonderland (Dec 26)</option>
                          <option value="Christmas Market (Dec 27-29)">Christmas Market (Dec 27-29)</option>
                          <option value="New Year Grand Celebration (Dec 31)">New Year Grand Celebration (Dec 31)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-lg hover:scale-101 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <Gift className="w-4 h-4 text-[#240306] group-hover:rotate-12 transition-transform" />
                      <span>Confirm Christmas Pass</span>
                      <ArrowRight className="w-4 h-4 text-[#240306] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* RIGHT: 3D Tree & Gift Pile Showcase Display */}
          <div className="lg:col-span-5 text-center space-y-6">
            <div className="bg-gradient-to-br from-[#3d0509]/95 via-[#290306]/95 to-[#160103]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-[#ffd700]/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden group hover:border-[#ffd700] transition-all">
              
              {/* Corner Ribbon Badge */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1 rounded-full bg-[#ffd700] text-[#240306] text-xs font-bold uppercase font-mono flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#240306]" />
                VIP Hamper
              </div>

              {/* 3D Render Image of Luxury Christmas Tree with Mountains of Gifts */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 shadow-2xl border border-[#ffd700]/30">
                <img
                  src={treeImg}
                  alt="Decorated Christmas Tree with Gift Boxes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160103] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#ffd700] font-mono">
                  <span>Grand Gift Collection</span>
                  <span className="bg-black/75 px-2.5 py-0.5 rounded border border-[#ffd700]/40">
                    Free with Pass
                  </span>
                </div>
              </div>

              <div className="space-y-2 mt-2">
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Complimentary Welcome Hamper
                </h4>
                <p className="text-xs text-rose-100/80 leading-relaxed font-light">
                  Every registered pass includes a handcrafted Christmas souvenir, holiday treat voucher, and priority access to Santa's Toy Workshop.
                </p>
              </div>

              <div className="pt-3 flex items-center justify-center gap-2 text-xs font-mono text-[#ffd700] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                <span>★ Limited Free Souvenirs Available ★</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
