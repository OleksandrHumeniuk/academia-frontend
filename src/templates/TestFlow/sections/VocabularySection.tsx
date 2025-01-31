import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppCard from '@/components/AppCard/AppCard';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import TestFlowPlaceholder from '@/templates/TestFlow/components/TestFlowPlaceholder';
import TestTimer from '@/containers/TestTimer/TestTimer';

import type { VocabularyQuestion } from '@/types/test';

type VocabularySectionProps = {
  onNext: (answers: { question: string; answer: string | number }[]) => void;
  questions: VocabularyQuestion[];
};

const VOCABULARY_TIMER = 10 * 60; // 10 minutes

const VocabularySection: React.FC<VocabularySectionProps> = ({ questions, onNext }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ question: string; answer: string }[]>(
    questions.map(q => ({ question: q.text, answer: '', isCorrect: false })),
  );

  const question = questions[activeQuestionIndex];

  const handleStartSection = (): void => {
    setIsStarted(true);
  };

  const handleAnswerChange = (value: string): void => {
    setAnswers(prevAnswers =>
      prevAnswers.map((item, index) =>
        index === activeQuestionIndex
          ? { ...item, answer: value, isCorrect: questions[activeQuestionIndex].correctAnswer === index }
          : item,
      ),
    );
  };

  const handleFinishSection = (): void => {
    onNext(answers);
  };

  const handleNext = (): void => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
      return;
    }

    handleFinishSection();
  };

  if (!isStarted) {
    return (
      <TestFlowPlaceholder
        buttonText="Start the section"
        title="Part 2 - Vocabulary"
        subtitles="You've completed the Grammar section. Now, let's move on to the second part of the test: Vocabulary. In this section, you'll have 15 minutes to complete two reading exercises. The first is a text, and the second is a dialogue. For each exercise, you'll answer 10 multiple-choice questions, with only one correct answer per question."
        audioUrl="/audio/vocabulary.mp3"
        speed={300}
        delay={1000}
        onStart={handleStartSection}
      />
    );
  }

  return (
    <div className="relative">
      <div className="right-[12px] top-[6px] sm:absolute">
        <TestTimer time={VOCABULARY_TIMER} onTimeOver={handleFinishSection} />
      </div>

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-semibold">Part 2 - Vocabulary</h1>
        <p className="text-gray-600">
          Question {activeQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <AppCard className="rounded-xl p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="mb-6 text-lg">{question.text}</p>

            <AppRadioGroup //
              value={answers[activeQuestionIndex].answer}
              className="space-y-3"
              onValueChange={handleAnswerChange}
            >
              {question.options.map((option, index) => (
                <div key={option} className="flex items-center space-x-2">
                  <AppRadioGroup.Item value={option} id={`option-${index}`} />
                  <AppLabel htmlFor={`option-${index}`}>{option}</AppLabel>
                </div>
              ))}
            </AppRadioGroup>
          </div>

          <AppButton
            className="w-full" //
            type="submit"
            onClick={handleNext}
            disabled={!answers[activeQuestionIndex]}
          >
            {activeQuestionIndex === questions.length - 1 ? 'Finish Section' : 'Next Question'}
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default VocabularySection;
