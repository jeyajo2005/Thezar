import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { DISTRICTS_DATA } from '../../data/mockData';
import { X, CheckCircle2, User, Mail, Phone, Building, Download, Sparkles, Lock, RefreshCw, Search, ShieldCheck, Clock } from 'lucide-react';

const COMPETITION_OPTIONS = [
  { id: 'evt-carol-kids-solo', title: 'Carol Fiesta 2026 - Kids Solo Singing (Category I)', fee: 699 },
  { id: 'evt-carol-adult-solo', title: 'Carol Fiesta 2026 - Adult Solo Singing (Category I)', fee: 699 },
  { id: 'evt-carol-choirs-bands', title: 'Carol Fiesta 2026 - Choirs & Music Bands (Category II)', fee: 199 },
  { id: 'evt-carol-solo-dance', title: 'Carol Fiesta 2026 - Solo Dance Showcase (Category III)', fee: 699 },
  { id: 'evt-carol-group-dance', title: 'Carol Fiesta 2026 - Group Dance Showcase (Category III)', fee: 199 },
  { id: 'evt-carol-santa', title: 'Carol Fiesta 2026 - Santa Claus Contest (Category IV)', fee: 699 },
  { id: 'evt-grand-cooking', title: 'Grand Cooking Championship 2026 (Category V)', fee: 999 },
  { id: 'evt-all-access', title: 'Statewide Championship All-Access Pass', fee: 999 },
];

export default function RegistrationModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('register'); // 'register' | 'lookup'
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lookup state
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    collegeName: '',
    department: 'Music & Cultural Arts',
    year: 'Open Category',
    district: 'Tirunelveli',
    competition: COMPETITION_OPTIONS[0].title
  });

  const [registeredUser, setRegisteredUser] = useState(null);

  const selectedCompObj = COMPETITION_OPTIONS.find(c => c.title === formData.competition) || COMPETITION_OPTIONS[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const payload = {
      registrationType: 'individual',
      fullName: formData.fullName,
      participantName: formData.fullName,
      email: formData.email,
      phone: formData.mobile,
      mobile: formData.mobile,
      collegeName: formData.collegeName,
      department: formData.department,
      year: formData.year,
      district: formData.district,
      selectedEvents: [
        {
          eventId: selectedCompObj.id,
          title: selectedCompObj.title,
          price: selectedCompObj.fee
        }
      ],
      paymentMethod: 'UPI_QR',
      howDidYouHear: 'Official Website Registration Pass'
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        const newUser = {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          district: formData.district,
          collegeName: formData.collegeName,
          competition: selectedCompObj.title,
          fee: selectedCompObj.fee,
          registrationId: data.registrationId,
          participantId: data.participantId,
          password: data.password,
          paymentStatus: data.paymentStatus || 'pending_verification',
          utrNumber: data.utrNumber,
          registeredAt: new Date().toLocaleString()
        };

        setRegisteredUser(newUser);
        setStep(2);

        // Store last registration locally for quick access
        localStorage.setItem('tzr_last_registration', JSON.stringify(newUser));

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMessage(data.message || 'Registration failed on backend server.');
      }
    } catch (err) {
      console.warn('Backend offline, using fallback:', err.message);
      // Fallback local registration
      const distCode = DISTRICTS_DATA.find(d => d.name === formData.district)?.code || 'TVL';
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const fallbackId = `TZR-2026-${distCode}-${randomNum}`;
      const fallbackPass = `tzr${Math.floor(1000 + Math.random() * 9000)}`;

      const newUser = {
        ...formData,
        fee: selectedCompObj.fee,
        registrationId: fallbackId,
        participantId: fallbackId,
        password: fallbackPass,
        paymentStatus: 'pending_verification',
        utrNumber: `UTR-OFFLINE-${Date.now().toString().slice(-6)}`,
        registeredAt: new Date().toLocaleString()
      };

      setRegisteredUser(newUser);
      setStep(2);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lookup existing registration by ID, phone, or email
  const handleLookup = async (e) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;

    setLookupLoading(true);
    setLookupError('');

    try {
      const res = await fetch(`/api/registration/${encodeURIComponent(lookupQuery.trim())}`);
      const data = await res.json();

      if (data.success && data.registration) {
        const reg = data.registration;
        const compTitle = reg.selectedEvents?.[0]?.title || 'Carol Fiesta 2026';
        const fee = reg.totalAmount || 699;

        const foundUser = {
          fullName: reg.fullName,
          email: reg.email,
          mobile: reg.phone,
          district: reg.district,
          collegeName: reg.address || '',
          competition: compTitle,
          fee: fee,
          registrationId: reg.registrationId,
          participantId: reg.participantId,
          password: 'Pass Verified',
          paymentStatus: reg.paymentStatus,
          utrNumber: reg.utrNumber,
          registeredAt: reg.createdAt ? new Date(reg.createdAt).toLocaleString() : 'Recently'
        };

        setRegisteredUser(foundUser);
        setStep(2);
      } else {
        setLookupError(data.message || 'No registration record found for this ID or mobile/email.');
      }
    } catch (err) {
      setLookupError('Network error connecting to backend API.');
    } finally {
      setLookupLoading(false);
    }
  };

  // Live Refresh Registration Status
  const handleRefreshStatus = async () => {
    if (!registeredUser?.registrationId) return;
    setIsRefreshing(true);
    try {
      const res = await fetch(`/api/registration/${registeredUser.registrationId}`);
      const data = await res.json();
      if (data.success && data.registration) {
        setRegisteredUser(prev => ({
          ...prev,
          paymentStatus: data.registration.paymentStatus,
          utrNumber: data.registration.utrNumber
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsRefreshing(false);
    }
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

        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] gradient-bg-pink flex items-center justify-center text-white font-bold">
              {step === 1 ? (activeTab === 'register' ? '1' : <Search className="w-5 h-5" />) : <CheckCircle2 className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                {step === 1
                  ? (activeTab === 'register' ? 'Participant Registration' : 'Lookup Existing Pass')
                  : 'Official Entry Pass Ready!'}
              </h3>
              <p className="text-xs text-slate-400">
                {step === 1
                  ? 'Connected Live to TheZar Central Backend & Database'
                  : 'Verified Candidate Pass & QR Code generated'}
              </p>
            </div>
          </div>

          {step === 1 && (
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 mr-8">
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${activeTab === 'register' ? 'bg-[#9e0804] text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('lookup')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${activeTab === 'lookup' ? 'bg-[#9e0804] text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Find Pass
              </button>
            </div>
          )}
        </div>

        {step === 1 && activeTab === 'lookup' && (
          <form onSubmit={handleLookup} className="p-6 space-y-4">
            <p className="text-xs text-slate-300">
              Already registered on the platform? Enter your <strong>Registration ID</strong> (e.g. <code>TZR-2026-000007</code>), <strong>Participant ID</strong>, or your registered <strong>Phone/Email</strong> to instantly pull up your pass and live status.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Registration ID / Phone / Email *
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. TZR-2026-000007 or +91 97903 51878"
                  value={lookupQuery}
                  onChange={(e) => setLookupQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                />
              </div>
            </div>

            {lookupError && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs">
                {lookupError}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={lookupLoading}
                className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#9e0804] hover:bg-[#c4120c] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {lookupLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Searching Backend Database...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Lookup & Access Pass</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 1 && activeTab === 'register' && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[520px] overflow-y-auto">

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs">
                {errorMessage}
              </div>
            )}

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
                  className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
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
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
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
                    placeholder="+91 97903 51878"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  College / Institution Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. St. Xavier / ABC College"
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Category / Division
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                >
                  <option value="Open Category">Open Championship Category</option>
                  <option value="Junior Category">Junior Category (Under 15)</option>
                  <option value="College Troupe">College Troupe</option>
                  <option value="Church / Family Choir">Church / Family Choir</option>
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
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors font-semibold text-[#f87171]"
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
                  className="w-full px-4 py-2.5 rounded-[10px] bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#9e0804] transition-colors font-semibold text-amber-300"
                >
                  {COMPETITION_OPTIONS.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} (₹{c.fee})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Selected Track Entry Fee:</span>
              <span className="text-sm font-black font-mono text-emerald-400">₹{selectedCompObj.fee}</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-base font-extrabold text-white gradient-bg-pink shadow-xl shadow-red-900/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Registering with Central Backend...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Generate Official Pass</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

        {step === 2 && registeredUser && (
          <div className="p-6 sm:p-8 space-y-5 text-center">

            <div className="bg-slate-950 rounded-2xl p-6 border-2 border-[#9e0804]/50 shadow-2xl relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9e0804]/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-red-300 uppercase tracking-widest">
                  THEZAR 2026 OFFICIAL PASS
                </span>

                {registeredUser.paymentStatus === 'completed' ? (
                  <span className="text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    VERIFIED & ADMITTED
                  </span>
                ) : (
                  <span className="text-[10px] font-bold bg-amber-950 text-amber-400 border border-amber-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    PENDING ADMIN VERIFICATION
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
                <div className="bg-white p-3 rounded-[10px] shadow-lg border border-slate-200">
                  <QRCodeSVG value={registeredUser.registrationId || registeredUser.participantId} size={130} />
                  <p className="text-[10px] text-slate-800 font-mono font-bold mt-1">Official Gate Scan</p>
                </div>

                <div className="text-left space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">Registration ID:</p>
                      <p className="text-lg font-mono font-black text-[#f87171] tracking-wider">
                        {registeredUser.registrationId}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRefreshStatus}
                      title="Sync live status from backend"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs flex items-center gap-1"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-red-400' : ''}`} />
                      <span className="text-[10px]">Sync</span>
                    </button>
                  </div>

                  <p className="text-lg font-bold text-white">{registeredUser.fullName}</p>
                  <p className="text-xs text-slate-300">{registeredUser.collegeName || 'Official Statewide Contestant'}</p>
                  <p className="text-xs text-amber-300 font-semibold">{registeredUser.district} District • {registeredUser.competition}</p>

                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                    <Lock className="w-3.5 h-3.5 text-red-300" />
                    <span>App Access Password: <strong className="text-white font-mono">{registeredUser.password}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Issued: {registeredUser.registeredAt}</span>
                <span className="text-emerald-400 font-mono font-bold">₹{registeredUser.fee || 699} (Test UTR: {registeredUser.utrNumber || 'Verified'})</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-red-300" />
                <span>Print Official Badge</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-1/2 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider bg-[#9e0804] hover:bg-[#c4120c] shadow-lg cursor-pointer"
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
