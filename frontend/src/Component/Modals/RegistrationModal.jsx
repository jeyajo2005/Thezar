import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { DISTRICTS_DATA } from '../../data/mockData';
import { X, CheckCircle2, User, Mail, Phone, Building, Download, Sparkles, Lock } from 'lucide-react';

export default function RegistrationModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    collegeName: '',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    district: 'Tirunelveli',
    competition: 'Technical Hackathon'
  });

  const [registeredUser, setRegisteredUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert('Please fill out all required fields.');
      return;
    }

    const distCode = DISTRICTS_DATA.find(d => d.name === formData.district)?.code || 'TVL';
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const participantId = `TZR-2026-${distCode}-${randomNum}`;
    const defaultPassword = `tzr${Math.floor(1000 + Math.random() * 9000)}`;

    const newUser = {
      ...formData,
      participantId,
      password: defaultPassword,
      registeredAt: new Date().toLocaleString()
    };

    setRegisteredUser(newUser);
    setStep(2);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl my-8 text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-[10px] gradient-bg-pink flex items-center justify-center text-white font-bold">
            {step === 1 ? '1' : <CheckCircle2 className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-black text-white">
              {step === 1 ? 'Participant Registration Form' : 'Registration Successful!'}
            </h3>
            <p className="text-xs text-slate-400">
              {step === 1 ? 'THEZAR 2026 State & District Competition Pass' : 'Your Candidate Pass & QR Code generated'}
            </p>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
            
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  College Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. ABC College of Engineering"
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Year of Study
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="PG / Masters">PG / Masters</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Select District *
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors font-semibold text-rose-400"
                >
                  {DISTRICTS_DATA.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} District ({d.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Competition Track *
                </label>
                <select
                  value={formData.competition}
                  onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors font-semibold text-amber-400"
                >
                  <option value="Technical Hackathon">Technical Hackathon</option>
                  <option value="Cultural Dance Fest">Cultural Dance Fest</option>
                  <option value="Grand TN Quiz">Grand TN Quiz</option>
                  <option value="AI & IoT Innovation Expo">AI & IoT Innovation Expo</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-full text-base font-extrabold text-white bg-[#3f0701] hover:bg-[#580c04] shadow-xl shadow-[#3f0701]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue & Generate Pass</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

          </form>
        )}

        {step === 2 && registeredUser && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            <div className="bg-slate-950 rounded-2xl p-6 border-2 border-[#3f0701]/50 shadow-2xl relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3f0701]/20 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-red-200 uppercase tracking-widest">
                  THEZAR 2026 OFFICIAL PASS
                </span>
                <span className="text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                  VERIFIED CANDIDATE
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
                <div className="bg-white p-3 rounded-[10px] shadow-lg border border-slate-200">
                  <QRCodeSVG value={registeredUser.participantId} size={130} />
                  <p className="text-[10px] text-slate-800 font-mono font-bold mt-1">Scan for Check-in</p>
                </div>

                <div className="text-left space-y-1.5">
                  <p className="text-xs text-slate-400">Participant ID:</p>
                  <p className="text-xl font-mono font-black text-amber-400 tracking-wider">
                    {registeredUser.participantId}
                  </p>
                  <p className="text-lg font-bold text-white">{registeredUser.fullName}</p>
                  <p className="text-xs text-slate-300">{registeredUser.collegeName || 'Official Candidate'}</p>
                  <p className="text-xs text-red-200 font-semibold">{registeredUser.district} District • {registeredUser.competition}</p>
                  
                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>App Password: <strong className="text-white font-mono">{registeredUser.password}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Issued: {registeredUser.registeredAt}</span>
                <span>Tamil Nadu Championship League</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Print Candidate Badge</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-1/2 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#3f0701] hover:bg-[#580c04] shadow-lg cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
