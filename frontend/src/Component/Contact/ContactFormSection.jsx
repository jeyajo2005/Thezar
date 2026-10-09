import { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { COUNTRY_CODES } from '../Modals/RegistrationModal';

export default function ContactFormSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    district: '',
    category: 'Christmas Carol Fiesta 2026 (Tirunelveli)',
    message: '',
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="h-full flex flex-col justify-between text-left space-y-6">
      <div className="space-y-6">
        {/* Decorative Tag & Line - Exactly matches left side top */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] font-bold text-[#9e0804] tracking-[0.18em] uppercase font-mono">
            STATEWIDE EVENT ENQUIRY
          </span>
          <div
            className="w-10 h-[2px] rounded-full"
            style={{
              backgroundColor: '#9e0804',
              boxShadow: '0 0 8px rgba(158, 8, 4, 0.40)',
            }}
          />
        </div>

        {/* Main Title & Description - Exactly matches left side typography */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3f0701] tracking-tight leading-tight">
            Send an Event Enquiry
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Submit participation questions, category details, or team registrations for the <strong>Christmas Carol Fiesta 2026 (Dec 12, Tirunelveli)</strong> and the <strong>Statewide Tamil Nadu Championship (Starting Jan 10, 2027)</strong>.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-8 sm:p-10 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl text-center space-y-3.5 my-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-black text-[#3f0701]">Event Enquiry Submitted!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for registering your enquiry. Our Tirunelveli Event Convenor Team will review your details and contact you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="mt-2 text-xs font-bold text-[#9e0804] hover:underline cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Submit another enquiry</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-3">
            {/* Row 1: Participant / Team Leader Name & Contact Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Participant / Leader Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sumanth Raja"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#9e0804] focus:ring-1 focus:ring-[#9e0804] focus:bg-white shadow-2xs transition-all"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Contact Phone Number *
                  </label>
                  <span className="text-[10px] font-mono text-slate-400">
                    {formData.phone ? `${formData.phone.length}/10` : '10 digits'}
                  </span>
                </div>
                <div className="flex items-center rounded-xl bg-slate-50/80 border border-slate-200 focus-within:border-[#9e0804] focus-within:ring-1 focus-within:ring-[#9e0804] focus-within:bg-white shadow-2xs transition-all overflow-hidden">
                  <div className="relative bg-slate-100/80 border-r border-slate-200 shrink-0 w-20 sm:w-24">
                    <select
                      value={formData.countryCode || '+91'}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-full appearance-none bg-transparent py-2.5 pl-2 sm:pl-2.5 pr-5 text-xs font-bold text-slate-800 cursor-pointer focus:outline-none"
                      title="Select Country Code"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={`contact-phone-${c.country}-${c.code}`} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: digits });
                    }}
                    placeholder="98765 43210"
                    className="flex-1 min-w-0 w-full px-3 py-2.5 bg-transparent text-slate-900 text-xs focus:outline-none font-medium placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email Address & Home District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. yourname@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#9e0804] focus:ring-1 focus:ring-[#9e0804] focus:bg-white shadow-2xs transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Home District *
                </label>
                <input
                  type="text"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  placeholder="e.g. Tirunelveli, Chennai..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#9e0804] focus:ring-1 focus:ring-[#9e0804] focus:bg-white shadow-2xs transition-all"
                />
              </div>
            </div>

            {/* Row 3: Event Interest / Competition Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Event / Competition Interest *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#9e0804] focus:ring-1 focus:ring-[#9e0804] focus:bg-white shadow-2xs transition-all"
              >
                <option value="Christmas Carol Fiesta 2026 (Tirunelveli)">
                  Christmas Carol Fiesta 2026 (Dec 12, Tirunelveli)
                </option>
                <option value="Statewide Tamil Nadu Championship (38 Districts)">
                  Statewide Tamil Nadu Championship (Starting Jan 10, 2027)
                </option>
                <option value="Choir / Music Band Registration">
                  Choir / Music Band Registration (Cat II)
                </option>
                <option value="Singing / Solo Competition">
                  Solo Singing Competition (Kids & Adults - Cat I)
                </option>
                <option value="Dance / Santa Claus Competition">
                  Dance & Santa Claus Competition (Cat III & IV)
                </option>
                <option value="General Enquiry / Passes / Logistics">
                  General Event Enquiry / Venue Entry Passes
                </option>
              </select>
            </div>

            {/* Row 4: Enquiry Details or Question */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Enquiry Details or Question *
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please mention your event questions, team size, accompaniment requirements, or special requests..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#9e0804] focus:ring-1 focus:ring-[#9e0804] focus:bg-white shadow-2xs transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button in Burgundy Site Theme */}
            <button
              type="submit"
              className="w-full py-3.5 px-8 rounded-full font-bold text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-[0_6px_20px_rgba(158,8,4,0.32)] hover:shadow-[0_8px_25px_rgba(158,8,4,0.45)]"
              style={{
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #9e0804 0%, #730502 100%)',
              }}
            >
              <Send className="w-4 h-4" />
              <span>Submit Event Enquiry</span>
            </button>
          </form>
        )}
      </div>

      {/* Bottom Block: SLA Assurance Guarantee - Exactly matches left side footer level */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>Official response guaranteed within <strong>24 hours</strong></span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#9e0804]" />
          Tirunelveli Secretariat
        </span>
      </div>
    </div>
  );
}
