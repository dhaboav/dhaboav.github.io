import { useBlogList } from '@/features/blog';
import { Pagination } from '@/shared/ui';
import { useI18n, formatDate, usePagination } from '@/shared/lib';
import { BlogCard } from './BlogCard';

export function BlogList() {
  const { ui, lang } = useI18n();
  const { headerTag, headerTitle, searchPlaceholder, readButtonLabel, noResultLabel } = ui.blogPage;
  const { searchQuery, setSearchQuery, blogs } = useBlogList();
  const { currentPosts, pageNumbers, currentPage, ...paginationProps } = usePagination({
    items: blogs,
    searchQuery,
  });
  const isInitialPageWithoutSearch = currentPage === 1 && !searchQuery;

  return (
    <section className="section-container text-white">
      <header className="mx-auto max-w-6xl px-4 md:pt-36">
        <div
          className="grid-bg pointer-events-none absolute inset-0"
          aria-hidden="true"
          aria-label="background"
        />
        <div className="relative">
          <div className="absolute -top-20 left-[60%] hidden font-sans text-9xl font-black tracking-tighter text-slate-100/80 select-none md:block">
            {headerTag}
          </div>

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase">
                // {headerTag}
              </span>
              <h1 className="font-display text-4xl leading-[0.9] font-extrabold tracking-tighter uppercase md:text-6xl">
                <span>{headerTitle.part1}</span>
                <span className="block font-serif font-normal normal-case italic lg:ml-[0.25em] lg:inline">
                  {headerTitle.part2}
                </span>
              </h1>
            </div>

            <div className="w-full md:max-w-80">
              <div className="border-border relative overflow-hidden rounded-full border transition-all focus-within:-translate-y-1 focus-within:shadow-[4px_4px_0px_0px_var(--color-primary)]">
                <input
                  type="text"
                  placeholder={`${searchPlaceholder}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-muted-foreground w-full bg-white/30 p-2 font-mono text-sm backdrop-blur-md placeholder:text-slate-400 focus:ring-0 focus:outline-none"
                />
                <span className="text-primary absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs font-bold">
                  {blogs.length} PTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-12 lg:pt-36">
        {currentPosts.length === 0 ? (
          <div className="border-border overflow-hidden border-4 border-dashed p-12 text-center font-mono text-slate-400">
            {noResultLabel} <span className="text-foreground font-bold">"{searchQuery}"</span>
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
                  slugButtonLabel={readButtonLabel}
                />
              );
            })}
          </div>
        )}

        <Pagination pageNumbers={pageNumbers} currentPage={currentPage} {...paginationProps} />
      </main>
    </section>
  );
}
