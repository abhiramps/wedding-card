import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronDown } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { CountdownTimer } from './CountdownTimer';
import {
  GaneshaEmblem,
  GoldDivider,
  HangingJasmineGarland,
  CurvedGoldenWave,
} from '../common/Ornaments';

export const HeroSection: React.FC = () => {
  const scrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-10 sm:pt-14 flex flex-col items-center text-center"
    >
      {/* Top Hanging Floral Canopies (Left: White Jasmine & Foliage, Right: Pink & Jasmine Garlands) */}
      <div className="absolute top-0 left-0 z-20 pointer-events-none">
        <HangingJasmineGarland
          side="left"
          className="w-28 sm:w-40 md:w-48 h-44 sm:h-64 md:h-72"
        />
      </div>
      <div className="absolute top-0 right-0 z-20 pointer-events-none">
        <HangingJasmineGarland
          side="right"
          withPinkBlossoms
          className="w-28 sm:w-40 md:w-48 h-44 sm:h-64 md:h-72"
        />
      </div>

      {/* Main Invitation Typography Block */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-2xl mx-auto px-6 flex flex-col items-center"
      >
        {/* Auspicious Antique Gold Ganesha Emblem */}
        <div className="mb-3 sm:mb-4">
          <GaneshaEmblem className="w-13 h-15 sm:w-16 sm:h-18 mx-auto" />
        </div>

        {/* Invitation Header Labels */}
        <p className="text-[11px] sm:text-xs font-serif italic text-[#5C4D42] tracking-wide mb-1">
          {weddingData.hero.familiesLine}
        </p>
        <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#30251E] font-normal mb-4 sm:mb-5">
          {weddingData.hero.invitedLine}
        </p>

        {/* Couple Names in Large Elegant Forest Green Serif */}
        <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-5">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium text-[#29452F] tracking-normal leading-[1.08]">
            {weddingData.couple.groom.name}
          </h1>
          <div className="py-0.5">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#29452F]/90">
              &amp;
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium text-[#29452F] tracking-normal leading-[1.08]">
            {weddingData.couple.bride.name}
          </h2>
        </div>

        {/* Antique Gold Divider */}
        <div className="my-2 sm:my-3">
          <GoldDivider className="w-40 sm:w-48 h-5" />
        </div>

        {/* Wedding Date & Location */}
        <div className="mt-2 mb-5 space-y-1.5">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-bold tracking-[0.2em] uppercase text-[#30251E]">
            <Calendar className="w-4 h-4 text-[#B38A45]" />
            <span>{weddingData.hero.displayDate}</span>
          </div>
          <p className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.22em] text-[#30251E]/90 font-semibold">
            {weddingData.hero.displayLocation}
          </p>
        </div>

        {/* Subtle Luxury Countdown Timer */}
        <div className="mb-2 sm:mb-4">
          <CountdownTimer targetDate={weddingData.hero.isoDate} />
        </div>
      </motion.div>

      {/* Kerala × Tamil Nadu Scenic Fusion Panorama */}
      <div className="relative w-full -mt-6 sm:-mt-12 z-10">
        {/* Top gradient blend so the panorama sky melts seamlessly into the #F8F2E8 paper background */}
        <div
          className="absolute top-0 inset-x-0 h-24 sm:h-36 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #F8F2E8 0%, rgba(248, 242, 232, 0.78) 45%, rgba(248, 242, 232, 0) 100%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative w-full aspect-[16/11] sm:aspect-[16/9] overflow-hidden"
        >
          <img
            src={weddingData.hero.panoramaImage}
            alt="Kerala Vadakkunnathan Temple and Caparisoned Elephant blending with Tamil Nadu Temple Gopuram at Sunset"
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>

        {/* Curved Golden Wave Transition & Scroll Indicator Button */}
        <div className="relative -mt-12 sm:-mt-20 z-20">
          <CurvedGoldenWave className="w-full h-14 sm:h-24" />

          {/* Centered Scroll Indicator Button on the Golden Wave */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <button
              type="button"
              onClick={scrollToStory}
              aria-label="Scroll down to Our Story"
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#7A5B34] hover:bg-[#29452F] text-[#F8F2E8] border-2 border-[#F8F2E8] shadow-[0_6px_18px_rgba(48,37,30,0.3)] transition-all duration-300 hover:scale-108 cursor-pointer"
            >
              <ChevronDown className="w-5 h-5 text-[#F8F2E8] animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
