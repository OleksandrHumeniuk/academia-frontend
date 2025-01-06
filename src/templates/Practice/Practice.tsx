import React from 'react';

import PracticeCard from '@/containers/PracticeCard/PracticeCard';
import { MOCK_PRACTICE_SECTIONS } from '@/constants/practice';

const Practice: React.FC = () => {
  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-semibold text-gray-900">Practice Progress</h2>
        <p className="text-gray-500">Track your progress in grammar and vocabulary exercises</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {MOCK_PRACTICE_SECTIONS.map(section => (
          <PracticeCard {...section} />
        ))}
      </div>
    </main>
  );
};

export default Practice;
