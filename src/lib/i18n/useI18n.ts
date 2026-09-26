import { useContext } from 'react';

import { appData } from '@/data';

import en from './en.json';
import id from './id.json';
import { LangContext } from './langContext';
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
