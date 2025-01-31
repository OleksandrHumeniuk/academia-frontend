import { createContext } from 'react';

import type { User, UserData } from '@/types/user';
import type { Practice } from '@/types/practice';
import type { Test } from '@/types/test';

export type AuthContextType = {
  user: UserData | null;
  practice: Practice | null;
  test: Test | null;
  setUser: (user: UserData | null) => void;
  setPractice: (practice: Practice | null) => void;
  setTest: (test: Test | null) => void;
};

const StoreContext = createContext<AuthContextType | null>(null);

export default StoreContext;
