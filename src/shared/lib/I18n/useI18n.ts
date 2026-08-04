import { useContext } from 'react';
import { LangContext } from './langContext';
import { UiTranslations } from './locales';
import { appData } from '@/data';

export const useI18n = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useI18n must be used inside provider');

  return {
    lang: ctx.lang,
    setLang: ctx.setLang,
    ui: UiTranslations[ctx.lang],
    data: appData[ctx.lang],
  };
};
