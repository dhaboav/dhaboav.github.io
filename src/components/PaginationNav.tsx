interface PaginationNavProps {
  currentPage: number;
  totalPages: number;
  jumpPage: string;
  setJumpPage: (value: string) => void;
  getPageNumbers: () => number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleJumpPageSubmit: (e: React.FormEvent) => void;
}

export default function PaginationNav({
  currentPage,
  totalPages,
  jumpPage,
  setJumpPage,
  getPageNumbers,
  setCurrentPage,
  handleJumpPageSubmit,
}: PaginationNavProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center gap-1 pt-4 font-mono">
      <nav className="flex w-full items-center justify-between gap-1 text-sm">
        {/* Prev button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="group text-mono hover:text-primary flex items-center gap-1 text-xs font-bold text-slate-400 transition-colors disabled:pointer-events-none disabled:opacity-20"
        >
          <span>←</span>
          <span className="hidden lg:inline">PREV</span>
        </button>

        <div className="flex flex-row gap-2">
          {/* Pagination number */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`h-7 w-7 rounded-full border-1 border-black/20 text-[11px] font-bold text-slate-400 transition-all ${
                  currentPage === pageNumber
                    ? 'bg-primary border-primary rounded-full text-white'
                    : 'hover:text-primary hover:border-primary'
                }`}
              >
                {String(pageNumber).padStart(2, '0')}
              </button>
            ))}
          </div>

          {/* Jump page form */}
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
              className="focus:border-primary h-7 w-7 [appearance:textfield] rounded-full border-1 border-black/20 text-center text-[10px] font-bold focus:ring-0 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </form>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="group text-mono hover:text-primary flex items-center gap-1 text-xs font-bold text-slate-400 transition-colors disabled:pointer-events-none disabled:opacity-20"
        >
          <span className="hidden lg:inline">NEXT</span>
          <span>→</span>
        </button>
      </nav>

      {/* Pages info */}
      <div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400">
          PAGE {currentPage} OF {totalPages}
        </span>
      </div>
    </div>
  );
}
