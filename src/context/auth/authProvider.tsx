import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { jwtDecode } from 'jwt-decode';

import AuthContext from './authContext';

import type { AuthContextType } from './authContext';
import type { User } from '@/types/user';

export type AuthProviderProps = {
  children: React.ReactNode;
};

// TODO: Fix this Partial<User> :(
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Partial<User> | null>(null);

  const parseUser = useCallback((): void => {
    const token = localStorage.getItem('token');

    if (!token) {
      setUser(null);
      return;
    }

    const decodedToken = jwtDecode<User & { exp: number }>(token);

    if (Date.now() >= decodedToken.exp * 1000) {
      localStorage.removeItem('token');
      setUser(null);
      return;
    }

    setUser({
      id: decodedToken.id,
    });
  }, []);

  const providerValue = useMemo<AuthContextType>(
    () => ({
      refetch: parseUser,
      user,
    }),
    [user, parseUser],
  );

  useEffect(parseUser, []);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
