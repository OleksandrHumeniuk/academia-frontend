import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { ReactNode } from 'react';

type AudioContextType = {
  playAudio: (src: string, onFinish?: () => void) => void;
  pauseAudio: () => void;
  isPlaying: boolean;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

type AudioProviderProps = {
  children: ReactNode;
};

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const finishCallbackRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [location]);

  const playAudio = (src: string, onFinish?: () => void) => {
    if (!audioRef.current) return;

    audioRef.current.loop = false;

    if (audioRef.current.src !== window.location.origin + src) {
      audioRef.current.src = src;
    }

    audioRef.current.currentTime = 0;
    finishCallbackRef.current = onFinish || null;
    audioRef.current.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (audioRef.current) return;

    const audio = new Audio();
    audioRef.current = audio;
    audio.loop = false;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      if (finishCallbackRef.current) {
        finishCallbackRef.current();
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return <AudioContext.Provider value={{ playAudio, pauseAudio, isPlaying }}>{children}</AudioContext.Provider>;
};

const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export default useAudio;
