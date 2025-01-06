import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

import AppDialog from '@/components/AppDialog/AppDialog';
import AppButton from '@/components/AppButton/AppButton';
import AppProgress from '@/components/AppProgress/AppProgress';
import AppScrollArea from '@/components/AppScrollArea/AppScrollArea';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import AppLabel from '@/components/AppLabel/AppLabel';

type ReadingQuestion = {
  id: number;
  passage: string;
  questions: Array<{
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
};

type ReadingPracticeProps = {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
};

const mockReading: ReadingQuestion = {
  id: 1,
  passage: `Artificial Intelligence (AI) has become an integral part of our daily lives, transforming how we work, communicate, and solve problems. From virtual assistants to autonomous vehicles, AI technologies are revolutionizing various industries. However, this rapid advancement also raises important ethical questions about privacy, job displacement, and the future role of humans in an AI-driven world.

While AI offers numerous benefits, such as increased efficiency and improved decision-making, it also presents challenges that society must address. One major concern is the potential impact on employment, as automation may replace certain jobs. Another consideration is the need for transparent and unbiased AI systems that serve all members of society equally.

As we continue to develop and implement AI technologies, it's crucial to establish proper guidelines and regulations. This will help ensure that AI advancement benefits humanity while minimizing potential risks and ethical concerns.`,
  questions: [
    {
      text: 'What is the main theme of the passage?',
      options: [
        'The history of AI development',
        'The impact and challenges of AI in society',
        'How to build AI systems',
        'The future of employment',
      ],
      correctAnswer: 1,
      explanation: 'The passage primarily discusses how AI affects society and its associated benefits and challenges.',
    },
    {
      text: 'According to the passage, what is one major concern about AI?',
      options: [
        'The cost of development',
        'The speed of advancement',
        'The impact on employment',
        'The complexity of systems',
      ],
      correctAnswer: 2,
      explanation: 'The passage explicitly mentions job displacement through automation as a major concern.',
    },
  ],
};

const ReadingPractice: React.FC<ReadingPracticeProps> = ({
  open = true,
  onClose = () => {},
  topicTitle = 'Reading Comprehension',
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleNext = (): void => {
    if (currentQuestion < mockReading.questions.length - 1) {
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

  const isCorrect = selectedAnswer === mockReading.questions[currentQuestion].correctAnswer;

  return (
    <AppDialog open={open} onOpenChange={onClose}>
      <AppDialog.Content className="min-h-[600px] w-[800px] bg-white p-0">
        <div className="flex h-full flex-col p-6">
          <div className="flex-1">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {topicTitle}
                </div>
              </div>

              <AppScrollArea className="mb-6 h-[200px] rounded-md border p-4">
                <div className="text-sm leading-relaxed">{mockReading.passage}</div>
              </AppScrollArea>

              <div className="mt-6">
                <h3 className="mb-4 text-lg font-medium">
                  {currentQuestion + 1}. {mockReading.questions[currentQuestion].text}
                </h3>
                <AppRadioGroup
                  key={currentQuestion}
                  value={selectedAnswer?.toString()}
                  onValueChange={value => setSelectedAnswer(parseInt(value))}
                  className="space-y-4"
                >
                  {mockReading.questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <AppRadioGroup.Item value={index.toString()} id={`option-${index}`} disabled={showFeedback} />
                      <AppLabel
                        htmlFor={`option-${index}`}
                        className={`flex-1 ${showFeedback && index === mockReading.questions[currentQuestion].correctAnswer ? 'font-medium text-green-600' : ''}`}
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
                    <p className="text-gray-600">{mockReading.questions[currentQuestion].explanation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {mockReading.questions.length}
              </div>
              {!showFeedback ? (
                <AppButton onClick={handleCheck} className="flex items-center gap-2" disabled={selectedAnswer === null}>
                  Check Answer
                </AppButton>
              ) : (
                <AppButton onClick={handleNext} className="flex items-center gap-2">
                  {currentQuestion === mockReading.questions.length - 1 ? 'Finish' : 'Next'}{' '}
                  <ChevronRight className="size-4" />
                </AppButton>
              )}
            </div>

            <AppProgress value={((currentQuestion + 1) / mockReading.questions.length) * 100} className="h-2" />
          </div>
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default ReadingPractice;
