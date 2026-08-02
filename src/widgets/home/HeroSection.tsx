import { AUTHOR_NAME } from '@/shared/config';
import { useI18n } from '@/shared/lib';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';
import { buttonVariants } from '@/shared/ui';
import { HashLink } from 'react-router-hash-link';

export function HeroSection() {
  const {
    ui: { hero },
  } = useI18n();
  const techStack = ['Python', 'Docker', 'FastAPI', 'OpenCV', 'MySQL', 'React', 'Tailwind'];
  const authorSlug = AUTHOR_NAME.toLowerCase().replace(' ', '-');

  return (
    <section id="home" className="section-container">
      <div
        className="grid-bg pointer-events-none absolute inset-0"
        aria-hidden="true"
        aria-label="background"
      />
      <div className="content-container layout relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-0">
        <div className="space-y-4">
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            Software Engineer · Indonesia
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            {AUTHOR_NAME}.
          </h1>

          <p className="text-muted-foreground max-w-xl text-base leading-relaxed lg:text-lg">
            {hero.tagline}
          </p>

          <div className="flex flex-col gap-2 md:flex-row">
            <HashLink
              to="/#projects"
              className={`${buttonVariants({ variant: 'default' })} h-12 px-6`}
            >
              {hero.viewProjectLabel}
              <ArrowRight />
            </HashLink>
            <a
              href={`other/${hero.resumeFile}.pdf`}
              download={`Resume ${AUTHOR_NAME}`}
              className={`${buttonVariants({ variant: 'secondary' })} h-12 px-6`}
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <HashLink
              to="/blog"
              className={`${buttonVariants({ variant: 'outline' })} h-12 px-6 text-white`}
            >
              <BookOpen /> Read Blog
            </HashLink>
          </div>
        </div>

        <TerminalCard techStack={techStack} authorSlug={authorSlug} />
      </div>
    </section>
  );
}

interface TerminalCardProps {
  techStack: string[];
  authorSlug: string;
}

function TerminalCard({ techStack, authorSlug }: TerminalCardProps) {
  return (
    <div className="border-border bg-card rounded-xl border">
      <div
        className="border-border flex items-center gap-2 border-b px-4 py-3"
        aria-label="Terminal Window"
      >
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">~/stack.zsh</span>
      </div>

      <div className="space-y-4 p-4 font-mono text-[13px] leading-relaxed text-white">
        <div>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </p>
          <p>{authorSlug} — building resilient systems since 2018</p>
        </div>

        <div>
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> ls stack
          </p>

          <div className="flex flex-wrap gap-x-2">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
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
