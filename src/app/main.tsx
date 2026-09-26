import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { LangProvider } from '@/i18n/langProvider';

import App from './App';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);
