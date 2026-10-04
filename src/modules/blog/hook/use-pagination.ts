import { useLocation, useSearchParams } from 'react-router-dom';

function usePagination(currentPage: number, totalPages: number) {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `/#${location.pathname}?${params.toString()}`;
  };

  // Function to get the page items to display in the pagination
  const getPageItems = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return {
    pages: getPageItems(),
    createUrl: createPageUrl,
    prev: {
      href: createPageUrl(Math.max(1, currentPage - 1)),
      disabled: currentPage <= 1,
    },
    next: {
      href: createPageUrl(Math.min(totalPages, currentPage + 1)),
      disabled: currentPage >= totalPages,
    },
  };
}

export { usePagination };
