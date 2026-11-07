import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { LotusMotif, GoldDivider, EventLineIcon } from '../common/Ornaments';

export const EventsSection: React.FC = () => {
  return (
    <section
      id="wedding-events"
      className="relative py-14 sm:py-20 px-5 sm:px-8 max-w-3xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 sm:mb-12 flex flex-col items-center"
      >
        <LotusMotif className="w-11 h-8 mb-2" />
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#30251E] tracking-wide">
          {weddingData.eventsSection.heading}
        </h2>
        <div className="my-2">
          <GoldDivider className="w-36 h-4" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#5C4D42] max-w-md mx-auto mt-1">
          {weddingData.eventsSection.subtitle}
        </p>
      </motion.div>

      {/* Stacked Luxury Horizontal Event Cards */}
      <div className="space-y-5 sm:space-y-6">
        {weddingData.eventsSection.events.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="
              group relative grid grid-cols-1 sm:grid-cols-12 items-center gap-4 sm:gap-6
              p-4 sm:p-5 rounded-3xl
              bg-[#FBF8F2] border border-[#B38A45]/35
              shadow-[0_10px_30px_rgba(48,37,30,0.06)]
              hover:shadow-[0_14px_38px_rgba(179,138,69,0.14)]
              hover:border-[#B38A45]/60
              transition-all duration-300
            "
          >
            {/* Left Content: Gold Icon + Event Name, Date, Time & Venue */}
            <div className="sm:col-span-7 flex items-start gap-4 sm:pl-2">
              <div className="shrink-0 pt-1">
                <EventLineIcon
                  type={event.icon}
                  className="w-11 h-11 sm:w-13 sm:h-13 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 text-left">
                <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#30251E] leading-tight">
                  {event.title}
                </h3>
                <p className="font-sans text-xs text-[#5C4D42] mb-3">
                  {event.subtitle}
                </p>

                {/* Date & Time Row */}
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] font-sans text-[#30251E] mb-2">
                  <Calendar className="w-4 h-4 text-[#B38A45] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#30251E]">{event.date}</p>
                    <p className="text-[#5C4D42]">{event.time}</p>
                  </div>
                </div>

                {/* Venue Summary Row */}
                <div className="flex items-start gap-2.5 text-xs font-sans text-[#5C4D42]">
                  <MapPin className="w-4 h-4 text-[#B38A45] shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-[#29452F]">{event.venue}</span>
                    {' • '}
                    <span>{event.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photograph inside Rounded Ornamental Frame */}
            <div className="sm:col-span-5 w-full">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#B38A45]/30 shadow-inner">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30251E]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
