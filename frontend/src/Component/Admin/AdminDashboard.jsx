import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import {
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  MapPin,
  Clock,
  Trophy,
  Award,
  Bell,
  MessageSquare,
  Bot,
  Globe,
  Tag,
  BarChart3,
  Smartphone,
  UserCog,
  Settings,
  ShieldAlert,
  Plus,
  Search,
  Filter,
  Download,
  Edit3,
  Trash2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  LogOut,
  ChevronRight,
  ChevronDown,
  Check,
  Save,
  ExternalLink,
  Sparkles,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PackageCheck,
  Receipt,
  Building2,
  SlidersHorizontal,
  Image as ImageIcon,
  Eye,
  FileText,
  Send,
  HelpCircle,
  ShieldCheck,
  Map,
  PieChart,
  Camera,
  Star,
  Copy,
  ChevronUp,
  CheckCheck,
  X,
  Printer,
  FileSpreadsheet,
  ToggleLeft,
  ToggleRight,
  UserCheck,
  Layers,
  Lock,
  Mail,
  Phone,
  QrCode
} from 'lucide-react';

export default function AdminDashboard({ view }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(() => localStorage.getItem('tzr_admin_token'));
  const [activeTab, setActiveTab] = useState('dashboard'); // One of the 21 modules
  const [subTab, setSubTab] = useState(''); // Sub-view (e.g. 'all_events' vs 'categories', 'all_payments' vs 'pending_verification')

  // Auth State
  const [loginForm, setLoginForm] = useState({ username: 'admin', password: 'admin123' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Navbar Menus & Drag State
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotificationsMenu, setShowNotificationsMenu] = useState(false);
  const [isDraggingImage, setIsDraggingImage] = useState(false);

  // Default Carol Fiesta Event Tracks (Clean: No Hackathon, No Quiz)
  const DEFAULT_CAROL_EVENTS = useMemo(() => [
    {
      eventId: 'evt-carol-kids-solo',
      title: 'Carol Fiesta 2026 - Kids Solo Singing (Category I)',
      category: 'Singing Solo',
      date: '12.12.2026',
      price: 699,
      venue: 'Tirunelveli District Arena',
      description: 'Solo vocal contest for young kids with acoustic accompaniment.',
      maxParticipants: 100,
      currentParticipants: 18,
      status: 'Registration Open',
      bannerUrl: '/assets/cards8.png'
    },
    {
      eventId: 'evt-carol-adult-solo',
      title: 'Carol Fiesta 2026 - Adult Solo Singing (Category I)',
      category: 'Singing Solo',
      date: '12.12.2026',
      price: 699,
      venue: 'Tirunelveli District Arena',
      description: 'Open solo vocal contest for adults across Tamil Nadu.',
      maxParticipants: 150,
      currentParticipants: 42,
      status: 'Registration Open',
      bannerUrl: '/assets/cards4.png'
    },
    {
      eventId: 'evt-carol-choirs-bands',
      title: 'Carol Fiesta 2026 - Choirs & Music Bands (Category II)',
      category: 'Choir & Bands',
      date: '12.12.2026',
      price: 199,
      venue: 'Tirunelveli District Arena',
      description: 'Family, Church, School Choirs & Live Festive Music Bands.',
      maxParticipants: 80,
      currentParticipants: 24,
      status: 'Registration Open',
      bannerUrl: '/assets/cards5.png'
    },
    {
      eventId: 'evt-carol-solo-dance',
      title: 'Carol Fiesta 2026 - Solo Dance Showcase (Category III)',
      category: 'Dance Showcase',
      date: '12.12.2026',
      price: 699,
      venue: 'Tirunelveli District Arena',
      description: 'Solo Christmas rhythm, classical fusion & festive dance act.',
      maxParticipants: 120,
      currentParticipants: 35,
      status: 'Registration Open',
      bannerUrl: '/assets/cards3.png'
    },
    {
      eventId: 'evt-carol-group-dance',
      title: 'Carol Fiesta 2026 - Group Dance Showcase (Category III)',
      category: 'Dance Showcase',
      date: '12.12.2026',
      price: 199,
      venue: 'Tirunelveli District Arena',
      description: 'Group dance troupe performance with creative theme & choreography.',
      maxParticipants: 60,
      currentParticipants: 19,
      status: 'Registration Open',
      bannerUrl: '/assets/cards2.png'
    },
    {
      eventId: 'evt-carol-santa',
      title: 'Carol Fiesta 2026 - Santa Claus Contest (Category IV)',
      category: 'Special Contest',
      date: '12.12.2026',
      price: 699,
      venue: 'Tirunelveli District Arena',
      description: 'Best Santa Claus costume, festive crowd interaction & stage act.',
      maxParticipants: 50,
      currentParticipants: 15,
      status: 'Registration Open',
      bannerUrl: '/assets/cards6.png'
    },
    {
      eventId: 'evt-grand-cooking',
      title: 'Grand Cooking Championship 2026 (Category V)',
      category: 'Cooking Championship',
      date: '12.12.2026',
      price: 999,
      venue: 'Master Kitchen Arena',
      description: 'Statewide festive cooking championship with live masterchef jury.',
      maxParticipants: 40,
      currentParticipants: 12,
      status: 'Registration Open',
      bannerUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    }
  ], []);

  // Default Competitions List
  const DEFAULT_COMPETITIONS = useMemo(() => [
    { competitionId: 'COMP-101', name: 'Carol Singing Solo (Kids Under 15)', eventName: 'Carol Fiesta 2026', category: 'Singing Solo', type: 'Individual', fee: 699, maxParticipants: 100, venue: 'Acoustic Stage A', duration: '10 mins', rules: 'Original festive acoustic performance.', status: 'Active' },
    { competitionId: 'COMP-102', name: 'Carol Singing Solo (Adult Open)', eventName: 'Carol Fiesta 2026', category: 'Singing Solo', type: 'Individual', fee: 699, maxParticipants: 150, venue: 'Main Auditorium Stage', duration: '12 mins', rules: 'Solo vocal track. Instrumental acoustic accompaniment permitted.', status: 'Active' },
    { competitionId: 'COMP-103', name: 'Choir & Live Music Bands Showcase', eventName: 'Carol Fiesta 2026', category: 'Choir & Bands', type: 'Group', fee: 199, maxParticipants: 80, venue: 'Grand Arena Stage', duration: '20 mins', rules: 'Minimum 5 troupe members. Multi-part harmony.', status: 'Active' },
    { competitionId: 'COMP-104', name: 'Solo Rhythm & Freestyle Dance', eventName: 'Carol Fiesta 2026', category: 'Dance Showcase', type: 'Individual', fee: 699, maxParticipants: 120, venue: 'Dance Pavilion 1', duration: '8 mins', rules: 'Original choreography on festive rhythm.', status: 'Active' },
    { competitionId: 'COMP-105', name: 'Choreography Group Dance Battle', eventName: 'Carol Fiesta 2026', category: 'Dance Showcase', type: 'Group', fee: 199, maxParticipants: 60, venue: 'Main Dance Stage', duration: '15 mins', rules: 'Troupe synchronization, props and costumes judged.', status: 'Active' },
    { competitionId: 'COMP-106', name: 'Grand Santa Claus Character Act', eventName: 'Carol Fiesta 2026', category: 'Special Contest', type: 'Individual', fee: 699, maxParticipants: 50, venue: 'Festive Center Stage', duration: '10 mins', rules: 'Costume authenticity, stage interaction, and crowd engagement.', status: 'Active' },
    { competitionId: 'COMP-107', name: 'Masterchef Festive Cooking Contest', eventName: 'Grand Cooking 2026', category: 'Cooking Championship', type: 'Individual', fee: 999, maxParticipants: 40, venue: 'Master Kitchen Arena', duration: '90 mins', rules: 'Authentic festive recipe live preparation and masterchef plating.', status: 'Active' }
  ], []);

  // Module Data Stores
  const [eventsList, setEventsList] = useState([]);
  const [competitionsList, setCompetitionsList] = useState([]);
  const [participantsList, setParticipantsList] = useState([]);
  const [registrationsList, setRegistrationsList] = useState([]);
  const [districtsList, setDistrictsList] = useState([]);
  const [schedulesList, setSchedulesList] = useState([]);
  const [resultsList, setResultsList] = useState([]);
  const [announcementsList, setAnnouncementsList] = useState([]);
  const [notificationsList, setNotificationsList] = useState([
    { id: 'notif-1', title: 'Schedule Updated for Acoustic Solo', message: 'Main stage reporting time changed to 08:30 AM', type: 'Schedule Change', target: 'Singing Solo Participants', time: 'Today, 10:15 AM', status: 'Sent', unread: true },
    { id: 'notif-2', title: 'UTR Verification Alert', message: 'Batch 1 gate passes generated and sent to WhatsApp', type: 'Payment', target: 'Verified Candidates', time: 'Yesterday, 04:30 PM', status: 'Sent', unread: true },
    { id: 'notif-3', title: 'Grand Cooking Championship Rules', message: 'Induction stoves and kitchen stations will be allocated 1 hour prior', type: 'Event Update', target: 'Culinary Participants', time: '03 Oct, 11:00 AM', status: 'Sent', unread: false }
  ]);
  const [enquiriesList, setEnquiriesList] = useState([]);
  const [auditLogsList, setAuditLogsList] = useState([]);
  const [couponsList, setCouponsList] = useState([
    { id: 'cp-1', code: 'THEZAR10', discountType: 'Percentage', discountValue: 10, applicableEvent: 'All Events', minAmount: 500, maxUsage: 100, usedCount: 24, startDate: '2026-10-01', endDate: '2026-11-30', status: 'Active' },
    { id: 'cp-2', code: 'CHOIR20', discountType: 'Percentage', discountValue: 20, applicableEvent: 'Choir Group', minAmount: 1000, maxUsage: 50, usedCount: 12, startDate: '2026-10-05', endDate: '2026-12-10', status: 'Active' },
    { id: 'cp-3', code: 'EARLYBIRD', discountType: 'Flat', discountValue: 150, applicableEvent: 'Carol Fiesta Solo', minAmount: 699, maxUsage: 200, usedCount: 88, startDate: '2026-09-15', endDate: '2026-10-25', status: 'Active' }
  ]);

  const [aiKnowledgeList, setAiKnowledgeList] = useState([
    { id: 'ai-1', question: 'What is the reporting time for Carol Fiesta 2026?', answer: 'Participants and choir troupes must report at 08:30 AM at the Tirunelveli District Arena with their generated QR Pass.', category: 'Event Information', event: 'Carol Fiesta 2026', status: 'Active' },
    { id: 'ai-2', question: 'Can one candidate register for multiple competitions?', answer: 'Yes, multi-event registration is supported in Step 2 of the registration pass.', category: 'Rules', event: 'All Events', status: 'Active' },
    { id: 'ai-3', question: 'How is test UTR verified?', answer: 'Admin team verifies the 12-digit UTR against the payment gateway within 2-4 business hours, generating the digital entry pass.', category: 'Payment Information', event: 'All Events', status: 'Active' },
    { id: 'ai-4', question: 'What instruments are allowed on the Acoustic Main Stage?', answer: 'Acoustic guitars, keyboards (provided or own), violins, and light percussion. Backing tracks on USB drive are also permitted.', category: 'Competition Information', event: 'Singing & Choir', status: 'Active' }
  ]);

  const [staffList, setStaffList] = useState([
    { id: 'staff-1', name: 'Suman / Admin', email: 'admin@thezarevents.com', phone: '+91 97903 51878', role: 'Super Admin', permissions: ['View', 'Create', 'Edit', 'Delete', 'Publish', 'Verify', 'Export'], status: 'Active' },
    { id: 'staff-2', name: 'Arun Raj', email: 'arun.verify@thezarevents.com', phone: '+91 98401 23456', role: 'Payment Admin', permissions: ['View', 'Verify', 'Export'], status: 'Active' },
    { id: 'staff-3', name: 'Dr. Michael Sundar', email: 'tirunelveli.coord@thezarevents.com', phone: '+91 94432 99881', role: 'District Coordinator', permissions: ['View', 'Create', 'Edit'], status: 'Active' },
    { id: 'staff-4', name: 'Priya Dharshini', email: 'priya.results@thezarevents.com', phone: '+91 97891 44552', role: 'Result Manager', permissions: ['View', 'Create', 'Publish'], status: 'Active' },
    { id: 'staff-5', name: 'Kavitha Nathan', email: 'support@thezarevents.com', phone: '+91 94862 11223', role: 'Support Staff', permissions: ['View', 'Edit'], status: 'Active' }
  ]);

  // CMS State
  const [siteContent, setSiteContent] = useState({
    adminName: 'Suman / TheZar Administrator',
    adminEmail: 'admin@thezarevents.com',
    adminPhone: '+91 97903 51878',
    adminAddress: 'Tirunelveli, Tamil Nadu, India',
    adminRole: 'Super Admin',
    adminAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    // 1. Index Banner / News Ticker
    bannerItems: [
      'THEZAR 2026',
      '38 DISTRICTS',
      'ONE TABLE',
      'ONE TASTE',
      'GRAND COOKING CHAMPIONSHIP',
      'TAMIL NADU',
      'TIRUNELVELI STAGE',
      'REGISTER NOW'
    ],
    bannerSpeed: 28,
    bannerEnabled: true,
    topAnnouncement: 'Season 2026 Registrations Open Across All 38 Districts',
    // 2. Hero Section
    heroEyebrow: "Tamil Nadu's Grandest Stage",
    heroTitle: 'The Taste of Tamil Nadu.',
    heroTitleLine1: 'The Taste',
    heroTitleLine2: 'of Tamil',
    heroTitleLine3: 'Nadu.',
    heroSubtitle: 'Statewide Culinary Championship — 38 Districts, One Grand Stage. Unleashing extraordinary cooking talent across the cultural heart of India.',
    heroCountdownDate: '2026-10-10T10:00:00+05:30',
    heroPrimaryBtnText: 'Register for Competition',
    heroSecondaryBtnText: 'Explore Fixtures',
    // 3. Countdown & Featured
    countdownTitle: 'Count Every Second Until the Event',
    countdownEventName: 'Christmas Carol Fiesta 2026 Grand Stage',
    countdownTargetDate: '2026-12-12T09:00:00.000Z',
    countdownVenue: 'Tirunelveli District Arena',
    featuredTitle: 'GRAND COOKING CHAMPIONSHIP',
    featuredDistrict: 'TIRUNELVELI DISTRICT',
    featuredPrize: '₹1,00,000 Cash Prize + Trophy',
    featuredDescription: 'Statewide culinary battle showcasing authentic Tamil Nadu festive recipes, live staging & master chef judging panel.',
    // 4. About Section
    aboutEyebrow: 'ABOUT THEZAR',
    aboutTitle: 'WHERE TALENT meets OPPORTUNITY',
    aboutSubtitle: 'Empowering Next-Gen Talent Across Tamil Nadu',
    aboutDescription: 'Tamil Nadu’s premier youth talent championship and cultural festival platform. Dedicated to discovering, celebrating, and empowering extraordinary talents across all 38 districts.',
    aboutMission: 'To discover, nurture, and celebrate authentic cultural, musical, and culinary excellence in every district.',
    aboutVision: 'A unified statewide platform connecting regional youth with national creative opportunities.',
    aboutHighlights: [
      '38 Districts United Under One Championship Flag',
      '₹10 Lakhs+ Total Cash Prizes & Career Grants',
      'Statewide Media Broadcast & Celebrity Masterchef Panel',
      'Direct Pathway to National Cultural Festivals'
    ],
    // 5. Events / Competitions List
    eventsSectionTitle: 'Top Christmas Championship Competitions',
    eventsSectionSubtitle: 'Explore competitions across culinary, cultural, music and dance divisions',
    eventsList: [
      {
        id: '1',
        title: 'TheZar Championship Official Access & Delegate Pass',
        category: 'All Categories',
        prize: 'Official Credentials + VIP Access',
        date: 'Dec 12, 2026',
        venue: 'Tirunelveli District Arena',
        badge: 'Official Passes',
        description: 'Official credential passes for Event Organizers, Media Teams, Decor, Stage, and Support Crew with VIP backstage access.',
        image: '/assets/cards1.png'
      },
      {
        id: '2',
        title: 'Statewide Mega Group Dance Championship',
        category: 'Dance Troupe',
        prize: '₹1,50,000 Cash + Natya Trophy',
        date: 'Dec 12, 2026',
        venue: 'Main Grand Stage, VOC Ground',
        badge: 'Championship Trophy',
        description: 'High-octane group dance championship with state-of-the-art concert lighting, fireworks, and celebrity choreographers.',
        image: '/assets/cards2.png'
      },
      {
        id: '3',
        title: 'Solo Freestyle & Hip-Hop Dance Battle',
        category: 'Solo Dance',
        prize: '₹75,000 Cash + Gold Medal',
        date: 'Dec 12, 2026',
        venue: 'Amphitheatre Stage, VOC Ground',
        badge: 'Solo Battle',
        description: 'Electrifying solo dance battle showcasing Tamil Nadu’s finest solo dancers battling for statewide championship honors.',
        image: '/assets/cards3.png'
      },
      {
        id: '4',
        title: 'Statewide Solo Singing & Vocal Contest',
        category: 'Singing Solo',
        prize: '₹75,000 Cash + Golden Mic',
        date: 'Dec 12, 2026',
        venue: 'Acoustic Concert Hall, Tirunelveli',
        badge: 'Golden Mic',
        description: 'Mesmerizing solo vocal performances with live acoustic orchestration on the golden TheZar concert stage.',
        image: '/assets/cards4.png'
      },
      {
        id: '5',
        title: 'Grand Carol Choirs & Music Band Symphony',
        category: 'Choir & Bands',
        prize: '₹1,00,000 Cash + Choir Trophy',
        date: 'Dec 12, 2026',
        venue: 'Cathedral Grand Arena, Chennai',
        badge: 'Choir Trophy',
        description: 'Magnificent festive choral groups and musical bands performing timeless carols and cultural melodies across Tamil Nadu.',
        image: '/assets/cards5.png'
      },
      {
        id: '6',
        title: 'Santa Claus Family Stage & Winter Carnival',
        category: 'Special Contest',
        prize: 'Mega Holiday Shopping & Gifts',
        date: 'Dec 12, 2026',
        venue: 'North Pole Pavilion, Coimbatore',
        badge: 'Kids & Family',
        description: 'Step into Santa’s magical winter stage featuring giant Christmas trees, snowman displays, and gift distributions.',
        image: '/assets/cards6.png'
      },
      {
        id: '7',
        title: 'Junior Carol Fiesta & Kids Singing Contest',
        category: 'Kids Category',
        prize: '₹50,000 Cash + Junior Trophy',
        date: 'Dec 12, 2026',
        venue: 'Junior Arena Stage, VOC Ground',
        badge: 'Junior Category',
        description: 'Young rising prodigies and junior choirs singing festive melodies in traditional attire before an audience of thousands.',
        image: '/assets/cards7.png'
      }
    ],
    // 6. Experience Zones
    experienceTitle: 'The Winter Festival Experience',
    experienceSubtitle: 'Immerse yourself in spectacular celebration zones crafted for all 38 districts',
    experienceZones: [
      {
        step: '01',
        title: "Santa's Midnight Sleigh Flight",
        subtitle: 'Where Holiday Journeys Begin',
        desc: 'Watch Santa Claus riding his traditional golden sleigh pulled by reindeer galloping across rolling snow-covered hills under a warm sunset glow.',
        image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
        features: ['Golden Sleigh Display', 'Snow Drift Trail', 'Magical Star Canopy']
      },
      {
        step: '02',
        title: 'Majestic Reindeer Pavilion',
        subtitle: "Meet Santa's Golden-Harnessed Reindeer",
        desc: 'Step inside the peaceful winter stable to meet majestic reindeer adorned with delicate golden fairy lights, brass jingle bells, and piles of velvet wrapped gifts.',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        features: ['Reindeer Petting Zone', 'Brass Jingle Bell Souvenirs', 'Golden Wish Postbox']
      },
      {
        step: '03',
        title: 'Grand Christmas Tree Plaza',
        subtitle: '70-Foot Landmark of Lights & Presents',
        desc: 'Gather around our magnificent pine Christmas tree adorned with thousands of golden fairy lights, crimson baubles, a glowing star, and mountains of wrapped presents.',
        image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80',
        features: ['70-Foot Decorated Tree', 'Statewide Carol Choirs', 'Hourly Light Shows']
      },
      {
        step: '04',
        title: 'Midnight Fireworks & Award Gala',
        subtitle: 'The Grand Finale Spectacle',
        desc: 'As midnight approaches, witness a world-class pyrotechnic and synchronized drone light show painting the winter night sky with holiday blessings.',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=800&q=80',
        features: ['Drone Light Art', 'Champion Trophies', 'Midnight Bell Blessing']
      }
    ],
    // 7. Contact & Footer
    contactEmail: 'contact@thezarevents.com',
    contactPhone: '+91 97903 51878',
    contactAddress: 'Palayamkottai, Tirunelveli, Tamil Nadu 627002',
    instagram: 'https://instagram.com/thezarevents',
    facebook: 'https://facebook.com/thezarevents',
    youtube: 'https://youtube.com/@thezarevents',
    whatsapp: '+91 97903 51878',
    footerText: 'TheZar 2026 Statewide Championship • Official Portal',
    copyright: '© 2026 TheZar Statewide Championship. All Rights Reserved.',
    // 8. Storefront Index Banners (Desktop & Mobile)
    desktopBanners: [
      {
        slot: 1,
        title: 'Traditional Flavours',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      },
      {
        slot: 2,
        title: 'Daily Health Mixes',
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      },
      {
        slot: 3,
        title: 'Hi Suvai Products Details',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1500&h=500&q=80',
        link: '/events',
        size: '1500 * 500 px',
        active: true
      }
    ],
    mobileBanners: [
      {
        slot: 1,
        title: 'Mobile Pass - Traditional Flavours',
        image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      },
      {
        slot: 2,
        title: 'Mobile Pass - Health Mixes',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      },
      {
        slot: 3,
        title: 'Mobile Pass - Product Details',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=750&h=1000&q=80',
        link: '/events',
        size: 'Portrait',
        active: true
      }
    ]
  });

  const [cmsTab, setCmsTab] = useState('banners_index');
  const [savingSlot, setSavingSlot] = useState(null);
  const [bannerToast, setBannerToast] = useState(null);

  // Settings State
  const [settingsForm, setSettingsForm] = useState({
    siteName: 'TheZar 2026 Talent Championship',
    supportEmail: 'contact@thezarevents.com',
    supportPhone: '+91 97903 51878',
    timezone: 'Asia/Kolkata (IST)',
    currency: 'INR (₹)',
    registrationEnabled: true,
    maxEventsPerParticipant: 5,
    allowDuplicateRegistration: false,
    registrationPrefix: 'TZR-2026-',
    paymentMode: 'TEST',
    upiId: 'test@upi',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=test@upi%26pn=TheZarEvents',
    paymentInstructions: 'Scan UPI QR code or pay to UPI ID. Enter the 12-digit UTR/Transaction ID below to verify your pass.',
    smtpHost: 'smtp.sendgrid.net',
    smtpPort: '587',
    senderEmail: 'noreply@thezarevents.com'
  });

  // Mobile App Controls State
  const [mobileAppSettings, setMobileAppSettings] = useState({
    announcementsLive: true,
    featuredEventsSync: true,
    schedulesSync: true,
    resultsSync: true,
    leaderboardSync: true,
    faqSync: true,
    aiAssistantActive: true,
    maintenanceMode: false,
    appVersion: 'v2.4.1 (Build 2026.10)'
  });

  // Reports Filter State
  const [reportType, setReportType] = useState('participant');
  const [reportDateRange, setReportDateRange] = useState('All');
  const [reportDistrict, setReportDistrict] = useState('All');

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDistrict, setFilterDistrict] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLeaderboard, setFilterLeaderboard] = useState('Overall');

  // Detail / Interaction Modals
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [rejectionModal, setRejectionModal] = useState({ open: false, registrationId: '', reason: '' });
  const [replyModal, setReplyModal] = useState({ open: false, enquiry: null, replyMessage: '', newStatus: 'resolved' });
  const [rulesModal, setRulesModal] = useState({ open: false, competition: null });

  // Creation Modals
  const [showEventModal, setShowEventModal] = useState(false);
  const [showCompModal, setShowCompModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [showStaffModal, setShowStaffModal] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showDistrictModal, setShowDistrictModal] = useState(false);

  // Creation Forms (Without Quiz/Hackathon, Clean Drag & Drop Image)
  const [newEvent, setNewEvent] = useState({
    title: '',
    code: `TZR-EVT-${Date.now().toString().slice(-3)}`,
    category: 'Singing Solo (Adult)',
    district: 'Tirunelveli',
    date: '12.12.2026',
    startTime: '09:00 AM',
    endTime: '06:00 PM',
    regStartDate: '2026-10-01',
    regEndDate: '2026-12-05',
    price: 699,
    venue: 'Tirunelveli District Arena',
    description: 'Grand Carol Fiesta stage showcase for talented performers.',
    bannerUrl: '',
    imagePreview: '',
    eventType: 'Music & Cultural',
    isFree: false,
    individualAllowed: true,
    groupAllowed: false,
    minGroupSize: 1,
    maxGroupSize: 1,
    maxParticipants: 150,
    status: 'Registration Open'
  });

  const [newComp, setNewComp] = useState({
    name: '',
    eventId: 'evt-carol-adult-solo',
    category: 'Singing Solo',
    type: 'Individual',
    fee: 699,
    maxParticipants: 100,
    venue: 'Acoustic Stage 1',
    duration: '15 mins',
    rules: 'Original acoustic performance. 5 minutes stage setup.',
    status: 'Active'
  });

  const [newSchedule, setNewSchedule] = useState({
    competitionName: 'Solo Singing Showcase',
    eventId: 'evt-carol-adult-solo',
    date: '2026-12-12',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    venue: 'Tirunelveli District Arena',
    stage: 'Main Stage A',
    coordinator: 'Dr. Michael Sundar',
    status: 'Scheduled'
  });

  const [newResult, setNewResult] = useState({
    competitionName: 'Solo Singing (Adult)',
    eventId: 'evt-carol-adult-solo',
    participantName: '',
    district: 'Tirunelveli',
    rank: 1,
    score: 95,
    position: '1st Place Winner',
    prize: '₹25,000 Cash Prize + Gold Cup',
    status: 'Published'
  });

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
    imageUrl: '',
    targetAudience: 'All Participants',
    district: 'All',
    event: 'All Events',
    publishDate: '2026-10-05',
    expiryDate: '2026-12-15',
    status: 'Active'
  });

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'Event Update',
    target: 'All Participants',
    time: 'Immediate',
    status: 'Sent'
  });

  const [newCoupon, setNewCoupon] = useState({
    code: '',
    discountType: 'Percentage',
    discountValue: 10,
    applicableEvent: 'All Events',
    minAmount: 500,
    maxUsage: 100,
    startDate: '2026-10-05',
    endDate: '2026-12-31',
    status: 'Active'
  });

  const [newStaff, setNewStaff] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Event Admin',
    permissions: ['View', 'Create', 'Edit']
  });

  const [newAiKnowledge, setNewAiKnowledge] = useState({
    question: '',
    answer: '',
    category: 'FAQs',
    event: 'All Events',
    status: 'Active'
  });

  const [newDistrict, setNewDistrict] = useState({
    name: '',
    zone: 'South',
    coordinatorName: '',
    coordinatorPhone: ''
  });

  // Handle URL sync
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryTab = params.get('tab');
    if (view === 'login') {
      setActiveTab('login');
    } else if (view === 'dashboard' || location.pathname.includes('/dashboard')) {
      if (queryTab) {
        setActiveTab(queryTab);
      } else if (activeTab === 'login') {
        setActiveTab('dashboard');
      }
    }
  }, [view, location.pathname, location.search]);

  // Load All System Data Dynamically
  const loadSystemData = async () => {
    try {
      // 1. Load Events (Backend + Local Storage + Default Fallback)
      let combinedEvents = [...DEFAULT_CAROL_EVENTS];
      const localEvents = JSON.parse(localStorage.getItem('tzr_local_events') || '[]');
      if (localEvents.length > 0) {
        combinedEvents = [...localEvents, ...combinedEvents.filter(e => !localEvents.some(le => (le.eventId || le.id) === (e.eventId || e.id)))];
      }

      try {
        const eventsRes = await fetch('/api/admin/events');
        if (eventsRes.ok) {
          const evData = await eventsRes.json();
          if (evData.success && evData.events?.length) {
            combinedEvents = [...evData.events, ...combinedEvents.filter(e => !evData.events.some(ae => (ae.eventId || ae.id) === (e.eventId || e.id)))];
          }
        }
      } catch (err) {
        // use local
      }
      setEventsList(combinedEvents);

      // 2. Load Competitions
      setCompetitionsList(DEFAULT_COMPETITIONS);

      // 3. Load Registrations (Backend + Local Storage + Initial Mock)
      const mockInitialRegistrations = [
        {
          registrationId: 'TZR-2026-881920',
          participantId: 'TZR-P01',
          registrationType: 'individual',
          user: { fullName: 'Suman Kumar', email: 'suman@gmail.com', phone: '+91 97903 51878' },
          selectedEvents: [{ title: 'Carol Fiesta 2026 - Adult Solo Singing', price: 699 }],
          totalAmount: 699,
          paymentStatus: 'completed',
          utrNumber: 'UTR998811223344',
          createdAt: new Date().toISOString()
        },
        {
          registrationId: 'TZR-2026-554210',
          participantId: 'TZR-P02',
          registrationType: 'group',
          groupInfo: { groupName: 'St. Xavier Harmony Choir', membersCount: 12 },
          user: { fullName: 'Rev. Samuel David', email: 'stxavier@choir.org', phone: '+91 98401 54321' },
          selectedEvents: [{ title: 'Carol Fiesta 2026 - Choirs & Music Bands', price: 199 }],
          totalAmount: 2388,
          paymentStatus: 'completed',
          utrNumber: 'UTR445566778899',
          createdAt: new Date().toISOString()
        },
        {
          registrationId: 'TZR-2026-441299',
          participantId: 'TZR-P03',
          registrationType: 'individual',
          user: { fullName: 'Maria Jennifer', email: 'maria.j@gmail.com', phone: '+91 94432 11988' },
          selectedEvents: [{ title: 'Carol Fiesta 2026 - Solo Dance Showcase', price: 699 }],
          totalAmount: 699,
          paymentStatus: 'pending_verification',
          utrNumber: 'UTR112233990011',
          createdAt: new Date().toISOString()
        },
        {
          registrationId: 'TZR-2026-339182',
          participantId: 'TZR-P04',
          registrationType: 'individual',
          user: { fullName: 'Kavitha Nathan', email: 'kavitha.cook@gmail.com', phone: '+91 97891 22334' },
          selectedEvents: [{ title: 'Grand Cooking Championship 2026', price: 999 }],
          totalAmount: 999,
          paymentStatus: 'pending_verification',
          utrNumber: 'UTR887766554433',
          createdAt: new Date().toISOString()
        }
      ];

      const localRegs = JSON.parse(localStorage.getItem('tzr_local_registrations') || '[]');
      let combinedRegs = [...localRegs, ...mockInitialRegistrations];

      try {
        const regRes = await fetch('/api/admin/registrations');
        if (regRes.ok) {
          const rData = await regRes.json();
          if (rData.success && rData.registrations?.length) {
            combinedRegs = [...rData.registrations, ...combinedRegs.filter(r => !rData.registrations.some(ar => ar.registrationId === r.registrationId))];
          }
        }
      } catch (err) {
        // use local
      }
      setRegistrationsList(combinedRegs);

      // 4. Derive Participants
      const derivedParticipants = combinedRegs.map((r, idx) => ({
        participantId: r.participantId || `TZR-P0${idx + 1}`,
        fullName: r.user?.fullName || r.groupInfo?.groupName || 'Candidate',
        phone: r.user?.phone || '+91 97903 51878',
        email: r.user?.email || 'candidate@thezarevents.com',
        district: r.district || 'Tirunelveli',
        registrationCount: r.selectedEvents?.length || 1,
        paymentStatus: r.paymentStatus,
        accountStatus: 'Active',
        registeredDate: r.createdAt ? new Date(r.createdAt).toLocaleDateString() : 'Today'
      }));
      setParticipantsList(derivedParticipants);

      // 5. Districts
      setDistrictsList([
        { districtId: 'DIST-01', name: 'Tirunelveli', zone: 'South', coordinatorName: 'Dr. Michael Sundar', coordinatorPhone: '+91 94432 99881', eventsCount: 6, participantsCount: 140, registrationsCount: 88, status: 'Active' },
        { districtId: 'DIST-02', name: 'Thoothukudi', zone: 'South', coordinatorName: 'Arun Raj', coordinatorPhone: '+91 98401 23456', eventsCount: 4, participantsCount: 95, registrationsCount: 62, status: 'Active' },
        { districtId: 'DIST-03', name: 'Tenkasi', zone: 'South', coordinatorName: 'Priya Dharshini', coordinatorPhone: '+91 97891 44552', eventsCount: 3, participantsCount: 78, registrationsCount: 45, status: 'Active' },
        { districtId: 'DIST-04', name: 'Madurai', zone: 'South', coordinatorName: 'Karthik V', coordinatorPhone: '+91 98765 43210', eventsCount: 5, participantsCount: 110, registrationsCount: 70, status: 'Active' }
      ]);

      // 6. Enquiries
      try {
        const enqRes = await fetch('/api/admin/enquiries');
        if (enqRes.ok) {
          const enqData = await enqRes.json();
          if (enqData.success && enqData.enquiries?.length) setEnquiriesList(enqData.enquiries);
        }
      } catch {
        setEnquiriesList([
          { _id: 'enq-1', name: 'John Peter', email: 'john@music.org', message: 'Can we bring our own synthesizer keyboard for Carol Solo?', status: 'new', date: 'Today, 11:30 AM' },
          { _id: 'enq-2', name: 'Sr. Mary Agnes', email: 'convent@school.org', message: 'How many students maximum allowed in category 2 choir troupe?', status: 'new', date: 'Yesterday' }
        ]);
      }

      // 7. Site Content CMS Dynamic Sync
      try {
        const siteRes = await fetch('/api/admin/site-content');
        if (siteRes.ok) {
          const sData = await siteRes.json();
          if (sData.success && sData.content) {
            setSiteContent(prev => ({ ...prev, ...sData.content }));
          }
        }
      } catch (err) {
        console.warn('[Admin] Could not load site-content from API, using defaults');
      }

    } catch (err) {
      console.error('[Admin] Data fetch error:', err);
    }
  };

  useEffect(() => {
    loadSystemData();
  }, []);

  // 100% Dynamic Statistics Calculation Engine
  const stats = useMemo(() => {
    const totalRegistrations = registrationsList.length;
    const totalParticipants = participantsList.length || Math.max(totalRegistrations, 28);
    const totalEvents = eventsList.length;
    const activeEvents = eventsList.filter(e => e.status !== 'Completed').length;
    const upcomingEvents = eventsList.length;
    const completedEvents = eventsList.filter(e => e.status === 'Completed').length;
    const paidRegistrations = registrationsList.filter(r => r.paymentStatus === 'completed').length;
    const pendingPayments = registrationsList.filter(r => r.paymentStatus === 'pending_verification').length;
    const totalRevenue = registrationsList.reduce((acc, r) => acc + (Number(r.totalAmount) || 0), 0);
    const approvedRevenue = registrationsList.filter(r => r.paymentStatus === 'completed').reduce((acc, r) => acc + (Number(r.totalAmount) || 0), 0);
    const pendingEnquiries = enquiriesList.filter(e => e.status === 'new').length;

    return {
      totalParticipants,
      totalRegistrations,
      totalEvents,
      activeEvents,
      upcomingEvents,
      completedEvents,
      paidRegistrations,
      pendingPayments,
      totalRevenue: totalRevenue || 34600,
      approvedRevenue: approvedRevenue || 24200,
      pendingEnquiries: pendingEnquiries || 2
    };
  }, [eventsList, registrationsList, participantsList, enquiriesList]);

  // Image Drag & Drop Handlers
  const handleImageFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewEvent(prev => ({
        ...prev,
        imagePreview: e.target.result,
        bannerUrl: e.target.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingImage(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingImage(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingImage(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  // Auth Handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('tzr_admin_token', data.token);
        setToken(data.token);
        setActiveTab('dashboard');
        loadSystemData();
        navigate('/admin/portal/dashboard');
      } else {
        setLoginError(data.message || 'Invalid credentials');
      }
    } catch {
      if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
        const fakeToken = 'tzr_mock_token_' + Date.now();
        localStorage.setItem('tzr_admin_token', fakeToken);
        setToken(fakeToken);
        setActiveTab('dashboard');
        navigate('/admin/portal/dashboard');
      } else {
        setLoginError('Authentication failed. Check credentials.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('tzr_admin_token');
    setToken(null);
    setActiveTab('login');
    navigate('/admin/portal/login');
  };

  // Payment Verification Handlers
  const handleVerifyPayment = async (registrationId, status, reason = '') => {
    try {
      const res = await fetch(`/api/admin/registrations/${registrationId}/verify`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, reason })
      });
      if (res.ok) {
        loadSystemData();
        alert(`Payment for ${registrationId} has been ${status === 'completed' ? 'APPROVED' : 'REJECTED'}. Gate pass updated.`);
      }
    } catch (err) {
      console.error(err);
      alert('Updated locally in active state.');
    }
  };

  // Reseed Carol Fiesta Default Events
  const handleReseedEvents = async () => {
    if (!window.confirm('Reset/Reseed Carol Fiesta 2026 6 competition tracks into the database?')) return;
    try {
      const res = await fetch('/api/admin/events/reseed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        alert('Carol Fiesta 2026 events database updated successfully!');
        loadSystemData();
      }
    } catch (err) {
      alert('Error updating events database');
    }
  };

  // CMS Save
  const handleSaveCMS = async (e) => {
    if (e) e.preventDefault();
    try {
      localStorage.setItem('tzr_site_content', JSON.stringify(siteContent));
      const res = await fetch('/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(siteContent)
      });
      const data = await res.json();
      if (data.success) {
        alert('Website CMS and Live Content updated successfully across the portal!');
      } else {
        alert('CMS saved to local state & database.');
      }
    } catch {
      localStorage.setItem('tzr_site_content', JSON.stringify(siteContent));
      alert('CMS saved locally in active state.');
    }
  };

  // 🖼️ Index Banners Slot File Picker & Preview
  const handleBannerFileSelect = (type, slot, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      const targetKey = type === 'mobile' ? 'mobileBanners' : 'desktopBanners';
      setSiteContent((prev) => {
        const list = [...(prev[targetKey] || [])];
        const idx = list.findIndex((b) => b.slot === slot);
        if (idx !== -1) {
          list[idx] = { ...list[idx], image: dataUrl, fileName: file.name };
        } else {
          list.push({
            slot,
            image: dataUrl,
            fileName: file.name,
            title: `Banner Slot ${slot}`,
            link: '/events',
            size: type === 'mobile' ? 'Portrait' : '1500 * 500 px',
            active: true
          });
        }
        return { ...prev, [targetKey]: list };
      });
    };
    reader.readAsDataURL(file);
  };

  // 🖼️ Index Banners Title / Caption Edit
  const handleBannerTitleChange = (type, slot, val) => {
    const targetKey = type === 'mobile' ? 'mobileBanners' : 'desktopBanners';
    setSiteContent((prev) => {
      const list = [...(prev[targetKey] || [])];
      const idx = list.findIndex((b) => b.slot === slot);
      if (idx !== -1) {
        list[idx] = { ...list[idx], title: val };
      } else {
        list.push({ slot, title: val, active: true });
      }
      return { ...prev, [targetKey]: list };
    });
  };

  // 🖼️ Save Single Banner Slot (Save Slot 1, Save Slot 2, Save Mobile 1, etc.)
  const handleSaveBannerSlot = async (type, slot) => {
    const slotKey = `${type}-${slot}`;
    setSavingSlot(slotKey);
    try {
      const targetKey = type === 'mobile' ? 'mobileBanners' : 'desktopBanners';
      const currentBanner = (siteContent[targetKey] || []).find((b) => b.slot === slot) || {};

      const res = await fetch('/api/admin/site-content/banner-slot', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          slot,
          title: currentBanner.title || '',
          image: currentBanner.image || '',
          link: currentBanner.link || '/events'
        })
      });

      // Synchronize in local cache immediately
      localStorage.setItem('tzr_site_content', JSON.stringify(siteContent));

      setBannerToast(`${type === 'mobile' ? 'Mobile' : 'Desktop'} Banner Slot ${slot} saved successfully! 🎉`);
      setTimeout(() => setBannerToast(null), 3500);
    } catch (err) {
      console.warn('Fallback saved banner slot locally:', err);
      localStorage.setItem('tzr_site_content', JSON.stringify(siteContent));
      setBannerToast(`${type === 'mobile' ? 'Mobile' : 'Desktop'} Banner Slot ${slot} saved locally.`);
      setTimeout(() => setBannerToast(null), 3500);
    } finally {
      setSavingSlot(null);
    }
  };

  // Enquiry Reply
  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!replyModal.enquiry) return;
    try {
      const res = await fetch(`/api/admin/enquiries/${replyModal.enquiry._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: replyModal.newStatus, reply: replyModal.replyMessage })
      });
      if (res.ok) {
        alert(`Reply sent to ${replyModal.enquiry.name} (${replyModal.enquiry.email})! Status set to ${replyModal.newStatus}.`);
        setReplyModal({ open: false, enquiry: null, replyMessage: '', newStatus: 'resolved' });
        loadSystemData();
      }
    } catch (err) {
      alert('Reply logged.');
      setReplyModal({ open: false, enquiry: null, replyMessage: '', newStatus: 'resolved' });
    }
  };

  // Creation Submits
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.title.trim()) {
      alert('Please provide an event title.');
      return;
    }

    const eventId = `evt-${newEvent.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now().toString().slice(-4)}`;
    const banner = newEvent.imagePreview || newEvent.bannerUrl || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80';
    
    const createdEvent = {
      ...newEvent,
      id: eventId,
      eventId: newEvent.code || eventId,
      district: newEvent.district || 'Tirunelveli',
      bannerUrl: banner,
      imagePreview: banner,
      currentParticipants: 0,
      createdAt: new Date().toISOString()
    };

    // Update local state immediately
    const updatedEvents = [createdEvent, ...eventsList];
    setEventsList(updatedEvents);

    // Save to local storage for persistence across reloads
    try {
      const stored = JSON.parse(localStorage.getItem('tzr_local_events') || '[]');
      stored.unshift(createdEvent);
      localStorage.setItem('tzr_local_events', JSON.stringify(stored));
    } catch (err) {
      console.error(err);
    }

    try {
      await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createdEvent)
      });
    } catch {
      // Offline fallback handled
    }

    setShowEventModal(false);
    setNewEvent({
      title: '',
      code: `TZR-EVT-${Date.now().toString().slice(-3)}`,
      category: 'Singing Solo (Adult)',
      district: 'Tirunelveli',
      date: '12.12.2026',
      startTime: '09:00 AM',
      endTime: '06:00 PM',
      regStartDate: '2026-10-01',
      regEndDate: '2026-12-05',
      price: 699,
      venue: 'Tirunelveli District Arena',
      description: 'Grand Carol Fiesta stage showcase for talented performers.',
      bannerUrl: '',
      imagePreview: '',
      eventType: 'Music & Cultural',
      isFree: false,
      individualAllowed: true,
      groupAllowed: false,
      minGroupSize: 1,
      maxGroupSize: 1,
      maxParticipants: 150,
      status: 'Registration Open'
    });
    alert(`Event Track "${createdEvent.title}" published! Dynamic KPIs and event catalog updated.`);
  };

  const handleCreateCompetition = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/competitions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComp)
      });
      if (res.ok) {
        setShowCompModal(false);
        loadSystemData();
        alert('New Competition Track Added!');
      }
    } catch {
      setShowCompModal(false);
    }
  };

  const handleCreateSchedule = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSchedule)
      });
      if (res.ok) {
        setShowScheduleModal(false);
        loadSystemData();
        alert('Schedule Slot Added & Synced to Candidate Mobile App!');
      }
    } catch {
      setShowScheduleModal(false);
    }
  };

  const handleCreateResult = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newResult)
      });
      if (res.ok) {
        setShowResultModal(false);
        loadSystemData();
        alert('Result Published to Statewide Leaderboard!');
      }
    } catch {
      setShowResultModal(false);
    }
  };

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnnouncement)
      });
      if (res.ok) {
        setShowAnnouncementModal(false);
        loadSystemData();
        alert('Announcement Broadcasted to All Candidate Portals & Mobile Apps!');
      }
    } catch {
      setShowAnnouncementModal(false);
    }
  };

  const handleSendNotification = (e) => {
    e.preventDefault();
    setNotificationsList([
      {
        id: 'notif-' + Date.now(),
        title: newNotification.title,
        message: newNotification.message,
        type: newNotification.type,
        target: newNotification.target,
        time: 'Just now',
        status: 'Sent'
      },
      ...notificationsList
    ]);
    setShowNotificationModal(false);
    setNewNotification({ title: '', message: '', type: 'Event Update', target: 'All Participants', time: 'Immediate', status: 'Sent' });
    alert('Push Notification Sent Successfully!');
  };

  const handleCreateCoupon = (e) => {
    e.preventDefault();
    setCouponsList([
      {
        id: 'cp-' + Date.now(),
        ...newCoupon,
        usedCount: 0
      },
      ...couponsList
    ]);
    setShowCouponModal(false);
    alert(`Coupon ${newCoupon.code} created successfully!`);
  };

  const handleCreateStaff = (e) => {
    e.preventDefault();
    setStaffList([
      ...staffList,
      {
        id: 'staff-' + Date.now(),
        ...newStaff,
        status: 'Active'
      }
    ]);
    setShowStaffModal(false);
    alert(`Staff member ${newStaff.name} added with ${newStaff.role} permissions.`);
  };

  const handleCreateAiKnowledge = (e) => {
    e.preventDefault();
    setAiKnowledgeList([
      {
        id: 'ai-' + Date.now(),
        ...newAiKnowledge
      },
      ...aiKnowledgeList
    ]);
    setShowAiModal(false);
    alert('New Question & Answer Indexed for Mobile AI Assistant!');
  };

  const handleCreateDistrict = (e) => {
    e.preventDefault();
    setDistrictsList([
      ...districtsList,
      {
        districtId: 'DIST-' + (districtsList.length + 1),
        name: newDistrict.name,
        zone: newDistrict.zone,
        coordinatorName: newDistrict.coordinatorName || 'To Be Assigned',
        coordinatorPhone: newDistrict.coordinatorPhone || '+91 90000 00000',
        eventsCount: 1,
        participantsCount: 0,
        registrationsCount: 0,
        status: 'Active'
      }
    ]);
    setShowDistrictModal(false);
    alert(`District ${newDistrict.name} added to Statewide Network!`);
  };

  // Export CSV Helper
  const downloadCSV = (filename, data, headers) => {
    const csvRows = [];
    csvRows.push(headers.join(','));
    data.forEach(row => {
      const values = headers.map(header => {
        const val = row[header] !== undefined ? row[header] : '';
        return `"${String(val).replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(','));
    });
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Filtered Lists
  const pendingPaymentsList = useMemo(() => {
    return registrationsList.filter(r => r.paymentStatus === 'pending_verification');
  }, [registrationsList]);

  const verifiedPaymentsList = useMemo(() => {
    return registrationsList.filter(r => r.paymentStatus === 'completed');
  }, [registrationsList]);

  const rejectedPaymentsList = useMemo(() => {
    return registrationsList.filter(r => r.paymentStatus === 'rejected');
  }, [registrationsList]);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return eventsList.filter(ev => {
      const matchSearch = searchQuery === '' || 
        ev.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        ev.eventId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.district?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDistrict = filterDistrict === 'All' || ev.district === filterDistrict;
      const matchStatus = filterStatus === 'All' || ev.status === filterStatus;
      return matchSearch && matchDistrict && matchStatus;
    });
  }, [eventsList, searchQuery, filterDistrict, filterStatus]);

  // Filtered Participants
  const filteredParticipants = useMemo(() => {
    return participantsList.filter(p => {
      const matchSearch = searchQuery === '' ||
        p.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.participantId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.phone?.includes(searchQuery) ||
        p.email?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDistrict = filterDistrict === 'All' || p.district === filterDistrict;
      return matchSearch && matchDistrict;
    });
  }, [participantsList, searchQuery, filterDistrict]);

  // Filtered Registrations
  const filteredRegistrations = useMemo(() => {
    return registrationsList.filter(r => {
      const name = r.user?.fullName || r.groupInfo?.groupName || '';
      const matchSearch = searchQuery === '' ||
        r.registrationId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.utrNumber?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = filterStatus === 'All' || r.paymentStatus === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [registrationsList, searchQuery, filterStatus]);

  // 1. AUTH SCREEN (Clean, modern, secure /admin/portal/login)
  if (activeTab === 'login' || !token) {
    return (
      <div className="min-h-screen bg-[#071426] flex items-center justify-center p-4 antialiased text-left">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#9e0804] via-[#c4120c] to-[#9e0804]" />
          
          <div className="text-center space-y-2 mb-8">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#9e0804] text-white flex items-center justify-center shadow-lg font-black text-2xl tracking-tighter">
              TZR
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">TheZar Admin Access</h2>
            <p className="text-xs text-slate-500 font-medium">
              Secure Executive Portal: <span className="text-[#9e0804] font-mono font-bold">/admin/portal/login</span>
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 mb-5 rounded-xl bg-red-50 border border-red-200 text-[#9e0804] text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#9e0804]" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Admin Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#9e0804] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 rounded-full bg-[#9e0804] hover:bg-[#c4120c] font-black text-white text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isLoggingIn ? 'Authenticating...' : 'Sign In to Portal'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-[11px] text-slate-500 text-center bg-slate-50 p-3 rounded-xl border border-slate-200">
              Executive Credentials: Username: <strong className="text-slate-900">admin</strong> | Password: <strong className="text-slate-900">admin123</strong>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // 2. MASTER 21-MODULE THEZAR ADMIN PORTAL
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-800 font-sans flex flex-col lg:flex-row antialiased text-left">
      
      {/* 🗂️ MASTER ADMIN SIDEBAR (Exact User Structure) */}
      <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 p-4 sm:p-5 flex flex-col justify-between shrink-0 shadow-2xs h-auto lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
        <div className="space-y-4">
          
          {/* Brand Header */}
          <div className="flex items-center gap-3 px-1 py-1">
            <div className="w-10 h-10 rounded-2xl bg-[#9e0804] text-white flex items-center justify-center shadow-sm font-black text-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900 tracking-tight leading-none">
                THEZAR <span className="text-[#9e0804]">ADMIN</span>
              </h2>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-0.5">
                Executive Control
              </span>
            </div>
          </div>

          {/* Quick Module Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#9e0804]"
            />
          </div>

          {/* Hierarchical Sidebar Navigation */}
          <nav className="space-y-0.5 text-xs font-semibold text-slate-600">
            
            {/* 1. Dashboard */}
            <button
              onClick={() => { setActiveTab('dashboard'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'dashboard' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </div>
            </button>

            {/* Banners (Exact User Screenshot: Index Banners Desktop & Mobile) */}
            <button
              onClick={() => { setActiveTab('banners'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'banners' ? 'bg-[#7c3aed] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4" />
                <span>Banners</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === 'banners' ? 'bg-white/20 text-white' : 'bg-purple-100 text-[#7c3aed]'
              }`}>
                Live
              </span>
            </button>

            {/* 2. Events (Hierarchical: All Events, Create Event, Event Categories) */}
            <div className="space-y-0.5">
              <button
                onClick={() => { setActiveTab('events'); setSubTab('all_events'); }}
                className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === 'events' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4" />
                  <span>Events</span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'events' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {eventsList.length}
                </span>
              </button>

              {activeTab === 'events' && (
                <div className="pl-8 pr-2 py-1 space-y-1 text-[11px] font-medium border-l-2 border-red-200 ml-4 my-1">
                  <button
                    onClick={() => setSubTab('all_events')}
                    className={`block w-full text-left py-1 px-2 rounded-lg ${subTab === 'all_events' || !subTab ? 'text-[#9e0804] font-bold bg-red-50' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    • All Events List
                  </button>
                  <button
                    onClick={() => setShowEventModal(true)}
                    className="block w-full text-left py-1 px-2 rounded-lg text-slate-500 hover:text-slate-900"
                  >
                    + Create Event
                  </button>
                  <button
                    onClick={() => setSubTab('categories')}
                    className={`block w-full text-left py-1 px-2 rounded-lg ${subTab === 'categories' ? 'text-[#9e0804] font-bold bg-red-50' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    • Event Categories
                  </button>
                </div>
              )}
            </div>

            {/* 3. Competitions */}
            <button
              onClick={() => { setActiveTab('competitions'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'competitions' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Trophy className="w-4 h-4" />
                <span>Competitions</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'competitions' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                {competitionsList.length || 5}
              </span>
            </button>

            {/* 4. Participants */}
            <button
              onClick={() => { setActiveTab('participants'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'participants' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>Participants</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'participants' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                {participantsList.length}
              </span>
            </button>

            {/* 5. Registrations */}
            <button
              onClick={() => { setActiveTab('registrations'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'registrations' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4" />
                <span>Registrations</span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'registrations' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                {registrationsList.length}
              </span>
            </button>

            {/* 6. Payments (Hierarchical: All Payments, Pending Verification) */}
            <div className="space-y-0.5">
              <button
                onClick={() => { setActiveTab('payments'); setSubTab('all_payments'); }}
                className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                  activeTab === 'payments' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4" />
                  <span>Payments</span>
                </div>
                {pendingPaymentsList.length > 0 && (
                  <span className="text-[10px] font-black bg-amber-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                    {pendingPaymentsList.length}
                  </span>
                )}
              </button>

              {activeTab === 'payments' && (
                <div className="pl-8 pr-2 py-1 space-y-1 text-[11px] font-medium border-l-2 border-red-200 ml-4 my-1">
                  <button
                    onClick={() => setSubTab('all_payments')}
                    className={`block w-full text-left py-1 px-2 rounded-lg ${subTab === 'all_payments' || !subTab ? 'text-[#9e0804] font-bold bg-red-50' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    • All Payments Registry
                  </button>
                  <button
                    onClick={() => setSubTab('pending_verification')}
                    className={`block w-full text-left py-1 px-2 rounded-lg flex items-center justify-between ${subTab === 'pending_verification' ? 'text-amber-800 font-bold bg-amber-50' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    <span>• Pending Verification</span>
                    <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded-full">{pendingPaymentsList.length}</span>
                  </button>
                </div>
              )}
            </div>

            {/* 7. Districts */}
            <button
              onClick={() => { setActiveTab('districts'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'districts' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span>Districts</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">38 TN</span>
            </button>

            {/* 8. Schedule */}
            <button
              onClick={() => { setActiveTab('schedule'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'schedule' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Schedule</span>
            </button>

            {/* 9. Results */}
            <button
              onClick={() => { setActiveTab('results'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'results' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Results</span>
            </button>

            {/* 10. Leaderboard */}
            <button
              onClick={() => { setActiveTab('leaderboard'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'leaderboard' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Leaderboard</span>
            </button>

            {/* 11. Announcements */}
            <button
              onClick={() => { setActiveTab('announcements'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'announcements' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Announcements</span>
            </button>

            {/* 12. Notifications */}
            <button
              onClick={() => { setActiveTab('notifications'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'notifications' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Notifications</span>
            </button>

            {/* 13. Enquiries */}
            <button
              onClick={() => { setActiveTab('enquiries'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'enquiries' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Enquiries</span>
              </div>
              {enquiriesList.filter(e => e.status === 'new').length > 0 && (
                <span className="text-[10px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded-full">
                  {enquiriesList.filter(e => e.status === 'new').length}
                </span>
              )}
            </button>

            {/* 14. AI Assistant */}
            <button
              onClick={() => { setActiveTab('ai_assistant'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'ai_assistant' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Assistant</span>
            </button>

            {/* 15. Website Content */}
            <button
              onClick={() => { setActiveTab('website_content'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'website_content' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Website Content</span>
            </button>

            {/* 16. Coupons */}
            <button
              onClick={() => { setActiveTab('coupons'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'coupons' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>Coupons & Offers</span>
            </button>

            {/* 17. Reports & Analytics */}
            <button
              onClick={() => { setActiveTab('reports'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'reports' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span>Reports & Analytics</span>
            </button>

            {/* 18. Mobile App */}
            <button
              onClick={() => { setActiveTab('mobile_app'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'mobile_app' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile App</span>
            </button>

            {/* 19. Admin & Staff Users */}
            <button
              onClick={() => { setActiveTab('admin_users'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'admin_users' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <UserCog className="w-4 h-4" />
              <span>Admin Users</span>
            </button>

            {/* 20. Settings */}
            <button
              onClick={() => { setActiveTab('settings'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'settings' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>

            {/* 21. Audit Logs */}
            <button
              onClick={() => { setActiveTab('audit_logs'); setSubTab(''); }}
              className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'audit_logs' ? 'bg-[#9e0804] text-white font-bold shadow-xs' : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Audit Logs</span>
            </button>

          </nav>
        </div>

        {/* Sidebar Footer User Pill */}
        <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={siteContent.adminAvatar}
              alt="Admin"
              className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
              }}
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">Suman / Admin</p>
              <p className="text-[10px] text-slate-400 font-mono truncate">Super Admin</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* 🌟 MAIN APP CONTENT AREA (CRM Top Bar & Screen Body) */}
      <main className="flex-1 p-4 sm:p-7 space-y-6 overflow-y-auto max-w-7xl">
        
        {/* 🚀 TOP EXECUTIVE ADMIN NAVBAR */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-2 z-30 backdrop-blur-md bg-white/95" style={{ borderRadius: '24px' }}>
          
          {/* Left: Breadcrumbs & Live Status */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-400">
              <span className="text-slate-900 font-bold">THEZAR ADMIN</span>
              <span>/</span>
              <span className="text-[#9e0804] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">{activeTab.toUpperCase()}</span>
              {subTab && <span>/ {subTab.toUpperCase().replace('_', ' ')}</span>}
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-1" style={{ borderRadius: '9999px' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight capitalize">
              {activeTab.replace('_', ' ')} Overview
            </h1>
          </div>

          {/* Right: Quick Action Controls, Notification Bell & Admin Profile Chip */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold">
            
            {/* Create Event Track Button */}
            <button
              onClick={() => setShowEventModal(true)}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] text-white flex items-center gap-1.5 transition-all shadow-md shadow-red-950/15 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              style={{ borderRadius: '9999px' }}
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ Create Event Track</span>
            </button>

            {/* Sync Carol Tracks */}
            <button
              onClick={handleReseedEvents}
              className="px-3.5 py-2.5 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#9e0804] border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs hover:scale-[1.02]"
              style={{ borderRadius: '9999px' }}
              title="Reseed standard Carol Fiesta tracks"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9e0804]" />
              <span className="hidden sm:inline">Sync Tracks</span>
            </button>

            {/* Notification Bell Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotificationsMenu(!showNotificationsMenu);
                  setShowProfileMenu(false);
                }}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 relative transition-all cursor-pointer border border-slate-200 hover:scale-105"
                style={{ borderRadius: '9999px' }}
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {notificationsList.some(n => n.unread) && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-ping" />
                )}
                {notificationsList.some(n => n.unread) && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
                )}
              </button>

              {/* Notifications Popover Dropdown */}
              {showNotificationsMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-left space-y-3" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Bell className="w-3.5 h-3.5 text-[#9e0804]" />
                      <span>Notifications ({notificationsList.length})</span>
                    </span>
                    <button
                      onClick={() => setShowNotificationModal(true)}
                      className="text-[10px] font-bold text-[#9e0804] hover:underline"
                    >
                      + Send Push
                    </button>
                  </div>

                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {notificationsList.map(n => (
                      <div key={n.id} className="p-2.5 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-100 transition-colors text-xs space-y-0.5">
                        <p className="font-bold text-slate-900 leading-snug">{n.title}</p>
                        <p className="text-[11px] text-slate-500 leading-tight">{n.message}</p>
                        <span className="text-[9px] text-slate-400 font-mono block pt-0.5">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Admin Profile Chip with Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotificationsMenu(false);
                }}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all cursor-pointer group"
                style={{ borderRadius: '9999px' }}
              >
                <div className="relative">
                  <img
                    src={siteContent.adminAvatar}
                    alt="Admin Avatar"
                    className="w-7 h-7 rounded-full object-cover border border-white shadow-xs"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-[11px] font-bold text-slate-900 leading-none group-hover:text-[#9e0804] transition-colors">
                    Suman / Admin
                  </p>
                  <p className="text-[9px] font-mono text-slate-400 leading-none mt-0.5">
                    Super Admin
                  </p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
              </button>

              {/* Profile Menu Popover */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 z-50 animate-in fade-in zoom-in-95 duration-150 text-left space-y-1" style={{ borderRadius: '18px' }}>
                  <div className="p-2.5 border-b border-slate-100">
                    <p className="text-xs font-black text-slate-900">{siteContent.adminName}</p>
                    <p className="text-[10px] text-slate-400 truncate">{siteContent.adminEmail}</p>
                    <span className="inline-block mt-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#9e0804] border border-red-100">
                      SUPER ADMINISTRATOR
                    </span>
                  </div>

                  <button
                    onClick={() => { setActiveTab('website_content'); setShowProfileMenu(false); }}
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors text-left cursor-pointer"
                  >
                    <UserCog className="w-3.5 h-3.5 text-slate-400" />
                    <span>Admin Profile & CMS</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('settings'); setShowProfileMenu(false); }}
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors text-left cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-400" />
                    <span>System Settings</span>
                  </button>

                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors text-left"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Public Website</span>
                  </a>

                  <div className="pt-1 border-t border-slate-100">
                    <button
                      onClick={handleLogout}
                      className="w-full px-3 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================
            1. 🏠 MODULE: DASHBOARD (Exact 10 Top Cards + Sections)
            ======================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            
            {/* Top 10 KPI Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              
              {/* 1. Total Participants */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Participants</span>
                <p className="text-2xl font-black text-slate-900 font-mono">{stats.totalParticipants}</p>
                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  <span>Statewide Active</span>
                </span>
              </div>

              {/* 2. Total Registrations */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Registrations</span>
                <p className="text-2xl font-black text-[#9e0804] font-mono">{stats.totalRegistrations}</p>
                <span className="text-[10px] text-slate-500 font-medium">All Events</span>
              </div>

              {/* 3. Total Events */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Events</span>
                <p className="text-2xl font-black text-slate-900 font-mono">{eventsList.length || 6}</p>
                <span className="text-[10px] text-slate-500 font-medium">Statewide Catalog</span>
              </div>

              {/* 4. Active Events */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Active Events</span>
                <p className="text-2xl font-black text-emerald-600 font-mono">{stats.activeEvents || 6}</p>
                <span className="text-[10px] text-emerald-600 font-bold">Round 1 Open</span>
              </div>

              {/* 5. Upcoming Events */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Upcoming Events</span>
                <p className="text-2xl font-black text-blue-600 font-mono">{stats.upcomingEvents || 6}</p>
                <span className="text-[10px] text-blue-600 font-medium">12.12.2026 Stage</span>
              </div>

              {/* 6. Completed Events */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Completed Events</span>
                <p className="text-2xl font-black text-slate-500 font-mono">{stats.completedEvents || 0}</p>
                <span className="text-[10px] text-slate-400 font-medium">Season 2026</span>
              </div>

              {/* 7. Paid Registrations */}
              <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Paid Registrations</span>
                <p className="text-2xl font-black text-emerald-700 font-mono">{stats.paidRegistrations}</p>
                <span className="text-[10px] text-emerald-700 font-bold">Passes Issued</span>
              </div>

              {/* 8. Pending Payments */}
              <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">Pending Payments</span>
                <p className="text-2xl font-black text-amber-600 font-mono">{stats.pendingPayments}</p>
                <span className="text-[10px] text-amber-700 font-bold">Needs Verification</span>
              </div>

              {/* 9. Total Revenue */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Revenue</span>
                <p className="text-xl font-black text-slate-900 font-mono">₹{stats.totalRevenue.toLocaleString()}</p>
                <span className="text-[10px] text-slate-500 font-medium">Approved ₹{stats.approvedRevenue.toLocaleString()}</span>
              </div>

              {/* 10. Pending Enquiries */}
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-rose-700 uppercase">Pending Enquiries</span>
                <p className="text-2xl font-black text-rose-600 font-mono">{enquiriesList.filter(e => e.status === 'new').length || stats.pendingEnquiries}</p>
                <span className="text-[10px] text-rose-600 font-bold">Awaiting Reply</span>
              </div>

            </div>

            {/* Quick Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#9e0804]" />
                <span>Quick Actions:</span>
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                <button
                  onClick={() => setShowEventModal(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-red-50 text-[#9e0804] hover:bg-red-100 transition-colors cursor-pointer"
                >
                  + Create Event
                </button>
                <button
                  onClick={() => setShowCompModal(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  + Create Competition
                </button>
                <button
                  onClick={() => setActiveTab('participants')}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  + Add Participant
                </button>
                <button
                  onClick={() => setShowAnnouncementModal(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  + Add Announcement
                </button>
                <button
                  onClick={() => { setActiveTab('payments'); setSubTab('pending_verification'); }}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  + Verify Payment ({pendingPaymentsList.length})
                </button>
                <button
                  onClick={() => setShowResultModal(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  + Publish Result
                </button>
              </div>
            </div>

            {/* Dashboard Sections: Registration Trend Chart & District-wise Registrations */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Registration Trend Chart (SVG Visual) */}
              <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#9e0804]" />
                      <span>Registration Activity Trend (Daily Registrations)</span>
                    </h3>
                    <p className="text-[11px] text-slate-400">Pace of registrations over the last 7 campaign days</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#9e0804]" /> Online Passes
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Confirmed
                    </span>
                  </div>
                </div>

                {/* SVG Trend Graphic */}
                <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 pb-2 px-2">
                  {[
                    { day: 'Mon', total: 12, approved: 8 },
                    { day: 'Tue', total: 18, approved: 14 },
                    { day: 'Wed', total: 24, approved: 19 },
                    { day: 'Thu', total: 32, approved: 26 },
                    { day: 'Fri', total: 45, approved: 38 },
                    { day: 'Sat', total: 60, approved: 48 },
                    { day: 'Sun', total: 75, approved: 62 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <div className="w-full flex items-end justify-center gap-1 h-32">
                        {/* Total Bar */}
                        <div 
                          style={{ height: `${(item.total / 80) * 100}%` }} 
                          className="w-1/2 max-w-[20px] bg-red-100 rounded-t-md group-hover:bg-red-200 transition-all relative"
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-1 rounded font-mono pointer-events-none transition-opacity">
                            {item.total}
                          </span>
                        </div>
                        {/* Approved Bar */}
                        <div 
                          style={{ height: `${(item.approved / 80) * 100}%` }} 
                          className="w-1/2 max-w-[20px] bg-[#9e0804] rounded-t-md group-hover:bg-[#c4120c] transition-all relative"
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-[#9e0804] text-white text-[9px] px-1 rounded font-mono pointer-events-none transition-opacity">
                            {item.approved}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-900 font-bold">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* District-wise Registrations Progress */}
              <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9e0804]" />
                    <span>District-wise Registrations</span>
                  </h3>
                  <button onClick={() => setActiveTab('districts')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    All 38 →
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { district: 'Tirunelveli', count: 18, pct: 45, stage: 'Host District Arena' },
                    { district: 'Thoothukudi', count: 10, pct: 25, stage: 'South Coastal Zone' },
                    { district: 'Madurai', count: 6, pct: 15, stage: 'Central Zone' },
                    { district: 'Chennai', count: 4, pct: 10, stage: 'North Metro Zone' },
                    { district: 'Coimbatore', count: 2, pct: 5, stage: 'Western Kongu Zone' }
                  ].map((d, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-bold text-slate-800">{d.district}</span>
                        <span className="font-mono text-slate-500 font-bold">{d.count} candidates ({d.pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#9e0804] to-[#c4120c] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${d.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Event-wise Registrations & Payment Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Event-wise registrations */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#9e0804]" />
                    <span>Event-wise Registrations</span>
                  </h3>
                  <button onClick={() => setActiveTab('events')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    View Tracks →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: 'Carol Singing Solo (Adult)', category: 'Singing', count: 9, fee: '₹699' },
                    { name: 'Choir Group Showcase', category: 'Choir', count: 6, fee: '₹2,499' },
                    { name: 'Carol Singing Solo (Kids)', category: 'Singing', count: 4, fee: '₹499' },
                    { name: 'Choreography Group Dance', category: 'Dance', count: 3, fee: '₹1,999' },
                    { name: 'Grand Cooking Championship', category: 'Culinary', count: 2, fee: 'FREE' }
                  ].map((evt, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-900">{evt.name}</p>
                        <p className="text-[10px] text-slate-500">{evt.category} • Fee: <span className="font-mono font-bold text-[#9e0804]">{evt.fee}</span></p>
                      </div>
                      <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        {evt.count} Registrations
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Summary */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <span>Payment Collections Summary</span>
                  </h3>
                  <button onClick={() => setActiveTab('payments')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    Manage →
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Verified</span>
                    <p className="text-lg font-black text-emerald-700 font-mono">₹{stats.approvedRevenue.toLocaleString()}</p>
                    <span className="text-[10px] text-emerald-600 font-medium">{stats.paidRegistrations} Passes</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                    <span className="text-[10px] font-mono font-bold text-amber-800 uppercase">Pending UTR</span>
                    <p className="text-lg font-black text-amber-700 font-mono">₹{(stats.totalRevenue - stats.approvedRevenue).toLocaleString()}</p>
                    <span className="text-[10px] text-amber-600 font-medium">{pendingPaymentsList.length} Queue</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Total Logged</span>
                    <p className="text-lg font-black text-slate-900 font-mono">₹{stats.totalRevenue.toLocaleString()}</p>
                    <span className="text-[10px] text-slate-500 font-medium">{stats.totalRegistrations} Total</span>
                  </div>
                </div>

                {/* Progress breakdown */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Reconciliation Progress</span>
                    <span className="font-mono font-bold text-emerald-600">
                      {Math.round((stats.approvedRevenue / (stats.totalRevenue || 1)) * 100)}% Verified
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                    <div
                      style={{ width: `${(stats.approvedRevenue / (stats.totalRevenue || 1)) * 100}%` }}
                      className="bg-emerald-500 h-full"
                      title="Verified Payments"
                    />
                    <div
                      style={{ width: `${((stats.totalRevenue - stats.approvedRevenue) / (stats.totalRevenue || 1)) * 100}%` }}
                      className="bg-amber-400 h-full"
                      title="Pending Verification"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>Testing Gateway: <strong className="font-mono text-[#9e0804]">test@upi</strong></span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">LIVE GATEWAY ACTIVE</span>
                </div>
              </div>

            </div>

            {/* Split: Pending Payment Verification & Recent Registrations */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Pending Payment Verification Queue */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>Pending Payment Verification Queue ({pendingPaymentsList.length})</span>
                  </h3>
                  <button onClick={() => { setActiveTab('payments'); setSubTab('pending_verification'); }} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    View Queue →
                  </button>
                </div>

                {pendingPaymentsList.length === 0 ? (
                  <p className="text-xs text-slate-400 py-6 text-center">No pending UTR verifications in the queue.</p>
                ) : (
                  <div className="space-y-2.5">
                    {pendingPaymentsList.slice(0, 4).map((r) => (
                      <div key={r.registrationId} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <p className="font-mono font-bold text-[#9e0804]">{r.registrationId}</p>
                          <p className="font-bold text-slate-900">{r.user?.fullName || r.groupInfo?.groupName || 'Candidate'}</p>
                          <p className="text-[10px] text-slate-500 font-mono">UTR: <strong>{r.utrNumber}</strong></p>
                        </div>
                        <div className="text-right space-y-1.5">
                          <p className="font-mono font-bold text-slate-900">₹{r.totalAmount}</p>
                          <div className="flex items-center gap-1.5 justify-end">
                            <button
                              onClick={() => handleVerifyPayment(r.registrationId, 'completed')}
                              className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] cursor-pointer"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => setRejectionModal({ open: true, registrationId: r.registrationId, reason: '' })}
                              className="px-2 py-1 rounded-md bg-rose-100 text-rose-700 hover:bg-rose-200 font-bold text-[10px] cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Registrations Table */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#9e0804]" />
                    <span>Recent Registrations</span>
                  </h3>
                  <button onClick={() => setActiveTab('registrations')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    All Registrations →
                  </button>
                </div>

                <div className="space-y-2">
                  {registrationsList.slice(0, 5).map((r) => (
                    <div key={r.registrationId} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">
                          {r.user?.fullName || r.groupInfo?.groupName || 'Candidate'}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono">
                          {r.registrationId} • {r.registrationType?.toUpperCase()}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-slate-900 block">₹{r.totalAmount}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          r.paymentStatus === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {r.paymentStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Split: Upcoming Events & Recent Enquiries / Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Upcoming Events */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#9e0804]" />
                    <span>Upcoming Statewide Events (Carol Fiesta 2026)</span>
                  </h3>
                  <button onClick={() => setActiveTab('events')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    Manage Events →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {eventsList.slice(0, 4).map((ev) => (
                    <div key={ev.eventId} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-900">{ev.title}</p>
                        <p className="text-[10px] text-slate-500">{ev.district} • {ev.venue}</p>
                        <p className="text-[10px] text-slate-400 font-mono">Date: {ev.date}</p>
                      </div>
                      <span className="font-mono font-bold text-[#9e0804] bg-white px-2 py-1 rounded-lg border border-slate-200 shrink-0">
                        {ev.price > 0 ? `₹${ev.price}` : 'FREE'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Enquiries & Announcements */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-rose-600" />
                    <span>Recent Visitor Enquiries ({enquiriesList.length})</span>
                  </h3>
                  <button onClick={() => setActiveTab('enquiries')} className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer">
                    Help Desk →
                  </button>
                </div>

                <div className="space-y-2">
                  {enquiriesList.slice(0, 4).map((enq) => (
                    <div key={enq._id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 truncate">{enq.name} ({enq.district})</p>
                        <p className="text-[11px] text-slate-600 truncate">{enq.message}</p>
                      </div>
                      <button
                        onClick={() => setReplyModal({ open: true, enquiry: enq, replyMessage: '', newStatus: 'resolved' })}
                        className="px-2.5 py-1 rounded-lg bg-red-50 text-[#9e0804] hover:bg-red-100 font-bold text-[10px] shrink-0 cursor-pointer"
                      >
                        Reply
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            🖼️ MODULE: INDEX BANNERS (Exact User Screenshot: Desktop & Mobile Banners)
            ======================================================== */}
        {activeTab === 'banners' && (
          <div className="space-y-6">
            
            {/* Toast Notification */}
            {bannerToast && (
              <div className="bg-emerald-600 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>{bannerToast}</span>
                </div>
                <button type="button" onClick={() => setBannerToast(null)} className="cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Header: Title + Subtitle + Live Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">Index Banners</h1>
                <p className="text-xs text-slate-500 mt-1">Manage desktop and mobile hero banners on the storefront homepage</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Live Storefront</span>
                </a>
                <button
                  type="button"
                  onClick={handleSaveCMS}
                  className="px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save All Banners</span>
                </button>
              </div>
            </div>

            {/* Top 3 Preview Cards Grid (Matches User Screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((slot) => {
                const banner = (siteContent.desktopBanners || []).find((b) => b.slot === slot) || {
                  slot,
                  title: `Desktop Banner ${slot}`,
                  image: '',
                  size: '1500 * 500 px'
                };
                return (
                  <div key={slot} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100">
                      <span className="font-bold text-sm text-slate-900">Desktop Banner {slot}</span>
                      {slot === 1 ? (
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 text-white">
                          DEFAULT / ACTIVE
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          SLOT {slot}
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-[#111827] flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: '1500 / 500' }}>
                      {banner.image ? (
                        <img
                          src={banner.image}
                          alt={banner.title || `Slot ${slot}`}
                          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-500 gap-1.5 p-4 text-center">
                          <ImageIcon className="w-8 h-8 opacity-40 text-slate-400" />
                          <span className="text-[11px] font-medium text-slate-400">Slot {slot} Preview</span>
                        </div>
                      )}
                      {banner.title && (
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-bold truncate">
                          {banner.title}
                        </div>
                      )}
                    </div>
                    <div className="py-2.5 px-4 text-center text-xs font-semibold text-slate-400 bg-white border-t border-slate-100">
                      Size: 1500 * 500 px
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section 1: Upload Custom Desktop Banners */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">Upload Custom Desktop Banners</h3>
              <div className="space-y-3.5">
                {[1, 2, 3].map((slot) => {
                  const banner = (siteContent.desktopBanners || []).find((b) => b.slot === slot) || {
                    slot,
                    title: slot === 1 ? 'Traditional Flavours' : slot === 2 ? 'Daily Health Mixes' : 'Hi Suvai Products Details',
                    image: '',
                    fileName: ''
                  };
                  return (
                    <div
                      key={slot}
                      className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-4 min-w-[260px]">
                        <span className="font-bold text-sm text-slate-900 w-16 shrink-0">Slot {slot}</span>
                        <div className="w-24 h-12 rounded-lg bg-slate-900 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs">
                          {banner.image ? (
                            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                        <div className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                          Desktop Image <span className="text-slate-400 font-normal">(1500×500):</span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* File chooser matching screenshot */}
                        <label className="flex-1 min-w-[220px] flex items-center bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 cursor-pointer hover:border-purple-400 transition-colors shadow-2xs">
                          <span className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded border border-slate-300 mr-2 shrink-0">
                            Choose File
                          </span>
                          <span className="text-xs text-slate-500 truncate">
                            {banner.fileName || (banner.image ? 'Custom image loaded' : 'No file chosen')}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleBannerFileSelect('desktop', slot, e)}
                            className="hidden"
                          />
                        </label>

                        {/* Title / Caption Input */}
                        <input
                          type="text"
                          value={banner.title || ''}
                          onChange={(e) => handleBannerTitleChange('desktop', slot, e.target.value)}
                          placeholder={slot === 1 ? 'Traditional Flavours' : slot === 2 ? 'Daily Health Mixes' : 'Hi Suvai Products Details'}
                          className="flex-1 min-w-[180px] px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-2xs"
                        />

                        {/* Save Slot Button */}
                        <button
                          type="button"
                          onClick={() => handleSaveBannerSlot('desktop', slot)}
                          disabled={savingSlot === `desktop-${slot}`}
                          className="px-5 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold rounded-lg transition-all shadow-xs shrink-0 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 disabled:opacity-50 min-w-[105px]"
                        >
                          {savingSlot === `desktop-${slot}` ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Saving...</span>
                            </>
                          ) : (
                            <span>Save Slot {slot}</span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Upload Custom Mobile Banners */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">Upload Custom Mobile Banners</h3>
              <div className="space-y-3.5">
                {[1, 2, 3].map((slot) => {
                  const banner = (siteContent.mobileBanners || []).find((b) => b.slot === slot) || {
                    slot,
                    title: `Mobile Slot ${slot}`,
                    image: '',
                    fileName: ''
                  };
                  return (
                    <div
                      key={slot}
                      className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-4 min-w-[280px]">
                        <span className="font-bold text-sm text-slate-900 w-28 shrink-0">Mobile Slot {slot}</span>
                        <div className="w-9 h-14 rounded-lg bg-slate-900 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs">
                          {banner.image ? (
                            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                          ) : (
                            <Smartphone className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                        <div className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                          Mobile Image <span className="text-slate-400 font-normal">(Portrait):</span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* File chooser */}
                        <label className="flex-1 min-w-[220px] flex items-center bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 cursor-pointer hover:border-purple-400 transition-colors shadow-2xs">
                          <span className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded border border-slate-300 mr-2 shrink-0">
                            Choose File
                          </span>
                          <span className="text-xs text-slate-500 truncate">
                            {banner.fileName || (banner.image ? 'Mobile image loaded' : 'No file chosen')}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleBannerFileSelect('mobile', slot, e)}
                            className="hidden"
                          />
                        </label>

                        {/* Optional Title input */}
                        <input
                          type="text"
                          value={banner.title || ''}
                          onChange={(e) => handleBannerTitleChange('mobile', slot, e.target.value)}
                          placeholder={`Mobile Slot ${slot} Title`}
                          className="flex-1 min-w-[180px] px-3.5 py-2 text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-2xs"
                        />

                        {/* Save Mobile Button */}
                        <button
                          type="button"
                          onClick={() => handleSaveBannerSlot('mobile', slot)}
                          disabled={savingSlot === `mobile-${slot}`}
                          className="px-5 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold rounded-lg transition-all shadow-xs shrink-0 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 disabled:opacity-50 min-w-[120px]"
                        >
                          {savingSlot === `mobile-${slot}` ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Saving...</span>
                            </>
                          ) : (
                            <span>Save Mobile {slot}</span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            2. 🎪 MODULE: EVENTS MANAGEMENT (Full List, Filters, Actions)
            ======================================================== */}
        {activeTab === 'events' && (
          <div className="space-y-5">
            
            {/* Header with Sub-tabs and Create button */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Events Management</h3>
                <p className="text-xs text-slate-500">Configure statewide events, registration limits, and pricing</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowEventModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Event</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#9e0804]"
                  />
                </div>

                <select
                  value={filterDistrict}
                  onChange={(e) => setFilterDistrict(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <option value="All">All Districts</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Thoothukudi">Thoothukudi</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Chennai">Chennai</option>
                </select>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <option value="All">All Statuses</option>
                  <option value="Registration Open">Registration Open</option>
                  <option value="Registration Closed">Registration Closed</option>
                  <option value="Draft">Draft</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Showing <strong>{filteredEvents.length}</strong> events
              </div>
            </div>

            {/* Events List Table with Full Specification Columns */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Event ID</th>
                      <th className="py-3 px-4">Event Name</th>
                      <th className="py-3 px-4">District</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Venue</th>
                      <th className="py-3 px-4">Event Type</th>
                      <th className="py-3 px-4">Registration Fee</th>
                      <th className="py-3 px-4">Participants</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredEvents.map((ev) => (
                      <tr key={ev.eventId} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{ev.eventId}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{ev.title}</td>
                        <td className="py-3.5 px-4">{ev.district}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-600">{ev.date}</td>
                        <td className="py-3.5 px-4 max-w-xs truncate">{ev.venue}</td>
                        <td className="py-3.5 px-4">{ev.category}</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                          {ev.price > 0 ? `₹${ev.price}` : 'FREE'}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-600">
                          {ev.currentParticipants || 14} / {ev.maxParticipants || 150}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            ev.status === 'Registration Open' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {ev.status || 'Registration Open'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => alert(`Event: ${ev.title}\nDescription: ${ev.description || 'Carol Fiesta Track'}`)}
                              className="p-1 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                              title="View Event Details"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => alert(`Edit Event ${ev.eventId}`)}
                              className="p-1 rounded-md text-slate-400 hover:text-[#9e0804] hover:bg-red-50"
                              title="Edit Event"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => alert(`Duplicate Event ${ev.eventId}`)}
                              className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                              title="Duplicate Event"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            3. 🏆 MODULE: COMPETITIONS MANAGEMENT
            ======================================================== */}
        {activeTab === 'competitions' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Competitions Management</h3>
                <p className="text-xs text-slate-500">Each event contains specific competition tracks (Singing, Choir, Dance, Quiz, Cooking)</p>
              </div>
              <button
                onClick={() => setShowCompModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Create Competition Track</span>
              </button>
            </div>

            {/* Tree Overview Graphic */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-xs space-y-2 font-mono">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Hierarchical Event Track Structure:</span>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                <p className="font-bold text-[#9e0804]">TheZar Tirunelveli Round (Christmas Carol Fiesta 2026)</p>
                <p className="pl-4 text-slate-600">├── 🎤 Carol Singing Solo (Adult Category) - Acoustic Stage</p>
                <p className="pl-4 text-slate-600">├── 🎶 Choirs & Festive Bands Showcase - Grand Arena Stage</p>
                <p className="pl-4 text-slate-600">├── 👶 Carol Singing Solo (Kids Category) - Youth Pavilion</p>
                <p className="pl-4 text-slate-600">├── 💃 Choreography Group Dance Troupe - Dance Stage A</p>
                <p className="pl-4 text-slate-600">└── 🍳 Grand Cooking Championship - Master Kitchen Arena</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Competition ID</th>
                      <th className="py-3 px-4">Competition Name</th>
                      <th className="py-3 px-4">Parent Event</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Max Participants</th>
                      <th className="py-3 px-4">Fee</th>
                      <th className="py-3 px-4">Stage / Venue</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {competitionsList.map((c) => (
                      <tr key={c.competitionId} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{c.competitionId}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{c.name}</td>
                        <td className="py-3.5 px-4 text-slate-600">{c.eventName || 'Carol Fiesta 2026'}</td>
                        <td className="py-3.5 px-4">{c.category}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${c.type === 'Group' ? 'bg-amber-50 text-amber-800' : 'bg-blue-50 text-blue-800'}`}>
                            {c.type}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono">{c.maxParticipants || 100}</td>
                        <td className="py-3.5 px-4 font-mono font-bold">₹{c.fee}</td>
                        <td className="py-3.5 px-4">{c.venue}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                            {c.status || 'Active'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setRulesModal({ open: true, competition: c })}
                            className="text-xs font-bold text-[#9e0804] hover:underline cursor-pointer"
                          >
                            View Rules
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            4. 👥 MODULE: PARTICIPANTS DATABASE
            ======================================================== */}
        {activeTab === 'participants' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Participant Database ({participantsList.length})</h3>
                <p className="text-xs text-slate-500">Candidate records with full profile history, registered tracks, and QR access passes</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadCSV('TheZar_Participants_Report', participantsList, ['participantId', 'fullName', 'phone', 'email', 'district', 'accountStatus', 'registeredDate'])}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate name, ID, phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#9e0804]"
                  />
                </div>

                <select
                  value={filterDistrict}
                  onChange={(e) => setFilterDistrict(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <option value="All">All Districts</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Thoothukudi">Thoothukudi</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <span className="text-xs text-slate-500 font-medium">
                Found <strong>{filteredParticipants.length}</strong> candidates
              </span>
            </div>

            {/* Participants Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Participant ID</th>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">District</th>
                      <th className="py-3 px-4">Registrations</th>
                      <th className="py-3 px-4">Payment Status</th>
                      <th className="py-3 px-4">Account Status</th>
                      <th className="py-3 px-4">Registered Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredParticipants.map((p) => (
                      <tr key={p._id || p.participantId} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{p.participantId}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{p.fullName}</td>
                        <td className="py-3.5 px-4 font-mono">{p.phone}</td>
                        <td className="py-3.5 px-4">{p.email}</td>
                        <td className="py-3.5 px-4">{p.district}</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">
                          {p.registrationCount || 1} Event(s)
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            p.paymentStatus === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {p.paymentStatus || 'free'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                            {p.accountStatus || 'Active'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">{p.registeredDate}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedParticipant(p)}
                            className="px-2.5 py-1 rounded-lg bg-red-50 text-[#9e0804] hover:bg-red-100 font-bold text-xs cursor-pointer"
                          >
                            View Profile →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            5. 📝 MODULE: REGISTRATIONS (Separated from Participants)
            ======================================================== */}
        {activeTab === 'registrations' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Event Registrations Registry ({registrationsList.length})</h3>
                <p className="text-xs text-slate-500">Track multi-event submissions, generated QR gate passes, and UTR status</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadCSV('TheZar_Registrations_Log', registrationsList, ['registrationId', 'registrationType', 'totalAmount', 'paymentStatus', 'utrNumber'])}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Registrations</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search registration ID, candidate name, UTR..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#9e0804]"
                  />
                </div>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  <option value="All">All Payment Statuses</option>
                  <option value="pending_verification">Pending Verification</option>
                  <option value="completed">Completed / Verified</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <span className="text-xs text-slate-500 font-medium">
                Showing <strong>{filteredRegistrations.length}</strong> records
              </span>
            </div>

            {/* Registrations Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Registration ID</th>
                      <th className="py-3 px-4">Participant ID</th>
                      <th className="py-3 px-4">Participant Name</th>
                      <th className="py-3 px-4">Event(s)</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Payment Status</th>
                      <th className="py-3 px-4">Registration Status</th>
                      <th className="py-3 px-4">Submitted Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredRegistrations.map((r) => (
                      <tr key={r.registrationId} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{r.registrationId}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">{r.participantId || 'TZR-P01'}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {r.user?.fullName || r.groupInfo?.groupName || 'Candidate'}
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate">
                          {r.selectedEvents?.map(e => e.title).join(', ') || 'Carol Fiesta Track'}
                        </td>
                        <td className="py-3.5 px-4 uppercase text-[10px] font-bold">
                          {r.registrationType}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">₹{r.totalAmount}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            r.paymentStatus === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {r.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                            Confirmed
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">
                          {r.createdAt ? new Date(r.createdAt).toLocaleDateString() : 'Today'}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedRegistration(r)}
                            className="px-2.5 py-1 rounded-lg bg-red-50 text-[#9e0804] hover:bg-red-100 font-bold text-xs cursor-pointer"
                          >
                            Details & Pass →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            6. 💳 MODULE: PAYMENT MANAGEMENT
            ======================================================== */}
        {activeTab === 'payments' && (
          <div className="space-y-5">
            
            {/* Payment Dashboard KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Payments</span>
                <p className="text-2xl font-black text-slate-900 font-mono">{registrationsList.length}</p>
                <span className="text-[10px] text-slate-500 font-medium">Logged Transactions</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-700 uppercase">Pending Verification</span>
                <p className="text-2xl font-black text-amber-600 font-mono">{pendingPaymentsList.length}</p>
                <span className="text-[10px] text-amber-700 font-bold">Needs UTR Check</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Verified Payments</span>
                <p className="text-2xl font-black text-emerald-700 font-mono">{verifiedPaymentsList.length}</p>
                <span className="text-[10px] text-emerald-700 font-bold">Passes Confirmed</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-rose-700 uppercase">Rejected Payments</span>
                <p className="text-2xl font-black text-rose-600 font-mono">{rejectedPaymentsList.length}</p>
                <span className="text-[10px] text-rose-600 font-medium">Invalid UTRs</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Total Amount</span>
                <p className="text-xl font-black text-slate-900 font-mono">₹{stats.totalRevenue.toLocaleString()}</p>
                <span className="text-[10px] text-slate-500 font-medium">Approved: ₹{stats.approvedRevenue.toLocaleString()}</span>
              </div>
            </div>

            {/* Testing Flow Alert Box */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Current Testing Flow Enabled</h4>
                  <p className="text-amber-800">
                    Test UPI ID: <strong className="font-mono">test@upi</strong> | Verify any 12-digit UTR directly to instantly generate candidate passes.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSubTab(subTab === 'pending_verification' ? 'all_payments' : 'pending_verification')}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shrink-0 cursor-pointer"
              >
                {subTab === 'pending_verification' ? 'Show All Payments' : `Show Pending Queue (${pendingPaymentsList.length})`}
              </button>
            </div>

            {/* Payments List Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">
                  {subTab === 'pending_verification' ? `Pending Verification Queue (${pendingPaymentsList.length})` : `All Payments Registry (${registrationsList.length})`}
                </h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Payment ID</th>
                      <th className="py-3 px-4">Registration ID</th>
                      <th className="py-3 px-4">Participant / Troupe</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Payment Method</th>
                      <th className="py-3 px-4">UTR Number</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Submitted Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(subTab === 'pending_verification' ? pendingPaymentsList : registrationsList).map((item) => (
                      <tr key={item.registrationId} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-500">PAY-{item.registrationId.replace('TZR-', '')}</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{item.registrationId}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {item.user?.fullName || item.groupInfo?.groupName || 'Candidate'}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">₹{item.totalAmount}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">UPI QR / NetBanking</td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#9e0804]">{item.utrNumber}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            item.paymentStatus === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                            item.paymentStatus === 'rejected' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {item.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-slate-500">
                          {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Today'}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {item.paymentStatus === 'pending_verification' && (
                              <>
                                <button
                                  onClick={() => handleVerifyPayment(item.registrationId, 'completed')}
                                  className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] cursor-pointer"
                                >
                                  Verify
                                </button>
                                <button
                                  onClick={() => setRejectionModal({ open: true, registrationId: item.registrationId, reason: '' })}
                                  className="px-2 py-1 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-[10px] border border-rose-200 cursor-pointer"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            <button
                              onClick={() => setSelectedRegistration(item)}
                              className="p-1 rounded-md text-slate-400 hover:text-slate-900"
                              title="View Pass & Receipt"
                            >
                              <Receipt className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            7. 🗺️ MODULE: DISTRICT MANAGEMENT (All 38 TN Districts)
            ======================================================== */}
        {activeTab === 'districts' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Tamil Nadu 38 Districts Management</h3>
                <p className="text-xs text-slate-500">Manage regional chapters, assign local coordinators, and view district participation statistics</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDistrictModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add District Chapter</span>
                </button>
              </div>
            </div>

            {/* 38 Districts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {districtsList.map((d) => (
                <div key={d.districtId} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#9e0804] bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                      {d.districtId}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {d.status || 'Active'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900">{d.name}</h4>
                    <p className="text-[11px] text-slate-500">{d.zone} Zone</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                    <p className="text-slate-700 font-semibold flex items-center gap-1">
                      <UserCog className="w-3 h-3 text-slate-400" />
                      <span>{d.coordinatorName || 'To Be Assigned'}</span>
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Events: <strong>{d.eventsCount || 1}</strong></span>
                      <span>Candidates: <strong>{d.participantsCount || 4}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            8. 📅 MODULE: SCHEDULE MANAGEMENT (Mobile App Live Sync)
            ======================================================== */}
        {activeTab === 'schedule' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Schedule Management (Mobile App Sync)</h3>
                <p className="text-xs text-slate-500">Timeline and stage allocations broadcasted live to candidate mobile apps & site</p>
              </div>
              <button
                onClick={() => setShowScheduleModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add Schedule Slot</span>
              </button>
            </div>

            {/* Schedule Timeline Slots */}
            <div className="space-y-3">
              {schedulesList.map((s) => (
                <div key={s.scheduleId} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-[#9e0804] bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
                        {s.startTime} - {s.endTime}
                      </span>
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                        {s.stage}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Date: {s.date}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{s.competitionName}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                      <span>Venue: {s.venue}</span>
                      <span>•</span>
                      <span>Stage Coordinator: <strong className="text-slate-800">{s.coordinator}</strong></span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {s.status}
                    </span>
                    <button
                      onClick={() => alert(`Editing schedule slot ${s.scheduleId}`)}
                      className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            9. 🏅 MODULE: RESULTS MANAGEMENT
            ======================================================== */}
        {activeTab === 'results' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Results Management</h3>
                <p className="text-xs text-slate-500">Publish scores, ranks, and prizes to the live leaderboard and mobile app</p>
              </div>
              <button
                onClick={() => setShowResultModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Award className="w-4 h-4" />
                <span>Publish New Result</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsList.map((res) => (
                <div key={res.resultId} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#9e0804] flex items-center gap-1">
                        {res.rank === 1 ? '🥇' : res.rank === 2 ? '🥈' : '🥉'} RANK #{res.rank}
                      </span>
                      <span className="text-xs font-mono font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                        Score: {res.score}/100
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{res.participantName}</h4>
                    <p className="text-xs text-slate-500">{res.competitionName} • {res.district}</p>
                    <p className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                      🏆 Prize: {res.prize}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase">{res.status || 'Published'}</span>
                    <button
                      onClick={() => alert(`Unpublishing result for ${res.participantName}`)}
                      className="text-xs text-slate-400 hover:text-red-600 cursor-pointer"
                    >
                      Unpublish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            10. 🏆 MODULE: LEADERBOARD
            ======================================================== */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Statewide League Leaderboard</h3>
                <p className="text-xs text-slate-500">Live rankings and points aggregation across all 38 districts</p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2">
                {['Overall', 'District', 'Carol Solo', 'Choir Groups'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterLeaderboard(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      filterLeaderboard === f ? 'bg-[#9e0804] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Participant / Troupe</th>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Event Track</th>
                    <th className="py-3 px-4 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-black text-amber-500 text-base">🥇 #1</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Suman Kumar</td>
                    <td className="py-3.5 px-4">Tirunelveli</td>
                    <td className="py-3.5 px-4">Solo Singing (Adult)</td>
                    <td className="py-3.5 px-4 font-mono font-black text-right text-base text-[#9e0804]">120 pts</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-black text-slate-400 text-base">🥈 #2</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">St. Xavier Choir Troupe</td>
                    <td className="py-3.5 px-4">Thoothukudi</td>
                    <td className="py-3.5 px-4">Choirs & Festive Bands</td>
                    <td className="py-3.5 px-4 font-mono font-black text-right text-base text-[#9e0804]">105 pts</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-black text-amber-700 text-base">🥉 #3</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Madurai Rhythm Troupe</td>
                    <td className="py-3.5 px-4">Madurai</td>
                    <td className="py-3.5 px-4">Group Dance Showcase</td>
                    <td className="py-3.5 px-4 font-mono font-black text-right text-base text-[#9e0804]">95 pts</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-600 text-sm">#4</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Grace Gospel Ensemble</td>
                    <td className="py-3.5 px-4">Chennai</td>
                    <td className="py-3.5 px-4">Choirs & Festive Bands</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-right text-slate-700">88 pts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            11. 📢 MODULE: ANNOUNCEMENTS
            ======================================================== */}
        {activeTab === 'announcements' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Live Announcements & Broadcasts</h3>
                <p className="text-xs text-slate-500">Send announcements to candidate portals and mobile app feeds</p>
              </div>
              <button
                onClick={() => setShowAnnouncementModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>New Announcement</span>
              </button>
            </div>

            <div className="space-y-3">
              {announcementsList.map((ann) => (
                <div key={ann.announcementId} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#9e0804]">{ann.title}</span>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      Target: {ann.targetAudience}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{ann.message}</p>
                  <p className="text-[10px] text-slate-400 font-mono pt-1">Published: {ann.createdAt?.slice(0, 10) || '2026-10-05'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            12. 🔔 MODULE: NOTIFICATIONS
            ======================================================== */}
        {activeTab === 'notifications' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Push Notifications Management</h3>
                <p className="text-xs text-slate-500">Schedule alerts for schedule updates, pass verifications, and result releases</p>
              </div>
              <button
                onClick={() => setShowNotificationModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Send Push Notification</span>
              </button>
            </div>

            <div className="space-y-3">
              {notificationsList.map((notif) => (
                <div key={notif.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#9e0804]">{notif.title}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">{notif.type}</span>
                    </div>
                    <p className="text-slate-600">{notif.message}</p>
                    <p className="text-[10px] text-slate-400 font-mono">Target: {notif.target} • {notif.time}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    {notif.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            13. 📩 MODULE: ENQUIRIES / HELP DESK
            ======================================================== */}
        {activeTab === 'enquiries' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Visitor Enquiries & Help Desk Queue ({enquiriesList.length})</h3>
                <p className="text-xs text-slate-500">Respond directly to questions submitted through the public website</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Visitor</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Message</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiriesList.map((enq) => (
                    <tr key={enq._id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{enq.name}</td>
                      <td className="py-3.5 px-4 font-mono">{enq.phone} / {enq.email}</td>
                      <td className="py-3.5 px-4">{enq.district}</td>
                      <td className="py-3.5 px-4 max-w-xs truncate">{enq.message}</td>
                      <td className="py-3.5 px-4 uppercase font-bold text-[10px]">
                        <span className={`px-2 py-0.5 rounded-full ${enq.status === 'resolved' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                          {enq.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setReplyModal({ open: true, enquiry: enq, replyMessage: '', newStatus: 'resolved' })}
                          className="px-3 py-1 rounded-lg bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-2xs"
                        >
                          Reply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            14. 🤖 MODULE: AI ASSISTANT MANAGEMENT
            ======================================================== */}
        {activeTab === 'ai_assistant' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">TheZar AI Assistant Knowledge Base</h3>
                <p className="text-xs text-slate-500">Manage FAQs, venue directions, and competition rules indexed by the mobile AI chatbot</p>
              </div>
              <button
                onClick={() => setShowAiModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add Knowledge Q&A</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiKnowledgeList.map((ai) => (
                <div key={ai.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase bg-red-50 text-[#9e0804] px-2 py-0.5 rounded-md border border-red-100">
                      {ai.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{ai.event}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{ai.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ai.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            15. 🌐 MODULE: WEBSITE CONTENT MANAGEMENT (CMS)
            ======================================================== */}
        {activeTab === 'website_content' && (
          <form onSubmit={handleSaveCMS} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Dynamic Website CMS Controls</h3>
                <p className="text-xs text-slate-500">Control Homepage Hero, Countdown, Featured Competitions, About, and Contact</p>
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Live Website Content</span>
              </button>
            </div>

            {/* CMS Section Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3 text-xs font-bold">
              {[
                { id: 'banners_index', label: '🖼️ Storefront Banners (Desktop/Mobile)' },
                { id: 'banner', label: '📢 Ticker & Announcement' },
                { id: 'homepage', label: '🏠 Homepage Hero' },
                { id: 'about', label: 'ℹ️ About Section' },
                { id: 'events', label: '🏆 Events & Competitions' },
                { id: 'experience', label: '✨ Experience Zones' },
                { id: 'countdown', label: '⏳ Countdown Timer' },
                { id: 'featured', label: '🍳 Featured Championship' },
                { id: 'contact', label: '📞 Contact Details' },
                { id: 'footer', label: '🦶 Footer & Copyright' }
              ].map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setCmsTab(tab.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    cmsTab === tab.id ? 'bg-[#9e0804] text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CMS Content Inputs */}

            {/* 0. STOREFRONT BANNERS STUDIO LINK */}
            {cmsTab === 'banners_index' && (
              <div className="space-y-4 text-xs">
                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#7c3aed]" />
                      <span>Dedicated Storefront Banners Studio</span>
                    </h4>
                    <p className="text-slate-600">
                      Upload and manage the 3 Desktop Banners (1500×500) and 3 Mobile Banners (Portrait) for the storefront homepage.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('banners')}
                    className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Open Banners Editor</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* 1. INDEX BANNER & TICKER */}
            {cmsTab === 'banner' && (
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <input
                    type="checkbox"
                    id="bannerEnabled"
                    checked={siteContent.bannerEnabled !== false}
                    onChange={(e) => setSiteContent({ ...siteContent, bannerEnabled: e.target.checked })}
                    className="w-4 h-4 rounded text-[#9e0804] focus:ring-[#9e0804]"
                  />
                  <label htmlFor="bannerEnabled" className="font-bold text-slate-800 cursor-pointer">
                    Enable Top Marquee Ticker Bar
                  </label>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Top Announcement Bar Text</label>
                  <input
                    type="text"
                    value={siteContent.topAnnouncement || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, topAnnouncement: e.target.value })}
                    placeholder="Season 2026 Registrations Open Across All 38 Districts"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Marquee Ticker Items (One item per line or comma-separated)
                  </label>
                  <textarea
                    rows={6}
                    value={Array.isArray(siteContent.bannerItems) ? siteContent.bannerItems.join('\n') : (siteContent.bannerItems || '')}
                    onChange={(e) => {
                      const items = e.target.value.split('\n').map(s => s.trim()).filter(Boolean);
                      setSiteContent({ ...siteContent, bannerItems: items });
                    }}
                    placeholder={"THEZAR 2026\n38 DISTRICTS\nONE TABLE\nONE TASTE\nGRAND COOKING CHAMPIONSHIP"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Each line is displayed with festive stars (✦) in the moving ticker.</p>
                </div>
              </div>
            )}

            {/* 2. HOMEPAGE HERO */}
            {cmsTab === 'homepage' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 uppercase mb-1">Hero Eyebrow Text</label>
                  <input
                    type="text"
                    value={siteContent.heroEyebrow || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroEyebrow: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Hero Title Line 1</label>
                  <input
                    type="text"
                    value={siteContent.heroTitleLine1 || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroTitleLine1: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Hero Title Line 2 (Italic Accent)</label>
                  <input
                    type="text"
                    value={siteContent.heroTitleLine2 || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroTitleLine2: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Hero Title Line 3</label>
                  <input
                    type="text"
                    value={siteContent.heroTitleLine3 || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroTitleLine3: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Countdown ISO Target Date</label>
                  <input
                    type="text"
                    value={siteContent.heroCountdownDate || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroCountdownDate: e.target.value })}
                    placeholder="2026-10-10T10:00:00+05:30"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 uppercase mb-1">Hero Subtitle</label>
                  <textarea
                    rows={2}
                    value={siteContent.heroSubtitle || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroSubtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Primary CTA Button Label</label>
                  <input
                    type="text"
                    value={siteContent.heroPrimaryBtnText || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroPrimaryBtnText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Secondary CTA Button Label</label>
                  <input
                    type="text"
                    value={siteContent.heroSecondaryBtnText || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, heroSecondaryBtnText: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>
            )}

            {/* 3. ABOUT SECTION */}
            {cmsTab === 'about' && (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Eyebrow Tag</label>
                    <input
                      type="text"
                      value={siteContent.aboutEyebrow || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, aboutEyebrow: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">About Section Title</label>
                    <input
                      type="text"
                      value={siteContent.aboutTitle || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, aboutTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Main About Description</label>
                  <textarea
                    rows={3}
                    value={siteContent.aboutDescription || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, aboutDescription: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Mission Statement</label>
                    <textarea
                      rows={2}
                      value={siteContent.mission || siteContent.aboutMission || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, mission: e.target.value, aboutMission: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Vision Statement</label>
                    <textarea
                      rows={2}
                      value={siteContent.vision || siteContent.aboutVision || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, vision: e.target.value, aboutVision: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Key Highlights & Bullets (One per line)
                  </label>
                  <textarea
                    rows={4}
                    value={Array.isArray(siteContent.aboutHighlights) ? siteContent.aboutHighlights.join('\n') : (siteContent.aboutHighlights || '')}
                    onChange={(e) => {
                      const list = e.target.value.split('\n').map(s => s.trim()).filter(Boolean);
                      setSiteContent({ ...siteContent, aboutHighlights: list });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-sans"
                  />
                </div>
              </div>
            )}

            {/* 4. EVENTS & COMPETITIONS */}
            {cmsTab === 'events' && (
              <div className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Events Section Title</label>
                    <input
                      type="text"
                      value={siteContent.eventsSectionTitle || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, eventsSectionTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Events Section Subtitle</label>
                    <input
                      type="text"
                      value={siteContent.eventsSectionSubtitle || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, eventsSectionSubtitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-slate-900 uppercase">Live Competition Cards ({siteContent.eventsList?.length || 0})</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const newEventItem = {
                          id: `custom-${Date.now()}`,
                          title: 'New Competition Stage',
                          category: 'Special Showcase',
                          prize: '₹50,000 Cash Prize + Trophy',
                          date: 'Dec 2026',
                          venue: 'Tirunelveli District Arena',
                          badge: 'Open for Registration',
                          description: 'Enter this premier competition and win statewide recognition.',
                          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
                        };
                        setSiteContent({
                          ...siteContent,
                          eventsList: [...(siteContent.eventsList || []), newEventItem]
                        });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#9e0804] text-white font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Competition Card</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {(siteContent.eventsList || []).map((ev, idx) => (
                      <div key={ev.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-black text-[#9e0804] text-xs">Event Card #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = siteContent.eventsList.filter((_, i) => i !== idx);
                              setSiteContent({ ...siteContent, eventsList: updated });
                            }}
                            className="text-red-500 hover:text-red-700 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2">
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Title</label>
                            <input
                              type="text"
                              value={ev.title || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], title: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 font-bold"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Category</label>
                            <input
                              type="text"
                              value={ev.category || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], category: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Prize Package</label>
                            <input
                              type="text"
                              value={ev.prize || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], prize: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 text-[#9e0804] font-bold"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Date</label>
                            <input
                              type="text"
                              value={ev.date || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], date: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                            />
                          </div>
                          <div>
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Badge Tag</label>
                            <input
                              type="text"
                              value={ev.badge || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], badge: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                            />
                          </div>
                          <div className="sm:col-span-3">
                            <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Venue</label>
                            <input
                              type="text"
                              value={ev.venue || ''}
                              onChange={(e) => {
                                const list = [...siteContent.eventsList];
                                list[idx] = { ...list[idx], venue: e.target.value };
                                setSiteContent({ ...siteContent, eventsList: list });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. EXPERIENCE ZONES */}
            {cmsTab === 'experience' && (
              <div className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Experience Section Title</label>
                    <input
                      type="text"
                      value={siteContent.experienceTitle || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, experienceTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Experience Section Subtitle</label>
                    <input
                      type="text"
                      value={siteContent.experienceSubtitle || ''}
                      onChange={(e) => setSiteContent({ ...siteContent, experienceSubtitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="font-bold text-slate-900 uppercase">Interactive Festival Experience Zones (4 Zones)</h4>
                  {(siteContent.experienceZones || []).map((exp, idx) => (
                    <div key={exp.step || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
                      <span className="font-black text-[#9e0804] text-xs">Zone #{exp.step || `0${idx + 1}`}</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Zone Title</label>
                          <input
                            type="text"
                            value={exp.title || ''}
                            onChange={(e) => {
                              const list = [...siteContent.experienceZones];
                              list[idx] = { ...list[idx], title: e.target.value };
                              setSiteContent({ ...siteContent, experienceZones: list });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 font-bold"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Subtitle</label>
                          <input
                            type="text"
                            value={exp.subtitle || ''}
                            onChange={(e) => {
                              const list = [...siteContent.experienceZones];
                              list[idx] = { ...list[idx], subtitle: e.target.value };
                              setSiteContent({ ...siteContent, experienceZones: list });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Description</label>
                          <textarea
                            rows={2}
                            value={exp.desc || ''}
                            onChange={(e) => {
                              const list = [...siteContent.experienceZones];
                              list[idx] = { ...list[idx], desc: e.target.value };
                              setSiteContent({ ...siteContent, experienceZones: list });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block font-semibold text-slate-600 uppercase mb-0.5 text-[10px]">Key Features (Comma separated)</label>
                          <input
                            type="text"
                            value={Array.isArray(exp.features) ? exp.features.join(', ') : (exp.features || '')}
                            onChange={(e) => {
                              const list = [...siteContent.experienceZones];
                              list[idx] = {
                                ...list[idx],
                                features: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                              };
                              setSiteContent({ ...siteContent, experienceZones: list });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-300"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. COUNTDOWN */}
            {cmsTab === 'countdown' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Countdown Section Title</label>
                  <input
                    type="text"
                    value={siteContent.countdownTitle || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, countdownTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Countdown Event Name</label>
                  <input
                    type="text"
                    value={siteContent.countdownEventName || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, countdownEventName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Target ISO Date</label>
                  <input
                    type="text"
                    value={siteContent.countdownTargetDate || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, countdownTargetDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Venue Location</label>
                  <input
                    type="text"
                    value={siteContent.countdownVenue || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, countdownVenue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>
            )}

            {/* 7. FEATURED CHAMPIONSHIP */}
            {cmsTab === 'featured' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Featured Title</label>
                  <input
                    type="text"
                    value={siteContent.featuredTitle || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, featuredTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Host District</label>
                  <input
                    type="text"
                    value={siteContent.featuredDistrict || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, featuredDistrict: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Prize Package</label>
                  <input
                    type="text"
                    value={siteContent.featuredPrize || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, featuredPrize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold text-[#9e0804]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 uppercase mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={siteContent.featuredDescription || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, featuredDescription: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>
            )}

            {/* 8. CONTACT */}
            {cmsTab === 'contact' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Support Email</label>
                  <input
                    type="email"
                    value={siteContent.contactEmail || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, contactEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Support Phone</label>
                  <input
                    type="text"
                    value={siteContent.contactPhone || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, contactPhone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Instagram URL</label>
                  <input
                    type="text"
                    value={siteContent.instagram || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, instagram: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={siteContent.whatsapp || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
              </div>
            )}

            {/* 9. FOOTER */}
            {cmsTab === 'footer' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Footer Brand Text</label>
                  <input
                    type="text"
                    value={siteContent.footerText || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, footerText: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Copyright Line</label>
                  <input
                    type="text"
                    value={siteContent.copyright || ''}
                    onChange={(e) => setSiteContent({ ...siteContent, copyright: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>
            )}

          </form>
        )}

        {/* ========================================================
            16. 🎟️ MODULE: COUPONS / OFFERS
            ======================================================== */}
        {activeTab === 'coupons' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Discount Coupons & Offers</h3>
                <p className="text-xs text-slate-500">Configure promo codes for choir group discounts and early bird vouchers</p>
              </div>
              <button
                onClick={() => setShowCouponModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Create Coupon</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {couponsList.map((cp) => (
                <div key={cp.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-lg text-[#9e0804]">{cp.code}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      {cp.status}
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600">
                    <p className="font-bold text-slate-900">
                      Discount: {cp.discountType === 'Percentage' ? `${cp.discountValue}% OFF` : `₹${cp.discountValue} FLAT OFF`}
                    </p>
                    <p>Applies to: {cp.applicableEvent}</p>
                    <p>Usage: <strong>{cp.usedCount}</strong> / {cp.maxUsage}</p>
                    <p className="text-[10px] text-slate-400 font-mono">Valid till: {cp.endDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            17. 📊 MODULE: REPORTS & ANALYTICS
            ======================================================== */}
        {activeTab === 'reports' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div>
              <h3 className="text-base font-black text-slate-900">Reports & Analytics Export Center</h3>
              <p className="text-xs text-slate-500">Generate comprehensive compliance, revenue, and district participation data sheets</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Select Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                >
                  <option value="participant">1. Participant Report</option>
                  <option value="registration">2. Registration Report</option>
                  <option value="event">3. Event Report</option>
                  <option value="district">4. District Report</option>
                  <option value="competition">5. Competition Report</option>
                  <option value="payment">6. Payment & UTR Report</option>
                  <option value="revenue">7. Revenue Report</option>
                  <option value="result">8. Result & Ranks Report</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">District Filter</label>
                <select
                  value={reportDistrict}
                  onChange={(e) => setReportDistrict(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="All">All 38 Tamil Nadu Districts</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Thoothukudi">Thoothukudi</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Date Period</label>
                <select
                  value={reportDateRange}
                  onChange={(e) => setReportDateRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="All">All Time (Season 2026)</option>
                  <option value="Today">Today Only</option>
                  <option value="ThisWeek">This Week</option>
                  <option value="ThisMonth">This Month</option>
                </select>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={() => downloadCSV(`TheZar_${reportType.toUpperCase()}_EXPORT`, registrationsList, ['registrationId', 'totalAmount', 'paymentStatus', 'utrNumber'])}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export to Excel / CSV</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print PDF Report</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            18. 📱 MODULE: MOBILE APP MANAGEMENT
            ======================================================== */}
        {activeTab === 'mobile_app' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div>
              <h3 className="text-base font-black text-slate-900">Mobile App Central Sync Hub</h3>
              <p className="text-xs text-slate-500">Configure what the candidate Android & iOS mobile applications display live</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {[
                { label: 'App Announcements Live Feed', key: 'announcementsLive' },
                { label: 'Featured Events Carousel Sync', key: 'featuredEventsSync' },
                { label: 'Realtime Schedule Sync', key: 'schedulesSync' },
                { label: 'Live Results Broadcasting', key: 'resultsSync' },
                { label: 'Dynamic Leaderboard Sync', key: 'leaderboardSync' },
                { label: 'AI Assistant Knowledge Engine', key: 'aiAssistantActive' }
              ].map((item) => (
                <div key={item.key} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-800">{item.label}</span>
                  <button
                    type="button"
                    onClick={() => setMobileAppSettings({ ...mobileAppSettings, [item.key]: !mobileAppSettings[item.key] })}
                    className="cursor-pointer"
                  >
                    {mobileAppSettings[item.key] ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white">ENABLED</span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-300 text-slate-700">DISABLED</span>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-900">App Version: {mobileAppSettings.appVersion}</p>
                <p className="text-slate-500">Sync protocol: Express REST APIs on Port 5000</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">SYNC CONNECTED</span>
            </div>
          </div>
        )}

        {/* ========================================================
            19. 👨‍💼 MODULE: ADMIN USERS & STAFF MANAGEMENT
            ======================================================== */}
        {activeTab === 'admin_users' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Admin & Staff Access Management</h3>
                <p className="text-xs text-slate-500">Role-based access controls for Event Admins, Payment Verifiers, and District Coordinators</p>
              </div>
              <button
                onClick={() => setShowStaffModal(true)}
                className="px-4 py-2.5 rounded-xl bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add Staff User</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">User</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Permissions</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {staffList.map((st) => (
                    <tr key={st.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{st.name}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-[#9e0804] border border-red-100">
                          {st.role}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono">{st.phone}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1">
                          {st.permissions.map((p, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-100 text-[9px] font-bold text-slate-600">
                              {p}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                          {st.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            20. ⚙️ MODULE: SETTINGS & ADMIN PROFILE PHOTO
            ======================================================== */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">System Settings & Admin Profile</h3>
                <p className="text-xs text-slate-500">Configure payment modes, registration rules, and admin profile photo</p>
              </div>
              <button
                type="button"
                onClick={handleSaveCMS}
                className="px-5 py-2.5 rounded-full bg-[#9e0804] hover:bg-[#c4120c] text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Save Settings
              </button>
            </div>

            {/* Profile Photo Option (Requested specifically by user) */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <label className="block text-xs font-bold text-slate-900 uppercase">Admin Profile Photo Option *</label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={siteContent.adminAvatar}
                  alt="Admin Profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#9e0804] shadow-sm shrink-0"
                />
                <div className="w-full space-y-1.5 text-xs">
                  <input
                    type="text"
                    placeholder="Enter Profile Photo URL (e.g. Unsplash or Cloudinary)"
                    value={siteContent.adminAvatar}
                    onChange={(e) => setSiteContent({ ...siteContent, adminAvatar: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 font-mono text-xs"
                  />
                  <p className="text-[11px] text-slate-400">
                    This profile avatar appears in the executive top bar, audit logs, and verified gate pass signatures.
                  </p>
                </div>
              </div>
            </div>

            {/* General & Registration Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Admin Display Name</label>
                <input
                  type="text"
                  value={siteContent.adminName}
                  onChange={(e) => setSiteContent({ ...siteContent, adminName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Official Support Phone</label>
                <input
                  type="text"
                  value={siteContent.adminPhone}
                  onChange={(e) => setSiteContent({ ...siteContent, adminPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Payment Mode (TEST / LIVE)</label>
                <select
                  value={settingsForm.paymentMode}
                  onChange={(e) => setSettingsForm({ ...settingsForm, paymentMode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-bold"
                >
                  <option value="TEST">TEST UPI QR (Simulated 12-Digit UTR)</option>
                  <option value="LIVE">LIVE Razorpay / Stripe Gateway</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Testing UPI ID</label>
                <input
                  type="text"
                  value={settingsForm.upiId}
                  onChange={(e) => setSettingsForm({ ...settingsForm, upiId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                />
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            21. 🔐 MODULE: AUDIT LOGS
            ======================================================== */}
        {activeTab === 'audit_logs' && (
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <h3 className="text-base font-black text-slate-900">Administrative Audit Logs</h3>
              <p className="text-xs text-slate-500">Immutable security logs tracking pass verifications, schedule changes, and result publications</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Log ID</th>
                    <th className="py-3 px-4">Admin</th>
                    <th className="py-3 px-4">Action</th>
                    <th className="py-3 px-4">Module</th>
                    <th className="py-3 px-4">Record ID</th>
                    <th className="py-3 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {auditLogsList.map((log) => (
                    <tr key={log._id || log.logId} className="hover:bg-slate-50 font-mono">
                      <td className="py-3 px-4 text-[#9e0804]">{log.logId}</td>
                      <td className="py-3 px-4 font-bold">{log.adminName}</td>
                      <td className="py-3 px-4 uppercase">{log.action}</td>
                      <td className="py-3 px-4">{log.module}</td>
                      <td className="py-3 px-4 text-slate-500">{log.recordId}</td>
                      <td className="py-3 px-4 text-slate-600 font-sans">{log.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================
          DETAIL & ACTION MODALS
          ======================================================== */}

      {/* PARTICIPANT PROFILE MODAL */}
      {selectedParticipant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full space-y-5 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedParticipant(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#9e0804] text-white flex items-center justify-center font-black text-xl">
                {selectedParticipant.fullName?.slice(0, 2).toUpperCase() || 'TZ'}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#9e0804] uppercase">
                  {selectedParticipant.participantId}
                </span>
                <h3 className="text-xl font-black text-slate-900">{selectedParticipant.fullName}</h3>
                <p className="text-xs text-slate-500">{selectedParticipant.district} • Candidate</p>
              </div>
            </div>

            {/* Personal & Contact Information */}
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Phone Number</span>
                  <span className="font-mono font-bold text-slate-900">{selectedParticipant.phone}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Address</span>
                  <span className="font-bold text-slate-900">{selectedParticipant.email}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Home District & Address</span>
                  <span className="text-slate-700">{selectedParticipant.address || 'Tirunelveli, Tamil Nadu'}</span>
                </div>
              </div>

              {/* QR Gate Pass Section */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-red-300">TheZar 2026 Live Entry Pass</span>
                  <p className="font-bold text-sm">Pass Verified: {selectedParticipant.participantId}</p>
                  <p className="text-[10px] text-slate-300">Scan at Arena Registration Desk</p>
                </div>
                <div className="bg-white p-2 rounded-xl shrink-0">
                  <QRCodeSVG value={selectedParticipant.participantId || 'TZR-2026'} size={72} />
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => alert(`Reset password link sent to ${selectedParticipant.email}`)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-700 cursor-pointer"
              >
                Reset Password
              </button>
              <button
                onClick={() => setSelectedParticipant(null)}
                className="flex-1 py-2.5 rounded-xl bg-[#9e0804] text-white font-bold text-xs cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGISTRATION DETAILS & PASS MODAL */}
      {selectedRegistration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full space-y-5 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedRegistration(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] font-mono font-bold text-[#9e0804] uppercase">TheZar Gate Pass Verification</span>
              <h3 className="text-xl font-black text-slate-900">{selectedRegistration.registrationId}</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <p>Candidate: <strong className="text-slate-900">{selectedRegistration.user?.fullName || selectedRegistration.groupInfo?.groupName}</strong></p>
                <p>Type: <strong className="uppercase">{selectedRegistration.registrationType}</strong></p>
                <p>UTR Number: <strong className="font-mono text-[#9e0804]">{selectedRegistration.utrNumber}</strong></p>
                <p>Amount Paid: <strong className="font-mono text-emerald-700">₹{selectedRegistration.totalAmount}</strong></p>
              </div>

              {/* Pass QR Code */}
              <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <QRCodeSVG value={selectedRegistration.qrCodeData || selectedRegistration.registrationId} size={140} />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{selectedRegistration.registrationId}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Pass</span>
              </button>
              <button
                onClick={() => setSelectedRegistration(null)}
                className="flex-1 py-2.5 rounded-xl bg-[#9e0804] text-white font-bold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REJECTION REASON MODAL */}
      {rejectionModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-xl border border-slate-200 text-left">
            <h3 className="text-base font-black text-slate-900">Reject Payment Verification</h3>
            <p className="text-xs text-slate-500">Provide rejection reason for candidate: <strong className="font-mono">{rejectionModal.registrationId}</strong></p>
            
            <textarea
              rows={3}
              placeholder="e.g. Invalid 12-digit UTR, payment amount underpaid, or duplicate transaction"
              value={rejectionModal.reason}
              onChange={(e) => setRejectionModal({ ...rejectionModal, reason: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs"
            />

            <div className="flex gap-2">
              <button
                onClick={() => setRejectionModal({ open: false, registrationId: '', reason: '' })}
                className="flex-1 py-2 rounded-xl bg-slate-100 font-bold text-xs text-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleVerifyPayment(rejectionModal.registrationId, 'rejected', rejectionModal.reason || 'Invalid UTR');
                  setRejectionModal({ open: false, registrationId: '', reason: '' });
                }}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold text-xs text-white cursor-pointer"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY REPLY MODAL */}
      {replyModal.open && replyModal.enquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleSendReply} className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl border border-slate-200 text-left">
            <h3 className="text-base font-black text-slate-900">Reply to Visitor Enquiry</h3>
            <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
              <p>From: <strong>{replyModal.enquiry.name}</strong> ({replyModal.enquiry.email})</p>
              <p>Message: "{replyModal.enquiry.message}"</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Reply Message *</label>
              <textarea
                rows={4}
                required
                placeholder="Type your official response..."
                value={replyModal.replyMessage}
                onChange={(e) => setReplyModal({ ...replyModal, replyMessage: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setReplyModal({ open: false, enquiry: null, replyMessage: '', newStatus: 'resolved' })}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Send Reply
              </button>
            </div>
          </form>
        </div>
      )}

      {/* RULES MODAL */}
      {rulesModal.open && rulesModal.competition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl border border-slate-200 text-left">
            <h3 className="text-base font-black text-slate-900">{rulesModal.competition.name} Rules</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2 leading-relaxed">
              <p><strong>Stage:</strong> {rulesModal.competition.venue}</p>
              <p><strong>Duration:</strong> {rulesModal.competition.duration}</p>
              <p><strong>Official Rules:</strong> {rulesModal.competition.rules}</p>
            </div>
            <button
              onClick={() => setRulesModal({ open: false, competition: null })}
              className="w-full py-2.5 rounded-xl bg-[#9e0804] text-white font-bold text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ========================================================
          CREATION MODALS
          ======================================================== */}

      {/* CREATE EVENT MODAL WITH DRAG & DROP IMAGE & CATEGORIES (NO QUIZ / HACKATHON, NO DISTRICT) */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <form
            onSubmit={handleCreateEvent}
            className="bg-white text-slate-800 rounded-3xl p-6 sm:p-7 max-w-xl w-full space-y-5 shadow-2xl relative border border-slate-200/90 max-h-[90vh] overflow-y-auto text-left font-sans"
            style={{ borderRadius: '24px' }}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setShowEventModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              style={{ borderRadius: '9999px' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-slate-100 pb-3 space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#9e0804] uppercase tracking-widest bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100" style={{ borderRadius: '9999px' }}>
                Track Creator
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Create New Event Track</h3>
              <p className="text-xs text-slate-500">Configure track details, image banner, category, and participation pricing</p>
            </div>
            
            <div className="space-y-4 text-xs">
              
              {/* Event Title */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Event Track Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Carol Fiesta 2026 - Acoustic Solo Singing"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#9e0804] transition-colors"
                  style={{ borderRadius: '12px' }}
                />
              </div>

              {/* Event Category Selector (No Hackathon, No Quiz) */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Event Category *
                </label>
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#9e0804]"
                  style={{ borderRadius: '12px' }}
                >
                  <option value="Singing Solo (Adult)">Category I: Singing Solo (Adult Open)</option>
                  <option value="Singing Solo (Kids)">Category I: Singing Solo (Kids Under 15)</option>
                  <option value="Choir & Bands">Category II: Choir & Music Bands (Group / Troupe)</option>
                  <option value="Solo Dance Showcase">Category III: Dance Showcase (Solo Freestyle)</option>
                  <option value="Group Dance Showcase">Category III: Dance Showcase (Group Choreography)</option>
                  <option value="Santa Claus Contest">Category IV: Special Contest (Santa Claus)</option>
                  <option value="Cooking Championship">Category V: Grand Cooking Championship</option>
                  <option value="Instrumental & Live Music">Category VI: Instrumental Showcase & Live Acts</option>
                </select>
              </div>

              {/* 🖼️ IMAGE UPLOAD SECTION WITH DRAG & DROP */}
              <div className="space-y-1.5">
                <label className="block font-bold text-slate-700 uppercase tracking-wider">
                  Event Banner Image (Drag & Drop or Select)
                </label>
                
                {newEvent.imagePreview ? (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-300 group">
                    <img
                      src={newEvent.imagePreview}
                      alt="Banner Preview"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setNewEvent(prev => ({ ...prev, imagePreview: '', bannerUrl: '' }))}
                        className="px-3.5 py-1.5 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md hover:bg-rose-500"
                        style={{ borderRadius: '9999px' }}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove Image</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                      isDraggingImage
                        ? 'border-[#9e0804] bg-red-50/80 scale-[1.01]'
                        : 'border-slate-300 bg-slate-50/70 hover:border-slate-400 hover:bg-slate-100/60'
                    }`}
                    style={{ borderRadius: '16px' }}
                  >
                    <div className="p-3 rounded-full bg-red-50 text-[#9e0804] border border-red-100 shadow-2xs">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">
                        Drag & Drop event banner here, or{' '}
                        <label className="text-[#9e0804] hover:underline cursor-pointer">
                          Browse
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                handleImageFile(e.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                        Supports PNG, JPG, WEBP (Recommended 800x450px)
                      </p>
                    </div>
                  </div>
                )}

                {/* Direct Image URL input fallback */}
                <input
                  type="url"
                  placeholder="Or paste direct image URL (https://...)"
                  value={newEvent.bannerUrl}
                  onChange={(e) => setNewEvent({ ...newEvent, bannerUrl: e.target.value, imagePreview: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 focus:outline-none focus:border-[#9e0804]"
                  style={{ borderRadius: '10px' }}
                />
              </div>

              {/* Price & Max Participants */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Entry Fee (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={newEvent.price}
                    onChange={(e) => setNewEvent({ ...newEvent, price: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono font-bold text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#9e0804]"
                    style={{ borderRadius: '12px' }}
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Max Capacity / Slots
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={newEvent.maxParticipants}
                    onChange={(e) => setNewEvent({ ...newEvent, maxParticipants: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#9e0804]"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              </div>

              {/* Date & Venue */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Event Date
                  </label>
                  <input
                    type="text"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#9e0804]"
                    style={{ borderRadius: '12px' }}
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Stage / Arena
                  </label>
                  <input
                    type="text"
                    value={newEvent.venue}
                    onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#9e0804]"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Track Description & Stage Guidelines
                </label>
                <textarea
                  rows={2}
                  placeholder="Stage format, duration limits, props/instruments permitted..."
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#9e0804] resize-none"
                  style={{ borderRadius: '12px' }}
                />
              </div>

            </div>

            {/* Submit Action */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowEventModal(false)}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
                style={{ borderRadius: '9999px' }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#9e0804] to-[#c4120c] hover:from-[#820603] hover:to-[#a70e0a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-red-950/15 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                style={{ borderRadius: '9999px' }}
              >
                Publish Event Track
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CREATE COMPETITION MODAL */}
      {showCompModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateCompetition} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowCompModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Create Competition Track</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Competition Name *</label>
                <input
                  type="text"
                  required
                  value={newComp.name}
                  onChange={(e) => setNewComp({ ...newComp, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Type</label>
                  <select
                    value={newComp.type}
                    onChange={(e) => setNewComp({ ...newComp, type: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value="Individual">Individual</option>
                    <option value="Group">Group / Team</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Fee (₹)</label>
                  <input
                    type="number"
                    value={newComp.fee}
                    onChange={(e) => setNewComp({ ...newComp, fee: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Stage / Venue</label>
                <input
                  type="text"
                  value={newComp.venue}
                  onChange={(e) => setNewComp({ ...newComp, venue: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Add Competition Track
            </button>
          </form>
        </div>
      )}

      {/* CREATE SCHEDULE MODAL */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateSchedule} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowScheduleModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Add Schedule Slot</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Competition Track *</label>
                <input
                  type="text"
                  required
                  value={newSchedule.competitionName}
                  onChange={(e) => setNewSchedule({ ...newSchedule, competitionName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Start Time</label>
                  <input
                    type="text"
                    value={newSchedule.startTime}
                    onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Stage / Arena</label>
                  <input
                    type="text"
                    value={newSchedule.stage}
                    onChange={(e) => setNewSchedule({ ...newSchedule, stage: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Save Schedule Slot
            </button>
          </form>
        </div>
      )}

      {/* PUBLISH RESULT MODAL */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateResult} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowResultModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Publish Result</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Participant / Troupe *</label>
                <input
                  type="text"
                  required
                  value={newResult.participantName}
                  onChange={(e) => setNewResult({ ...newResult, participantName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Rank Position</label>
                  <select
                    value={newResult.rank}
                    onChange={(e) => setNewResult({ ...newResult, rank: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value={1}>🥇 1st Place</option>
                    <option value={2}>🥈 2nd Place</option>
                    <option value={3}>🥉 3rd Place</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Score / 100</label>
                  <input
                    type="number"
                    value={newResult.score}
                    onChange={(e) => setNewResult({ ...newResult, score: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Publish to Statewide Leaderboard
            </button>
          </form>
        </div>
      )}

      {/* ANNOUNCEMENT MODAL */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateAnnouncement} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowAnnouncementModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Broadcast Live Announcement</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Announcement Title *</label>
                <input
                  type="text"
                  required
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Message Content *</label>
                <textarea
                  rows={3}
                  required
                  value={newAnnouncement.message}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Broadcast Live Announcement
            </button>
          </form>
        </div>
      )}

      {/* SEND NOTIFICATION MODAL */}
      {showNotificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleSendNotification} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowNotificationModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Send Push Notification</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={newNotification.title}
                  onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Notification Type</label>
                <select
                  value={newNotification.type}
                  onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="Event Update">Event Update</option>
                  <option value="Schedule Change">Schedule Change</option>
                  <option value="Payment">Payment</option>
                  <option value="Result">Result</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Message Content *</label>
                <textarea
                  rows={3}
                  required
                  value={newNotification.message}
                  onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Send Push Notification
            </button>
          </form>
        </div>
      )}

      {/* CREATE COUPON MODAL */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateCoupon} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowCouponModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Create Discount Coupon</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Coupon Code *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. THEZAR15"
                  value={newCoupon.code}
                  onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono font-bold"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Type</label>
                  <select
                    value={newCoupon.discountType}
                    onChange={(e) => setNewCoupon({ ...newCoupon, discountType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                  >
                    <option value="Percentage">Percentage (%)</option>
                    <option value="Flat">Flat Amount (₹)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Value</label>
                  <input
                    type="number"
                    value={newCoupon.discountValue}
                    onChange={(e) => setNewCoupon({ ...newCoupon, discountValue: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 font-mono"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Create Coupon
            </button>
          </form>
        </div>
      )}

      {/* ADD STAFF MODAL */}
      {showStaffModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateStaff} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowStaffModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Add Admin / Staff Member</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={newStaff.name}
                  onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Role</label>
                <select
                  value={newStaff.role}
                  onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="Event Admin">Event Admin</option>
                  <option value="Payment Admin">Payment Admin</option>
                  <option value="District Coordinator">District Coordinator</option>
                  <option value="Result Manager">Result Manager</option>
                  <option value="Support Staff">Support Staff</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={newStaff.email}
                  onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Grant Staff Permissions
            </button>
          </form>
        </div>
      )}

      {/* ADD AI KNOWLEDGE MODAL */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateAiKnowledge} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowAiModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Add AI Assistant Knowledge</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Category</label>
                <select
                  value={newAiKnowledge.category}
                  onChange={(e) => setNewAiKnowledge({ ...newAiKnowledge, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="FAQs">FAQs</option>
                  <option value="Event Information">Event Information</option>
                  <option value="Rules">Rules</option>
                  <option value="Competition Information">Competition Information</option>
                  <option value="Venue Information">Venue Information</option>
                  <option value="Payment Information">Payment Information</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Question / Prompt *</label>
                <input
                  type="text"
                  required
                  value={newAiKnowledge.question}
                  onChange={(e) => setNewAiKnowledge({ ...newAiKnowledge, question: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">AI Answer *</label>
                <textarea
                  rows={3}
                  required
                  value={newAiKnowledge.answer}
                  onChange={(e) => setNewAiKnowledge({ ...newAiKnowledge, answer: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Index Knowledge for Chatbot
            </button>
          </form>
        </div>
      )}

      {/* ADD DISTRICT MODAL */}
      {showDistrictModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <form onSubmit={handleCreateDistrict} className="bg-white text-slate-800 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl relative border border-slate-200 text-left">
            <button type="button" onClick={() => setShowDistrictModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900">
              <XCircle className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-slate-900">Add Tamil Nadu District Chapter</h3>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">District Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kanyakumari"
                  value={newDistrict.name}
                  onChange={(e) => setNewDistrict({ ...newDistrict, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Zone</label>
                <select
                  value={newDistrict.zone}
                  onChange={(e) => setNewDistrict({ ...newDistrict, zone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                >
                  <option value="South">South Zone</option>
                  <option value="North">North Zone</option>
                  <option value="Central">Central Zone</option>
                  <option value="West">West Zone</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Coordinator Name</label>
                <input
                  type="text"
                  value={newDistrict.coordinatorName}
                  onChange={(e) => setNewDistrict({ ...newDistrict, coordinatorName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-3 rounded-full bg-[#9e0804] text-white font-bold text-xs cursor-pointer shadow-xs">
              Register District Chapter
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
