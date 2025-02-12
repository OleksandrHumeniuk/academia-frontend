import React, { useState } from 'react';
import Markdown from 'react-markdown';

import AppCard from '@/components/AppCard/AppCard';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppScrollArea from '@/components/AppScrollArea/AppScrollArea';

type ReadingSectionProps = {
  onNext: (answers: number[]) => void;
  question: {
    passage: string;
    questions: Array<{
      text: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
};

const ReadingSection: React.FC<ReadingSectionProps> = ({ question, onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>(new Array(question.questions.length).fill(-1));

  const handleAnswerChange = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = (): void => {
    if (currentQuestion < question.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext(answers);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Part 3 – Reading</h1>
        <p className="text-gray-600">
          Question {currentQuestion + 1} of {question.questions.length}
        </p>
      </div>

      <AppCard className="p-6">
        <AppScrollArea className="mb-6 h-[240px] rounded-md border p-4">
          <div className="text-sm leading-relaxed">
            <Markdown>{question.passage}</Markdown>
          </div>
        </AppScrollArea>

        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">{question.questions[currentQuestion].text}</h3>
            <AppRadioGroup
              value={answers[currentQuestion].toString()}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {question.questions[currentQuestion].options.map((option, index) => (
                <div key={option} className="flex items-center space-x-2">
                  <AppRadioGroup.Item value={index.toString()} id={`option-${index}`} />
                  <AppLabel htmlFor={`option-${index}`}>{option}</AppLabel>
                </div>
              ))}
            </AppRadioGroup>
          </div>

          <AppButton className="w-full" disabled={answers[currentQuestion] === -1} onClick={handleNext}>
            {currentQuestion === question.questions.length - 1 ? 'Finish Section' : 'Next Question'}
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default ReadingSection;
