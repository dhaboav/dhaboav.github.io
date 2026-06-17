import { useState, useEffect } from 'react';

interface UsePaginationProps<T> {
  items: T[];
  searchQuery: string;
}

export function usePagination<T>({ items, searchQuery }: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPage, setJumpPage] = useState('');

  // Reset input jump dan scroll ke atas saat halaman berganti
  useEffect(() => {
    window.scrollTo(0, 0);
    setJumpPage('');
  }, [currentPage]);

  // Reset ke halaman 1 jika user mengetik pencarian baru
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // 🌟 LOGIKA SLICE DINAMIS: Halaman 1 ambil 8 item, berikutnya ambil 9 item
  let indexOfFirstPost = 0;
  let indexOfLastPost = 8;

  if (currentPage > 1) {
    indexOfFirstPost = 8 + (currentPage - 2) * 9;
    indexOfLastPost = indexOfFirstPost + 9;
  }

  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Kalkulasi total halaman berdasarkan formula bobot dinamis
  const totalPages = items.length <= 8 ? 1 : 1 + Math.ceil((items.length - 8) / 9);

  // 🌟 LOGIKA SLIDING WINDOW (Maksimal 5 Angka)
  const getPageNumbers = () => {
    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = startPage + maxVisibleButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

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
    getPageNumbers,
    handleJumpPageSubmit,
  };
}
