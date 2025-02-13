import React, { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

import AppCard from '@/components/AppCard/AppCard';
import AppButton from '@/components/AppButton/AppButton';
import CommunicatingPractice from './CommunicatingPractice';
import SpeakingPractice from '@/templates/SpeakingPractice/SpeakingPractice.tsx';

type PracticeHistoryEntry = {
  id: string;
  title: string;
};

const mockHistory: PracticeHistoryEntry[] = [
  {
    id: '1',
    title: 'Interview with HR - 10.12.2024',
  },
];

const PracticeHistory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  const handleNewSession = () => {
    setIsAgentModalOpen(true);
  };

  const renderPracticeComponent = () => {
    if (!isModalOpen) return null;

    return <CommunicatingPractice open={isModalOpen} onClose={() => setIsModalOpen(false)} type="speaking" />;
  };

  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-1 text-2xl font-semibold text-gray-900">Speaking practice history</h2>
            <p className="text-gray-500">View your previous practice sessions</p>
          </div>
          <AppButton onClick={handleNewSession}>Start new session</AppButton>
        </div>
      </div>

      <div className="space-y-4">
        {mockHistory.map(entry => (
          <AppCard
            key={entry.id}
            className="cursor-pointer p-6 transition-shadow hover:shadow-md"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ChevronRight className="size-5 text-gray-400" />
              </div>
            </div>
          </AppCard>
        ))}
      </div>

      {isModalOpen && renderPracticeComponent()}
      {isAgentModalOpen && <SpeakingPractice open={isAgentModalOpen} onClose={() => setIsAgentModalOpen(false)} />}
    </main>
  );
};

export default PracticeHistory;
