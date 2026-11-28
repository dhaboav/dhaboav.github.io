import { ArrowRightIcon, BookOpenIcon, FileTextIcon } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

import { personalData, skillData } from '@/shared/data/index';
import type { SkillItem } from '@/shared/data/types';
import { useI18n } from '@/shared/i18n/useI18n';
import { Badge } from '@/shared/ui/badge';
import { buttonVariants } from '@/shared/ui/button';

export function HeroSection() {
  const { ui, data } = useI18n();
  const { projectLabel, resumeLabel, blogLabel } = ui.hero;
  const t = data.hero;
  const authorSlug = personalData.name.toLowerCase().replaceAll(' ', '-');

  const documents = import.meta.glob('/resources/assets/*.pdf', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  const getResumeUrl = documents[`/resources/assets/${t.resumeLink}.pdf`] as string;

  return (
    <section id="home" className="section-container md:pt-28 lg:pt-48">
      <div
        className="grid-bg pointer-events-none absolute inset-0"
        aria-hidden="true"
        aria-label="background"
      />
      <div className="content-container layout relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-0">
        <div className="space-y-4">
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            {t.tag.jobTitle} · {t.tag.location}{' '}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            {personalData.name}.
          </h1>

          <p className="text-muted-foreground max-w-xl text-base leading-relaxed lg:text-lg">
            {t.subtitle}
          </p>

          <div className="flex flex-col gap-2 md:flex-row">
            <HashLink to="/#projects" className={buttonVariants({ className: 'h-12 px-6' })}>
              {projectLabel}
              <ArrowRightIcon />
            </HashLink>
            <a
              href={getResumeUrl}

              download={`Resume ${personalData.name}`}
              className={buttonVariants({ variant: 'secondary', className: 'h-12 px-6' })}
            >
              <FileTextIcon className="h-4 w-4" /> {resumeLabel}
            </a>
            <HashLink
              to="/blog"
              className={buttonVariants({ variant: 'outline', className: 'h-12 px-6' })}
            >
              <BookOpenIcon /> {blogLabel}
            </HashLink>
          </div>
        </div>

        <TerminalCard skills={skillData} authorSlug={authorSlug} tagline={t.tagline} />
      </div>
    </section>
  );
}

interface TerminalCardProps {
  authorSlug: string;
  tagline: string;
  skills: SkillItem[];
}

function TerminalCard({ authorSlug, tagline, skills }: TerminalCardProps) {
  return (
    <div className="border-border bg-card rounded-lg border">
      <div
        className="border-border flex items-center gap-2 border-b px-4 py-3"
        aria-label="Terminal Window"
      >
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">~/stack.zsh</span>
      </div>

      <div className="space-y-4 p-4 font-mono text-[13px] leading-relaxed">
        <div>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </p>
          <p>
            {authorSlug} — {tagline}
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> ls stack
          </p>

          <div className="flex flex-col gap-1">
            {skills.map((skill) => (
              <TechStack key={skill.category} {...skill} />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground">
          <span className="text-primary">$</span> <span className="blink-cursor">▍</span>
        </p>
      </div>
    </div>
  );
}

function TechStack({ category, stack }: SkillItem) {
  return (
    <div className="grid md:grid-cols-[20%_1fr] md:items-center items-start">
      <p className="min-w-0 wrap-break-word">{category}:</p>
      <div className="flex min-w-0 flex-wrap gap-2">
        {stack.map((item) => (
          <Badge key={item} className="rounded-none bg-primary/20 text-primary">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
