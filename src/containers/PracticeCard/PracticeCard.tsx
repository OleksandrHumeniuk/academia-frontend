import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import AppCard from '@/components/AppCard/AppCard';
import AppProgress from '@/components/AppProgress/AppProgress';
import { PracticeTopic } from '@/types/practice';

export type PracticeCardProps = {
  title: string;
  exercises: PracticeTopic[];
  type: 'grammar' | 'vocabulary' | 'speaking';
  icon: React.ReactNode;
};

const PracticeCard: React.FC<PracticeCardProps> = ({
  title, //
  exercises,
  type,
  icon,
}) => {
  const navigate = useNavigate();

  const progress = useMemo<number>(() => {
    const totalProgress = exercises.reduce((sum, item) => {
      const exerciseProgress = (item.progress / item.questions.length) * 100;
      return sum + exerciseProgress;
    }, 0);

    const averageProgress = totalProgress / exercises.length;
    return Math.round(averageProgress);
  }, [exercises]);

  const handleCardClick = (): void => {
    navigate(`/practice/${type}`);
  };

  return (
    <AppCard className="cursor-pointer bg-white p-6 transition-shadow hover:shadow-md" onClick={handleCardClick}>
      <div className="mb-4 flex items-center gap-4">
        {icon}
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
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
