import React from 'react';
import { motion } from 'motion/react';
import { MailOpen } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { LotusMotif, GoldDivider } from '../common/Ornaments';

interface FooterSectionProps {
  onReplayEnvelope: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onReplayEnvelope }) => {
  return (
    <footer className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 px-6 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        {/* Couple Monogram Wreath Crest */}
        <div className="relative w-20 h-20 rounded-full bg-[#FBF8F2] border border-[#B38A45]/60 shadow-[0_6px_20px_rgba(48,37,30,0.06)] flex flex-col items-center justify-center mb-5">
          <div className="absolute inset-1.5 rounded-full border border-dashed border-[#B38A45]/40 pointer-events-none" />
          <LotusMotif className="w-7 h-5 -mt-1" />
          <span className="font-serif text-lg font-semibold text-[#29452F] tracking-widest leading-none mt-0.5">
            {weddingData.couple.initials}
          </span>
        </div>

        {/* Heading & Closing Note */}
        <h2 className="font-serif italic text-2xl sm:text-3xl text-[#30251E] tracking-wide">
          {weddingData.footer.heading}
        </h2>

        <div className="my-2.5">
          <GoldDivider className="w-36 h-4" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#5C4D42] max-w-md mx-auto leading-relaxed">
          {weddingData.footer.message}
        </p>

        {/* Couple Names & Hometowns */}
        <p className="font-serif text-lg sm:text-xl font-medium text-[#29452F] mt-4">
          {weddingData.couple.groom.name} &amp; {weddingData.couple.bride.name}
        </p>
        <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#713D43] mt-1">
          {weddingData.couple.groom.district}, {weddingData.couple.groom.state} •{' '}
          {weddingData.couple.bride.state}
        </p>

        {/* Bilingual Auspicious Invitation Line */}
        <p className="text-xs font-serif text-[#8C682D] mt-3">
          {weddingData.footer.bilingualBlessing.malayalam}
          <span className="mx-2 text-[#B38A45]">•</span>
          {weddingData.footer.bilingualBlessing.tamil}
        </p>

        {/* Subtle Replay Invitation Envelope Link */}
        <button
          type="button"
          onClick={onReplayEnvelope}
          className="mt-7 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FBF8F2] hover:bg-[#EFE6D5] border border-[#B38A45]/45 text-[11px] font-sans uppercase tracking-[0.16em] text-[#5C4D42] hover:text-[#29452F] transition-colors cursor-pointer"
        >
          <MailOpen className="w-3.5 h-3.5 text-[#B38A45]" />
          <span>Replay Envelope Opening</span>
        </button>
      </motion.div>
    </footer>
  );
};
