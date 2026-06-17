import { Link } from 'react-router-dom';
import { useBlog } from '@/hooks/useBlog';

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export default function Blog() {
  const { textUi, titleParts, recentBlogs } = useBlog();

  return (
    <section id="blog" className="bg-foreground text-background min-h-screen py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.3em] text-black/80 uppercase">
              [ 03 ] {textUi.label}
            </p>
            <h2 className="font-display text-background text-5xl leading-[0.9] font-extrabold tracking-tighter uppercase md:text-7xl">
              {titleParts[0]}
              <br />
              <span className="font-serif font-normal normal-case italic">{titleParts[1]}</span>
            </h2>
          </div>
          <p className="text-background/80 max-w-xs border-l-2 border-black pt-2 pl-6 text-sm leading-relaxed md:self-end">
            {textUi.description}
          </p>
        </div>

        <div className="mb-4 flex justify-end">
          <Link
            to="/blog"
            className="border-background hover:bg-primary text-background border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-white"
          >
            {textUi.allButton} →
          </Link>
        </div>

        <div className="bg-background/10 divide-background/20 grid grid-cols-1 gap-px divide-y md:divide-x md:divide-y-0 lg:grid-cols-4">
          {recentBlogs.map((item) => {
            const formattedDate = formatDate(item.dateISO);

            return (
              <article
                key={item.slug}
                className="bg-foreground hover:bg-foreground/95 group flex cursor-pointer flex-col p-8 transition-colors"
              >
                <div className="text-background mb-10 flex justify-between font-mono text-[10px] opacity-50">
                  <time>{formattedDate}</time>
                  <span>{item.tag}</span>
                </div>

                <h3 className="text-background mb-4 line-clamp-3 text-2xl leading-tight font-bold transition-colors">
                  {item.title}
                </h3>

                <p className="mb-6 line-clamp-4 flex-1 text-sm text-black/70 opacity-70 lg:text-xs">
                  {item.excerpt}
                </p>

                <Link
                  to={`/blog/${item.slug}`}
                  className="text-primary link-underline self-start text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  {textUi.blogLinkButton}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
