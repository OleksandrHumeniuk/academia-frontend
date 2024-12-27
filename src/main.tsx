import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppTooltip from '@/components/AppTooltip/AppTooltip';
import AppToast from '@/components/AppToast/AppToast';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTooltip.Provider delayDuration={100}>
      <App />
      <AppToast />
    </AppTooltip.Provider>
  </StrictMode>,
);
