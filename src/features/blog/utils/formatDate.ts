import type { SupportedLang } from '@/types/lang';

export const formatDate = (dateString: string, lang: SupportedLang) => {
  if (!dateString) return '';
  const localeCode = lang === 'id' ? 'id-ID' : 'en-US';
  return new Intl.DateTimeFormat(localeCode, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
};
