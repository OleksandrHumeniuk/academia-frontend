import React, { useMemo } from 'react';

import AppProgress from '@/components/AppProgress/AppProgress';

import type { EnglishLevel } from '@/types/result';

type ProficiencyProgressProps = {
  level: EnglishLevel;
  percentage: number;
};

const ProficiencyProgress: React.FC<ProficiencyProgressProps> = ({ level, percentage }) => {
  const nextLevel = useMemo<EnglishLevel | null>(() => {
    const levels: EnglishLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const currentIndex = levels.indexOf(level);
    return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
  }, [level]);

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
