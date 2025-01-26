export type EnglishLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type GrammarAnswer = {
  selectedAnswer: number;
  isCorrect: boolean;
  comment: string;
};

export type GrammarResult = {
  answers: GrammarAnswer[];
};

export type VocabularyQuestionResult = {
  selectedAnswer: number;
  isCorrect: boolean;
  comment: string;
};

export type VocabularyPassageResult = {
  questions: VocabularyQuestionResult[];
};

export type VocabularyResult = {
  passages: VocabularyPassageResult[];
};

export type WritingAnswer = {
  answer: string;
  comment: string;
};

export type WritingResult = {
  answers: WritingAnswer[];
};

export type SpeakingAnswer = {
  audioUrl: string;
  comment: string;
};

export type SpeakingResult = {
  answers: SpeakingAnswer[];
};

export type SkillScore = {
  skill: string;
  score: number;
};

export type TestResult = {
  _id: string;
  testId: string;
  userId: string;
  scores: SkillScore[];
  grammar: GrammarResult;
  vocabulary: VocabularyResult;
  writing: WritingResult;
  speaking: SpeakingResult;
  englishLevel: EnglishLevel;
  scoreToNext: number;
  strengths: string[];
  weaknesses: string[];
  comment: string;
  createdAt: string;
  updatedAt: string;
};

export type TestResultPreview = {
  _id: string;
  testId: string;
  userId: string;
  scores: SkillScore[];
  englishLevel: EnglishLevel;
  scoreToNext: number;
  createdAt: string;
  updatedAt: string;
};
