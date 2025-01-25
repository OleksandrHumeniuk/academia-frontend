import { useContext } from 'react';

import StoreContext from './StoreContext';

const useStore = () => {
  const context = useContext(StoreContext);

  return {
    user: context?.user || null,
    practice: context?.practice || null,
    test: context?.test || null,
    setUser: context?.setUser || (() => {}),
    setPractice: context?.setPractice || (() => {}),
    setTest: context?.setTest || (() => {}),
  };
};

export default useStore;
