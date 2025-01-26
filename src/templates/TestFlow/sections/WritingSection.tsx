import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppTextarea from '@/components/AppTextarea/AppTextarea';
import AppCard from '@/components/AppCard/AppCard';
import TestFlowPlaceholder from '@/templates/TestFlow/components/TestFlowPlaceholder';
import TestTimer from '@/containers/TestTimer/TestTimer';

type WritingSectionProps = {
  onNext: (responses: string[]) => void;
  prompts: string[];
};

const WRITING_TIMER = 15 * 60; // 15 minutes
const WRITING_MIN_WORDS = 70;

const WritingSection: React.FC<WritingSectionProps> = ({ onNext, prompts }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [responses, setResponses] = useState<string[]>(new Array(prompts.length).fill(''));

  const handleStartSection = (): void => {
    setIsStarted(true);
  };

  const handleFinishSection = (): void => {
    onNext(responses);
  };

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses];
    newResponses[currentPrompt] = value;
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentPrompt < prompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
    } else {
      handleFinishSection();
    }
  };

  const currentResponse = responses[currentPrompt];
  const wordCount = currentResponse.trim().split(/\s+/).length;
  const currentPromptData = prompts[currentPrompt];
  const isLastPrompt = currentPrompt === prompts.length - 1;

  if (!isStarted) {
    return (
      <TestFlowPlaceholder
        buttonText="Start the section"
        title="Part 3 - Writing"
        subtitles="You’ve completed the Vocabulary section. Now, let’s move on to the third part of the test: Writing. In this section, you’ll answer 3 open-ended questions about your job and profession. You have 15 minutes to complete this part. Each answer should be at least 70 words long and no more than 150 words."
        audioUrl="/audio/writing.mp3"
        speed={300}
        delay={1000}
        onStart={handleStartSection}
      />
    );
  }

  return (
    <div className="relative">
      <TestTimer time={WRITING_TIMER} onTimeOver={handleFinishSection} />

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-semibold">Part 3 – Writing</h1>
        <p className="text-gray-600">
          Writing prompt {currentPrompt + 1} of {prompts.length}
        </p>
      </div>

      <AppCard className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">{currentPromptData}</h3>
            <AppTextarea
              value={currentResponse}
              onChange={e => handleResponseChange(e.target.value)}
              placeholder="Type your response here..."
              className="min-h-[200px]"
            />
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>{wordCount} words</span>
              <span>Minimum: {WRITING_MIN_WORDS} words</span>
            </div>
          </div>
          <AppButton
            className="w-full"
            disabled={WRITING_MIN_WORDS ? wordCount < WRITING_MIN_WORDS : false}
            onClick={handleNext}
          >
            {isLastPrompt ? 'Finish Section' : 'Next Prompt'}
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default WritingSection;
