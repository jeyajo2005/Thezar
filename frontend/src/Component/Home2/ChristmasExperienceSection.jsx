import { useState } from 'react';
import { Sparkles, TreePine, Gift, Compass, ChevronRight, Star, Music, Award } from 'lucide-react';
import reindeerImg from '../../assets/xmas_reindeer.jpg';
import treeImg from '../../assets/xmas_tree.jpg';
import sleighImg from '../../assets/xmas_sleigh.jpg';

export default function ChristmasExperienceSection({ onOpenRegister }) {
  const [activeStep, setActiveStep] = useState(0);

  const experiences = [
    {
      step: '01',
      title: 'Santa’s Midnight Sleigh Flight & Winter Trail',
      subtitle: 'Where Holiday Journeys Begin',
      desc: 'Watch Santa Claus riding his traditional golden sleigh pulled by reindeer galloping across rolling snow-covered hills under a warm sunset glow, delivering presents worldwide.',
      icon: Compass,
      image: sleighImg,
      badge: 'Signature Journey',
      features: ['Golden Sleigh Display', 'Snow Drift Trail', 'Magical Star Canopy'],
    },
    {
      step: '02',
      title: "Majestic Reindeer Pavilion & Festive Stables",
      subtitle: 'Meet Santa’s Golden-Harnessed Reindeer',
      desc: 'Step inside the peaceful winter stable to meet majestic reindeer adorned with delicate golden fairy lights, brass jingle bells, and piles of velvet wrapped gifts.',
      icon: Gift,
      image: reindeerImg,
      badge: 'Interactive Wonder',
      features: ['Reindeer Petting Zone', 'Brass Jingle Bell Souvenirs', 'Golden Wish Postbox'],
    },
    {
      step: '03',
      title: 'The Grand Illuminated Christmas Tree Plaza',
      subtitle: '70-Foot Landmark of Lights & Presents',
      desc: 'Gather around our magnificent pine Christmas tree adorned with thousands of golden fairy lights, crimson baubles, a glowing 3D star, and mountains of wrapped holiday presents.',
      icon: TreePine,
      image: treeImg,
      badge: 'Festive Centerpiece',
      features: ['70-Foot Decorated Tree', 'Statewide Carol Choirs', 'Hourly Light Shows'],
    },
    {
      step: '04',
      title: 'Midnight Fireworks & Winter Award Gala',
      subtitle: 'The Grand Finale Spectacle',
      desc: 'As midnight approaches, witness a world-class pyrotechnic and synchronized drone light show painting the winter night sky with Santa, stars, and holiday blessings.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1000&q=80',
      badge: 'Climax & Finale',
      features: ['Drone Light Art', 'Statewide Champion Trophies', 'Midnight Bell Blessing'],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden text-white">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#c4120c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffd700]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#380407] border border-[#ffd700]/50 shadow-md">
            <Compass className="w-3.5 h-3.5 text-[#ffd700]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffd700] font-mono">
              ★ IMMERSIVE HORIZONTAL JOURNEY ★
            </span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            THE WINTER <span className="gold-gradient-text">EXPERIENCE</span>
          </h2>

          <p className="font-christmas text-4xl sm:text-5xl text-amber-200 pt-1 drop-shadow-md">
            Walk Through A Living Winter Story
          </p>

          <p className="text-rose-100/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Follow the magical pathway from Santa’s sunset sleigh run straight into the reindeer stables and the illuminated tree plaza.
          </p>

          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-2" />
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#54070c] border-[#ffd700] shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-102'
                    : 'bg-[#2a0305]/80 border-red-950 hover:bg-[#3a0508] text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#ffd700]' : 'text-rose-300/60'}`}>
                    {exp.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#ffd700]' : 'text-rose-300/60'}`} />
                </div>
                <p className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {exp.title}
                </p>
                <p className="text-[11px] text-[#ffd700]/80 font-mono">
                  {exp.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Experience Showcase Display */}
        <div className="bg-gradient-to-br from-[#450509]/95 via-[#2b0306]/95 to-[#160103]/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#ffd700]/40 shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image with Parallax & Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#ffd700]/30 group">
                <img
                  src={experiences[activeStep].image}
                  alt={experiences[activeStep].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160103] via-transparent to-transparent" />

                {/* Floating Pin Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-[#ffd700]/40">
                  <div className="flex items-center gap-2 text-xs text-[#ffd700] font-mono font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#ffd700]" />
                    <span>EXPERIENCE ZONE {experiences[activeStep].step}</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    {experiences[activeStep].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Description & Features */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#240306] bg-[#ffd700] px-3.5 py-1 rounded-full border border-amber-300 inline-block shadow-sm">
                  ★ {experiences[activeStep].badge}
                </span>

                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {experiences[activeStep].title}
                </h3>

                <p className="font-serif italic text-base sm:text-lg text-amber-200">
                  {experiences[activeStep].subtitle}
                </p>
              </div>

              <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed font-light">
                {experiences[activeStep].desc}
              </p>

              {/* Key Features Pill Badges */}
              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase font-bold text-[#ffd700] tracking-wider font-mono">
                  Zone Inclusions:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {experiences[activeStep].features.map((feat, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-[#ffd700]/30 text-xs font-semibold text-rose-100 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#ffd700]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={onOpenRegister}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#240306] gold-shimmer-btn shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  Reserve Experience
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % experiences.length)}
                  className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#ffd700]/30 text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-bold"
                >
                  <span>Next Zone</span>
                  <ChevronRight className="w-4 h-4 text-[#ffd700]" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
