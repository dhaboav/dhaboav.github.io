import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useBlogDetail } from '@/hooks/useBlogDetail';
import NotFound from '@/pages/NotFound';

export default function BlogDetail() {
  const { currentBlog, content, isLoading, isError, formattedDate } = useBlogDetail();

  if (isError || !currentBlog) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen animate-pulse pt-28 text-center font-mono text-slate-400 text-slate-900">
        Loading the article...
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-28 text-slate-900">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 lg:grid-cols-12">
        <div className="w-full max-w-3xl border-slate-100 lg:col-span-8 lg:border-r">
          <div className="mb-10 border-b border-slate-100 pb-6">
            <span className="mb-3 block font-mono text-xs font-bold tracking-widest text-orange-500 uppercase">
              {currentBlog.tag}
            </span>

            <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              {currentBlog.title}
            </h1>

            <p className="font-mono text-xs text-slate-400">{formattedDate}</p>
          </div>

          <article className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>

          <div className="mt-12 mb-12 border-t border-slate-100 pt-6">
            <Link
              to="/blog"
              className="text-primary link-underline font-mono text-xs transition-colors"
            >
              ← Back to Articles
            </Link>
          </div>
        </div>

        <aside className="hidden w-full max-w-2xs lg:col-span-4 lg:block">
          <div className="sticky top-36 mx-4 p-4">
            <h2 className="mb-2 border-b border-slate-200 pb-2 font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
              About the Author
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              <strong className="text-slate-900">Dhammiko Bodhi Avatara</strong> writes about
              software engineering, robotics, and automation. He builds clean systems and scales
              modern applications.
            </p>
            <Link
              to="/#about"
              className="link-underline font-mono text-xs text-slate-900 transition-colors"
            >
              Click here to learn more →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
