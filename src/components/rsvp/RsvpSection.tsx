import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Check, Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import type { RsvpOption } from '../../types/wedding';
import {
  LotusMotif,
  GoldDivider,
  HangingJasmineGarland,
  BrassNilavilakku,
} from '../common/Ornaments';

export const RsvpSection: React.FC = () => {
  const [selectedAttendance, setSelectedAttendance] = useState<RsvpOption['id']>('accept');
  const [guestName, setGuestName] = useState<string>('');
  const [guestCount, setGuestCount] = useState<string>(
    weddingData.rsvpSection.guestCountOptions[0]
  );
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitted(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && selectedAttendance !== 'decline') {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.75 },
        colors: ['#F8F2E8', '#B38A45', '#D4B475', '#FFFDF7'],
      });
    }
  };

  return (
    <section id="rsvp" className="relative pt-6 sm:pt-12 pb-4 px-3.5 sm:px-8 max-w-4xl mx-auto">
      {/* Main Forest Green Invitation Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden
          border-2 border-[#B38A45]/75
          shadow-[0_20px_50px_rgba(29,51,34,0.3)]
          pt-12 sm:pt-18 pb-22 sm:pb-24 px-4 sm:px-12
        "
        style={{
          background:
            'radial-gradient(circle at 50% 38%, #34573B 0%, #29452F 55%, #1A2E1E 100%)',
        }}
      >
        {/* Top Hanging White Jasmine Garlands — Scaled for Mobile */}
        <div className="absolute top-0 -left-2 sm:left-0 z-20 pointer-events-none">
          <HangingJasmineGarland side="left" className="w-20 sm:w-36 h-32 sm:h-56" />
        </div>
        <div className="absolute top-0 -right-2 sm:right-0 z-20 pointer-events-none">
          <HangingJasmineGarland side="right" className="w-20 sm:w-36 h-32 sm:h-56" />
        </div>

        {/* Scalloped Cusped Antique Gold Inner Arch Border */}
        <div
          className="absolute inset-x-2.5 sm:inset-x-8 top-4 sm:top-6 bottom-9 sm:bottom-10 pointer-events-none z-10"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 600 720"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 300 10 C 345 48, 410 52, 455 86 C 500 120, 535 140, 568 175 C 584 192, 590 218, 590 250 L 590 705 L 10 705 L 10 250 C 10 218, 16 192, 32 175 C 65 140, 100 120, 145 86 C 190 52, 255 48, 300 10 Z"
              fill="rgba(41, 69, 47, 0.35)"
              stroke="#B38A45"
              strokeWidth="2"
              strokeOpacity="0.85"
            />
            <path
              d="M 300 20 C 342 55, 405 60, 448 92 C 491 124, 526 144, 558 178 C 573 194, 580 218, 580 250 L 580 695 L 20 695 L 20 250 C 20 218, 27 194, 42 178 C 74 144, 109 124, 152 92 C 195 60, 258 55, 300 20 Z"
              fill="none"
              stroke="#D4B475"
              strokeWidth="0.9"
              strokeOpacity="0.45"
            />
          </svg>
        </div>

        {/* Center RSVP Content Inside the Arch */}
        <div className="relative z-20 max-w-md mx-auto text-center flex flex-col items-center pt-3 sm:pt-6 px-2 sm:px-0">
          <LotusMotif className="w-10 h-7 sm:w-12 sm:h-9 mb-1.5" color="#D4B475" />

          <span className="font-serif text-2xl sm:text-3xl tracking-[0.14em] uppercase text-[#F8F2E8] font-medium">
            {weddingData.rsvpSection.label}
          </span>

          <h2 className="font-serif text-lg sm:text-2xl text-[#F8F2E8]/95 mt-1 font-normal px-2">
            {weddingData.rsvpSection.heading}
          </h2>

          <div className="my-2">
            <GoldDivider className="w-32 sm:w-36 h-4" color="#D4B475" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#F8F2E8]/80 mb-5">
            {weddingData.rsvpSection.subtitle}
          </p>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="rsvp-thank-you"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full p-5 sm:p-8 rounded-3xl bg-[#F8F2E8]/12 backdrop-blur-xs border border-[#B38A45]/60 text-center my-3"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F8F2E8] text-[#29452F] flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F8F2E8] font-semibold">
                  Thank You, {guestName}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#F8F2E8]/85 mt-2 leading-relaxed">
                  {selectedAttendance === 'accept'
                    ? `We have joyfully noted your attendance (${guestCount}). We cannot wait to celebrate with you!`
                    : selectedAttendance === 'maybe'
                    ? 'Thank you for letting us know! We hope to welcome you at the celebrations.'
                    : 'We will miss your presence, and we deeply appreciate your warm wishes and blessings.'}
                </p>
                {message && (
                  <p className="font-serif italic text-xs text-[#D4B475] mt-3 pt-3 border-t border-[#B38A45]/30">
                    “{message}”
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-sans uppercase tracking-[0.16em] text-[#D4B475] hover:text-[#F8F2E8] underline underline-offset-4 py-1 cursor-pointer"
                >
                  Update Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="w-full space-y-3.5 sm:space-y-4 text-left"
              >
                {/* Attendance Pill Selector */}
                <div
                  className="space-y-2.5 mb-4"
                  role="radiogroup"
                  aria-label="Attendance confirmation"
                >
                  {weddingData.rsvpSection.options.map((opt) => {
                    const isSelected = selectedAttendance === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedAttendance(opt.id)}
                        className={`
                          w-full py-3 px-4 rounded-full font-sans text-xs sm:text-sm font-bold tracking-[0.05em]
                          flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer
                          ${
                            isSelected
                              ? 'bg-[#F8F2E8] text-[#29452F] border-2 border-[#F8F2E8] shadow-[0_6px_20px_rgba(0,0,0,0.22)]'
                              : 'bg-transparent text-[#F8F2E8]/90 border border-[#B38A45]/70 hover:border-[#D4B475] hover:bg-[#F8F2E8]/8'
                          }
                        `}
                      >
                        <span>{opt.label}</span>
                        <span className="text-[11px] font-normal opacity-75">
                          ({opt.shortLabel})
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#29452F] stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>

                {/* Guest Name & Number of Guests (text-base on mobile prevents iOS Safari auto-zoom) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-7">
                    <label
                      htmlFor="rsvp-guest-name"
                      className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#D4B475] mb-1 pl-1"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="rsvp-guest-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full bg-[#1B3020]/85 border border-[#B38A45]/60 text-[#F8F2E8] placeholder-[#F8F2E8]/40 text-base sm:text-sm font-sans focus:outline-none focus:border-[#F8F2E8] transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-5">
                    <label
                      htmlFor="rsvp-guest-count"
                      className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#D4B475] mb-1 pl-1"
                    >
                      Guests
                    </label>
                    <select
                      id="rsvp-guest-count"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      disabled={selectedAttendance === 'decline'}
                      className="w-full px-4 py-2.5 rounded-full bg-[#1B3020]/85 border border-[#B38A45]/60 text-[#F8F2E8] text-base sm:text-sm font-sans focus:outline-none focus:border-[#F8F2E8] disabled:opacity-40 transition-colors"
                    >
                      {weddingData.rsvpSection.guestCountOptions.map((countOpt) => (
                        <option
                          key={countOpt}
                          value={countOpt}
                          className="bg-[#29452F] text-[#F8F2E8]"
                        >
                          {countOpt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message / Blessing */}
                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="block text-[10px] font-sans uppercase tracking-[0.18em] text-[#D4B475] mb-1 pl-1"
                  >
                    Wishes for the Couple (Optional)
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={2}
                    placeholder="Share a warm note or blessing..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#1B3020]/85 border border-[#B38A45]/60 text-[#F8F2E8] placeholder-[#F8F2E8]/40 text-base sm:text-sm font-sans focus:outline-none focus:border-[#F8F2E8] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="
                      w-full sm:w-auto min-w-[220px] py-3.5 sm:py-3 px-8 rounded-full
                      bg-gradient-to-r from-[#D4B475] via-[#B38A45] to-[#9A7332]
                      text-[#1D2D20] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.18em]
                      shadow-[0_8px_24px_rgba(0,0,0,0.28)]
                      hover:brightness-110 active:scale-98 transition-all duration-300
                      inline-flex items-center justify-center gap-2 cursor-pointer
                    "
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm RSVP</span>
                  </button>
                  <p className="text-[10px] font-sans text-[#F8F2E8]/55 mt-2">
                    {weddingData.rsvpSection.deadlineText}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Ledge */}
        <div
          className="absolute bottom-0 inset-x-0 h-9 sm:h-10 bg-gradient-to-t from-[#3B2A1E] via-[#59412E] to-[#7A5B40] border-t border-[#B38A45]/60 z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom Left Fresh Jasmine Blossoms & Leaves — Scaled for Mobile */}
        <div
          className="absolute bottom-1.5 left-1 sm:left-5 z-20 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 150 130" className="w-20 sm:w-36 h-18 sm:h-32">
            <path d="M12 110C4 70 18 32 45 12C52 44 40 82 12 110Z" fill="#467042" />
            <path d="M22 112C38 78 68 54 102 48C84 78 56 102 22 112Z" fill="#588552" />
            {[
              { x: 26, y: 92 },
              { x: 44, y: 88 },
              { x: 62, y: 96 },
              { x: 35, y: 104 },
              { x: 54, y: 106 },
              { x: 74, y: 106 },
              { x: 18, y: 106 },
            ].map((p, idx) => (
              <g key={idx} transform={`translate(${p.x}, ${p.y})`}>
                <circle cx="0" cy="-4.5" r="4.5" fill="#FFFDF8" />
                <circle cx="4.5" cy="0" r="4.5" fill="#FFFDF8" />
                <circle cx="0" cy="4.5" r="4.5" fill="#FFFDF8" />
                <circle cx="-4.5" cy="0" r="4.5" fill="#FFFDF8" />
                <circle cx="0" cy="0" r="2.2" fill="#D4AF37" />
              </g>
            ))}
          </svg>
        </div>

        {/* Bottom Right Gleaming Brass Nilavilakku Oil Lamp — Scaled for Mobile */}
        <div
          className="absolute bottom-1.5 right-0.5 sm:right-5 z-20 pointer-events-none select-none"
          aria-hidden="true"
        >
          <BrassNilavilakku className="w-15 sm:w-28 h-28 sm:h-48 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
        </div>
      </motion.div>
    </section>
  );
};
