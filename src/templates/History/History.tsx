import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpenCheck, Calendar, ChevronRight } from 'lucide-react';

import TestAPI from '@/api/TestAPI/TestAPI';
import AppCard from '@/components/AppCard/AppCard';
import Loading from '@/templates/Loading/Loading';
import formatDate from '@/utils/formatDate';
import getNextLevel from '@/utils/getNextLevel';
import AppAlert from '@/components/AppAlert/AppAlert';
import AppButton from '@/components/AppButton/AppButton';

import type { TestResultPreview } from '@/types/result';

const History: React.FC = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState<TestResultPreview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleResultClick = (id: string): void => {
    navigate(`/results/${id}`);
  };

  const loadResults = (): void => {
    TestAPI.getAllResults()
      .then(response => setResults(response))
      .finally(() => setIsLoading(false));
  };

  useEffect(loadResults, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!results.length) {
    return (
      <main className="flex-1 px-2 py-4 sm:px-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900">Test History</h2>
          <p className="text-gray-500"> View your previous assessment results</p>
        </div>

        <AppAlert>
          <BookOpenCheck className="size-4" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-2">
            <div>
              <AppAlert.Description className="mb-2">
                Please complete your initial assessment to see the test history
              </AppAlert.Description>
              <AppAlert.Title>
                To provide you with personalized insights and recommendations, we need you to complete the initial
                assessment. This will help us understand your needs better and deliver more relevant results.
              </AppAlert.Title>
            </div>

            <AppButton size="lg" asChild className="w-full sm:w-auto">
              <Link to="/test">Start Assessment</Link>
            </AppButton>
          </div>
        </AppAlert>
      </main>
    );
  }

  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-semibold text-gray-900">Test History</h2>
        <p className="text-gray-500"> View your previous assessment results</p>
      </div>

      <div className="space-y-4">
        {results.map(result => (
          <AppCard
            key={result._id}
            className="cursor-pointer p-6 transition-shadow hover:shadow-md"
            onClick={() => handleResultClick(result._id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Level {result.englishLevel} Assessment</h3>
                  <p className="text-sm text-gray-500">{formatDate(result.createdAt)}</p>
                </div>
              </div>
              {getNextLevel(result.englishLevel) && (
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold">{result.scoreToNext}%</div>
                    <div className="text-sm text-gray-500">Score to {getNextLevel(result.englishLevel)}</div>
                  </div>
                  <ChevronRight className="size-5 text-gray-400" />
                </div>
              )}{' '}
            </div>
          </AppCard>
        ))}
      </div>
    </main>
  );
};

export default History;
