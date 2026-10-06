import { useState, useEffect, useId } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { useSiteContent } from '../../hooks/useSiteContent';

export default function IndexBannerCarousel({ onOpenRegister }) {
  const { content } = useSiteContent();
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const desktopBanners = (content.desktopBanners && content.desktopBanners.length > 0)
    ? content.desktopBanners.filter((b) => b.active !== false && b.image)
    : [];

  const mobileBanners = (content.mobileBanners && content.mobileBanners.length > 0)
    ? content.mobileBanners.filter((b) => b.active !== false && b.image)
    : [];

  // Autoplay desktop carousel
  useEffect(() => {
    if (desktopBanners.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentDesktopIndex((prev) => (prev + 1) % desktopBanners.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [desktopBanners.length, isPaused]);

  // Autoplay mobile carousel
  useEffect(() => {
    if (mobileBanners.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % mobileBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mobileBanners.length, isPaused]);

  if (desktopBanners.length === 0 && mobileBanners.length === 0) {
    return null;
  }

  const handlePrevDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev === 0 ? desktopBanners.length - 1 : prev - 1));
  };

  const handleNextDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev + 1) % desktopBanners.length);
  };

  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) => (prev === 0 ? mobileBanners.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % mobileBanners.length);
  };

  return (
    <section
      className="relative w-full py-6 sm:py-8 bg-[#0B1120] text-white overflow-hidden border-y border-slate-800/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#9e0804]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
              Live Showcase • 38 Districts Official Banners
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
            Slot {currentDesktopIndex + 1} of {desktopBanners.length}
          </span>
        </div>

        {/* 1. DESKTOP BANNER CAROUSEL (1500×500 px ratio, hidden on small screens) */}
        {desktopBanners.length > 0 && (
          <div className="hidden md:block relative group rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-950">
            <div
              className="relative w-full overflow-hidden transition-all duration-500"
              style={{ aspectRatio: '1500 / 500' }}
            >
              {desktopBanners.map((banner, idx) => {
                const isActive = idx === currentDesktopIndex;
                return (
                  <div
                    key={banner.slot || idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title || `TheZar Banner ${banner.slot}`}
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                      {banner.title && (
                        <div className="max-w-2xl space-y-2">
                          <span className="inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-[#9e0804] text-white">
                            Championship Highlight • Slot {banner.slot || idx + 1}
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-black text-white drop-shadow-md">
                            {banner.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left / Right Nav Arrows */}
            {desktopBanners.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevDesktop}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#9e0804] text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                  aria-label="Previous Banner"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNextDesktop}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#9e0804] text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
                  aria-label="Next Banner"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2">
                  {desktopBanners.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentDesktopIndex(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === currentDesktopIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* 2. MOBILE BANNER CAROUSEL (Portrait ratio, displayed on mobile screens) */}
        {mobileBanners.length > 0 && (
          <div className="block md:hidden relative group rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl bg-slate-950">
            <div
              className="relative w-full overflow-hidden transition-all duration-500"
              style={{ aspectRatio: '3 / 4' }}
            >
              {mobileBanners.map((banner, idx) => {
                const isActive = idx === currentMobileIndex;
                return (
                  <div
                    key={banner.slot || idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title || `TheZar Mobile Banner ${banner.slot}`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                      {banner.title && (
                        <div className="space-y-1.5">
                          <span className="inline-block text-[9px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#9e0804] text-white">
                            Slot {banner.slot || idx + 1}
                          </span>
                          <h3 className="text-lg font-black text-white leading-tight">
                            {banner.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Nav Arrows & Indicators */}
            {mobileBanners.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevMobile}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
                  aria-label="Previous Mobile Banner"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMobile}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
                  aria-label="Next Mobile Banner"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                  {mobileBanners.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentMobileIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentMobileIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
