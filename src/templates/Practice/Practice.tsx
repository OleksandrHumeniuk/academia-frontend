import React from 'react';
import { Book, BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import PracticeCard from '@/containers/PracticeCard/PracticeCard';
import useStore from '@/context/store/useStore';
import AppAlert from '@/components/AppAlert/AppAlert';
import AppButton from '@/components/AppButton/AppButton';

const Practice: React.FC = () => {
  const { practice } = useStore();

  if (!practice) {
    return (
      <main className="flex-1 px-2 py-4 sm:px-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900">Practice Progress</h2>
          <p className="text-gray-500">Track your progress in grammar and vocabulary exercises</p>
        </div>

        <AppAlert>
          <BookOpenCheck className="size-4" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-2">
            <div>
              <AppAlert.Description className="mb-2">
                Please complete your initial assessment to generate practice exercises
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

  //TODO: add vocabulary an speaking
  return (
    <main className="flex-1 px-2 py-4 sm:px-8">
      <div className="mb-6">
        <h2 className="mb-1 text-2xl font-semibold text-gray-900">Practice Progress</h2>
        <p className="text-gray-500">Track your progress in grammar and vocabulary exercises</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PracticeCard
          icon={<Book className="size-8 text-primary" />}
          title="Vocabulary"
          exercises={practice.vocabulary}
          type="vocabulary"
        />
      </div>
    </main>
  );
};

export default Practice;
