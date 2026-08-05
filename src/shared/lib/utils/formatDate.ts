import type { SupportedLang } from '@/shared/lib';

export const formatDate = (dateString: string, lang: SupportedLang) => {
  if (!dateString) return '';
  const localeCode = lang === 'en' ? 'en-US' : 'id-ID';
  return new Intl.DateTimeFormat(localeCode, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
};
