import { useBlogList } from '@/hooks/useBlogList';
import { usePagination } from '@/hooks/usePagination';
import BlogCard from '@/components/blogs/BlogCard';
import PaginationNav from '@/components/PaginationNav';

export default function BlogList() {
  const { searchQuery, setSearchQuery, blogs } = useBlogList();

  const {
    currentPage,
    setCurrentPage,
    jumpPage,
    setJumpPage,
    currentPosts,
    totalPages,
    getPageNumbers,
    handleJumpPageSubmit,
  } = usePagination({ items: blogs, searchQuery });

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* ─── HEADER SECTION ─── */}
      <header className="container mx-auto max-w-7xl px-4 pt-36">
        <div className="relative border-b-4 border-slate-900 pb-12">
          <div className="absolute -top-16 right-4 hidden font-sans text-9xl font-black tracking-tighter text-slate-100/80 select-none md:block">
            ARCHIVE
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
                // ARCHIVE
              </span>
              <h1 className="mt-2 font-sans text-6xl font-black tracking-tight text-slate-900 uppercase lg:text-8xl">
                Digital <span className="font-serif font-light text-slate-400 italic">Notes.</span>
              </h1>
            </div>

            <div className="w-full md:w-80">
              <div className="relative overflow-hidden rounded-full border border-slate-400 transition-all focus-within:-translate-y-1 focus-within:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]">
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 font-mono text-sm text-black placeholder:text-slate-400 focus:ring-0 focus:outline-none"
                />
                <span className="text-primary absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs font-bold">
                  {blogs.length} PTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="container mx-auto max-w-7xl px-4 py-20">
        {currentPosts.length === 0 ? (
          <div className="overflow-hidden border-4 border-dashed border-slate-200 p-32 text-center font-mono text-slate-400">
            [ No results found for "{searchQuery}" ]
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {currentPosts.map((blog, index) => (
              <BlogCard
                key={`${blog.slug}-${currentPage}-${index}`}
                blog={blog}
                index={index}
                currentPage={currentPage}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        )}

        {/* ─── COMPONENT PAGINATION NAV ─── */}
        <PaginationNav
          currentPage={currentPage}
          totalPages={totalPages}
          jumpPage={jumpPage}
          setJumpPage={setJumpPage}
          getPageNumbers={getPageNumbers}
          setCurrentPage={setCurrentPage}
          handleJumpPageSubmit={handleJumpPageSubmit}
        />
      </main>
    </div>
  );
}
