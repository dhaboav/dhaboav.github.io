import type { SupportedLang } from '@/types/lang';

const LANG_KEY = 'app_lang';

export function getStoredLang(): SupportedLang {
  if (typeof window === 'undefined') return 'en';

  const saved = localStorage.getItem(LANG_KEY);

  // fallback safety
  if (saved === 'en' || saved === 'id') {
    return saved;
  }

  return 'en';
}

export function setStoredLang(lang: SupportedLang) {
  localStorage.setItem(LANG_KEY, lang);
}
