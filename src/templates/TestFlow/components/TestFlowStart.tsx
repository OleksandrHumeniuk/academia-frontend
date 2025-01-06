import React from 'react';

import AppButton from '@/components/AppButton/AppButton';
import useAudio from '@/hooks/useAudio/useAudio';
import gif from '@/assets/ai.gif';

export type TestFlowStartProps = {
  onStart: () => void;
};

const TestFlowStart: React.FC<TestFlowStartProps> = ({ onStart }) => {
  const { playAudio } = useAudio();

  const handleStartTest = (): void => {
    playAudio('/audio/welcome.mp3', onStart);
  };

  return (
    <div>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">English Proficiency Assessment</h1>
        <p className="mx-auto max-w-md text-gray-600">
          Welcome! This assessment will evaluate your English skills across speaking, listening, reading, writing, and
          grammar. The test takes approximately 30 minutes to complete.
        </p>
      </div>

      <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
        <AppButton
          variant="outline"
          className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
          onClick={handleStartTest}
        >
          Start the test
        </AppButton>
        <img src={gif} alt="Ai gif" />
      </div>
    </div>
  );
};

export default TestFlowStart;
