import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppCard from '@/components/AppCard/AppCard';
import AppProgress from '@/components/AppProgress/AppProgress';

export type PracticeCardProps = {
  title: string;
  progress: number;
  exercises: number;
  completed: number;
  type: 'grammar' | 'vocabulary' | 'reading' | 'writing';
  icon: React.ReactNode;
};

const PracticeCard: React.FC<PracticeCardProps> = ({
  title, //
  progress,
  exercises,
  completed,
  type,
  icon,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (): void => {
    navigate(`/practice/${type}`);
  };

  return (
    <AppCard className="cursor-pointer bg-white p-6 transition-shadow hover:shadow-md" onClick={handleCardClick}>
      <div className="mb-4 flex items-center gap-4">
        {icon}
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-500">
            {completed} of {exercises} exercises completed
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <AppProgress value={progress} className="h-2" />
      </div>
    </AppCard>
  );
};

export default PracticeCard;
