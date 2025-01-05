import type { Topic } from '@/types/topic';

export const MOCK_GRAMMAR_TOPICS: Topic[] = [
  {
    id: 'present-tense',
    title: 'Present Tense',
    description: 'Learn about simple and continuous present tense',
    progress: 75,
    exercises: 10,
    completed: 7,
    type: 'grammar',
  },
  {
    id: 'past-tense',
    title: 'Past Tense',
    description: 'Master regular and irregular past tense verbs',
    progress: 50,
    exercises: 12,
    completed: 6,
    type: 'grammar',
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Practice zero, first, and second conditionals',
    progress: 25,
    exercises: 8,
    completed: 2,
    type: 'grammar',
  },
];

export const MOCK_VOCABULARY_TOPICS: Topic[] = [
  {
    id: 'business',
    title: 'Business English',
    description: 'Essential vocabulary for professional settings',
    progress: 60,
    exercises: 15,
    completed: 9,
    type: 'vocabulary',
  },
  {
    id: 'academic',
    title: 'Academic Words',
    description: 'Common words used in academic writing',
    progress: 40,
    exercises: 20,
    completed: 8,
    type: 'vocabulary',
  },
  {
    id: 'phrasal-verbs',
    title: 'Phrasal Verbs',
    description: 'Most common phrasal verbs in English',
    progress: 30,
    exercises: 25,
    completed: 7,
    type: 'vocabulary',
  },
];

export const MOCK_READING_TOPICS: Topic[] = [
  {
    id: 'academic-reading',
    title: 'Academic Articles',
    description: 'Practice reading and comprehending academic texts',
    progress: 40,
    exercises: 10,
    completed: 4,
    type: 'reading',
  },
  {
    id: 'news-articles',
    title: 'News Articles',
    description: 'Read and analyze current news articles',
    progress: 60,
    exercises: 15,
    completed: 9,
    type: 'reading',
  },
];

export const MOCK_WRITING_TOPICS: Topic[] = [
  {
    id: 'essay-writing',
    title: 'Essay Writing',
    description: 'Practice writing academic essays',
    progress: 30,
    exercises: 8,
    completed: 2,
    type: 'writing',
  },
  {
    id: 'business-writing',
    title: 'Business Writing',
    description: 'Learn to write professional emails and reports',
    progress: 45,
    exercises: 10,
    completed: 4,
    type: 'writing',
  },
];
