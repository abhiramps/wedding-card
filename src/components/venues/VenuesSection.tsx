import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import {
  GoldDivider,
  KeralaElephantLineArt,
  TamilGopuramLineArt,
} from '../common/Ornaments';

export const VenuesSection: React.FC = () => {
  const isSingleVenue = weddingData.venuesSection.venues.length === 1;

  return (
    <section
      id="venues"
      className="relative py-10 sm:py-18 px-4 sm:px-8 max-w-3xl mx-auto"
    >
      {/* Header Flanked by Kerala & Tamil Nadu Gold Line-Art Illustrations (Visible on Mobile & Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between gap-1 sm:gap-2 mb-7 sm:mb-10 border-b border-[#B38A45]/25 pb-2.5"
      >
        <div className="opacity-85 shrink-0">
          <KeralaElephantLineArt className="w-20 sm:w-40 h-11 sm:h-20" />
        </div>

        <div className="flex-1 text-center flex flex-col items-center min-w-0">
          <h2 className="font-serif text-2xl sm:text-4xl font-medium text-[#30251E] tracking-wide whitespace-nowrap">
            {weddingData.venuesSection.heading}
          </h2>
          <div className="mt-1">
            <GoldDivider className="w-24 sm:w-40 h-3.5 sm:h-4" />
          </div>
        </div>

        <div className="opacity-85 shrink-0">
          <TamilGopuramLineArt className="w-20 sm:w-40 h-11 sm:h-20" />
        </div>
      </motion.div>

      {/* Arch-Topped Venue Card(s) — Centered when single venue, 2-column grid when multiple */}
      <div
        className={
          isSingleVenue
            ? 'max-w-md mx-auto'
            : 'grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8'
        }
      >
        {weddingData.venuesSection.venues.map((venue, idx) => (
          <motion.div
            key={venue.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-[#FBF8F2] border border-[#B38A45]/35 shadow-[0_10px_28px_rgba(48,37,30,0.06)]"
          >
            <div>
              {/* Curved Arch-Topped Venue Photograph */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-t-[36px] sm:rounded-t-[42px] rounded-b-2xl overflow-hidden border-2 border-[#B38A45]/50 shadow-[0_8px_24px_rgba(48,37,30,0.1)] mb-4">
                <img
                  src={venue.image}
                  alt={venue.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30251E]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Venue Details */}
              <div className="flex items-start gap-2.5 text-left px-1">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#B38A45]/15 border border-[#B38A45]/45 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#8C682D]" />
                </div>

                <div className="flex-1">
                  <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#29452F] block">
                    {venue.eventLabel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#30251E] leading-snug mt-0.5">
                    {venue.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#5C4D42] leading-relaxed mt-1">
                    {venue.address}, {venue.city}, {venue.state}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#713D43] font-semibold mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#B38A45] shrink-0" />
                    <span>{venue.dateAndTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Button (Full-width touch target on mobile) */}
            <div className="mt-4 pt-3 border-t border-[#B38A45]/20">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                  bg-[#29452F] hover:bg-[#1E3524]
                  text-[#F8F2E8]
                  border border-[#B38A45]/60
                  text-xs font-sans font-bold uppercase tracking-[0.16em]
                  shadow-sm transition-all duration-300 active:scale-98
                "
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4B475]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
