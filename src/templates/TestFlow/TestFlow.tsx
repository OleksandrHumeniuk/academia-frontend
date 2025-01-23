import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestFlowPlaceholder from './components/TestFlowPlaceholder';
import AppProgress from '@/components/AppProgress/AppProgress';
import TestFlowLoader from '@/templates/TestFlow/components/TestFlowLoader';
import GrammarSection from '@/templates/TestFlow/sections/GrammarSection';
import VocabularySection from '@/templates/TestFlow/sections/VocabularySection';
import WritingSection from '@/templates/TestFlow/sections/WritingSection';
import ConversationSection from '@/templates/TestFlow/sections/ConversationSection';
import useAudio from '@/hooks/useAudio/useAudio';
import { MOCK_QUESTIONS } from '@/constants/questions';

const TestFlow: React.FC = () => {
  const { playAudio } = useAudio();

  const navigate = useNavigate();

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleStartTest = (): void => {
    setIsStarted(true);
  };

  const handleNext = (sectionAnswers?: string[] | number[] | string): void => {
    const sectionKey = ['vocabulary', 'grammar', 'reading', 'writing', 'conversation'][activeStep];

    setAnswers(prev => ({ ...prev, [sectionKey]: sectionAnswers }));

    if (activeStep === 3) {
      setIsLoading(true);
      return;
    }

    setActiveStep(activeStep + 1);
    playAudio('/audio/good-job.mp3');
  };

  const handleCompleteResults = (): void => {
    navigate('/results');
  };

  const currentSection = useMemo<React.ReactElement | null>(() => {
    switch (activeStep) {
      case 0:
        return (
          <GrammarSection //
            questions={MOCK_QUESTIONS.vocabulary}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <VocabularySection //
            passages={MOCK_QUESTIONS.grammar}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <WritingSection //
            onNext={handleNext}
            prompts={MOCK_QUESTIONS.writing}
          />
        );
      case 3:
        return (
          <ConversationSection //
            onNext={handleNext}
            prompts={[
              {
                audioUrl: '/audio/test.mp3',
                subtitle:
                  'You’ve just fixed a critical bug in the application that was causing errors in the user login process. During your daily stand-up meeting, your task is to explain the following to a team member or a QA engineer:\n' +
                  '\n' +
                  '1. What the bug was and how it affected the system.\n' +
                  '2. How you identified the root cause of the problem.\n' +
                  '3. The steps you took to resolve it.\n' +
                  '4. What tests you ran to make sure the issue is completely fixed.\n' +
                  '\n' +
                  'Focus on explaining the issue clearly and using appropriate technical terms. Be prepared to answer follow-up questions from your colleague.',
              },
            ]}
          />
        );
      default:
        return null;
    }
  }, [activeStep]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <TestFlowLoader onComplete={handleCompleteResults} />
      </main>
    );
  }

  if (!isStarted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 shadow-sm">
          <TestFlowPlaceholder //
            buttonText="Start the test"
            title="Welcome to Explore!"
            subtitles="This initial assessment is exclusively designed for your profession, focusing on the language skills you need most. The test consists of four parts: grammar, vocabulary, writing, and speaking. Before each section, you’ll receive clear instructions to guide you through the process. Let’s begin and create your personalised learning journey!"
            audioUrl="/audio/welcome.mp3"
            delay={1200}
            speed={450}
            onStart={handleStartTest}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center p-4">
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <AppProgress value={((activeStep + 1) / 5) * 100} className="h-full rounded-none" />
      </div>

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="relative w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 shadow-sm">
          {currentSection}
        </div>
      </div>
    </main>
  );
};

export default TestFlow;
