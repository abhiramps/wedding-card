import { useState } from 'react';
import { EnvelopeOpening } from './components/envelope/EnvelopeOpening';
import { FlowerShower } from './components/common/FlowerShower';
import { MusicPlayer } from './components/audio/MusicPlayer';
import { HeroSection } from './components/hero/HeroSection';
import { OurStorySection } from './components/story/OurStorySection';
import { CulturalUnionSection } from './components/traditions/CulturalUnionSection';
import { EventsSection } from './components/events/EventsSection';
import { VenuesSection } from './components/venues/VenuesSection';
import { GallerySection } from './components/gallery/GallerySection';
import { RsvpSection } from './components/rsvp/RsvpSection';
import { FooterSection } from './components/footer/FooterSection';

export function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#EFE6D5] text-[#30251E] font-sans selection:bg-[#B38A45]/25 selection:text-[#29452F] overflow-x-hidden">
      {/* 1. Interactive 3D Invitation Envelope Experience (Runs once per page visit) */}
      <EnvelopeOpening
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Floating Jasmine & Blush Rose Petals */}
      <FlowerShower intensity={isEnvelopeOpen ? 'normal' : 'burst'} />

      {/* Minimal Single-Circle Floating Audio Toggle */}
      <MusicPlayer autoPlayTrigger={isEnvelopeOpen} />

      {/* Handcrafted Vertical Wedding Invitation Card Container (No Navbar) */}
      <div className="relative z-10 max-w-4xl mx-auto min-h-screen bg-[#F8F2E8] paper-texture shadow-[0_0_80px_rgba(48,37,30,0.15)] sm:my-6 sm:rounded-[32px] sm:border sm:border-[#B38A45]/45 overflow-hidden">
        {/* Delicate Inner Gold Card Frame Line (Desktop/Tablet) */}
        <div
          className="hidden sm:block absolute inset-2.5 rounded-[24px] border border-[#B38A45]/25 pointer-events-none z-30"
          aria-hidden="true"
        />

        <main>
          {/* 2. Main Invitation Hero Section */}
          <HeroSection />

          {/* 3. Our Story Section */}
          <OurStorySection />

          {/* 4. Two Cultures, One Celebration */}
          <CulturalUnionSection />

          {/* 5. Wedding Events Section */}
          <EventsSection />

          {/* 6. Wedding Venue Section */}
          <VenuesSection />

          {/* 7. Wedding Photo Gallery */}
          <GallerySection />

          {/* 8. RSVP Section */}
          <RsvpSection />
        </main>

        {/* 9. Final Footer */}
        <FooterSection
          onReplayEnvelope={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsEnvelopeOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default App;
