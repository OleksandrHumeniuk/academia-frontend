import React from 'react';

import AppCard from '@/components/AppCard/AppCard';
import ProficiencyProgress from '@/containers/ProficiencyProgress/ProficiencyProgress';
import SkillsRadarChart from '@/containers/SkillsRadarChart/SkillsRadarChart';
import PracticeCard from '@/containers/PracticeCard/PracticeCard';
import { MOCK_PRACTICE_SECTIONS } from '@/constants/practice';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 px-8 py-4">
      <div className="mx-auto space-y-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Current English Level</h2>
          <p className="text-gray-500">Track your English proficiency progress</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <AppCard className="flex flex-col bg-white p-8">
              <h2 className="mb-6 text-xl font-semibold text-black">Overall Proficiency</h2>
              <div className="flex flex-1 justify-center">
                <ProficiencyProgress level="B1" nextLevel="B2" percentage={75} />
              </div>
            </AppCard>

            <AppCard className="bg-white p-8">
              <h2 className="mb-6 text-xl font-semibold text-black">Skill Breakdown</h2>
              <div className="flex justify-center">
                <SkillsRadarChart
                  scores={[
                    { skill: 'Speaking', score: 75 },
                    { skill: 'Listening', score: 80 },
                    { skill: 'Reading', score: 85 },
                    { skill: 'Writing', score: 70 },
                    { skill: 'Grammar', score: 90 },
                  ]}
                />
              </div>
            </AppCard>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Practice Progress</h2>
          <p className="text-gray-500">Track your progress in grammar and vocabulary exercises</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {MOCK_PRACTICE_SECTIONS.map(section => (
            <PracticeCard {...section} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
