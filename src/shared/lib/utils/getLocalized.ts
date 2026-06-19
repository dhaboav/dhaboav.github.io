import type { SupportedLang } from '../I18n';

export const getLocalized = <T>(data: Record<SupportedLang, T>, lang: SupportedLang): T => {
  return data[lang];
};
