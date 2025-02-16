import React from 'react';
import { PhoneOff } from 'lucide-react';

import AppButton from '@/components/AppButton/AppButton';
import gif from '@/assets/ai.gif';

interface IProps {
  isStarted: boolean;
  isAnalysing: boolean;
  handleStart: () => void;
  stopConversation: () => void;
  getLabel: () => string;
}

const Agent: React.FC<IProps> = ({ isStarted, isAnalysing, handleStart, stopConversation, getLabel }) => {
  return (
    <>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Speaking practice</h1>
        <p className="mx-auto max-w-md text-gray-600">
          You&#39;re interviewing for a junior software developer position. I&#39;ll be your HR interviewer. Let&#39;s
          go through common questions, from introducing yourself to discussing your skills and past projects. Answer
          naturally and confidently. Ready to begin?
        </p>
      </div>

      <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
        {!isStarted ? (
          <AppButton
            variant="outline"
            className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            onClick={handleStart}
          >
            Start conversation
          </AppButton>
        ) : (
          <AppButton
            variant="default"
            className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 cursor-default rounded-3xl bg-zinc-900"
          >
            {getLabel()}
          </AppButton>
        )}
        <img src={gif} alt="Ai gif" />
      </div>
      <div className="flex h-[40px] w-full justify-center">
        {isStarted && !isAnalysing && (
          <AppButton variant="default" onClick={stopConversation} style={{ borderRadius: 100 }}>
            <PhoneOff />
            Finish
          </AppButton>
        )}
      </div>
    </>
  );
};

export default Agent;
