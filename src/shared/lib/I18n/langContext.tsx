import { createContext, useEffect, useState } from 'react';
import type { SupportedLang, LangContextType } from './types';
import { getStoredLang, setStoredLang } from '../utils';

export const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<SupportedLang>('en');

  useEffect(() => {
    const savedLang = getStoredLang();
    setLangState(savedLang);
  }, []);

  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    setStoredLang(newLang);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};
