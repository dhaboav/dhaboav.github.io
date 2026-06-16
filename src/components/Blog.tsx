import { useBlog } from '@/hooks/useBlog';

export default function Blog() {
  const { lang, textLang, titleParts, recentBlogs } = useBlog();

  return (
    <section id="blog" className="bg-foreground text-background min-h-screen py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.3em] text-black/80 uppercase">
              [ 03 ] {textLang.label}
            </p>
            <h2 className="font-display text-background text-5xl leading-[0.9] font-extrabold tracking-tighter uppercase md:text-7xl">
              {titleParts[0]}
              <br />
              <span className="font-serif font-normal normal-case italic">{titleParts[1]}</span>
            </h2>
          </div>
          <p className="text-background/80 max-w-xs border-l-2 border-black pt-2 pl-6 text-sm leading-relaxed md:self-end">
            {textLang.description}
          </p>
        </div>

        <div className="mb-4 flex justify-end">
          <a
            href="#"
            className="border-background hover:bg-primary text-background border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase transition-colors hover:text-white"
          >
            {textLang.allButton} →
          </a>
        </div>

        <div className="bg-background/10 divide-background/20 grid grid-cols-1 gap-px divide-y md:divide-x md:divide-y-0 lg:grid-cols-4">
          {recentBlogs.map((item, index) => {
            const { title, excerpt, tag } = item.text[lang] || {};

            return (
              <article
                key={`${item.dateISO}-${index}`}
                className="bg-foreground hover:bg-foreground/95 group flex cursor-pointer flex-col p-8 transition-colors"
              >
                <div className="text-background mb-10 flex justify-between font-mono text-[10px] opacity-50">
                  <time>{item.date}</time>
                  <span>{tag}</span>
                </div>

                <h3 className="text-background mb-4 text-2xl leading-tight font-bold transition-colors">
                  {title}
                </h3>

                <p className="mb-6 flex-1 text-sm text-black/70 opacity-70 lg:text-xs">{excerpt}</p>

                <a
                  href="#"
                  className="text-primary link-underline self-start text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  {textLang.blogLinkButton}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
