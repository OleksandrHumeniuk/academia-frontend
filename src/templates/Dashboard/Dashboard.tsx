import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import AppCard from '@/components/AppCard/AppCard';
import AppAlert from '@/components/AppAlert/AppAlert';
import AppButton from '@/components/AppButton/AppButton';
import ProficiencyProgress from '@/containers/ProficiencyProgress/ProficiencyProgress';
import SkillsRadarChart from '@/containers/SkillsRadarChart/SkillsRadarChart';
import PracticeCard from '@/containers/PracticeCard/PracticeCard';
import { MOCK_PRACTICE_SECTIONS } from '@/constants/practice';
import useStore from '@/context/store/useStore';

const Dashboard: React.FC = () => {
  const { user, practice } = useStore();

  if (!user?.results || !practice) {
    return (
      <main className="flex-1 px-2 py-4 sm:px-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900">Current English Level</h2>
          <p className="text-gray-500">Track your English proficiency progress</p>
        </div>

        <AppAlert>
          <BookOpenCheck className="size-4" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-2">
            <div>
              <AppAlert.Description className="mb-2">
                Please complete your initial assessment to see the results
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
      <div className="mx-auto space-y-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold text-gray-900">Current English Level</h2>
          <p className="text-gray-500">Track your English proficiency progress</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AppCard className="flex flex-col bg-white p-8">
              <h2 className="mb-6 text-xl font-semibold text-black">Overall Proficiency</h2>
              <div className="flex flex-1 justify-center">
                <ProficiencyProgress level={user.results.englishLevel} percentage={user.results.scoreToNext} />
              </div>
            </AppCard>

            <AppCard className="bg-white p-8">
              <h2 className="mb-6 text-xl font-semibold text-black">Skill Breakdown</h2>
              <div className="flex justify-center">
                <SkillsRadarChart scores={user.results.scores} />
              </div>
            </AppCard>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Practice Progress</h2>
          <p className="text-gray-500">Track your progress in grammar and vocabulary exercises</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {MOCK_PRACTICE_SECTIONS.map(section => (
            <PracticeCard {...section} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
