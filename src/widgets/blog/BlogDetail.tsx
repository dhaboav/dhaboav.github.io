import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useBlogDetail } from '@/features/blog';
import { useI18n, formatDate } from '@/shared/lib';
import { NotFound } from '@/shared/ui';

export function BlogDetail() {
  const { ui, lang } = useI18n();
  const { currentBlog, content, isLoading, isError } = useBlogDetail();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentBlog?.slug]);

  if (isError || !currentBlog)
    return (
      <NotFound
        pageTitle={ui.notfound.pageTitle}
        pageDesc={ui.notfound.pageDesc}
        buttonLabel={ui.notfound.buttonLabel}
      />
    );

  if (isLoading) {
    return (
      <section
        className="text-muted-foreground section-container animate-pulse pt-28 text-center font-mono font-bold"
        role="status"
      >
        {ui.blog.blogDetailLoadPageLabel}
      </section>
    );
  }

  return (
    <section className="section-container pt-28 text-white">
      <article className="mx-auto max-w-3xl px-4">
        <header className="border-border mb-10 border-b pb-6">
          <span className="text-primary mb-3 block font-mono text-xs font-bold tracking-widest uppercase">
            {currentBlog.tag}
          </span>
          <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-white lg:text-5xl">
            {currentBlog.title}
          </h1>
          <p className="font-mono text-xs text-slate-400">
            {formatDate(currentBlog.dateISO, lang)}
          </p>
        </header>

        <div className="prose max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <footer className="border-border border-t py-8 pt-6">
          <Link
            to="/blog"
            className="text-primary link-underline font-mono text-xs transition-colors"
          >
            ← {ui.blog.blogDetailBackLabel}
          </Link>
        </footer>
      </article>
    </section>
  );
}
