import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppCard from '@/components/AppCard/AppCard';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import TestFlowPlaceholder from '@/templates/TestFlow/components/TestFlowPlaceholder';
import TestTimer from '@/containers/TestTimer/TestTimer';

import type { GrammarQuestion } from '@/types/test';

type GrammarSectionProps = {
  onNext: (answers: string[]) => void;
  questions: GrammarQuestion[];
};

const GRAMMAR_TIMER = 10 * 60; // 10 minutes

const GrammarSection: React.FC<GrammarSectionProps> = ({ questions, onNext }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const question = questions[activeQuestionIndex];

  const handleStartSection = (): void => {
    setIsStarted(true);
  };

  const handleAnswerChange = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[activeQuestionIndex] = value;
    setAnswers(newAnswers);
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
      <TestFlowPlaceholder //
        buttonText="Start the section"
        title="Part 1 - Grammar"
        subtitles="The first part of the test is designed to evaluate your understanding of English grammar. You’ll answer 15 multiple-choice questions, with only one correct answer. You have 10 minutes to complete this section. Good luck!"
        audioUrl="/audio/grammar.mp3"
        speed={300}
        onStart={handleStartSection}
      />
    );
  }

  return (
    <div className="relative">
      <TestTimer time={GRAMMAR_TIMER} onTimeOver={handleFinishSection} />

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-semibold">Part 1 - Grammar</h1>
        <p className="text-gray-600">
          Question {activeQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <AppCard className="rounded-xl p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="mb-6 text-lg">{question.text}</p>

            <AppRadioGroup //
              value={answers[activeQuestionIndex]}
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

export default GrammarSection;
