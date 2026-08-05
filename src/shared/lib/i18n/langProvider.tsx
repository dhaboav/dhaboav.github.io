import { useEffect, useState } from 'react';
import { LangContext } from './langContext';
import type { SupportedLang } from './types';
import { getStoredLang, setStoredLang } from './langStorage';

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<SupportedLang>('en');

  useEffect(() => {
    const savedLang = getStoredLang();
    setLangState(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    setStoredLang(newLang);
    document.documentElement.lang = newLang;
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};
