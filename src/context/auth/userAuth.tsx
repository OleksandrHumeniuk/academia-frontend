import { useContext } from 'react';

import AuthContext from './authContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  return {
    user: context?.user || null,
    authorized: !!context?.user,
    refetchUser: () => context?.refetch(),
  };
};

export default useAuth;
