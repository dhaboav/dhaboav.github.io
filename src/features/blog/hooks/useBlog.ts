import { blogData } from '@/entities/blog/model/data';

export function useBlog() {
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
    .slice(0, 4);

  return {
    recentBlogs,
  };
}
