import { useSearchParams } from 'react-router-dom';

import { useBlogList } from '@/blog/hook/use-blog-list';
import { BlogCard } from '@/blog/ui/BlogCard';
import { BlogPagination } from '@/blog/ui/BlogPagination';
import { useI18n } from '@/shared/i18n/useI18n';

export function BlogListPage() {
  const [searchParams] = useSearchParams();
  const queryConfig = {
    page: Number(searchParams.get('page')) || 1,
    size: Number(searchParams.get('size')) || 6,
  };
  const { data, metadata, search } = useBlogList(queryConfig.page, queryConfig.size);

  const { ui } = useI18n();
  const { headerTag, headerTitle, searchPlaceholder, noResultLabel } = ui.blogPage;

  return (
    <section className="section-container">
      <header className="mx-auto max-w-6xl px-4 md:pt-36">
        <div
          className="grid-bg pointer-events-none absolute inset-0"
          aria-hidden="true"
          aria-label="background"
        />
        <div className="relative">
          <div className="text-foreground/80 absolute -top-20 left-[60%] hidden font-sans text-9xl font-black tracking-tighter select-none md:block">
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
                  name="search-query"
                  type="text"
                  placeholder={`${searchPlaceholder}...`}
                  value={search.query}
                  onChange={(e) => search.setQuery(e.target.value)}
                  className="text-muted-foreground w-full bg-white/30 p-2 font-mono text-sm backdrop-blur-md placeholder:text-slate-400 focus:ring-0 focus:outline-none"
                />
                <span className="text-primary absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs font-bold">
                  {data.length} PTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl pt-12">
        {data.length === 0 ? (
          <div className="border-border overflow-hidden border-4 border-dashed p-12 text-center font-mono text-slate-400">
            {noResultLabel} <span className="text-foreground font-bold">"{search.query}"</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
              return <BlogCard key={item.id} data={item} />;
            })}
          </div>
        )}
        <BlogPagination
          currentPage={metadata.current_page}
          totalPages={metadata.total_page}
          className="py-4"
        />
      </main>
    </section>
  );
}
