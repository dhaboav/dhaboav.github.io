import { useState, useMemo } from 'react';
import { blogData } from '@/entities/blog/model/data';

export function useBlogList() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredBlogs = useMemo(() => {
    // Data filter
    const query = searchQuery.toLowerCase().trim();
    const itemsToSort = query
      ? blogData.filter(
          (blog) =>
            blog.title.toLowerCase().includes(query) || blog.tag.toLowerCase().includes(query),
        )
      : blogData;

    // 🚀 Data sorting from filtered data
    return [...itemsToSort].sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    blogs: filteredBlogs,
  };
}
