import { useState, useMemo } from 'react';
import { blogData } from '@/data/blog';

export function useBlogList() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredBlogs = useMemo(() => {
    const sorted = [...blogData].sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    );

    if (!searchQuery) return sorted;

    return sorted.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tag.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    blogs: filteredBlogs,
  };
}
