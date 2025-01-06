import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

import AppButton from '@/components/AppButton/AppButton';
import AppProgress from '@/components/AppProgress/AppProgress';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppDialog from '@/components/AppDialog/AppDialog';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type PracticeExerciseProps = {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
  type?: 'grammar' | 'vocabulary';
};

const grammarQuestions: Question[] = [
  {
    id: 1,
    text: 'Which sentence uses the present continuous tense correctly?',
    options: [
      'I am write a letter now.',
      'I am writing a letter now.',
      'I writing a letter now.',
      'I write a letter now.',
    ],
    correctAnswer: 1,
    explanation: "The present continuous tense uses 'am/is/are' + verb-ing to describe actions happening now.",
  },
  {
    id: 2,
    text: 'Select the correct form of the verb:',
    options: [
      'She have been studying all day.',
      'She has been studying all day.',
      'She is been studying all day.',
      'She been studying all day.',
    ],
    correctAnswer: 1,
    explanation: "With third-person singular (she/he/it), we use 'has been' in the present perfect continuous.",
  },
];

const vocabularyQuestions: Question[] = [
  {
    id: 1,
    text: "Fill in the blank: The company's _____ to sustainability has led to numerous environmental initiatives.",
    options: ['commitment', 'commission', 'commendation', 'communion'],
    correctAnswer: 0,
    explanation: 'Happy and excited are synonyms that mean the same thing.',
  },
  {
    id: 2,
    text: "What's the word? The researcher made a significant _____ in cancer treatment.",
    options: ['breakthrough', 'breakout', 'breakdown', 'breakup'],
    correctAnswer: 1,
    explanation: 'Slow is the opposite of fast.',
  },
];

const PracticeExercise: React.FC<PracticeExerciseProps> = ({
  open = true,
  onClose = () => {},
  topicTitle = 'Present Tense',
  type = 'grammar',
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = type === 'grammar' ? grammarQuestions : vocabularyQuestions;
  const totalQuestions = questions.length;

  const handleNext = (): void => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onClose();
    }
  };

  const handleCheck = (): void => {
    setShowFeedback(true);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

  return (
    <AppDialog open={open} onOpenChange={onClose}>
      <AppDialog.Content className="min-h-[500px] w-[800px] p-0">
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex flex-1 flex-col gap-2">
            <div className="mb-2 flex flex-col items-start gap-4">
              <div className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {topicTitle}
              </div>

              <h2 className="text-xl font-semibold">
                {currentQuestion + 1}. {questions[currentQuestion].text}
              </h2>
            </div>

            <div className="mt-2">
              <AppRadioGroup
                key={currentQuestion}
                value={selectedAnswer?.toString()}
                onValueChange={value => setSelectedAnswer(parseInt(value))}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={option} className="flex items-center space-x-2">
                    <AppRadioGroup.Item
                      value={index.toString()}
                      id={`option-${currentQuestion}-${index}`}
                      disabled={showFeedback}
                    />
                    <AppLabel
                      htmlFor={`option-${currentQuestion}-${index}`}
                      className={`flex-1 ${showFeedback && index === questions[currentQuestion].correctAnswer ? 'font-medium text-green-600' : ''}`}
                    >
                      {option}
                    </AppLabel>
                  </div>
                ))}
              </AppRadioGroup>

              {showFeedback && (
                <div className={`mt-6 rounded-lg p-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="mb-2 flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="size-5 text-green-600" />
                    ) : (
                      <XCircle className="size-5 text-red-600" />
                    )}
                    <span className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-gray-600">{questions[currentQuestion].explanation}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {totalQuestions}
              </div>
              {!showFeedback ? (
                <AppButton onClick={handleCheck} className="flex items-center gap-2" disabled={selectedAnswer === null}>
                  Check Answer
                </AppButton>
              ) : (
                <AppButton className="flex items-center gap-2" onClick={handleNext}>
                  {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'} <ChevronRight className="size-4" />
                </AppButton>
              )}
            </div>
            <AppProgress value={((currentQuestion + 1) / totalQuestions) * 100} className="h-2" />
          </div>
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default PracticeExercise;
