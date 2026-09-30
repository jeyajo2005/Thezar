import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest">[ 03 • CONTACT INFO ]</span>
      <h2 className="text-3xl font-black text-white">THEZAR Secretariat</h2>

      <div className="space-y-4 text-xs">
        <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">State Headquarters</p>
            <p className="text-slate-400">Anna Salai, Guindy, Chennai, Tamil Nadu 600025</p>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
          <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">State Helpline</p>
            <p className="text-slate-400">+91 98765 43210 / +91 98400 11223</p>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
          <Mail className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">Official Email</p>
            <p className="text-slate-400">support@thezar2026.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
