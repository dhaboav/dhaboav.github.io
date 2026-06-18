import { createContext, useEffect, useState } from 'react';
import type { SupportedLang } from '@/types/lang';
import { getStoredLang, setStoredLang } from '@/utils/langStorage';

type LangContextType = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
};

export const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<SupportedLang>('en');

  // 1. load saved language ONCE
  useEffect(() => {
    const savedLang = getStoredLang();
    setLangState(savedLang);
  }, []);

  // 2. wrapper function (important)
  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    setStoredLang(newLang);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};
