import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppTextarea from '@/components/AppTextarea/AppTextarea';
import AppCard from '@/components/AppCard/AppCard';

type WritingSectionProps = {
  onNext: (response: string) => void;
  question: {
    prompt: string;
    minWords?: number;
  };
};

const WritingSection: React.FC<WritingSectionProps> = ({ onNext, question }) => {
  const [response, setResponse] = useState<string>('');

  const wordCount = response.trim().split(/\s+/).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Part 4 – Writing</h1>
        <p className="text-gray-600">Write a response to the following prompt:</p>
      </div>

      <AppCard className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">{question.prompt}</h3>
            <AppTextarea
              value={response}
              onChange={e => setResponse(e.target.value)}
              placeholder="Type your response here..."
              className="min-h-[200px]"
            />
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>{wordCount} words</span>
              {question.minWords && <span>Minimum: {question.minWords} words</span>}
            </div>
          </div>
          <AppButton
            className="w-full"
            disabled={question.minWords ? wordCount < question.minWords : false}
            onClick={() => onNext(response)}
          >
            Finish Section
          </AppButton>
        </div>
      </AppCard>
    </div>
  );
};

export default WritingSection;
