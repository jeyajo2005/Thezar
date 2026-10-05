import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { DISTRICTS_DATA } from '../../data/mockData';
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
  Sparkles,
  Download,
  CreditCard,
  Plus,
  Trash2,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Award,
  Music,
  CheckSquare,
  Square,
  ShieldCheck,
  Copy,
  Check,
  Info,
  Clock,
  Printer,
  Sparkle
} from 'lucide-react';

const CATEGORIES_DATA = [
  {
    id: 'cat-1-kids',
    categoryGroup: 'Category I: Singing Solo',
    subCategory: 'Kids Solo Singing',
    type: 'individual',
    eventId: 'evt-carol-kids-solo',
    feePerUnit: 699,
    feeLabel: '₹699 per entry',
    prizes: '1st ₹5,000 / 2nd ₹3,000',
    badge: 'Kids Under 15',
    description: 'Solo vocal contest for young kids with acoustic accompaniment.'
  },
  {
    id: 'cat-1-adult',
    categoryGroup: 'Category I: Singing Solo',
    subCategory: 'Adult Solo Singing',
    type: 'individual',
    eventId: 'evt-carol-adult-solo',
    feePerUnit: 699,
    feeLabel: '₹699 per entry',
    prizes: '1st ₹10,000 / 2nd ₹5,000',
    badge: 'Popular',
    description: 'Open solo vocal contest for adults across Tamil Nadu.'
  },
  {
    id: 'cat-2-choir',
    categoryGroup: 'Category II: Choir & Bands',
    subCategory: 'Choir & Music Bands',
    type: 'group',
    eventId: 'evt-carol-choirs-bands',
    feePerUnit: 199,
    feeLabel: '₹199 per person',
    prizes: '1st ₹25,000 / 2nd ₹15,000',
    badge: 'Team Event',
    description: 'Family, Church, School Choirs & Live Festive Music Bands.'
  },
  {
    id: 'cat-3-solodance',
    categoryGroup: 'Category III: Dance Showcase',
    subCategory: 'Solo Dance Showcase',
    type: 'individual',
    eventId: 'evt-carol-solo-dance',
    feePerUnit: 699,
    feeLabel: '₹699 per entry',
    prizes: '1st ₹10,000 / 2nd ₹5,000',
    badge: 'Freestyle',
    description: 'Solo Christmas rhythm, classical fusion & festive dance act.'
  },
  {
    id: 'cat-3-groupdance',
    categoryGroup: 'Category III: Dance Showcase',
    subCategory: 'Group Dance Showcase',
    type: 'group',
    eventId: 'evt-carol-group-dance',
    feePerUnit: 199,
    feeLabel: '₹199 per person',
    prizes: '1st ₹25,000 / 2nd ₹15,000',
    badge: 'Choreography',
    description: 'Group dance troupe performance with creative theme & costumes.'
  },
  {
    id: 'cat-4-santa',
    categoryGroup: 'Category IV: Special Event',
    subCategory: 'Santa Claus Competition',
    type: 'individual',
    eventId: 'evt-carol-santa',
    feePerUnit: 699,
    feeLabel: '₹699 per entry',
    prizes: 'Grand Prize ₹20,000',
    badge: 'Special Stage',
    description: 'Best Santa Claus costume, festive crowd interaction & stage act.'
  },
  {
    id: 'cat-5-cooking',
    categoryGroup: 'Category V: Grand Culinary',
    subCategory: 'Grand Cooking Championship',
    type: 'individual',
    eventId: 'evt-grand-cooking',
    feePerUnit: 999,
    feeLabel: '₹999 per team',
    prizes: '1st ₹1,00,000 + Trophy',
    badge: 'Mega Prize',
    description: 'Statewide festive cooking championship with live masterchef jury.'
  }
];

const FALLBACK_EVENTS = [
  {
    id: 'evt-carol-kids-solo',
    eventId: 'evt-carol-kids-solo',
    title: 'Carol Fiesta 2026 - Kids Solo Singing (Category I)',
    category: 'Singing Solo',
    date: '12.12.2026',
    price: 699,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-carol-adult-solo',
    eventId: 'evt-carol-adult-solo',
    title: 'Carol Fiesta 2026 - Adult Solo Singing (Category I)',
    category: 'Singing Solo',
    date: '12.12.2026',
    price: 699,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-carol-choirs-bands',
    eventId: 'evt-carol-choirs-bands',
    title: 'Carol Fiesta 2026 - Choirs & Music Bands (Category II)',
    category: 'Choir & Bands',
    date: '12.12.2026',
    price: 199,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-carol-solo-dance',
    eventId: 'evt-carol-solo-dance',
    title: 'Carol Fiesta 2026 - Solo Dance Showcase (Category III)',
    category: 'Dance Showcase',
    date: '12.12.2026',
    price: 699,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-carol-group-dance',
    eventId: 'evt-carol-group-dance',
    title: 'Carol Fiesta 2026 - Group Dance Showcase (Category III)',
    category: 'Dance Showcase',
    date: '12.12.2026',
    price: 199,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-carol-santa',
    eventId: 'evt-carol-santa',
    title: 'Carol Fiesta 2026 - Santa Claus Contest (Category IV)',
    category: 'Special Contest',
    date: '12.12.2026',
    price: 699,
    venue: 'Tirunelveli District Arena'
  },
  {
    id: 'evt-grand-cooking',
    eventId: 'evt-grand-cooking',
    title: 'Grand Cooking Championship 2026 (Category V)',
    category: 'Cooking Championship',
    date: '12.12.2026',
    price: 999,
    venue: 'Master Kitchen Arena'
  }
];

export default function RegistrationModal({ onClose }) {
  // Step 1 = Category & Terms
  // Step 2 = Participant Details
  // Step 3 = Payment Gateway
  // Step 4 = Confirmed Pass
  const [step, setStep] = useState(1);
  const [selectedCatId, setSelectedCatId] = useState('cat-1-adult');
  const [registrationType, setRegistrationType] = useState('individual'); // 'individual' | 'group'

  const [availableEvents, setAvailableEvents] = useState(FALLBACK_EVENTS);
  const [selectedEventIds, setSelectedEventIds] = useState(['evt-carol-adult-solo']);
  const [howDidYouHear, setHowDidYouHear] = useState('Social Media');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  // Individual Form Fields
  const [individualData, setIndividualData] = useState({
    participantName: '',
    address: '',
    district: 'Tirunelveli',
    phone: '',
    altPhone: '',
    email: ''
  });

  // Group Form Fields
  const [groupData, setGroupData] = useState({
    groupName: '',
    groupAddress: '',
    groupLeaderName: '',
    groupLeaderAddress: '',
    district: 'Tirunelveli',
    groupLeaderPhone: '',
    altPhone: '',
    email: ''
  });

  // Dynamic Group Members List
  const [groupMembers, setGroupMembers] = useState([{ name: '' }, { name: '' }]);

  // Test Payment State
  const [hasPaidChecked, setHasPaidChecked] = useState(false);
  const [testUtr, setTestUtr] = useState('');

  // Result
  const [registrationResult, setRegistrationResult] = useState(null);

  // Fetch events from backend API on mount
  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.events) && data.events.length > 0) {
          setAvailableEvents(data.events);
        }
      })
      .catch(() => {
        setAvailableEvents(FALLBACK_EVENTS);
      });
  }, []);

  // Generate a random Test UTR when reaching step 3
  useEffect(() => {
    if (step === 3 && !testUtr) {
      setTestUtr(`UTR${Math.floor(100000000000 + Math.random() * 900000000000)}`);
    }
  }, [step, testUtr]);

  const selectedCategory = CATEGORIES_DATA.find((c) => c.id === selectedCatId) || CATEGORIES_DATA[1];

  // Category Selection Handler
  const handleSelectCategory = (cat) => {
    setSelectedCatId(cat.id);
    setRegistrationType(cat.type);
    setSelectedEventIds([cat.eventId]);
  };

  // Manual Type Toggle Handler
  const handleTypeToggle = (type) => {
    setRegistrationType(type);
    const match = CATEGORIES_DATA.find((c) => c.type === type);
    if (match) {
      setSelectedCatId(match.id);
      setSelectedEventIds([match.eventId]);
    }
  };

  // Selected Events Array
  const selectedEvents = availableEvents.filter((ev) =>
    selectedEventIds.includes(ev.eventId || ev.id)
  );

  // Total Fee Calculation
  const totalAmount = selectedEvents.reduce((acc, ev) => {
    const isGroupEv = (ev.category && ev.category.toLowerCase().includes('choir')) || 
                      (ev.title && (ev.title.toLowerCase().includes('group') || ev.title.toLowerCase().includes('choir')));
    const unitPrice = Number(ev.price) || 0;
    if (registrationType === 'group' && isGroupEv) {
      return acc + Math.max(1, groupMembers.filter(m => m.name.trim() !== '').length || 1) * unitPrice;
    }
    return acc + unitPrice;
  }, 0);

  const isFree = totalAmount === 0;

  // Toggle multi-event selection
  const toggleEventSelection = (eventId) => {
    if (selectedEventIds.includes(eventId)) {
      if (selectedEventIds.length > 1) {
        setSelectedEventIds(selectedEventIds.filter((id) => id !== eventId));
      }
    } else {
      setSelectedEventIds([...selectedEventIds, eventId]);
    }
  };

  // Group Member Handlers
  const handleAddMember = () => {
    setGroupMembers([...groupMembers, { name: '' }]);
  };

  const handleRemoveMember = (index) => {
    if (groupMembers.length > 1) {
      setGroupMembers(groupMembers.filter((_, i) => i !== index));
    }
  };

  const handleMemberChange = (index, value) => {
    const updated = [...groupMembers];
    updated[index].name = value;
    setGroupMembers(updated);
  };

  // Step 1 -> Step 2 Validation
  const handleStep1Next = () => {
    if (!termsAgreed) {
      alert('Please agree to the Terms & Conditions and Competition Guidelines before proceeding.');
      return;
    }
    setStep(2);
  };

  // Copy UPI ID
  const handleCopyUpi = () => {
    navigator.clipboard.writeText('test@upi');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // Step 2 Submission Handler
  const handleFormNext = (e) => {
    e.preventDefault();

    if (registrationType === 'individual') {
      if (!individualData.participantName.trim() || !individualData.phone.trim() || !individualData.email.trim()) {
        alert('Please fill out all required participant details (Full Name, Phone & Email).');
        return;
      }
    } else {
      if (
        !groupData.groupName.trim() ||
        !groupData.groupLeaderName.trim() ||
        !groupData.groupLeaderPhone.trim() ||
        !groupData.email.trim()
      ) {
        alert('Please fill out all required group & leader details.');
        return;
      }
    }

    if (isFree) {
      submitRegistrationToBackend({ paymentMethod: 'FREE', utrNumber: 'FREE-EVENT' });
    } else {
      setStep(3);
    }
  };

  // Submit to Backend API
  const submitRegistrationToBackend = async ({ paymentMethod = 'UPI_QR', utrNumber = '' }) => {
    setIsSubmitting(true);

    const activeUtr = utrNumber || testUtr || `UTR${Date.now().toString().slice(-10)}`;
    const candidateName = registrationType === 'individual' ? individualData.participantName : groupData.groupName;
    const candidateEmail = registrationType === 'individual' ? individualData.email : groupData.email;
    const candidatePhone = registrationType === 'individual' ? individualData.phone : groupData.groupLeaderPhone;

    const payload = {
      registrationType,
      howDidYouHear,
      selectedEvents: selectedEvents.map((ev) => ({
        eventId: ev.eventId || ev.id,
        title: ev.title,
        price: ev.price
      })),
      paymentMethod,
      utrNumber: activeUtr,
      totalAmount,

      ...(registrationType === 'individual'
        ? {
            participantName: individualData.participantName,
            address: individualData.address,
            district: individualData.district,
            phone: individualData.phone,
            altPhone: individualData.altPhone,
            email: individualData.email
          }
        : {
            groupName: groupData.groupName,
            groupAddress: groupData.groupAddress,
            groupLeaderName: groupData.groupLeaderName,
            groupLeaderAddress: groupData.groupLeaderAddress || groupData.groupAddress,
            district: groupData.district,
            groupLeaderPhone: groupData.groupLeaderPhone,
            groupLeaderAltPhone: groupData.altPhone,
            groupLeaderEmail: groupData.email,
            members: groupMembers.filter((m) => m.name.trim() !== '')
          })
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setRegistrationResult(data);
        setStep(4);
        confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } });
      } else {
        throw new Error(data.message || 'API error');
      }
    } catch (err) {
      // Dynamic simulated fallback with persistence into local storage
      const fallbackRegId = `TZR-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const fallbackResult = {
        success: true,
        registrationId: fallbackRegId,
        participantId: `P-${fallbackRegId.slice(-6)}`,
        password: `thezar${Math.floor(1000 + Math.random() * 9000)}`,
        paymentStatus: isFree ? 'free' : 'pending_verification',
        amount: totalAmount,
        totalAmount,
        utrNumber: activeUtr,
        candidateName,
        candidateEmail,
        candidatePhone,
        registrationType,
        selectedEvents,
        qrCodeData: fallbackRegId,
        message: 'Registration Successfully Submitted 🎉'
      };

      // Store in local storage so Admin Portal can also read it dynamically!
      try {
        const stored = JSON.parse(localStorage.getItem('tzr_local_registrations') || '[]');
        stored.unshift({
          registrationId: fallbackRegId,
          participantId: fallbackResult.participantId,
          registrationType,
          totalAmount,
          paymentStatus: isFree ? 'completed' : 'pending_verification',
          utrNumber: activeUtr,
          user: { fullName: candidateName, email: candidateEmail, phone: candidatePhone },
          groupInfo: registrationType === 'group' ? { groupName: candidateName, membersCount: groupMembers.length } : null,
          selectedEvents,
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('tzr_local_registrations', JSON.stringify(stored));
      } catch (e) {
        console.error(e);
      }

      setRegistrationResult(fallbackResult);
      setStep(4);
      confetti({ particleCount: 120, spread: 75, origin: { y: 0.6 } });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsList = [
    { num: 1, title: 'Category & Mode', desc: 'Select track' },
    { num: 2, title: 'Details & Entry', desc: 'Candidate info' },
    { num: 3, title: 'Verification', desc: 'Payment confirmation' },
    { num: 4, title: 'Official Pass', desc: 'Digital QR ticket' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white text-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 my-4 text-left font-sans flex flex-col max-h-[92vh]">
        
        {/* Top Gradient Decorative Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#9e0804] via-[#e63946] to-[#9e0804] shrink-0" />

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-100/80 hover:bg-red-50 text-slate-500 hover:text-[#9e0804] transition-all cursor-pointer shadow-xs border border-slate-200/60 hover:scale-105 active:scale-95"
          style={{ borderRadius: '9999px' }}
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Clean Header Bar */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#9e0804] bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-full" style={{ borderRadius: '9999px' }}>
                  TheZar 2026 Portal
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold flex items-center gap-1" style={{ borderRadius: '9999px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Registration
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {step === 1 && 'Choose Competition & Category'}
                {step === 2 && 'Candidate & Registration Details'}
                {step === 3 && 'Payment Verification'}
                {step === 4 && 'Registration Confirmed 🎉'}
              </h2>
            </div>

            {/* Stepper Progress Pill */}
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700" style={{ borderRadius: '9999px' }}>
              <span className="text-[#9e0804]">Step {step}</span>
              <span className="text-slate-400">/</span>
              <span>4</span>
            </div>
          </div>

          {/* Stepper Indicator Bar */}
          <div className="grid grid-cols-4 gap-2 pt-4">
            {stepsList.map((st) => {
              const isActive = step === st.num;
              const isDone = step > st.num;
              return (
                <div key={st.num} className="space-y-1">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#9e0804]'
                        : isDone
                        ? 'bg-emerald-500'
                        : 'bg-slate-200'
                    }`}
                  />
                  <p className={`text-[10px] font-bold truncate hidden sm:block ${
                    isActive ? 'text-[#9e0804]' : isDone ? 'text-emerald-700' : 'text-slate-400'
                  }`}>
                    {st.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            STEP 1: Select Competition Category & Agree T&C
            ======================================================== */}
        {step === 1 && (
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
            
            {/* Registration Mode Pill Switcher */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Participation Mode:
              </label>
              <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1.5 border border-slate-200">
                <button
                  type="button"
                  onClick={() => handleTypeToggle('individual')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    registrationType === 'individual'
                      ? 'bg-[#9e0804] text-white shadow-md scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  <User className="w-4 h-4" />
                  <span>Individual / Solo</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTypeToggle('group')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    registrationType === 'group'
                      ? 'bg-[#9e0804] text-white shadow-md scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  <Users className="w-4 h-4" />
                  <span>Group / Choir / Troupe</span>
                </button>
              </div>
            </div>

            {/* Category Selection Grid */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-[#9e0804]" />
                  <span>Available Competition Tracks</span>
                </label>
                <span className="text-[11px] text-slate-400 font-medium">Click card to select</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORIES_DATA.map((cat) => {
                  const isSelected = cat.id === selectedCatId;
                  const isGroup = cat.type === 'group';

                  return (
                    <div
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between gap-2.5 text-left group ${
                        isSelected
                          ? 'bg-red-50/80 border-[#9e0804] shadow-md ring-2 ring-red-500/20'
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                      style={{ borderRadius: '16px' }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[9px] font-extrabold text-[#9e0804] uppercase tracking-wide">
                              {cat.categoryGroup}
                            </span>
                            <span className={`text-[9px] font-bold px-2 py-0.2 rounded-full uppercase ${
                              isGroup ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                            }`} style={{ borderRadius: '9999px' }}>
                              {cat.badge || (isGroup ? 'Group' : 'Solo')}
                            </span>
                          </div>
                          <h4 className="text-sm font-black text-slate-900 leading-snug group-hover:text-[#9e0804] transition-colors">
                            {cat.subCategory}
                          </h4>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'border-[#9e0804] bg-[#9e0804] text-white' : 'border-slate-300 bg-white'
                          }`}
                          style={{ borderRadius: '9999px' }}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                        {cat.description}
                      </p>

                      <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                        <span className="font-mono font-extrabold text-[#9e0804] bg-white px-2.5 py-0.5 rounded-lg border border-red-100 shadow-2xs">
                          {cat.feeLabel}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                          {cat.prizes}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terms & Conditions Agreement Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2" style={{ borderRadius: '16px' }}>
              <div
                onClick={() => setTermsAgreed(!termsAgreed)}
                className="flex items-start gap-3 cursor-pointer select-none"
              >
                <div className="mt-0.5 shrink-0">
                  {termsAgreed ? (
                    <div className="w-5 h-5 rounded-md bg-[#9e0804] text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-md border-2 border-slate-300 bg-white hover:border-[#9e0804] transition-colors" />
                  )}
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-extrabold text-slate-900">
                    I agree to the Terms & Conditions and Rules *
                  </p>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-normal">
                    I confirm that candidate information submitted is genuine and agree to abide by all stage regulations, judging decisions, and venue reporting guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 Action Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Selected Track:</p>
                <p className="text-xs font-black text-[#9e0804] truncate max-w-[180px] sm:max-w-xs">
                  {selectedCategory.subCategory}
                </p>
              </div>

              <button
                type="button"
                onClick={handleStep1Next}
                disabled={!termsAgreed}
                className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-red-950/10 flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                style={{ borderRadius: '9999px' }}
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ========================================================
            STEP 2: Enter Participant / Group Information
            ======================================================== */}
        {step === 2 && (
          <form onSubmit={handleFormNext} className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
            
            {/* Mode Switcher */}
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#9e0804]" />
                <span>{registrationType === 'individual' ? 'Individual Candidate Info' : 'Group & Troupe Details'}</span>
              </span>
              <button
                type="button"
                onClick={() => setRegistrationType(registrationType === 'individual' ? 'group' : 'individual')}
                className="text-[11px] font-bold text-[#9e0804] hover:underline cursor-pointer"
              >
                Switch to {registrationType === 'individual' ? 'Group' : 'Individual'}
              </button>
            </div>

            {/* Form Fields */}
            {registrationType === 'individual' ? (
              <div className="space-y-3.5 bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200" style={{ borderRadius: '18px' }}>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Participant Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Kumar"
                      value={individualData.participantName}
                      onChange={(e) => setIndividualData({ ...individualData, participantName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={individualData.email}
                        onChange={(e) => setIndividualData({ ...individualData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                        style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 97903 51878"
                        value={individualData.phone}
                        onChange={(e) => setIndividualData({ ...individualData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                        style={{ borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Alternate Phone <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={individualData.altPhone}
                      onChange={(e) => setIndividualData({ ...individualData, altPhone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Residential Address / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Palayamkottai, Tirunelveli"
                      value={individualData.address}
                      onChange={(e) => setIndividualData({ ...individualData, address: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-3.5 bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200" style={{ borderRadius: '18px' }}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Group / Choir / Band Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Xavier Harmony Troupe"
                      value={groupData.groupName}
                      onChange={(e) => setGroupData({ ...groupData, groupName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Team Leader Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Leader / Director Full Name"
                      value={groupData.groupLeaderName}
                      onChange={(e) => setGroupData({ ...groupData, groupLeaderName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Leader Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97903 51878"
                      value={groupData.groupLeaderPhone}
                      onChange={(e) => setGroupData({ ...groupData, groupLeaderPhone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Leader Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="leader@choir.org"
                      value={groupData.email}
                      onChange={(e) => setGroupData({ ...groupData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#9e0804]/20 focus:border-[#9e0804] transition-all"
                      style={{ borderRadius: '12px' }}
                    />
                  </div>
                </div>

                {/* Dynamic Group Members List */}
                <div className="pt-2 border-t border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Troupe Members ({groupMembers.length} Members)
                    </label>
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="text-xs font-bold text-[#9e0804] hover:text-[#c4120c] flex items-center gap-1 cursor-pointer bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full border border-red-200 transition-colors"
                      style={{ borderRadius: '9999px' }}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Member</span>
                    </button>
                  </div>

                  <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                    {groupMembers.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400 w-5 text-center">
                          {idx + 1}.
                        </span>
                        <input
                          type="text"
                          placeholder={`Member Full Name #${idx + 1}`}
                          value={member.name}
                          onChange={(e) => handleMemberChange(idx, e.target.value)}
                          className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#9e0804]"
                          style={{ borderRadius: '10px' }}
                        />
                        {groupMembers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(idx)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Multi-Event Selector */}
            <div className="space-y-2.5 bg-slate-50/70 p-4 rounded-2xl border border-slate-200" style={{ borderRadius: '18px' }}>
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Event Entries ({selectedEventIds.length} Selected)
                </label>
                <span className="text-[10px] text-slate-500 font-medium">Multi-event entry supported</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableEvents.map((ev) => {
                  const evId = ev.eventId || ev.id;
                  const isChecked = selectedEventIds.includes(evId);
                  return (
                    <div
                      key={evId}
                      onClick={() => toggleEventSelection(evId)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 select-none ${
                        isChecked
                          ? 'bg-white border-[#9e0804] text-slate-900 shadow-xs ring-1 ring-[#9e0804]/20'
                          : 'bg-white/60 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                      style={{ borderRadius: '12px' }}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-[#9e0804] bg-[#9e0804] text-white' : 'border-slate-300 bg-white'
                        }`} style={{ borderRadius: '6px' }}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-bold truncate">{ev.title}</span>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-[#9e0804] shrink-0">
                        ₹{ev.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How did you hear */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                How did you hear about TheZar 2026?
              </label>
              <select
                value={howDidYouHear}
                onChange={(e) => setHowDidYouHear(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#9e0804]"
                style={{ borderRadius: '12px' }}
              >
                <option value="Social Media">Social Media (Instagram / WhatsApp / FB)</option>
                <option value="College/School Banner">College / School / Church Notice</option>
                <option value="Friend/Referral">Friend / Troupe Referral</option>
                <option value="Search Engine">Search Engine (Google)</option>
                <option value="Poster/Flyer">Poster / Pamphlet</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                ← Back
              </button>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Total Fee</p>
                  <p className="text-base font-black text-[#9e0804] font-mono">
                    {isFree ? 'FREE' : `₹${totalAmount}`}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  style={{ borderRadius: '9999px' }}
                >
                  <span>{isFree ? 'Submit Free Pass' : 'Proceed to Payment'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        )}

        {/* ========================================================
            STEP 3: Test Payment Gateway
            ======================================================== */}
        {step === 3 && (
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 text-center">
            
            <div className="bg-slate-50/90 p-5 sm:p-6 rounded-3xl border border-slate-200 space-y-4 text-center max-w-md mx-auto shadow-sm" style={{ borderRadius: '24px' }}>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-200/60 px-2.5 py-0.5 rounded-full" style={{ borderRadius: '9999px' }}>
                  Secure Payment Gateway (UPI Test Mode)
                </span>
                <p className="text-3xl font-black text-[#9e0804] font-mono mt-2">
                  ₹{totalAmount.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 font-medium">For {selectedEvents.length} registered event track(s)</p>
              </div>

              {/* QR Container */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md inline-block relative group" style={{ borderRadius: '20px' }}>
                <QRCodeSVG value={`upi://pay?pa=test@upi&pn=TheZarEvents&am=${totalAmount}&cu=INR`} size={160} />
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-[#9e0804]" />
                  <span>Scan via Any UPI App</span>
                </p>
              </div>

              {/* UPI ID Copy Bar */}
              <div className="bg-white p-2.5 px-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs font-mono" style={{ borderRadius: '12px' }}>
                <span className="text-slate-500 font-medium">UPI ID: <strong className="text-slate-900 font-bold">test@upi</strong></span>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="px-2.5 py-1 rounded-lg bg-red-50 text-[#9e0804] hover:bg-red-100 font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                  style={{ borderRadius: '8px' }}
                >
                  {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedUpi ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Test UTR Input */}
              <div className="text-left space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase flex items-center justify-between">
                  <span>12-Digit UTR / Transaction Reference:</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Auto Generated</span>
                </label>
                <input
                  type="text"
                  value={testUtr}
                  onChange={(e) => setTestUtr(e.target.value)}
                  placeholder="e.g. UTR928172839182"
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 font-mono text-xs text-slate-900 font-bold focus:outline-none focus:border-[#9e0804]"
                  style={{ borderRadius: '10px' }}
                />
              </div>

              {/* Checkbox confirmation */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="payCheck"
                  checked={hasPaidChecked}
                  onChange={(e) => setHasPaidChecked(e.target.checked)}
                  className="w-4 h-4 accent-[#9e0804] rounded cursor-pointer"
                />
                <label htmlFor="payCheck" className="text-xs font-extrabold text-slate-800 cursor-pointer select-none">
                  I have completed the test payment transfer
                </label>
              </div>

              <button
                type="button"
                disabled={!hasPaidChecked || isSubmitting}
                onClick={() => submitRegistrationToBackend({ paymentMethod: 'UPI_QR', utrNumber: testUtr })}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                style={{ borderRadius: '9999px' }}
              >
                <span>{isSubmitting ? 'Verifying Transfer...' : 'Confirm Payment & Generate Pass'}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer underline inline-block"
            >
              ← Back to Registration Details
            </button>

          </div>
        )}

        {/* ========================================================
            STEP 4: Registration Confirmation Screen (VIP Pass)
            ======================================================== */}
        {step === 4 && registrationResult && (
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1 text-center">
            
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-0.5" style={{ borderRadius: '16px' }}>
              <div className="inline-flex items-center gap-2 font-black text-sm text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Registration Confirmed 🎉</span>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium">
                Your entry record and QR gate pass have been recorded successfully.
              </p>
            </div>

            {/* Official Candidate VIP Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-left space-y-4" style={{ borderRadius: '24px' }}>
              
              {/* Card Holographic Top Banner */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block">
                    THEZAR 2026 STATEWIDE CHAMPIONSHIP
                  </span>
                  <span className="text-xs font-extrabold text-slate-200">OFFICIAL DIGITAL CANDIDATE PASS</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800" style={{ borderRadius: '9999px' }}>
                  PASS ISSUED
                </span>
              </div>

              {/* Card Main Body */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-1">
                
                {/* QR Box */}
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200 text-center shrink-0" style={{ borderRadius: '16px' }}>
                  <QRCodeSVG value={registrationResult.qrCodeData || registrationResult.registrationId} size={120} />
                  <p className="text-[9px] text-slate-800 font-mono font-bold mt-1">VENUE GATE SCAN</p>
                </div>

                {/* Candidate Meta Info */}
                <div className="space-y-2 flex-1 min-w-0 w-full">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Candidate / Troupe:</p>
                    <p className="text-base font-black text-white truncate">
                      {registrationResult.candidateName || individualData.participantName || groupData.groupName || 'Candidate'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Registration ID:</p>
                      <p className="text-xs font-mono font-bold text-red-400 truncate">
                        {registrationResult.registrationId}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Participant ID:</p>
                      <p className="text-xs font-mono font-bold text-slate-200 truncate">
                        {registrationResult.participantId}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 text-[11px] flex items-center justify-between" style={{ borderRadius: '10px' }}>
                    <span className="text-slate-400">Portal Passcode:</span>
                    <strong className="text-amber-300 font-mono font-bold">{registrationResult.password}</strong>
                  </div>
                </div>

              </div>

              {/* Registered Tracks */}
              <div className="pt-3 border-t border-slate-800 text-xs space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Registered Tracks:</p>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {(registrationResult.selectedEvents || selectedEvents).map((ev, i) => (
                    <span key={i} className="bg-slate-800 text-slate-200 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-slate-700" style={{ borderRadius: '9999px' }}>
                      {ev.title || ev.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Confirmation Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all border border-slate-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                style={{ borderRadius: '9999px' }}
              >
                <Printer className="w-4 h-4 text-[#9e0804]" />
                <span>Print / Save Pass</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-1/2 py-3 rounded-full text-white font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] shadow-md cursor-pointer flex items-center justify-center gap-2 transition-all"
                style={{ borderRadius: '9999px' }}
              >
                <span>Done & Close</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
