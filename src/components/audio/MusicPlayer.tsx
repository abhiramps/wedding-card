import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStartedOnce, setHasStartedOnce] = useState<boolean>(false);

  useEffect(() => {
    if (autoPlayTrigger && !hasStartedOnce) {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.5;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStartedOnce(true);
          })
          .catch(() => {
            // Browser blocked autoplay; user can tap the minimal button anytime
          });
      }
    }
  }, [autoPlayTrigger, hasStartedOnce]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStartedOnce(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio ref={audioRef} src={weddingData.audio.src} loop preload="none" />

      <button
        type="button"
        onClick={toggleAudio}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#F8F2E8]/95 backdrop-blur-md border border-[#B38A45]/70 text-[#29452F] shadow-[0_6px_20px_rgba(48,37,30,0.16)] transition-all duration-300 hover:scale-105 hover:border-[#B38A45] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38A45]"
        title={isPlaying ? 'Mute wedding music' : 'Play wedding music'}
        aria-label={isPlaying ? 'Mute wedding music' : 'Play wedding music'}
      >
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full border border-[#B38A45]/50 animate-ping pointer-events-none"
            style={{ animationDuration: '2.8s' }}
          />
        )}
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#29452F] transition-transform group-hover:scale-110" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#30251E]/65 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
};
