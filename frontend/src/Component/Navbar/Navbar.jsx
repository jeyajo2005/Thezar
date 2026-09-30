import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Menu, X, Search, UserCheck } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0d17]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-royal-blue flex items-center justify-center text-white shadow-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-sans uppercase">
                THEZAR <span className="text-blue-500">2026</span>
              </span>
              <p className="text-[10px] text-slate-400 hidden sm:block font-mono tracking-widest uppercase">
                38 DISTRICTS • TAMIL NADU
              </p>
            </div>
          </Link>

          {/* Nav Links Matching Reference Image Navbar */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-xs font-black tracking-widest transition-all ${
                    isActive
                      ? 'bg-royal-blue text-white rounded'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 rounded'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Register Button */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-white">
            <button className="p-2 text-slate-300 hover:text-white transition-colors" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenRegister}
              className="px-5 py-2 text-xs font-black tracking-wider text-white btn-royal-blue uppercase shadow-lg hover:bg-blue-600 transition-colors"
            >
              REGISTER NOW
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="sm:hidden px-3 py-1.5 rounded text-xs font-black text-white bg-royal-blue uppercase"
            >
              REGISTER
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0d17] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 text-left">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded text-xs font-black tracking-widest ${
                location.pathname === link.path
                  ? 'bg-royal-blue text-white'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded font-black text-white bg-royal-blue flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
            >
              <UserCheck className="w-4 h-4" />
              <span>REGISTER CANDIDATE PASS</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
