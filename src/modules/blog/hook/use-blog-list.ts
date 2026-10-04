import { blogData } from '@data/index';
import { useMemo, useState } from 'react';

export function useBlogList(page: number = 1, size: number = 6) {
  const [searchQuery, setSearchQuery] = useState('');

  // Search Filtered Data
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return blogData;

    return blogData.filter(
      (b) => b.title.toLowerCase().includes(query) || b.tag.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  //Limit & Offset
  const totalPages = Math.max(1, Math.ceil(filteredData.length / size));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * size;
  const paginatedData = filteredData.slice(start, start + size);

  return {
    data: paginatedData,
    metadata: {
      current_page: page,
      total_page: totalPages,
      size,
    },
    search: {
      query: searchQuery,
      setQuery: setSearchQuery,
    },
  };
}
