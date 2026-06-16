import { createRoot } from 'react-dom/client';
import './css/style.css';
import { StrictMode } from 'react';
import Navbar from '@/components/Navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
);
