import React, { useState } from 'react';

import AppCard from '@/components/AppCard/AppCard';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import AppButton from '@/components/AppButton/AppButton';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppScrollArea from '@/components/AppScrollArea/AppScrollArea';
import TestFlowPlaceholder from '@/templates/TestFlow/components/TestFlowPlaceholder';
import TestTimer from '@/containers/TestTimer/TestTimer';

type Question = {
  text: string;
  options: string[];
  correctAnswer: number;
};

type Passage = {
  text: string;
  questions: Question[];
};

type VocabularySectionProps = {
  onNext: (answers: number[]) => void;
  passages: Passage[];
};

const VOCABULARY_TIMER = 15 * 60; // 15 minutes

const VocabularySection: React.FC<VocabularySectionProps> = ({ passages, onNext }) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [currentPassage, setCurrentPassage] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const totalQuestions = passages.reduce((sum, passage) => sum + passage.questions.length, 0);
  const [answers, setAnswers] = useState<number[]>(new Array(totalQuestions).fill(-1));

  const getCurrentAnswerIndex = () => {
    let index = currentQuestion;
    for (let i = 0; i < currentPassage; i++) {
      index += passages[i].questions.length;
    }
    return index;
  };

  const handleAnswerChange = (value: string): void => {
    const newAnswers = [...answers];
    newAnswers[getCurrentAnswerIndex()] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleStartSection = (): void => {
    setIsStarted(true);
  };

  const handleFinishSection = (): void => {
    onNext(answers);
  };

  const handleNext = (): void => {
    const currentPassageQuestions = passages[currentPassage].questions;

    if (currentQuestion < currentPassageQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentPassage < passages.length - 1) {
      setCurrentPassage(currentPassage + 1);
      setCurrentQuestion(0);
    } else {
      handleFinishSection();
    }
  };

  const getCurrentQuestionNumber = () => {
    let questionNumber = currentQuestion + 1;
    for (let i = 0; i < currentPassage; i++) {
      questionNumber += passages[i].questions.length;
    }
    return questionNumber;
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

  const currentPassageData = passages[currentPassage];
  const isLastQuestion =
    currentPassage === passages.length - 1 && currentQuestion === currentPassageData.questions.length - 1;

  return (
    <div className="relative">
      <TestTimer time={VOCABULARY_TIMER} onTimeOver={handleFinishSection} />

      <div className="mb-8">
        <h1 className="mb-4 text-2xl font-semibold">Part 2 – Vocabulary</h1>
        <p className="text-gray-600">
          Question {getCurrentQuestionNumber()} of {totalQuestions}
        </p>
      </div>

      <AppCard className="p-6">
        <AppScrollArea className="mb-6 h-[300px] rounded-md border p-4">
          <div className="text-sm leading-relaxed">{currentPassageData.text}</div>
        </AppScrollArea>

        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">{currentPassageData.questions[currentQuestion].text}</h3>
            <AppRadioGroup
              value={answers[getCurrentAnswerIndex()].toString()}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {currentPassageData.questions[currentQuestion].options.map((option, index) => (
                <div key={option} className="flex items-center space-x-2">
                  <AppRadioGroup.Item value={index.toString()} id={`option-${index}`} />
                  <AppLabel htmlFor={`option-${index}`}>{option}</AppLabel>
                </div>
              ))}
            </AppRadioGroup>
          </div>

          <AppButton className="w-full" disabled={answers[getCurrentAnswerIndex()] === -1} onClick={handleNext}>
            {isLastQuestion ? 'Finish Section' : 'Next Question'}
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default VocabularySection;
