import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

import AppButton from '@/components/AppButton/AppButton';
import AppProgress from '@/components/AppProgress/AppProgress';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppDialog from '@/components/AppDialog/AppDialog';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import PracticeAPI from '@/api/PracticeAPI/PracticeAPI';
import useStore from '@/context/store/useStore';

type PracticeExerciseProps = {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
  totalQuestions: number;
  questions: any[];
  initalQuestionIndex: number;
};

const PracticeExercise: React.FC<PracticeExerciseProps> = ({
  open = true,
  onClose = () => {},
  topicTitle = 'Present Tense',
  totalQuestions,
  questions,
  initalQuestionIndex,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(initalQuestionIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const { setPractice } = useStore();

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

    // setPractice(practice => {
    //   if (!practice) return null;

    //   // Create a deep copy of the practice object
    //   const updatedPractice = {
    //     ...practice,
    //     [section]: currentPractice[section].map((topic: PracticeTopic) => {
    //       if (topic.name === topicName) {
    //         return {
    //           ...topic,
    //           progress: topic.progress + 1,
    //         };
    //       }
    //       return topic;
    //     }),
    //   };

    //   return updatedPractice as Practice;
    // });

    PracticeAPI.submitAnswer('vocabulary', topicTitle)
      .then(res => console.log(res))
      .catch(e => console.log(e));
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
