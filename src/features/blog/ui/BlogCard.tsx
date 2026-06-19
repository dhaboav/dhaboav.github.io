import { Link } from 'react-router-dom';
import type { BlogItem } from '@/features/blog/types/blog.types';
import { useI18n } from '@/hooks/useI18n';
import { formatDate } from '../utils/formatDate';
import { useBlog } from '@/hooks/useBlog';

interface BlogCardProps {
  blog: BlogItem;
  index: number;
  currentPage: number;
  searchQuery: string;
}

export default function BlogCard({ blog, index, currentPage, searchQuery }: BlogCardProps) {
  const { ui, lang } = useI18n();
  const {gridColumnClass, isHero} = useBlog({ index, currentPage, searchQuery });


  return (
    <article
      className={`group flex flex-col justify-between transition-all duration-300 ${gridColumnClass}`}
    >
      <div className={isHero ? 'lg:col-span-7 bg-black' : ''}>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-400">
            /0{index}
          </span>
          <span className="group-hover:bg-primary h-[1px] w-8 bg-slate-200 transition-all duration-300 group-hover:w-12"></span>
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
            {blog.tag}
          </span>
        </div>

        <h2
          className={`leading-tight font-bold tracking-tight text-slate-900 ${isHero ? 'mb-6 text-4xl lg:text-6xl bg-red-500/50' : 'mb-4 text-2xl lg:text-3xl'}`}
        >
          <Link
            to={`/blog/${blog.slug}`}
            className="hover:text-primary transition-colors duration-200"
          >
            {blog.title}
          </Link>
        </h2>
      </div>

      <div
        className={`flex flex-col items-start justify-between ${isHero ? 'lg:col-span-5 lg:pt-8 bg-blue-600' : ''}`}
      >
        <div>
          <div className="mb-4 font-mono text-xs text-slate-400">
            [ {formatDate(blog.dateISO, lang)} ]
          </div>
          <p className="mb-6 line-clamp-3 text-sm leading-relaxed font-normal text-slate-500/80">
            {blog.excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="group/btn inline-flex items-center gap-1 font-mono text-xs font-black tracking-widest text-slate-900 uppercase"
        >
          <span className="link-underline group-hover/btn:text-primary transition-colors">
            {ui.blog.blogCardLinkLabel}
          </span>
          <div className="slate-900 group-hover:border-primary group-hover:bg-primary flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:text-white">
            <span className="transform transition-transform duration-300 group-hover:rotate-45">
              →
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
}
