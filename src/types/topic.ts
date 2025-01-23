export type Topic = {
  id: string;
  title: string;
  description: string;
  progress: number;
  exercises: number;
  completed: number;
  type: 'grammar' | 'vocabulary';
};
