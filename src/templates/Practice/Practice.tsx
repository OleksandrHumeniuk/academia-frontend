import React from 'react';

import PracticeCard from '@/containers/PracticeCard/PracticeCard';
import { MOCK_PRACTICE_SECTIONS } from '@/constants/practice';

const Practice: React.FC = () => {
  return (
    <main className="flex-1 px-8 py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {MOCK_PRACTICE_SECTIONS.map(section => (
          <PracticeCard {...section} />
        ))}
      </div>
    </main>
  );
};

export default Practice;
