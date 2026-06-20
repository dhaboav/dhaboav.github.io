import { useBlogList } from '@/features/blog';
import { usePagination } from '@/shared/hooks';
import { Pagination } from '@/shared/ui';
import { useI18n } from '@/shared/lib';
import { BlogCard, formatDate } from '@/entities/blog';

export const BlogList = () => {
  const { ui, lang } = useI18n();
  const { searchQuery, setSearchQuery, blogs } = useBlogList();
  const { currentPosts, pageNumbers, currentPage, ...paginationProps } = usePagination({
    items: blogs,
    searchQuery,
  });
  const isInitialPageWithoutSearch = currentPage === 1 && !searchQuery;

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
          <div className="overflow-hidden border-4 border-dashed border-slate-200 p-12 text-center font-mono text-slate-400">
            {ui.blog.blogNotFoundLabel}{' '}
            <span className="text-foreground font-bold">"{searchQuery}"</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {currentPosts.map((item, index) => {
              const globalIndex = currentPage === 1 ? index : 8 + (currentPage - 2) * 9 + index;
              let currentVariant: 'default' | 'editorial' | 'hero' = 'default';
              if (isInitialPageWithoutSearch) {
                if (globalIndex === 0) currentVariant = 'hero';
                else if (index === 1 || index === 7) currentVariant = 'editorial';
              }

              return (
                <BlogCard
                  key={item.slug}
                  variant={currentVariant}
                  blogIndex={globalIndex + 1}
                  slug={item.slug}
                  tag={item.tag}
                  title={item.title}
                  date={formatDate(item.dateISO, lang)}
                  excerpt={item.excerpt}
                  slugButtonLabel={ui.blog.blogCardLinkLabel}
                />
              );
            })}
          </div>
        )}

        <Pagination pageNumbers={pageNumbers} currentPage={currentPage} {...paginationProps} />
      </main>
    </div>
  );
};
