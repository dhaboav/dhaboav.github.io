import { createRoot } from 'react-dom/client';
import './css/style.css';
import { StrictMode } from 'react';
import App from './App';

import { LangProvider } from '@/context/langContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
);
