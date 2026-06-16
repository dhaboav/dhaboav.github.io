import { blogData } from '@/data/blog';
import { text, getLang } from '@/utils/langUtils';

export function useBlog() {
  const lang = getLang();
  const textLang = text('blog');
  const titleParts = (textLang.title || '').split(' ');
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
    .slice(0, 4);

  return {
    lang,
    textLang,
    titleParts,
    recentBlogs,
  };
}
