import { useI18n } from '@/shared/lib';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreProps {
  expanded: boolean;
  hiddenCount: number;
  onToggle: () => void;
  label?: string;
}

export function ShowMore({ expanded, hiddenCount, onToggle, label = 'items' }: ShowMoreProps) {
  if (hiddenCount <= 0 && !expanded) return null;

  const Icon = expanded ? ChevronUp : ChevronDown;
  const { ui } = useI18n();

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="via-border h-px w-full bg-linear-to-r from-transparent to-transparent" />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="border-border bg-card text-muted-foreground hover:border-primary hover:text-primary inline-flex min-h-11 items-center gap-2 rounded-md border px-4 font-mono text-xs transition-colors"
      >
        <Icon />
        {expanded
          ? ui.showMore.showLessLabel
          : `${ui.showMore.showMoreLabel} ${hiddenCount} ${label}`}
      </button>
    </div>
  );
}
