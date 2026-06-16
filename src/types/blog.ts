import type { SupportedLang } from '@/utils/langUtils';

export interface BlogDetails {
  tag: string;
  title: string;
  excerpt: string;
}

export interface BlogItem {
  date: string;
  dateISO: string;
  slug?: string;
  text: Record<SupportedLang, BlogDetails>;
}
