import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  const { ui } = useI18n();
  const techStack = ['Python', 'Docker', 'FastAPI', 'OpenCV', 'MySQL', 'React', 'Tailwind'];

  return (
    <section id="about" className="section-container">
      <div className="content-container layout text-white">
        <SectionHeading index="01" title={ui.about.aboutLabel} note="who is behind the commits" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
          <div aria-label="profile">
            <img
              src="/img/profile.png"
              alt="dhabov"
              loading="lazy"
              width={640}
              height={480}
              onContextMenu={(e) => e.preventDefault()}
              className="border-border bg-card h-full w-full overflow-hidden rounded-xl border object-cover"
            />
            <p className="text-muted-foreground mt-3 font-mono text-xs">
              <span className="text-primary">$</span> whoami — Dhaboav
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-3xl font-medium tracking-tight text-white">
              {ui.about.aboutMeHeader}
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-zinc-400 lg:text-sm">
              <p>{ui.about.aboutMeParagraph}</p>
            </div>

            <p className="mt-4 mb-2 font-mono text-xs tracking-wider text-zinc-500 uppercase lg:mt-12">
              {ui.about.techStackLabel}
            </p>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border-primary/50 rounded-sm border px-3 py-1.5 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
