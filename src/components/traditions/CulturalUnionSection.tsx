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
      className="relative pt-10 sm:pt-14 pb-20 sm:pb-28 overflow-hidden text-center"
    >
      {/* Subtle Kolam / Kasavu geometric background accent */}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col items-center"
        >
          {/* Heading: "Two Cultures, One Celebration" */}
          <h2 className="font-serif italic text-2xl sm:text-4xl text-[#30251E] tracking-wide mb-2">
            {weddingData.culturalUnion.heading}
          </h2>

          <div className="my-2">
            <GoldDivider className="w-36 sm:w-44 h-4" />
          </div>

          {/* Short Editorial Description */}
          <p className="font-sans text-xs sm:text-sm text-[#30251E]/85 max-w-lg mx-auto leading-[1.8] mt-2 mb-8 sm:mb-10">
            {weddingData.culturalUnion.description}
          </p>
        </motion.div>

        {/* Antique Gold Line-Art Panoramic Frieze: Kerala Elephant & Temple + Lotus + Tamil Gopuram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-2 px-2 sm:px-4"
        >
          {/* Left: Kerala Heritage Line Art */}
          <div className="flex flex-col items-center">
            <KeralaElephantLineArt className="w-56 sm:w-64 md:w-72 h-32 sm:h-36" />
            <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#29452F] font-semibold mt-2">
              {weddingData.culturalUnion.keralaLabel}
            </span>
          </div>

          {/* Center: Sacred Lotus Emblem */}
          <div className="pb-2 sm:pb-8 flex flex-col items-center">
            <LotusMotif className="w-12 h-9" />
          </div>

          {/* Right: Tamil Nadu Heritage Line Art */}
          <div className="flex flex-col items-center">
            <TamilGopuramLineArt className="w-56 sm:w-64 md:w-72 h-32 sm:h-36" />
            <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-[#713D43] font-semibold mt-2">
              {weddingData.culturalUnion.tamilNaduLabel}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Banana Leaf (Left) & Kasavu × Kanjeevaram Silk Saree Drape (Right/Bottom) */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 sm:h-28 pointer-events-none select-none overflow-hidden"
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

          {/* Flowing Kasavu Cream & Gold Zari Saree Wave Across the Center/Right */}
          <path
            d="M320 140C480 65 780 95 1200 20V140H320Z"
            fill="url(#kasavuSilk)"
          />
          <path
            d="M360 140C520 75 810 102 1200 32"
            stroke="url(#zariGold)"
            strokeWidth="8"
          />
          <path
            d="M390 140C545 84 825 110 1200 44"
            stroke="url(#zariGold)"
            strokeWidth="3"
          />

          {/* Deep Maroon Kanjeevaram Silk Pallu Corner on Bottom Right */}
          <path
            d="M780 140C920 96 1060 65 1200 18V140H780Z"
            fill="url(#kanjeevaramMaroon)"
          />
          <path
            d="M765 140C910 92 1055 60 1200 12"
            stroke="url(#zariGold)"
            strokeWidth="6"
          />

          {/* Lush Green Banana Leaf (Vazhayila) on Bottom Left */}
          <path
            d="M-20 45C95 45 215 82 290 140H-20V45Z"
            fill="#2E5432"
          />
          <path
            d="M-20 62C85 68 190 98 265 140"
            stroke="#5D8A58"
            strokeWidth="2.5"
          />
          {/* Banana Leaf Veins */}
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
