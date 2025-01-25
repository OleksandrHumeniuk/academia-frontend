import { createContext } from 'react';

import type { User } from '@/types/user';
import type { Practice } from '@/types/practice';
import type { Test } from '@/types/test';

export type AuthContextType = {
  user: User | null;
  practice: Practice | null;
  test: Test | null;
  setUser: (user: User | null) => void;
  setPractice: (practice: Practice | null) => void;
  setTest: (test: Test | null) => void;
};

const StoreContext = createContext<AuthContextType | null>(null);

export default StoreContext;
