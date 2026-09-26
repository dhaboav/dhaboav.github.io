interface SectionHeadingProps {
  index: string;
  title: string;
  note: string;
}

export function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="border-border grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b pb-4 sm:flex sm:justify-between">
      <div>
        <span className="text-primary font-mono text-xs">{index}</span>
        <h2 className="truncate text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <p className="text-muted-foreground shrink-0 font-mono text-xs">{note}</p>
    </div>
  );
}
