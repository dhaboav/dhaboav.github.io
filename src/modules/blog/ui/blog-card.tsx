import { MoveRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { formatDate } from '@/modules/blog/util/format-date';
import type { BlogItem } from '@/shared/data/types';
import { useI18n } from '@/shared/i18n/useI18n';

export function BlogCard({ id, ...props }: BlogItem) {
  const { ui, lang } = useI18n();

  return (
    <div className="group flex flex-col transition-all p-4 border-b border-border">
      {/* Tag + Title */}
      <div className="flex-1">
        <div className="mb-2 flex items-center gap-3 font-mono text-xs font-bold">
          <span className="text-slate-400">/0{id}</span>
          <span className="group-hover:bg-primary h-px w-8 bg-slate-200 transition-all duration-300 group-hover:w-12"></span>
          <span className="text-primary tracking-widest">{props.tag}</span>
        </div>
        <h2 className="line-clamp-3 text-2xl leading-tight font-bold">{props.title}</h2>
      </div>

      {/* Date */}
      <div className="flex flex-col justify-between overflow-hidden">
        <div className="mb-6 flex-1">
          <span className="text-muted-foreground font-mono text-xs group-data-[variant=highlight]:text-[11px]">
            {formatDate(props.dateISO, lang)}
          </span>
          <p className="line-clamp-4 text-sm text-slate-500/80 group-data-[variant=highlight]:line-clamp-3 group-data-[variant=highlight]:lg:text-xs">
            {props.excerpt}
          </p>
        </div>

        <Link
          to={`/blog/${props.slug}`}
          className="group/btn text-muted-foreground inline-flex items-center gap-1 font-mono text-xs font-black tracking-widest uppercase"
        >
          <span className="link-underline group-hover/btn:text-primary transition-colors">
            {ui.blogPage.readButtonLabel}
          </span>
          <div className="slate-900 group-hover:border-primary group-hover:bg-primary flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 group-hover:text-white group-data-[variant=highlight]:hidden">
            <span className="transform transition-transform duration-300 group-hover:rotate-45">
              <MoveRightIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
