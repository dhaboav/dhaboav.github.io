import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  jumpPage: string;
  pageNumbers: number[];
  setJumpPage: (value: string) => void;
  setCurrentPage: (page: number) => void;
  handleJumpPageSubmit: (e: React.FormEvent) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  jumpPage,
  pageNumbers,
  setJumpPage,
  setCurrentPage,
  handleJumpPageSubmit,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-1 pt-4 font-mono">
      <nav className="flex w-full items-center justify-between gap-1 text-sm">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="group hover:text-primary flex items-center gap-1 text-xs font-bold text-slate-400 transition-colors disabled:pointer-events-none disabled:opacity-20"
        >
          <span>←</span>
          <span className="hidden lg:inline">PREV</span>
        </button>

        <div className="flex flex-row gap-2">
          {/* Pagination Numbers */}
          <div className="flex items-center gap-1">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`h-7 w-7 rounded-full border border-black/20 text-[11px] font-bold text-slate-400 transition-all ${
                  currentPage === pageNumber
                    ? 'bg-primary border-primary text-white'
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {String(pageNumber).padStart(2, '0')}
              </button>
            ))}
          </div>

          {/* Jump Page Form */}
          <form onSubmit={handleJumpPageSubmit} className="flex shrink-0 items-center gap-1">
            <label
              htmlFor="jump-input"
              className="hidden text-[10px] font-bold text-slate-400 md:inline"
            >
              JUMP:
            </label>
            <input
              id="jump-input"
              type="number"
              min="1"
              max={totalPages}
              placeholder="Go"
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              className="focus:border-primary h-7 w-7 [appearance:textfield] rounded-full border border-black/20 text-center text-[10px] font-bold focus:ring-0 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </form>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="group hover:text-primary flex items-center gap-1 text-xs font-bold text-slate-400 transition-colors disabled:pointer-events-none disabled:opacity-20"
        >
          <span className="hidden lg:inline">NEXT</span>
          <span>→</span>
        </button>
      </nav>

      {/* Pages Info */}
      <div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400">
          PAGE {currentPage} OF {totalPages}
        </span>
      </div>
    </div>
  );
};
