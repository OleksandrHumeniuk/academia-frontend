import React from 'react';
import { Book, Code } from 'lucide-react';

import AppCard from '@/components/AppCard/AppCard';
import AppProgress from '@/components/AppProgress/AppProgress';
import ProficiencyProgress from '@/containers/ProficiencyProgress/ProficiencyProgress';
import SkillsRadarChart from '@/containers/SkillsRadarChart/SkillsChart';

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 px-8 py-4">
      <div className="mx-auto max-w-7xl space-y-8">
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
          <AppCard className="cursor-pointer bg-white p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center gap-4">
              <Code className="text-primary size-8" />
              <div>
                <h3 className="text-lg font-medium">Grammar</h3>
                <p className="text-sm text-gray-500">32 of 50 exercises completed</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium">{Math.round(32 / 50)}%</span>
              </div>

              <AppProgress value={Math.round(32 / 50)} className="h-2" />
            </div>
          </AppCard>

          <AppCard className="cursor-pointer bg-white p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center gap-4">
              <Book className="text-primary size-8" />
              <div>
                <h3 className="text-lg font-medium">Vocabulary</h3>
                <p className="text-sm text-gray-500">24 of 50 exercises completed</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium">{Math.round(32 / 50)}%</span>
              </div>

              <AppProgress value={Math.round(24 / 50)} className="h-2" />
            </div>
          </AppCard>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
