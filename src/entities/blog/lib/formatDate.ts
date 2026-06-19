import type { SupportedLang } from '@/shared/lib/I18n/types';

export const formatDate = (dateString: string, lang: SupportedLang) => {
  if (!dateString) return '';
  const localeCode = lang === 'id' ? 'id-ID' : 'en-US';
  return new Intl.DateTimeFormat(localeCode, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
};
