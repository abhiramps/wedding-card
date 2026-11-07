import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { LotusMotif, GoldDivider } from '../common/Ornaments';

export const OurStorySection: React.FC = () => {
  const [showFullStory, setShowFullStory] = useState<boolean>(false);

  return (
    <section
      id="our-story"
      className="relative py-12 sm:py-20 px-6 sm:px-10 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Subtle Background Botanical Watermark */}
      <div
        className="absolute -right-12 top-8 w-64 h-64 rounded-full bg-gradient-to-br from-[#B38A45]/8 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Editorial Grid: Arch Couple Portrait (Left) + Story Content (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
        {/* Left Column: Ornamental Scalloped Indian Arch Couple Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6 flex justify-center"
        >
          <div className="relative w-full max-w-[330px] sm:max-w-[360px] aspect-[4/4.8]">
            {/* SVG Scalloped Cusped Indian Arch Clip-Path & Double Gold Border */}
            <svg
              viewBox="0 0 360 430"
              className="w-full h-full drop-shadow-[0_16px_36px_rgba(48,37,30,0.14)]"
            >
              <defs>
                <clipPath id="indianArchClip">
                  <path d="M 180 14 C 206 38, 244 42, 268 62 C 292 82, 306 96, 326 116 C 338 128, 344 146, 344 168 L 344 396 C 344 408, 334 416, 322 416 L 38 416 C 26 416, 16 408, 16 396 L 16 168 C 16 146, 22 128, 34 116 C 54 96, 68 82, 92 62 C 116 42, 154 38, 180 14 Z" />
                </clipPath>
              </defs>

              {/* Soft Cream Backing */}
              <path
                d="M 180 14 C 206 38, 244 42, 268 62 C 292 82, 306 96, 326 116 C 338 128, 344 146, 344 168 L 344 396 C 344 408, 334 416, 322 416 L 38 416 C 26 416, 16 408, 16 396 L 16 168 C 16 146, 22 128, 34 116 C 54 96, 68 82, 92 62 C 116 42, 154 38, 180 14 Z"
                fill="#EFE6D5"
              />

              {/* Masked Couple Portrait Image */}
              <g clipPath="url(#indianArchClip)">
                <image
                  href={weddingData.couple.portraitImage}
                  x="0"
                  y="0"
                  width="360"
                  height="430"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Subtle Warm Inner Vignette */}
                <rect
                  x="0"
                  y="0"
                  width="360"
                  height="430"
                  fill="url(#archVignette)"
                  opacity="0.15"
                />
              </g>

              {/* Outer Antique Gold Arch Border */}
              <path
                d="M 180 8 C 208 33, 247 38, 272 58 C 297 78, 311 93, 332 113 C 344 126, 350 144, 350 168 L 350 398 C 350 412, 339 422, 325 422 L 35 422 C 21 422, 10 412, 10 398 L 10 168 C 10 144, 16 126, 28 113 C 49 93, 63 78, 88 58 C 113 38, 152 33, 180 8 Z"
                fill="none"
                stroke="#B38A45"
                strokeWidth="2.2"
              />

              {/* Inner Delicate Gold Filigree Arch Border */}
              <path
                d="M 180 14 C 206 38, 244 42, 268 62 C 292 82, 306 96, 326 116 C 338 128, 344 146, 344 168 L 344 396 C 344 408, 334 416, 322 416 L 38 416 C 26 416, 16 408, 16 396 L 16 168 C 16 146, 22 128, 34 116 C 54 96, 68 82, 92 62 C 116 42, 154 38, 180 14 Z"
                fill="none"
                stroke="#F8F2E8"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </motion.div>

        {/* Right Column: Editorial Story Heading, Intro & Action */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
          className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Progressive Gold Lotus Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-2"
          >
            <LotusMotif className="w-11 h-8" />
          </motion.div>

          {/* Section Label & Romantic Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#30251E] tracking-wide mb-1">
            {weddingData.story.sectionLabel}
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#29452F] mb-3">
            {weddingData.story.heading}
          </p>

          <div className="mb-4">
            <GoldDivider className="w-36 h-4" />
          </div>

          {/* Short Introduction Paragraph */}
          <p className="font-sans text-sm sm:text-[15px] text-[#30251E]/90 leading-[1.8] mb-4">
            {weddingData.story.shortIntro}
          </p>

          {/* Parents / Family Blessing Note */}
          <div className="w-full py-3 px-4 rounded-xl bg-[#FBF8F2] border border-[#B38A45]/30 mb-5 text-xs font-serif text-[#5C4D42] space-y-1">
            <p>
              <strong className="text-[#29452F] font-semibold">
                {weddingData.couple.groom.shortName}:
              </strong>{' '}
              {weddingData.couple.groom.parents}
            </p>
            <p>
              <strong className="text-[#713D43] font-semibold">
                {weddingData.couple.bride.shortName}:
              </strong>{' '}
              {weddingData.couple.bride.parents}
            </p>
          </div>

          {/* "Read Our Story ->" Interactive Trigger */}
          <button
            type="button"
            onClick={() => setShowFullStory((prev) => !prev)}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold tracking-[0.12em] uppercase text-[#30251E] pb-1 border-b border-[#30251E]/60 hover:text-[#29452F] hover:border-[#29452F] transition-colors cursor-pointer"
          >
            <span>{showFullStory ? 'Close Timeline' : weddingData.story.ctaLabel}</span>
            {showFullStory ? (
              <ChevronUp className="w-4 h-4 text-[#B38A45] transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#B38A45] transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Milestone Timeline (Always visible as a compact editorial strip or expanded with full narrative) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="mt-10 sm:mt-12 pt-8 border-t border-[#B38A45]/25"
      >
        <AnimatePresence>
          {showFullStory && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="font-serif italic text-base sm:text-lg text-[#5C4D42] text-center max-w-2xl mx-auto mb-8 leading-relaxed overflow-hidden"
            >
              “{weddingData.story.extendedNarrative}”
            </motion.p>
          )}
        </AnimatePresence>

        {/* 4-Step Editorial Milestone Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {weddingData.story.milestones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="relative p-4 sm:p-5 rounded-2xl bg-[#FBF8F2]/90 border border-[#B38A45]/30 shadow-[0_4px_20px_rgba(48,37,30,0.04)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#B38A45] font-bold">
                    {item.yearOrDate}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B38A45]/60" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#29452F] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-[#5C4D42] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="text-[10px] font-serif italic text-[#713D43] mt-3 pt-2 border-t border-[#B38A45]/15">
                {item.location}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
