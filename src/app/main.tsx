import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { LangProvider } from '@/shared/i18n/lang-provider';

import App from './app';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);
