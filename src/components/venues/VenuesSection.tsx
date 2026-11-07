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
  return (
    <section
      id="venues"
      className="relative py-12 sm:py-18 px-5 sm:px-8 max-w-3xl mx-auto"
    >
      {/* Header Flanked by Kerala & Tamil Nadu Gold Line-Art Illustrations */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between gap-2 mb-8 sm:mb-10 border-b border-[#B38A45]/25 pb-3"
      >
        <div className="hidden xs:block sm:block opacity-85">
          <KeralaElephantLineArt className="w-28 sm:w-40 h-16 sm:h-20" />
        </div>

        <div className="flex-1 text-center flex flex-col items-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#30251E] tracking-wide">
            {weddingData.venuesSection.heading}
          </h2>
          <div className="mt-1.5">
            <GoldDivider className="w-32 sm:w-40 h-4" />
          </div>
        </div>

        <div className="hidden xs:block sm:block opacity-85">
          <TamilGopuramLineArt className="w-28 sm:w-40 h-16 sm:h-20" />
        </div>
      </motion.div>

      {/* Side-by-Side Arch-Topped Venue Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
        {weddingData.venuesSection.venues.map((venue, idx) => (
          <motion.div
            key={venue.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col justify-between"
          >
            <div>
              {/* Curved Arch-Topped Venue Photograph */}
              <div className="relative aspect-[4/3] w-full rounded-t-[42px] rounded-b-2xl overflow-hidden border-2 border-[#B38A45]/50 shadow-[0_12px_30px_rgba(48,37,30,0.1)] mb-4">
                <img
                  src={venue.image}
                  alt={venue.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30251E]/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Venue Details */}
              <div className="flex items-start gap-2.5 text-left px-1">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#B38A45]/15 border border-[#B38A45]/45 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#8C682D]" />
                </div>

                <div className="flex-1">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[#29452F] block">
                    {venue.eventLabel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#30251E] leading-snug mt-0.5">
                    {venue.name}
                  </h3>
                  <p className="font-sans text-xs text-[#5C4D42] leading-relaxed mt-1">
                    {venue.address}, {venue.city}, {venue.state}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-sans text-[#713D43] font-medium mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#B38A45] shrink-0" />
                    <span>{venue.dateAndTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Directions Button */}
            <div className="mt-4 pl-9 pr-1">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-[#FBF8F2] hover:bg-[#29452F]
                  text-[#29452F] hover:text-[#F8F2E8]
                  border border-[#B38A45]/60 hover:border-[#29452F]
                  text-xs font-sans font-bold uppercase tracking-[0.14em]
                  shadow-xs transition-all duration-300
                "
              >
                <Navigation className="w-3.5 h-3.5 text-[#B38A45]" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
