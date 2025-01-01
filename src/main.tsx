import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppTooltip from '@/components/AppTooltip/AppTooltip';
import AppToast from '@/components/AppToast/AppToast';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppTooltip.Provider delayDuration={100}>
        <App />
        <AppToast />
      </AppTooltip.Provider>
    </BrowserRouter>
  </StrictMode>,
);
