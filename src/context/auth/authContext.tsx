import { createContext } from 'react';

import type { User } from '@/types/user';

export type AuthContextType = {
  user: Partial<User> | null;
  refetch: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
