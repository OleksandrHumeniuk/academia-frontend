import React from 'react';

import AppProgress from '@/components/AppProgress/AppProgress';
import getNextLevel from '@/utils/getNextLevel';

import type { EnglishLevel } from '@/types/result';

type ProficiencyProgressProps = {
  level: EnglishLevel;
  percentage: number;
};

const ProficiencyProgress: React.FC<ProficiencyProgressProps> = ({ level, percentage }) => {
  const nextLevel = getNextLevel(level);

  return (
    <div>
      <div className="relative flex size-[200px] items-center justify-center">
        <div className="absolute inset-2">
          <div className="size-full rounded-full border-8 border-gray-100">
            <div
              className="absolute inset-0 rounded-full border-8 border-black"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${percentage}%, 0 ${percentage}%)`,
              }}
            />
          </div>
        </div>

        <div className="z-10 text-center">
          <div className="text-4xl font-bold text-black">{level}</div>
          <div className="text-sm text-gray-600">Proficiency Level</div>
        </div>
      </div>

      {nextLevel && (
        <>
          <div className="mb-1 mt-4 text-center text-xl font-semibold text-black">
            {percentage}% to {nextLevel}
          </div>
          <AppProgress value={percentage} className="mx-auto h-2 w-full" />
        </>
      )}
    </div>
  );
};

export default ProficiencyProgress;
