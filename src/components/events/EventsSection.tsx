import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { LotusMotif, GoldDivider, EventLineIcon } from '../common/Ornaments';

export const EventsSection: React.FC = () => {
  return (
    <section
      id="wedding-events"
      className="relative py-10 sm:py-20 px-4 sm:px-8 max-w-3xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-7 sm:mb-12 flex flex-col items-center"
      >
        <LotusMotif className="w-10 h-7 sm:w-11 sm:h-8 mb-1.5" />
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#30251E] tracking-wide">
          {weddingData.eventsSection.heading}
        </h2>
        <div className="my-1.5">
          <GoldDivider className="w-34 sm:w-36 h-4" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#5C4D42] max-w-md mx-auto mt-1 px-2">
          {weddingData.eventsSection.subtitle}
        </p>
      </motion.div>

      {/* Stacked Luxury Horizontal Event Cards — Side-by-Side on BOTH Mobile and Desktop (Matching sampleUI.png) */}
      <div className="space-y-4 sm:space-y-6">
        {weddingData.eventsSection.events.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="
              group relative grid grid-cols-12 items-center gap-3 sm:gap-6
              p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl
              bg-[#FBF8F2] border border-[#B38A45]/35
              shadow-[0_8px_26px_rgba(48,37,30,0.06)]
              hover:shadow-[0_14px_38px_rgba(179,138,69,0.14)]
              hover:border-[#B38A45]/60
              transition-all duration-300
            "
          >
            {/* Left Content: Gold Icon + Event Name, Date, Time & Venue */}
            <div className="col-span-7 flex items-start gap-2.5 sm:gap-4 sm:pl-2">
              <div className="shrink-0 pt-0.5 sm:pt-1">
                <EventLineIcon
                  type={event.icon}
                  className="w-8 h-8 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 text-left min-w-0">
                <h3 className="font-serif text-lg sm:text-[26px] font-semibold text-[#30251E] leading-tight">
                  {event.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-[#5C4D42] mb-2 sm:mb-3 leading-snug">
                  {event.subtitle}
                </p>

                {/* Date & Time Row */}
                <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-[13px] font-sans text-[#30251E] mb-1.5">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B38A45] shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <p className="font-bold text-[#30251E]">{event.date}</p>
                    <p className="text-[#5C4D42] mt-0.5">{event.time}</p>
                  </div>
                </div>

                {/* Venue Summary Row */}
                <div className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-sans text-[#5C4D42] leading-tight">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B38A45] shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-[#29452F]">{event.venue}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photograph inside Rounded Ornamental Frame */}
            <div className="col-span-5 w-full h-full flex items-center">
              <div className="relative aspect-[4/3.4] sm:aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#B38A45]/30 shadow-inner">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30251E]/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
