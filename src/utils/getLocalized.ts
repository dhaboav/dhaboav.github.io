import type { SupportedLang } from '@/types/lang';

export const getLocalized = <T>(data: Record<SupportedLang, T>, lang: SupportedLang): T => {
  return data[lang];
};
