import { Link } from 'react-router-dom';

interface Blog {
  slug: string;
  tag: string;
  title: string;
  dateISO: string;
  excerpt: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
  currentPage: number;
  searchQuery: string;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export default function BlogCard({ blog, index, currentPage, searchQuery }: BlogCardProps) {
  const globalIndex = currentPage === 1 ? index : 8 + (currentPage - 2) * 9 + index;
  const isHero = globalIndex === 0 && searchQuery === '';
  const formattedDate = formatDate(blog.dateISO);

  // Class grid editorial
  let gridColumnClass = 'lg:col-span-4 border-b border-slate-200 pb-12';

  if (isHero) {
    gridColumnClass =
      'lg:col-span-12 border-b-2 border-slate-900 pb-16 lg:grid lg:grid-cols-12 lg:gap-12';
  } else if (currentPage === 1 && searchQuery === '') {
    switch (index) {
      case 1:
      case 7:
        gridColumnClass = 'lg:col-span-8 border-b border-slate-200 pb-12';
        break;
      default:
        gridColumnClass = 'lg:col-span-4 border-b border-slate-200 pb-12';
        break;
    }
  }

  return (
    <article
      className={`group flex flex-col justify-between transition-all duration-300 ${gridColumnClass}`}
    >
      <div className={isHero ? 'lg:col-span-7' : ''}>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-400">
            /{String(globalIndex + 1).padStart(2, '0')}
          </span>
          <span className="group-hover:bg-primary h-[1px] w-8 bg-slate-200 transition-all duration-300 group-hover:w-12"></span>
          <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
            {blog.tag}
          </span>
        </div>

        <h2
          className={`leading-tight font-bold tracking-tight text-slate-900 ${isHero ? 'mb-6 text-4xl lg:text-6xl' : 'mb-4 text-2xl lg:text-3xl'}`}
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
        className={`flex flex-col items-start justify-between ${isHero ? 'lg:col-span-5 lg:pt-8' : ''}`}
      >
        <div>
          <div className="mb-4 font-mono text-xs text-slate-400">[ {formattedDate} ]</div>
          <p className="mb-6 line-clamp-3 text-sm leading-relaxed font-normal text-slate-500/80">
            {blog.excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="group/btn inline-flex items-center gap-1 font-mono text-xs font-black tracking-widest text-slate-900 uppercase"
        >
          <span className="link-underline group-hover/btn:text-primary transition-colors">
            Read Entry
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
