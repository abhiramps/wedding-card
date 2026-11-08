import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
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
      className="relative w-full overflow-hidden pt-11 sm:pt-14 flex flex-col items-center text-center"
    >
      {/* Top Hanging Floral Canopies — Scaled for Mobile so they frame without overlapping text */}
      <div className="absolute top-0 -left-2 sm:left-0 z-20 pointer-events-none">
        <HangingJasmineGarland
          side="left"
          className="w-22 sm:w-38 md:w-46 h-36 sm:h-60 md:h-72"
        />
      </div>
      <div className="absolute top-0 -right-2 sm:right-0 z-20 pointer-events-none">
        <HangingJasmineGarland
          side="right"
          withPinkBlossoms
          className="w-22 sm:w-38 md:w-46 h-36 sm:h-60 md:h-72"
        />
      </div>

      {/* Main Invitation Typography Block */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-2xl mx-auto px-5 sm:px-6 flex flex-col items-center"
      >
        {/* Auspicious Antique Gold Ganesha Emblem */}
        <div className="mb-2.5 sm:mb-4">
          <GaneshaEmblem className="w-12 h-14 sm:w-16 sm:h-18 mx-auto" />
        </div>

        {/* Invitation Header Labels */}
        <p className="text-xs sm:text-sm font-serif italic text-[#5C4D42] tracking-wide mb-1">
          {weddingData.hero.familiesLine}
        </p>
        <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#30251E] font-normal mb-4 sm:mb-5">
          {weddingData.hero.invitedLine}
        </p>

        {/* Couple Names & Parentage in Elegant Forest Green Serif */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
          <div>
            <h1 className="font-serif text-[34px] sm:text-6xl md:text-7xl font-medium text-[#29452F] tracking-normal leading-[1.1]">
              {weddingData.couple.groom.name}
            </h1>
            <p className="font-serif italic text-[11px] sm:text-sm text-[#5C4D42] mt-1 max-w-xs sm:max-w-none mx-auto leading-snug">
              ({weddingData.couple.groom.parents})
            </p>
          </div>

          <div className="py-0.5">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#29452F]/90">
              &amp;
            </span>
          </div>

          <div>
            <h2 className="font-serif text-[34px] sm:text-6xl md:text-7xl font-medium text-[#29452F] tracking-normal leading-[1.1]">
              {weddingData.couple.bride.name}
            </h2>
            <p className="font-serif italic text-[11px] sm:text-sm text-[#5C4D42] mt-1 max-w-xs sm:max-w-none mx-auto leading-snug">
              ({weddingData.couple.bride.parents})
            </p>
          </div>
        </div>

        {/* Antique Gold Divider */}
        <div className="my-1.5 sm:my-3">
          <GoldDivider className="w-36 sm:w-48 h-5" />
        </div>

        {/* Wedding Date, Time & Venue Location */}
        <div className="mt-2 mb-4 sm:mb-5 space-y-1.5">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-sans font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#30251E]">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B38A45] shrink-0" />
            <span>{weddingData.hero.displayDate}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-sans uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#29452F] font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#B38A45] shrink-0" />
            <span>{weddingData.hero.displayLocation}</span>
          </div>
        </div>

        {/* Subtle Luxury Countdown Timer */}
        <div className="mb-3 sm:mb-4 w-full flex justify-center">
          <CountdownTimer targetDate={weddingData.hero.isoDate} />
        </div>
      </motion.div>

      {/* Kerala × Tamil Nadu Scenic Fusion Panorama */}
      <div className="relative w-full -mt-4 sm:-mt-12 z-10">
        {/* Top gradient blend so the panorama sky melts seamlessly into the #F8F2E8 paper background */}
        <div
          className="absolute top-0 inset-x-0 h-16 sm:h-36 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #F8F2E8 0%, rgba(248, 242, 232, 0.78) 45%, rgba(248, 242, 232, 0) 100%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden"
        >
          <img
            src={weddingData.hero.panoramaImage}
            alt="Kerala Vadakkunnathan Temple and Caparisoned Elephant blending with Tamil Nadu Temple Gopuram at Sunset"
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>

        {/* Curved Golden Wave Transition & Scroll Indicator Button */}
        <div className="relative -mt-10 sm:-mt-20 z-20">
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
