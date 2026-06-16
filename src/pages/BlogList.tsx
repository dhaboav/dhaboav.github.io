import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogList } from '@/hooks/useBlogList';

export default function BlogList() {
  const { searchQuery, setSearchQuery, blogs } = useBlogList();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pt-24 pb-12 md:flex-row">
          <div>
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              [ 00 ] Archive
            </span>
            <h1 className="mt-2 font-sans text-5xl font-black tracking-tight text-slate-900 uppercase">
              All Technical{' '}
              <span className="font-serif font-light text-slate-700 italic">Notes</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed font-light text-slate-500">
              Kumpulan dokumentasi mendalam, catatan sistem, dan eksplorasi teknis seputar AI,
              Computer Vision, dan Embedded Systems.
            </p>
          </div>

          {/* Bar Pencarian Minimalis */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-none border border-slate-200 bg-white px-4 py-2 font-mono text-sm text-slate-900 transition-colors focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16">
        {blogs.length === 0 ? (
          <div className="py-20 text-center font-mono text-slate-400">
            No articles found for "{searchQuery}"
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {blogs.map((blog) => (
              <article key={blog.slug} className="group flex flex-col items-start justify-between">
                <div className="w-full">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-2 font-mono text-xs text-slate-400">
                    <span>{blog.date}</span>
                    <span className="font-medium tracking-wider text-slate-500 uppercase">
                      {blog.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl leading-snug font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-orange-500">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed font-light text-slate-500">
                    {blog.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-6 inline-flex items-center font-mono text-xs font-bold tracking-wider text-orange-500 uppercase transition-colors hover:text-orange-600"
                >
                  Read Full Article
                  <span className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
