export type PracticeQuestion = {
  text: string;
  options: string;
  correctAnswer: number;
  explanation: string;
};

export type PracticeTopic = {
  name: string;
  description: string;
  progress: number;
  questions: PracticeQuestion[];
};

export type PracticeSpeaking = {
  id: string;
  feedback: string;
  userPrompt: string;
  history: { message: string; source: string }[];
  time: number;
};

export type Practice = {
  id: string;
  grammar: PracticeTopic[];
  vocabulary: PracticeTopic[];
  speaking: PracticeSpeaking;
  createdAt: Date;
};
