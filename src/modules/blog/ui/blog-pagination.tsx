import { usePagination } from '@/blog/hook/use-pagination';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/ui/pagination';

interface BookPaginationProps {
  currentPage: number;
  totalPages: number;
  className?: string;
}

function BlogPagination({ currentPage, totalPages, className }: BookPaginationProps) {
  const { pages, createUrl, prev, next } = usePagination(currentPage, totalPages);

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={prev.href}
            aria-disabled={prev.disabled}
            className={prev.disabled ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>

        {pages.map((pageNum) => {
          const isActive = currentPage === pageNum;

          return (
            <PaginationItem key={pageNum}>
              <PaginationLink href={createUrl(pageNum)} isActive={isActive}>
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={next.href}
            aria-disabled={next.disabled}
            className={next.disabled ? 'pointer-events-none opacity-50' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { BlogPagination };
