import type { EnglishLevel } from '@/types/result';

const getNextLevel = (level: EnglishLevel): EnglishLevel | null => {
  const levels: EnglishLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIndex = levels.indexOf(level);
  return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
};

export default getNextLevel;
