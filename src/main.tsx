import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import AppTooltip from '@/components/AppTooltip/AppTooltip';
import AppToast from '@/components/AppToast/AppToast';
import { AudioProvider } from '@/hooks/useAudio/useAudio';
import './index.css';
import StoreProvider from '@/context/store/StoreProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <AudioProvider>
          <AppTooltip.Provider delayDuration={100}>
            <App />
            <AppToast />
          </AppTooltip.Provider>
        </AudioProvider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
