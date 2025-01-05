import { Book, BookOpen, Code, PenTool } from 'lucide-react';

import type { PracticeCardProps } from '@/containers/PracticeCard/PracticeCard';

// eslint-disable-next-line import/prefer-default-export
export const MOCK_PRACTICE_SECTIONS: PracticeCardProps[] = [
  {
    title: 'Grammar',
    type: 'grammar',
    progress: 65,
    exercises: 50,
    completed: 32,
    icon: <Code className="text-primary size-8" />,
  },
  {
    title: 'Vocabulary',
    type: 'vocabulary',
    progress: 45,
    exercises: 100,
    completed: 45,
    icon: <Book className="text-primary size-8" />,
  },
  {
    title: 'Reading',
    type: 'reading',
    progress: 55,
    exercises: 30,
    completed: 16,
    icon: <BookOpen className="text-primary size-8" />,
  },
  {
    title: 'Writing',
    type: 'writing',
    progress: 35,
    exercises: 20,
    completed: 7,
    icon: <PenTool className="text-primary size-8" />,
  },
];
