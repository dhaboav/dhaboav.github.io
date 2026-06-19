import { Link } from 'react-router-dom';

interface BlogUICard {
  blogIndex: number;
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  slugButtonLabel: string;
  className?: string;
}

export const BlogUICard = ({
  blogIndex,
  slug,
  tag,
  title,
  date,
  excerpt,
  slugButtonLabel,
  className,
}: BlogUICard) => {
  return (
    <div className={`group flex flex-col p-8 transition-colors ${className}`}>
      <div className="flex-1">
        <div className="mb-2 flex items-center gap-3 font-mono text-xs font-bold">
          <span className="text-slate-400">/0{blogIndex}</span>
          <span className="group-hover:bg-primary h-[1px] w-8 bg-slate-200 transition-all duration-300 group-hover:w-12"></span>
          <span className="text-primary tracking-widest">{tag}</span>
        </div>
        <h2 className="text-background line-clamp-3 text-2xl leading-tight font-bold">{title}</h2>
      </div>
      <div className="mb-6 flex-1">
        <span className="font-mono text-[11px] text-slate-400">{date}</span>
        <p className="line-clamp-4 text-sm text-black/70 opacity-70 lg:text-xs">{excerpt}</p>
      </div>

      <Link
        to={`/blog/${slug}`}
        className="link-underline group-hover:text-primary self-start text-xs font-bold tracking-widest text-black uppercase"
      >
        <span>{slugButtonLabel}</span>
      </Link>
    </div>
  );
};
