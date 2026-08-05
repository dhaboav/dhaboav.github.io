import { createContext } from 'react';
import type { LangContextType } from './types';

export const LangContext = createContext<LangContextType | null>(null);
