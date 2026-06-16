import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useBlogDetail } from '@/hooks/useBlogDetail';

export default function BlogDetail() {
  const { currentBlog, content, isLoading, isError } = useBlogDetail();

  if (isError || !currentBlog) {
    return (
      <div className="text-center font-mono">
        <p className="text-slate-600">404 | Artikel Tidak Ditemukan</p>
        <Link to="/#blog" className="mt-4 inline-block text-orange-500 underline">
          Back to home
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="animate-pulse text-center font-mono text-slate-400">
        Memuat konten artikel...
      </div>
    );
  }

  return (
    <section className="container mx-auto min-h-screen max-w-7xl px-4 py-32">
      <div className="mb-10 border-b border-slate-100">
        <span className="font-mono text-sm tracking-wider text-orange-500 uppercase">
          {currentBlog.tag}
        </span>
        <h1 className="mt-2 mb-3 text-4xl font-extrabold tracking-tight text-slate-900">
          {currentBlog.title}
        </h1>
        <p className="mb-2 font-mono text-xs text-slate-400">{currentBlog.date}</p>
      </div>

      <article className="prose prose-slate max-w-none leading-relaxed text-slate-800">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>

      <div className="mt-12 border-t border-slate-100 pt-6">
        <Link to="/#blog" className="font-mono text-sm text-orange-500 hover:underline">
          ← Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
