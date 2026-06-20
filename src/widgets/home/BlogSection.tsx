import { Link } from 'react-router-dom';
import { useBlog } from '@/features/blog';
import { useI18n } from '@/shared/lib';
import { BlogCard, formatDate } from '@/entities/blog';

export const BlogSection = () => {
  const { ui, lang } = useI18n();
  const { recentBlogs } = useBlog();

  return (
    <section id="blog" className="bg-foreground text-background min-h-screen py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.3em] text-black/80 uppercase">
              [ 03 ] {ui.blog.blogLabel}
            </p>

            <h2 className="font-display text-5xl leading-[0.9] font-extrabold tracking-tighter uppercase md:text-7xl">
              {ui.blog.blogHeader.word1}
              <br />
              <span className="font-serif font-normal normal-case italic">
                {ui.blog.blogHeader.word2}
              </span>
            </h2>
          </div>

          <p className="text-background/80 max-w-xs border-l-2 border-black pt-2 pl-6 text-sm leading-relaxed md:self-end">
            {ui.blog.blogDescription}
          </p>
        </div>

        {/* ALL BUTTON */}
        <div className="mb-4 flex justify-end">
          <Link
            to="/blog"
            className="border-background hover:bg-primary border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-white"
          >
            {ui.blog.blogAllButton} →
          </Link>
        </div>

        {/* GRID */}
        <div className="bg-background/10 grid grid-cols-1 gap-px md:grid-cols-4 md:divide-x lg:divide-y-0">
          {recentBlogs.map((item, index) => (
            <BlogCard
              blogIndex={index + 1}
              slug={item.slug}
              tag={item.tag}
              title={item.title}
              date={formatDate(item.dateISO, lang)}
              excerpt={item.excerpt}
              slugButtonLabel={ui.blog.blogLinkButton}
              variant="highlight"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
