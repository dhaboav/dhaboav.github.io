import { useMemo } from 'react';
import { blogData } from '@/entities/blog';

export function useBlog() {
  const recentBlogs = useMemo(() => {
    return [...blogData]
      .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
      .slice(0, 4);
  }, []);

  return { recentBlogs };
}
