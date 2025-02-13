import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppCard from '@/components/AppCard/AppCard';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';

type SingleChoiceQuestion = {
  text: string;
  options: string[];
};

type SingleChoiceSectionProps = {
  onNext: (answers: string[]) => void;
  questions: SingleChoiceQuestion[];
  type: 'vocabulary' | 'grammar';
};

const SingleChoiceSection: React.FC<SingleChoiceSectionProps> = ({
  type, //
  questions,
  onNext,
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const question = questions[activeQuestionIndex];

  if (type === 'vocabulary') {
    console.log(question, activeQuestionIndex);
  }

  const handleAnswerChange = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[activeQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = (): void => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
      return;
    }

    onNext(answers);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">
          {type === 'vocabulary' ? 'Part 2 - Vocabulary' : 'Part 1 - Grammar'}
        </h1>
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

export default SingleChoiceSection;
