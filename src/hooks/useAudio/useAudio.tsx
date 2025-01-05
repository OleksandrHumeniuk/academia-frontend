import React, { createContext, useContext, useRef, useEffect } from 'react';

import type { ReactNode } from 'react';

type AudioContextType = {
  playAudio: (src: string, onFinish?: () => void) => void;
  pauseAudio: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

type AudioProviderProps = {
  children: ReactNode;
};

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const finishCallbackRef = useRef<(() => void) | null>(null);

  const playAudio = (src: string, onFinish?: () => void) => {
    if (!audioRef.current) return;

    if (audioRef.current.src !== window.location.origin + src) {
      audioRef.current.src = src;
    }

    finishCallbackRef.current = onFinish || null;

    audioRef.current.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const handleAudioEnded = () => {
      if (finishCallbackRef.current) {
        finishCallbackRef.current();
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AudioContext.Provider value={{ playAudio, pauseAudio }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} preload="auto" />
      {children}
    </AudioContext.Provider>
  );
};

const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export default useAudio;
