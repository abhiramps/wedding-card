import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { weddingData } from '../../data/weddingData';
import {
  LotusMotif,
  GoldDivider,
  FloralCornerSpray,
  KeralaElephantLineArt,
  TamilGopuramLineArt,
} from '../common/Ornaments';

interface EnvelopeOpeningProps {
  isOpen: boolean;
  onOpen: () => void;
}

type AnimationStage = 'closed' | 'flap-open' | 'card-risen' | 'exiting';

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState<AnimationStage>('closed');

  const triggerPetalBurst = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    confetti({
      particleCount: 45,
      spread: 75,
      origin: { y: 0.55 },
      colors: ['#FFFDF7', '#F8F2E8', '#B38A45', '#DF8B96', '#D4B475'],
      ticks: 180,
      gravity: 0.65,
      scalar: 0.9,
    });
  };

  const handleStartOpen = () => {
    if (stage !== 'closed') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onOpen();
      return;
    }

    // Step 1: Rotate 3D envelope flap open
    setStage('flap-open');
    triggerPetalBurst();

    // Step 2: Slide invitation card upwards out of the envelope pocket
    setTimeout(() => {
      setStage('card-risen');
    }, 650);

    // Step 3: Smoothly transition into the main invitation page
    setTimeout(() => {
      setStage('exiting');
    }, 2350);

    setTimeout(() => {
      onOpen();
    }, 2800);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between py-8 sm:py-12 px-4 overflow-hidden select-none"
          style={{
            background:
              'radial-gradient(circle at 50% 48%, #47392E 0%, #2C221B 55%, #1E1712 100%)',
          }}
        >
          {/* Warm textured paper overlay & golden ambient glow */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#B38A45 0.75px, transparent 0.75px)',
              backgroundSize: '24px 24px',
            }}
          />
          <motion.div
            animate={{
              scale: stage === 'card-risen' || stage === 'exiting' ? 1.35 : 1,
              opacity: stage === 'card-risen' ? 0.55 : 0.28,
            }}
            transition={{ duration: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#B38A45]/50 via-[#F8F2E8]/25 to-transparent blur-3xl pointer-events-none"
          />

          {/* Top Header: "You Are Cordially Invited" */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 text-center"
          >
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#D4B475] font-sans mb-1.5">
              {weddingData.couple.groom.district}, {weddingData.couple.groom.state} ×{' '}
              {weddingData.couple.bride.district}, {weddingData.couple.bride.state}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#F8F2E8] tracking-wide">
              {weddingData.envelope.invitationText}
            </h1>
            <div className="flex justify-center mt-2">
              <GoldDivider className="w-36 h-4" color="#D4B475" />
            </div>
          </motion.div>

          {/* Center Interactive 3D Envelope & Rising Invitation Card */}
          <div className="relative z-20 my-auto flex items-center justify-center w-full max-w-[360px] sm:max-w-[430px] pt-14 pb-6">
            {/* Decorative Jasmine Buds Tucked Behind Left Edge of Envelope */}
            <div
              className="absolute -left-5 sm:-left-8 top-1/3 z-0 pointer-events-none animate-sway"
              aria-hidden="true"
            >
              <svg viewBox="0 0 80 140" className="w-16 sm:w-20 h-28 sm:h-36">
                <path d="M55 25C30 45 25 85 50 120" stroke="#4D6B43" strokeWidth="2" fill="none" />
                {[30, 48, 66, 84, 102].map((y, i) => (
                  <g key={y} transform={`translate(${i % 2 === 0 ? 28 : 38}, ${y})`}>
                    <ellipse cx="0" cy="0" rx="9" ry="5.5" transform="rotate(-25)" fill="#FFFDF7" stroke="#D9C6A3" strokeWidth="0.8" />
                    <ellipse cx="8" cy="5" rx="8" ry="5" transform="rotate(20)" fill="#F8F2E8" stroke="#D9C6A3" strokeWidth="0.8" />
                    <circle cx="4" cy="2" r="2.5" fill="#E3C16F" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Decorative Jasmine Cluster at Bottom Right */}
            <div
              className="absolute -right-4 sm:-right-7 -bottom-2 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 80" className="w-20 sm:w-24 h-16 sm:h-20">
                <ellipse cx="35" cy="45" rx="14" ry="7" transform="rotate(-15 35 45)" fill="#4A6B46" />
                <ellipse cx="68" cy="52" rx="14" ry="7" transform="rotate(25 68 52)" fill="#3B5938" />
                {[
                  { x: 42, y: 42 },
                  { x: 56, y: 38 },
                  { x: 48, y: 52 },
                  { x: 64, y: 48 },
                ].map((pos, idx) => (
                  <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle cx="0" cy="-4" r="4.5" fill="#FFFDF8" />
                    <circle cx="4" cy="0" r="4.5" fill="#FFFDF8" />
                    <circle cx="0" cy="4" r="4.5" fill="#FFFDF8" />
                    <circle cx="-4" cy="0" r="4.5" fill="#FFFDF8" />
                    <circle cx="0" cy="0" r="2" fill="#D4AF37" />
                  </g>
                ))}
              </svg>
            </div>

            {/* 3D Envelope Wrapper */}
            <div
              onClick={handleStartOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleStartOpen();
                }
              }}
              aria-label="Open Wedding Invitation Envelope"
              className="group relative w-full aspect-[4/3] perspective-1200 cursor-pointer focus:outline-none"
            >
              {/* Envelope Back Base */}
              <div className="absolute inset-0 rounded-xl bg-[#E5D5BC] border border-[#B38A45]/60 shadow-[0_25px_70px_rgba(0,0,0,0.65)]" />

              {/* THE INNER WEDDING INVITATION CARD (Slides Upwards when Flap Opens) */}
              <motion.div
                initial={{ y: 8, scale: 0.94, opacity: 0.9 }}
                animate={
                  stage === 'card-risen' || stage === 'exiting'
                    ? { y: -88, scale: 1.02, opacity: 1 }
                    : stage === 'flap-open'
                    ? { y: -18, scale: 0.97, opacity: 1 }
                    : { y: 8, scale: 0.94, opacity: 0.9 }
                }
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="
                  absolute inset-x-4 sm:inset-x-5 -top-6 bottom-3 z-20
                  rounded-lg bg-[#F8F2E8] paper-texture
                  border border-[#B38A45]/70
                  shadow-[0_14px_40px_rgba(48,37,30,0.35)]
                  flex flex-col items-center justify-between p-4 sm:p-5 text-center overflow-hidden
                "
              >
                {/* Inner Gold Frame Line */}
                <div className="absolute inset-2 border border-[#B38A45]/45 pointer-events-none rounded" />

                {/* Floral Corner Sprays on Inner Card */}
                <FloralCornerSpray className="absolute top-1.5 left-1.5 w-14 sm:w-16 h-14 sm:h-16 pointer-events-none" />
                <FloralCornerSpray
                  className="absolute top-1.5 right-1.5 w-14 sm:w-16 h-14 sm:h-16 pointer-events-none"
                  flipX
                />

                {/* Top Lotus Emblem */}
                <div className="relative z-10 mt-1">
                  <LotusMotif className="w-9 h-6 mx-auto" />
                </div>

                {/* Script "You're Invited" & Couple Names */}
                <div className="relative z-10 my-auto py-1">
                  <p className="font-script text-2xl sm:text-3xl text-[#8C682D] leading-none mb-1">
                    {weddingData.envelope.cardScriptTitle}
                  </p>
                  <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#29452F] tracking-wide leading-tight">
                    {weddingData.couple.groom.name}
                    <span className="block text-xs font-sans font-normal text-[#B38A45] my-0.5">
                      &amp;
                    </span>
                    {weddingData.couple.bride.name}
                  </h2>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#30251E]/80 font-sans mt-1.5">
                    {weddingData.hero.displayDate}
                  </p>
                </div>

                {/* Miniature Gold Line-Art Temple & Elephant Skyline at Bottom of Card */}
                <div className="relative z-10 w-full flex items-end justify-between px-2 opacity-80 pointer-events-none -mb-1">
                  <KeralaElephantLineArt className="w-24 sm:w-28 h-12" />
                  <TamilGopuramLineArt className="w-24 sm:w-28 h-12" />
                </div>
              </motion.div>

              {/* Envelope Side & Bottom Pocket Flaps (In front of the card so the card slides out from inside!) */}
              <div
                className="absolute inset-0 z-30 pointer-events-none rounded-xl overflow-hidden"
                aria-hidden="true"
              >
                {/* Left Pocket Fold */}
                <div
                  className="absolute inset-0 damask-pattern border-r border-[#B38A45]/40 shadow-inner"
                  style={{
                    clipPath: 'polygon(0 0, 52% 52%, 0 100%)',
                  }}
                />
                {/* Right Pocket Fold */}
                <div
                  className="absolute inset-0 damask-pattern border-l border-[#B38A45]/40 shadow-inner"
                  style={{
                    clipPath: 'polygon(100% 0, 48% 52%, 100% 100%)',
                  }}
                />
                {/* Bottom Pocket Fold */}
                <div
                  className="absolute inset-0 damask-pattern shadow-[0_-6px_18px_rgba(48,37,30,0.18)]"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 46%, 100% 100%)',
                  }}
                />
                {/* Gold Trim Lines Along Diagonal Pocket Folds */}
                <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <path d="M0 0L200 156L400 0" stroke="#B38A45" strokeWidth="1.2" strokeOpacity="0.45" fill="none" />
                  <path d="M0 300L200 140L400 300" stroke="#B38A45" strokeWidth="1.8" strokeOpacity="0.7" fill="none" />
                </svg>
              </div>

              {/* 3D Top Rotating Envelope Flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: stage === 'closed' ? 0 : 180,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                  zIndex: stage === 'closed' ? 40 : 10,
                }}
                className="absolute top-0 left-0 right-0 h-[58%] pointer-events-none"
              >
                <div
                  className="w-full h-full damask-pattern shadow-[0_10px_25px_rgba(48,37,30,0.28)]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                >
                  <svg viewBox="0 0 400 180" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M2 0L200 176L398 0"
                      stroke="#B38A45"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M14 0L200 165L386 0"
                      stroke="#B38A45"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                      strokeOpacity="0.6"
                      fill="none"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Center Bronze / Antique Gold Embossed Lotus Wax Seal */}
              <motion.div
                animate={
                  stage === 'closed'
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.7, opacity: 0, y: -20 }
                }
                transition={{ duration: 0.35 }}
                className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
              >
                {/* Subtle pulsing gold halo */}
                <span
                  className="absolute -inset-2.5 rounded-full border border-[#D4B475]/50 animate-ping pointer-events-none"
                  style={{ animationDuration: '2.8s' }}
                />
                {/* Realistic 3D Wax Seal Medallion */}
                <div
                  className="
                    w-16 h-16 sm:w-20 sm:h-20 rounded-full
                    flex flex-col items-center justify-center
                    border-2 border-[#D4B475]
                    shadow-[0_8px_22px_rgba(30,20,12,0.55),inset_0_2px_6px_rgba(255,235,190,0.45)]
                    transition-transform duration-300 group-hover:scale-108
                  "
                  style={{
                    background:
                      'radial-gradient(circle at 35% 30%, #B8733E 0%, #8F4F26 55%, #5E3114 100%)',
                  }}
                >
                  <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full border border-[#E6C687]/60 flex items-center justify-center shadow-inner">
                    <LotusMotif className="w-8 h-6 sm:w-9 sm:h-7" color="#F5DDA9" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Controls: "Open Invitation" CTA & "Skip Animation" */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-20 flex flex-col items-center gap-3"
          >
            <button
              type="button"
              onClick={handleStartOpen}
              disabled={stage !== 'closed'}
              className="
                px-8 py-3 rounded-full
                bg-gradient-to-r from-[#C8A25A] via-[#B38A45] to-[#9A7332]
                text-[#1E1712] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em]
                shadow-[0_8px_25px_rgba(179,138,69,0.4)]
                hover:brightness-110 active:scale-98 transition-all duration-300
                disabled:opacity-60 cursor-pointer
              "
            >
              {stage === 'closed' ? weddingData.envelope.openButtonLabel : 'Opening Invitation...'}
            </button>

            <button
              type="button"
              onClick={handleSkip}
              className="text-xs font-sans tracking-[0.16em] uppercase text-[#F8F2E8]/65 hover:text-[#F8F2E8] underline underline-offset-4 transition-colors py-1 cursor-pointer"
            >
              {weddingData.envelope.skipButtonLabel}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
