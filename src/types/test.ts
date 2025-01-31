export type GrammarQuestion = {
  text: string;
  options: string[];
  correctAnswer: number;
};

export type GrammarSection = {
  questions: GrammarQuestion[];
};

export type VocabularyQuestion = {
  text: string;
  options: string[];
  correctAnswer: number;
};

export type VocabularyPassage = {
  text: string;
  questions: VocabularyQuestion[];
};

export type VocabularySection = {
  questions: VocabularyQuestion[];
};

export type WritingSection = {
  questions: string[];
};

export type SpeakingQuestion = {
  text: string;
  url: string;
};

export type SpeakingSection = {
  questionAudios: SpeakingQuestion[];
};

export type Test = {
  _id: string;
  grammar: GrammarSection;
  vocabulary: VocabularySection;
  writing: WritingSection;
  speaking: SpeakingSection;
  createdAt: string;
  updatedAt: string;
};
