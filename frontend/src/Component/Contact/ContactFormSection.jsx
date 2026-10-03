import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactFormSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl text-left">
      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">[ 04 • ENQUIRY FORM ]</span>
      <h3 className="text-xl font-extrabold text-white mt-1 mb-6">Send an Official Message</h3>

      {formSubmitted ? (
        <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-xs text-slate-300">Our district convenor team will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="Suman Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-[#9e0804]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="hellosuman29@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-[#9e0804]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">District / College Name</label>
            <input
              type="text"
              placeholder="e.g. Tirunelveli District / ABC College"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-[#9e0804]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Enquiry Message</label>
            <textarea
              rows={4}
              required
              placeholder="Write your question or request..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-[#9e0804]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-extrabold text-white gradient-bg-pink shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </button>
        </form>
      )}
    </div>
  );
}
