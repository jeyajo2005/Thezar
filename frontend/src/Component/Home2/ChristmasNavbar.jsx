import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Gift, Volume2, VolumeX, Snowflake } from 'lucide-react';

export default function ChristmasNavbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple Synthesizer / Audio Chime for Festive Feel
  const toggleFestiveChimes = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Play soft celestial Christmas chime notes (Jingle bell frequencies: E5, G5, C6)
      const notes = [659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.15);
        osc.stop(ctx.currentTime + idx * 0.15 + 0.6);
      });
      setIsAudioPlaying(!isAudioPlaying);
    } catch {
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'The Spirit', href: '#about' },
    { name: 'Festive Events', href: '#events' },
    { name: 'Experience', href: '#experience' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1e0204]/95 backdrop-blur-xl py-3 shadow-[0_6px_35px_rgba(0,0,0,0.7)] border-b border-[#ffd700]/30'
          : 'bg-[#2a0305]/80 backdrop-blur-md py-4 border-b border-[#ffd700]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Christmas Theme */}
        <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffd700] via-[#c99738] to-[#8a641a] p-0.5 shadow-md shadow-amber-900/40 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#380407] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#ffd700] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider gold-gradient-text">
                THEZAR
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffd700] px-1.5 py-0.5 rounded bg-red-950/80 border border-[#ffd700]/40 font-mono">
                XMAS 2026
              </span>
            </div>
            <p className="text-[11px] font-christmas text-amber-200 tracking-wider -mt-1 hidden sm:block">
              Winter Wonderland Carnival
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-rose-100 hover:text-[#ffd700] transition-colors relative py-1 text-decoration-none group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#ffd700] to-[#f59e0b] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          
          {/* Festive Audio Bell Button */}
          <button
            onClick={toggleFestiveChimes}
            title="Play Festive Jingle Chime"
            className="p-2.5 rounded-full bg-red-950/80 hover:bg-red-900 border border-[#ffd700]/30 text-[#ffd700] transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#ffd700] animate-bounce" />
            ) : (
              <VolumeX className="w-4 h-4 text-amber-200/60" />
            )}
          </button>

          {/* Glowing Register CTA */}
          <button
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2a0407] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 cursor-pointer gold-shimmer-btn"
          >
            <Gift className="w-4 h-4 text-[#2a0407]" />
            <span>Register Now</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#240305]/98 backdrop-blur-xl border-b border-[#ffd700]/30 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-rose-100 hover:text-[#ffd700] py-2 border-b border-red-950 flex items-center justify-between text-decoration-none"
              >
                <span>{link.name}</span>
                <Snowflake className="w-3.5 h-3.5 text-[#ffd700]/60" />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full mt-4 py-3 rounded-full text-center text-sm font-bold uppercase tracking-wider text-[#2a0407] shadow-lg gold-shimmer-btn flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4 text-[#2a0407]" />
            <span>Register for Christmas Event</span>
          </button>
        </div>
      )}
    </header>
  );
}
