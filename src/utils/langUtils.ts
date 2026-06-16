import { langData } from '@/data/languages';
import type { LanguageStructure } from '@/types/languages';

export type SupportedLang = 'en' | 'id' | 'jp';

export function getLang(): SupportedLang {
  const savedLang = localStorage.getItem('site-lang');
  if (savedLang === 'id' || savedLang === 'en' || savedLang === 'jp') {
    return savedLang as SupportedLang;
  }
  return 'en';
}

export function updateHtmlLang(): void {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.title = langData[lang].pageTitle;
}

export function text<K extends keyof LanguageStructure>(section: K): LanguageStructure[K] {
  const lang = getLang();
  return langData[lang][section];
}
