import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../../data/weddingData';
import {
  LotusMotif,
  GoldDivider,
  KeralaElephantLineArt,
  TamilGopuramLineArt,
} from '../common/Ornaments';

export const CulturalUnionSection: React.FC = () => {
  return (
    <section
      id="two-cultures"
      className="relative pt-8 sm:pt-14 pb-18 sm:pb-28 overflow-hidden text-center"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Heading: "Two Cultures, One Celebration" */}
          <h2 className="font-serif italic text-[26px] sm:text-4xl text-[#30251E] tracking-wide mb-1.5">
            {weddingData.culturalUnion.heading}
          </h2>

          <div className="my-1.5">
            <GoldDivider className="w-34 sm:w-44 h-4" />
          </div>

          {/* Short Editorial Description */}
          <p className="font-sans text-xs sm:text-sm text-[#30251E]/85 max-w-md sm:max-w-lg mx-auto leading-[1.75] mt-1.5 mb-6 sm:mb-10 px-1">
            {weddingData.culturalUnion.description}
          </p>
        </motion.div>

        {/* Side-by-Side Panoramic Frieze on BOTH Mobile and Desktop (Matching sampleUI.png) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-11 items-end gap-1 sm:gap-3 px-1 sm:px-4"
        >
          {/* Left: Kerala Heritage Line Art */}
          <div className="col-span-5 flex flex-col items-center">
            <KeralaElephantLineArt className="w-full max-w-[165px] sm:max-w-[270px] h-20 sm:h-36" />
          </div>

          {/* Center: Sacred Lotus Emblem */}
          <div className="col-span-1 pb-3 sm:pb-8 flex justify-center">
            <LotusMotif className="w-8 h-6 sm:w-12 sm:h-9" />
          </div>

          {/* Right: Tamil Nadu Heritage Line Art */}
          <div className="col-span-5 flex flex-col items-center">
            <TamilGopuramLineArt className="w-full max-w-[165px] sm:max-w-[270px] h-20 sm:h-36" />
          </div>
        </motion.div>

        {/* Cultural Heritage Labels */}
        <div className="grid grid-cols-2 gap-3 mt-2.5 px-2 text-[9.5px] sm:text-[10px] font-sans uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold">
          <p className="text-[#29452F]">{weddingData.culturalUnion.keralaLabel}</p>
          <p className="text-[#713D43]">{weddingData.culturalUnion.tamilNaduLabel}</p>
        </div>
      </div>

      {/* Bottom Decorative Banana Leaf (Left) & Kasavu × Kanjeevaram Silk Saree Drape (Right/Bottom) */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 sm:h-28 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="kasavuSilk" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EFE5D4" />
              <stop offset="50%" stopColor="#F8F2E8" />
              <stop offset="100%" stopColor="#E4D4B8" />
            </linearGradient>
            <linearGradient id="zariGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9A7332" />
              <stop offset="50%" stopColor="#D4B475" />
              <stop offset="100%" stopColor="#B38A45" />
            </linearGradient>
            <linearGradient id="kanjeevaramMaroon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8A3B42" />
              <stop offset="50%" stopColor="#713D43" />
              <stop offset="100%" stopColor="#4A2226" />
            </linearGradient>
          </defs>

          {/* Flowing Kasavu Cream & Gold Zari Saree Wave */}
          <path d="M320 140C480 65 780 95 1200 20V140H320Z" fill="url(#kasavuSilk)" />
          <path d="M360 140C520 75 810 102 1200 32" stroke="url(#zariGold)" strokeWidth="8" />
          <path d="M390 140C545 84 825 110 1200 44" stroke="url(#zariGold)" strokeWidth="3" />

          {/* Deep Maroon Kanjeevaram Silk Pallu Corner on Bottom Right */}
          <path d="M780 140C920 96 1060 65 1200 18V140H780Z" fill="url(#kanjeevaramMaroon)" />
          <path d="M765 140C910 92 1055 60 1200 12" stroke="url(#zariGold)" strokeWidth="6" />

          {/* Lush Green Banana Leaf (Vazhayila) on Bottom Left */}
          <path d="M-20 45C95 45 215 82 290 140H-20V45Z" fill="#2E5432" />
          <path d="M-20 62C85 68 190 98 265 140" stroke="#5D8A58" strokeWidth="2.5" />
          {[30, 65, 100, 135, 170, 205].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${68 + i * 10}L${x + 28} ${52 + i * 9}`}
              stroke="#467345"
              strokeWidth="1.4"
            />
          ))}
        </svg>
      </div>
    </section>
  );
};
