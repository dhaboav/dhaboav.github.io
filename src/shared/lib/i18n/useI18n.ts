import { useContext } from 'react';
import { LangContext } from './langContext';
import id from './id.json';
import en from './en.json';
import { appData } from '@/data';
import type { SupportedLang, Translations } from './types';

const UiTranslations: Record<SupportedLang, Translations> = { id, en };
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
