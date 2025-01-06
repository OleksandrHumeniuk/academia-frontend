import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timer } from 'lucide-react';

import formatTimer from '@/utils/formatTimer';
import SingleChoiceSection from '../sections/SingleChoiceSection';
import ReadingSection from '../sections/ReadingSection';
import WritingSection from '@/templates/TestFlow/sections/WritingSection';
import ConversationSection from '../sections/ConversationSection';
import useAudio from '@/hooks/useAudio/useAudio';
import { MOCK_QUESTIONS } from '@/constants/questions';

const TEST_TIMER = 30 * 60; // 30 minutes

export type TestFlowQuestionProps = {
  activeStep: number;
  onNextStep: () => void;
};

const TestFlowQuestions: React.FC<TestFlowQuestionProps> = ({ activeStep, onNextStep }) => {
  const { playAudio } = useAudio();

  useEffect(() => {}, []);

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState<number>(TEST_TIMER);

  const navigate = useNavigate();

  const submitAnswers = (): void => {
    navigate('/results', {
      state: {
        answers,
        questions: MOCK_QUESTIONS,
      },
    });
  };

  const handleNext = (sectionAnswers?: string[] | number[] | string): void => {
    const sectionKey = ['vocabulary', 'grammar', 'reading', 'writing', 'conversation'][activeStep];

    setAnswers(prev => ({ ...prev, [sectionKey]: sectionAnswers }));

    if (activeStep === 4) {
      submitAnswers();
      return;
    }

    onNextStep();
    playAudio('/audio/good-job.mp3');
  };

  const renderSection = () => {
    switch (activeStep) {
      case 0:
        return (
          <SingleChoiceSection
            key="vocabulary" //
            type="vocabulary"
            questions={MOCK_QUESTIONS.vocabulary}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <SingleChoiceSection
            key="grammar" //
            type="grammar"
            questions={MOCK_QUESTIONS.grammar}
            onNext={handleNext}
          />
        );
      case 2:
        return <ReadingSection question={MOCK_QUESTIONS.reading} onNext={handleNext} />;
      case 3:
        return <WritingSection onNext={handleNext} question={MOCK_QUESTIONS.writing} />;
      case 4:
        return <ConversationSection onNext={handleNext} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          submitAnswers();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, answers]);

  return (
    <div className="relative w-full">
      <div className="right-0 top-[6px] flex items-center gap-2 font-medium sm:absolute">
        <Timer className="size-4" />
        {formatTimer(timeLeft)}
      </div>

      {renderSection()}
    </div>
  );
};

export default TestFlowQuestions;
