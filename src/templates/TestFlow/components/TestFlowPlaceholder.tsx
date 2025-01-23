import React, { useEffect } from 'react';

import useAudio from '@/hooks/useAudio/useAudio';
import AppSubtitles from '@/components/AppSubtitles/AppSubtitles';
import AppAgent from '@/components/AppAgent/AppAgent';

export type TestFlowPlaceholderProps = {
  audioUrl: string;
  title: string;
  subtitles: string;
  buttonText: string;
  speed: number;
  delay?: number;
  onStart: () => void;
};

const TestFlowPlaceholder: React.FC<TestFlowPlaceholderProps> = ({
  audioUrl, //
  title,
  subtitles,
  buttonText,
  delay,
  speed,
  onStart,
}) => {
  const { playAudio, pauseAudio } = useAudio();

  useEffect(() => {
    playAudio(audioUrl);
  });

  const handleStart = (): void => {
    pauseAudio();
    onStart();
  };

  return (
    <div className="w-full">
      <h1 className="space-y-4 text-center text-3xl font-bold">{title}</h1>

      <AppAgent buttonText={buttonText} onClick={handleStart} />

      <div className="mt-4 flex justify-center text-center">
        <AppSubtitles text={subtitles} delay={delay} speed={speed} />
      </div>
    </div>
  );
};

export default TestFlowPlaceholder;
