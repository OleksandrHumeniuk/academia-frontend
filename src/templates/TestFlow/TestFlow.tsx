import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TestAPI from '@/api/TestAPI/TestAPI';
import TestFlowPlaceholder from './components/TestFlowPlaceholder';
import AppProgress from '@/components/AppProgress/AppProgress';
import TestFlowLoader from '@/templates/TestFlow/components/TestFlowLoader';
import GrammarSection from '@/templates/TestFlow/sections/GrammarSection';
import VocabularySection from '@/templates/TestFlow/sections/VocabularySection';
import WritingSection from '@/templates/TestFlow/sections/WritingSection';
import SpeakingSection from '@/templates/TestFlow/sections/SpeakingSection';
import useStore from '@/context/store/useStore';

const TestFlow: React.FC = () => {
  const navigate = useNavigate();

  const test = useStore().test!;

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleStartTest = (): void => {
    setIsStarted(true);
  };

  const submitTest = (): void => {
    setIsLoading(true);

    TestAPI.submitTest(answers)
      .then(resultId => {
        navigate(`/results/${resultId}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleNext = (sectionAnswers?: string[] | number[] | string | Blob[]): void => {
    const sectionKey = ['vocabulary', 'grammar', 'writing', 'speaking'][activeStep];

    setAnswers(prev => ({ ...prev, [sectionKey]: sectionAnswers }));

    if (activeStep === 3) {
      submitTest();
      return;
    }

    setActiveStep(activeStep + 1);
  };

  const currentSection = useMemo<React.ReactElement | null>(() => {
    switch (activeStep) {
      case 0:
        return (
          <GrammarSection //
            questions={test.grammar.questions}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <VocabularySection //
            passages={test.vocabulary.passages}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <WritingSection //
            onNext={handleNext}
            prompts={test.writing.questions}
          />
        );
      case 3:
        return (
          <SpeakingSection //
            questions={test.speaking.questionAudios}
            onNext={handleNext}
          />
        );
      default:
        return null;
    }
  }, [activeStep]);

  if (isLoading) {
    return (
      <main className="flex h-full flex-1 flex-col items-center justify-center p-4">
        <TestFlowLoader />
      </main>
    );
  }

  if (!isStarted) {
    return (
      <main className="flex h-full flex-1 flex-col  items-center justify-center p-4">
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
    <main className="flex h-full flex-1  items-center justify-center p-4">
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
