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

const answer =
  'One of the most challenging concepts for me early on was understanding asynchronous programming, especially with JavaScript’s event loop, Promises, and async/await. Initially, I struggled with callbacks and race conditions, particularly when making API requests or handling real-time data.\n' +
  '\n' +
  'To overcome this, I started by breaking it down into smaller concepts—first understanding how the call stack, event queue, and microtasks work in the JavaScript runtime. Then, I practiced writing small scripts using callbacks, Promises, and eventually async/await to see how they compare.\n' +
  '\n' +
  'A big breakthrough came when I worked on a personal project that involved fetching and processing data from multiple APIs. I encountered issues where some API calls depended on others, leading to callback hell. By refactoring my code to use async/await with proper error handling, I was able to simplify my logic and make it more readable.\n' +
  '\n' +
  'Additionally, reading documentation, watching explainer videos, and reviewing open-source projects helped solidify my understanding. Now, I feel confident in handling async operations efficiently and debugging related issues when they arise.';

const WritingSection: React.FC<WritingSectionProps> = ({ onNext, question }) => {
  const [response, setResponse] = useState<string>(answer);

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
