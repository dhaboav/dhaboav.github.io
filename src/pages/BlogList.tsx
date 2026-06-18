import { useBlogList } from '@/hooks/useBlogList';
import { usePagination } from '@/hooks/usePagination';
import BlogCard from '@/components/blogs/BlogCard';
import PaginationNav from '@/components/PaginationNav';
import { useI18n } from '@/hooks/useI18n';

export default function BlogList() {
  const { ui } = useI18n();
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
        <div className="relative border-b-4 border-slate-900 pb-8">
          <div className="absolute -top-20 left-[60%] hidden font-sans text-9xl font-black tracking-tighter text-slate-100/80 select-none md:block">
            {ui.blog.blogArchiveLabel}
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
                // {ui.blog.blogArchiveLabel}
              </span>
              <h1 className="font-display text-4xl leading-[0.9] font-extrabold tracking-tighter uppercase md:text-6xl">
                <span>{ui.blog.blogHeader.word1}</span>
                <span className="block font-serif font-normal normal-case italic lg:ml-[0.25em] lg:inline">
                  {ui.blog.blogHeader.word2}
                </span>
              </h1>
            </div>

            <div className="w-full md:max-w-80">
              <div className="relative overflow-hidden rounded-full border border-slate-400 transition-all focus-within:-translate-y-1 focus-within:shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]">
                <input
                  type="text"
                  placeholder={`${ui.blog.blogArchiveSearchLabel}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/30 p-2 font-mono text-sm text-black backdrop-blur-md placeholder:text-slate-400 focus:ring-0 focus:outline-none"
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
          <div className="overflow-hidden border-4 border-dashed border-slate-200 text-center font-mono text-slate-400">
            {ui.blog.blogNotFoundLabel}{' '}
            <span className="text-foreground font-bold">"{searchQuery}"</span>
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
