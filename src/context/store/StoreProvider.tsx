import React, { useState, useMemo } from 'react';

import StoreContext from './StoreContext';

import type { AuthContextType } from './StoreContext';
import type { UserData } from '@/types/user';
import type { Practice } from '@/types/practice';
import type { Test } from '@/types/test';

export type AuthProviderProps = {
  children: React.ReactNode;
};

const StoreProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [practice, setPractice] = useState<Practice | null>(null);
  const [test, setTest] = useState<Test | null>(null);

  const providerValue = useMemo<AuthContextType>(
    () => ({
      user,
      practice,
      test,
      setUser,
      setPractice,
      setTest,
    }),
    [user],
  );

  return <StoreContext.Provider value={providerValue}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
