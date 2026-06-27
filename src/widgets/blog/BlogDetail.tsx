import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useBlogDetail } from '@/features/blog';
import { useI18n } from '@/shared/lib';
import { formatDate } from '@/entities/blog';
import { NotFound } from '@/shared/ui';
import { AUTHOR_NAME } from '@/shared/config';

export const BlogDetail = () => {
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
      <div
        className="min-h-screen animate-pulse pt-28 text-center font-mono text-slate-400"
        role="status"
      >
        {ui.blog.blogDetailLoadPageLabel}
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-28 text-slate-900">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 lg:grid-cols-12">
        {/* ─── Content ─── */}
        <div className="w-full max-w-3xl border-slate-100 lg:col-span-8 lg:border-r lg:pr-8">
          <header className="mb-10 border-b border-slate-100 pb-6">
            <span className="mb-3 block font-mono text-xs font-bold tracking-widest text-orange-500 uppercase">
              {currentBlog.tag}
            </span>
            <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              {currentBlog.title}
            </h1>
            <p className="font-mono text-xs text-slate-400">
              {formatDate(currentBlog.dateISO, lang)}
            </p>
          </header>

          <article className="prose max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

          <footer className="mt-12 mb-12 border-t border-slate-100 pt-6">
            <Link
              to="/blog"
              className="text-primary link-underline font-mono text-xs transition-colors"
            >
              ← {ui.blog.blogDetailBackLabel}
            </Link>
          </footer>
        </div>

        {/* ─── Author Sidebar ─── */}
        <aside className="hidden w-full max-w-2xs lg:col-span-4 lg:block">
          <div className="sticky top-36 mx-4 p-4">
            <h2 className="mb-2 border-b border-slate-200 pb-2 font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
              {ui.blog.blogDetailAuthorLabel}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">
              <strong className="text-slate-900">{AUTHOR_NAME}</strong>{' '}
              {ui.blog.blogDetailAuthorDescLabel}
            </p>
            <Link
              to="/#about"
              className="link-underline font-mono text-xs text-slate-900 transition-colors"
            >
              {ui.blog.blogDetailAuthorLinkLabel} →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};
