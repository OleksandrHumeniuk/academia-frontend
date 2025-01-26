import type { TestResultPreview } from '@/types/result';

export type User = {
  _id: string;
  email: string;
  name: string;
  profession: string;
};

export type UserData = {
  info: User;
  results?: TestResultPreview;
};
