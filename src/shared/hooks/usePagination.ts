import { useState, useEffect, useMemo } from 'react';

interface UsePaginationProps<T> {
  items: T[];
  searchQuery: string;
}

export function usePagination<T>({ items, searchQuery }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');

  // Reset kolom jump input & kembalikan scroll ke atas saat halaman berganti
  useEffect(() => {
    window.scrollTo(0, 0);
    setJumpPage('');
  }, [currentPage]);

  // Reset ke halaman 1 jika user mengetik kata kunci pencarian baru
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // 🚀 OPTIMASI SLICE & TOTAL PAGES
  const { currentPosts, totalPages } = useMemo(() => {
    let first = 0;
    let last = 8;

    if (currentPage > 1) {
      first = 8 + (currentPage - 2) * 9;
      last = first + 9;
    }

    return {
      currentPosts: items.slice(first, last),
      totalPages: items.length <= 8 ? 1 : 1 + Math.ceil((items.length - 8) / 9),
    };
  }, [items, currentPage]);

  // 🚀 OPTIMASI SLIDING WINDOW (Ganti getPageNumbers biasa dengan useMemo)
  const pageNumbers = useMemo(() => {
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  const handleJumpPageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPage = parseInt(jumpPage, 10);
    if (!isNaN(targetPage) && targetPage >= 1 && targetPage <= totalPages) {
      setCurrentPage(targetPage);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    jumpPage,
    setJumpPage,
    currentPosts,
    totalPages,
    pageNumbers,
    handleJumpPageSubmit,
  };
}
