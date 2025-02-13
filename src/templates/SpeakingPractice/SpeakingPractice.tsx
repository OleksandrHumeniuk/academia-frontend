import React from 'react';

import AppDialog from '@/components/AppDialog/AppDialog';
import AppButton from '@/components/AppButton/AppButton';
import gif from '@/assets/ai.gif';

const SpeakingPractice: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const handleStart = () => {
    console.log('start');
  };

  return (
    <AppDialog open={open} onOpenChange={onClose}>
      <AppDialog.Content className="min-h-[600px] w-[800px] bg-white p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">English Proficiency Assessment</h1>
          <p className="mx-auto max-w-md text-gray-600">
            You're interviewing for a junior software developer position. I'll be your HR interviewer. Let's go through
            common questions, from introducing yourself to discussing your skills and past projects. Answer naturally
            and confidently. Ready to begin?
          </p>
        </div>

        <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
          <AppButton
            variant="outline"
            className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
            onClick={handleStart}
          >
            Start the test
          </AppButton>
          <img src={gif} alt="Ai gif" />
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default SpeakingPractice;
