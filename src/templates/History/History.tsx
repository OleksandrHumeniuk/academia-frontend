import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

import AppCard from '@/components/AppCard/AppCard';

type TestResult = {
  id: string;
  date: string;
  level: string;
  percentage: number;
  scores: Array<{ skill: string; score: number }>;
};

const mockResults: TestResult[] = [
  {
    id: '1',
    date: '2024-03-20',
    level: 'B1',
    percentage: 75,
    scores: [
      { skill: 'Speaking', score: 75 },
      { skill: 'Listening', score: 80 },
      { skill: 'Reading', score: 85 },
      { skill: 'Writing', score: 70 },
      { skill: 'Grammar', score: 90 },
    ],
  },
  {
    id: '2',
    date: '2024-03-15',
    level: 'B1',
    percentage: 70,
    scores: [
      { skill: 'Speaking', score: 70 },
      { skill: 'Listening', score: 75 },
      { skill: 'Reading', score: 80 },
      { skill: 'Writing', score: 65 },
      { skill: 'Grammar', score: 85 },
    ],
  },
];

const History: React.FC = () => {
  const navigate = useNavigate();

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleResultClick = (): void => {
    navigate('/results');
  };

  return (
    <main className="flex-1 px-2 py-4 sm:px-2">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-semibold text-gray-900">Test History</h2>
        <p className="text-gray-500"> View your previous assessment results</p>
      </div>

      <div className="space-y-4">
        {mockResults.map(result => (
          <AppCard
            key={result.id}
            className="cursor-pointer p-6 transition-shadow hover:shadow-md"
            onClick={handleResultClick}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Level {result.level} Assessment</h3>
                  <p className="text-sm text-gray-500">{formatDate(result.date)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold">{result.percentage}%</div>
                  <div className="text-sm text-gray-500">Overall Score</div>
                </div>
                <ChevronRight className="size-5 text-gray-400" />
              </div>
            </div>
          </AppCard>
        ))}
      </div>
    </main>
  );
};

export default History;
