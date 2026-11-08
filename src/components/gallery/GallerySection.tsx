import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import { LotusMotif, GoldDivider } from '../common/Ornaments';

export const GallerySection: React.FC = () => {
  const photos = weddingData.gallerySection.photos;
  const [startIndex, setStartIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleCarouselPrev = () => {
    setStartIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleCarouselNext = () => {
    setStartIndex((prev) => (prev + 1) % photos.length);
  };

  const handleLightboxPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const handleLightboxNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleLightboxPrev, handleLightboxNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleCarouselTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) handleCarouselNext();
      else handleCarouselPrev();
    }
    touchStartX.current = null;
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) handleLightboxNext();
      else handleLightboxPrev();
    }
    touchStartX.current = null;
  };

  const visiblePhotos = [0, 1, 2, 3].map((offset) => photos[(startIndex + offset) % photos.length]);

  return (
    <section
      id="gallery"
      className="relative py-10 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Top Curved Gold Botanical Border & Corner Leaf Sprigs */}
      <div className="w-full mb-3 sm:mb-4 pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 800 50" fill="none" className="w-full h-8 sm:h-12">
          <path
            d="M10 42C220 4 580 4 790 42"
            stroke="#B38A45"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <g transform="translate(8, 6)">
            <path d="M0 32C24 22 48 14 76 12" stroke="#6C7D47" strokeWidth="1.5" />
            <ellipse cx="22" cy="18" rx="9" ry="4" transform="rotate(-30 22 18)" fill="#7E8F56" fillOpacity="0.65" />
            <ellipse cx="44" cy="12" rx="9" ry="4" transform="rotate(-20 44 12)" fill="#7E8F56" fillOpacity="0.65" />
            <ellipse cx="32" cy="28" rx="9" ry="4" transform="rotate(20 32 28)" fill="#96A66D" fillOpacity="0.65" />
          </g>
          <g transform="translate(792, 6) scale(-1, 1)">
            <path d="M0 32C24 22 48 14 76 12" stroke="#6C7D47" strokeWidth="1.5" />
            <ellipse cx="22" cy="18" rx="9" ry="4" transform="rotate(-30 22 18)" fill="#7E8F56" fillOpacity="0.65" />
            <ellipse cx="44" cy="12" rx="9" ry="4" transform="rotate(-20 44 12)" fill="#7E8F56" fillOpacity="0.65" />
            <ellipse cx="32" cy="28" rx="9" ry="4" transform="rotate(20 32 28)" fill="#96A66D" fillOpacity="0.65" />
          </g>
        </svg>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6 sm:mb-10 flex flex-col items-center"
      >
        <LotusMotif className="w-10 h-7 sm:w-11 sm:h-8 mb-1.5" />
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#30251E] tracking-wide">
          {weddingData.gallerySection.heading}
        </h2>
        <div className="my-1.5">
          <GoldDivider className="w-34 sm:w-36 h-4" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#5C4D42] mt-1">
          {weddingData.gallerySection.subtitle}
        </p>
      </motion.div>

      {/* Editorial Asymmetric Grid + Touch-Swipeable Carousel Strip */}
      <div
        className="relative flex items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleCarouselTouchEnd}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={handleCarouselPrev}
          aria-label="Previous gallery photos"
          className="
            absolute -left-1.5 sm:-left-4 z-20
            w-9 h-9 sm:w-10 sm:h-10 rounded-full
            bg-[#FBF8F2]/95 hover:bg-[#29452F]
            text-[#30251E] hover:text-[#F8F2E8]
            border border-[#B38A45]/60
            shadow-[0_6px_18px_rgba(48,37,30,0.16)]
            flex items-center justify-center
            transition-all duration-300 active:scale-95 cursor-pointer
          "
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* 2x2 Grid on Mobile, 4-Column Row on Tablet/Desktop */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-6 items-center">
          {visiblePhotos.map((photo, idx) => {
            const actualIndex = photos.findIndex((p) => p.id === photo.id);
            const heightClass =
              idx % 2 === 1
                ? 'aspect-[3/4.1] sm:aspect-[3/4.3] sm:-translate-y-2'
                : 'aspect-[3/3.8] sm:aspect-[3/3.9] sm:translate-y-1';

            return (
              <motion.button
                key={`${photo.id}-${startIndex}`}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(actualIndex)}
                className={`
                  group relative w-full ${heightClass}
                  rounded-2xl sm:rounded-3xl overflow-hidden
                  border-2 border-[#B38A45]/45
                  shadow-[0_8px_22px_rgba(48,37,30,0.1)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38A45]
                  cursor-pointer text-left
                `}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Mobile & Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1712]/70 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-3.5">
                  <span className="text-[8.5px] sm:text-[9px] font-sans uppercase tracking-[0.18em] text-[#D4B475] font-bold">
                    {photo.category}
                  </span>
                  <p className="hidden sm:block font-serif text-xs sm:text-sm text-[#F8F2E8] line-clamp-2 leading-snug mt-0.5">
                    {photo.caption}
                  </p>
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F8F2E8]/90 text-[#30251E] flex items-center justify-center shadow">
                    <Expand className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleCarouselNext}
          aria-label="Next gallery photos"
          className="
            absolute -right-1.5 sm:-right-4 z-20
            w-9 h-9 sm:w-10 sm:h-10 rounded-full
            bg-[#FBF8F2]/95 hover:bg-[#29452F]
            text-[#30251E] hover:text-[#F8F2E8]
            border border-[#B38A45]/60
            shadow-[0_6px_18px_rgba(48,37,30,0.16)]
            flex items-center justify-center
            transition-all duration-300 active:scale-95 cursor-pointer
          "
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setStartIndex(index)}
            aria-label={`View gallery slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === startIndex
                ? 'w-6 bg-[#B38A45]'
                : 'w-1.5 bg-[#B38A45]/35 hover:bg-[#B38A45]/60'
            }`}
          />
        ))}
      </div>

      {/* Full-Screen Touch-Friendly Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A1410]/94 backdrop-blur-md p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Wedding Photo Lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 rounded-full bg-[#F8F2E8]/15 hover:bg-[#F8F2E8]/30 border border-[#B38A45]/50 text-[#F8F2E8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image & Caption Container */}
            <motion.div
              key={photos[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full flex flex-col items-center"
            >
              <div className="relative max-h-[68dvh] sm:max-h-[75vh] rounded-2xl overflow-hidden border-2 border-[#B38A45] shadow-2xl bg-[#241B15]">
                <img
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  className="max-h-[68dvh] sm:max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="mt-4 text-center px-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#D4B475] font-bold">
                  {photos[lightboxIndex].category} • {lightboxIndex + 1} / {photos.length}
                </span>
                <p className="font-serif text-sm sm:text-lg text-[#F8F2E8] mt-1 max-w-md mx-auto">
                  {photos[lightboxIndex].caption}
                </p>
              </div>

              {/* Mobile-Friendly Bottom Prev / Next Controls */}
              <div className="flex items-center justify-center gap-6 mt-4">
                <button
                  type="button"
                  onClick={handleLightboxPrev}
                  aria-label="Previous image"
                  className="w-11 h-11 rounded-full bg-[#F8F2E8]/15 hover:bg-[#B38A45] border border-[#B38A45]/60 text-[#F8F2E8] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleLightboxNext}
                  aria-label="Next image"
                  className="w-11 h-11 rounded-full bg-[#F8F2E8]/15 hover:bg-[#B38A45] border border-[#B38A45]/60 text-[#F8F2E8] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
