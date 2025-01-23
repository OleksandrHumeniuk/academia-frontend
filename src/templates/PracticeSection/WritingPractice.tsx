import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import AppDialog from '@/components/AppDialog/AppDialog';
import AppButton from '@/components/AppButton/AppButton';
import AppProgress from '@/components/AppProgress/AppProgress';
import AppTextarea from '@/components/AppTextarea/AppTextarea';

type WritingPrompt = {
  id: number;
  prompt: string;
  minWords: number;
  tips: string[];
};

type WritingPracticeProps = {
  open?: boolean;
  onClose?: () => void;
  topicTitle?: string;
};

const mockPrompts: WritingPrompt[] = [
  {
    id: 1,
    prompt:
      'What role do you think artificial intelligence will play in education in the future? Provide specific examples and explain your reasoning.',
    minWords: 150,
    tips: [
      'Consider both advantages and disadvantages',
      'Use specific examples to support your points',
      'Structure your response with clear paragraphs',
      'Include an introduction and conclusion',
    ],
  },
  {
    id: 2,
    prompt:
      'Some people believe that social media has made communication between people worse. Others think it has improved how we connect. What is your opinion on this topic?',
    minWords: 150,
    tips: [
      'Discuss both sides of the argument',
      'Use personal experiences as examples',
      'Consider different age groups',
      'Provide a balanced conclusion',
    ],
  },
];

/* This component is unused, because we removed writing practice */
const WritingPractice: React.FC<WritingPracticeProps> = ({
  open = true,
  onClose = () => {},
  topicTitle = 'Essay Writing',
}) => {
  const [currentPrompt, setCurrentPrompt] = useState<number>(0);
  const [response, setResponse] = useState<string>('');
  const [showTips, setShowTips] = useState<boolean>(true);

  const wordCount = response.trim().split(/\s+/).length;
  const prompt = mockPrompts[currentPrompt];

  const handleNext = (): void => {
    if (currentPrompt < mockPrompts.length - 1) {
      setCurrentPrompt(currentPrompt + 1);
      setResponse('');
    } else {
      onClose();
    }
  };

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

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Writing Prompt:</h3>
                  <p className="text-gray-700">{prompt.prompt}</p>
                </div>

                {showTips && (
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="mb-2 font-medium text-blue-700">Writing Tips:</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-blue-600">
                      {prompt.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <AppTextarea
                    value={response}
                    onChange={e => setResponse(e.target.value)}
                    placeholder="Type your response here..."
                    className="min-h-[200px]"
                  />
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{wordCount} words</span>
                    <span>Minimum: {prompt.minWords} words</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-4 flex items-center justify-between">
              <AppButton variant="ghost" onClick={() => setShowTips(!showTips)} className="text-sm">
                {showTips ? 'Hide Tips' : 'Show Tips'}
              </AppButton>
              <AppButton
                onClick={handleNext}
                className="flex items-center gap-2"
                disabled={wordCount < prompt.minWords}
              >
                {currentPrompt === mockPrompts.length - 1 ? 'Finish' : 'Next Prompt'}{' '}
                <ChevronRight className="size-4" />
              </AppButton>
            </div>

            <AppProgress value={((currentPrompt + 1) / mockPrompts.length) * 100} className="h-2" />
          </div>
        </div>
      </AppDialog.Content>
    </AppDialog>
  );
};

export default WritingPractice;
