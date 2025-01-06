import React from 'react';
import { Mic } from 'lucide-react';

import AppButton from '@/components/AppButton/AppButton';
import useAudio from '@/hooks/useAudio/useAudio';
import gif from '@/assets/ai.gif';

type ConversationSectionProps = {
  onNext: () => void;
};

const ConversationSection: React.FC<ConversationSectionProps> = ({ onNext }: ConversationSectionProps) => {
  const { playAudio } = useAudio();

  const handleStartConversation = (): void => {
    playAudio('/audio/test.mp3', onNext);
  };

  return (
    <div className="space-y-8">
      <h1 className="mb-4 text-2xl font-semibold">Part 5 – Conversation</h1>

      <div className="relative mx-auto mt-8 size-[350px] h-auto max-w-full">
        <AppButton
          variant="outline"
          className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-3xl"
          onClick={handleStartConversation}
        >
          <Mic />
          Start the conversation
        </AppButton>

        <img src={gif} alt="Ai gif" />
      </div>

      <p className="text-center text-gray-600">
        Can you discuss the pros and cons of using social media? Please provide at least two points for both sides.
      </p>
    </div>
  );
};

export default ConversationSection;
