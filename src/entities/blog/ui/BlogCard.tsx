import { cn } from '@/shared/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';

const blogCardVariants = cva('group flex flex-col transition-all p-4 border-b border-slate-300', {
  variants: {
    variant: {
      default: 'lg:col-span-4',
      hero: 'lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-12 border-b-2 border-black',
      highlight: 'border-none p-8',
      editorial: 'lg:col-span-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface BlogCardProps extends React.ComponentProps<'div'>, VariantProps<typeof blogCardVariants> {
  blogIndex: number;
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  slugButtonLabel: string;
  className?: string;
}

export const BlogCard = ({
  variant = 'default',
  blogIndex,
  slug,
  tag,
  title,
  date,
  excerpt,
  slugButtonLabel,
}: BlogCardProps) => {
  return (
    <div data-variant={variant} className={cn(blogCardVariants({ variant }))}>
      {/* Tag + Title */}
      <div className="flex-1 group-data-[variant=hero]:lg:col-span-7">
        <div className="mb-2 flex items-center gap-3 font-mono text-xs font-bold">
          <span className="text-slate-400">/0{blogIndex}</span>
          <span className="group-hover:bg-primary h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12"></span>
          <span className="text-primary tracking-widest">{tag}</span>
        </div>
        <h2 className="text-background line-clamp-3 text-2xl leading-tight font-bold group-data-[variant=editorial]:lg:text-4xl group-data-[variant=hero]:lg:text-6xl">
          {title}
        </h2>
      </div>

      {/* Date */}
      <div className="flex flex-col justify-between overflow-hidden group-data-[variant=hero]:lg:col-span-5">
        <div className="mb-6 flex-1">
          <span className="font-mono text-xs text-slate-400 group-data-[variant=highlight]:text-[11px]">
            {date}
          </span>
          <p className="line-clamp-4 text-sm text-slate-500/80 group-data-[variant=highlight]:line-clamp-3 group-data-[variant=highlight]:lg:text-xs">
            {excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${slug}`}
          className="group/btn inline-flex items-center gap-1 font-mono text-xs font-black tracking-widest text-slate-900 uppercase"
        >
          <span className="link-underline group-hover/btn:text-primary transition-colors">
            {slugButtonLabel}
          </span>
          <div className="slate-900 group-hover:border-primary group-hover:bg-primary flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:text-white group-data-[variant=highlight]:hidden">
            <span className="transform transition-transform duration-300 group-hover:rotate-45">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
