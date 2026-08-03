import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';
import { AUTHOR_NAME } from '@/shared/config';

export function AboutSection() {
  const { ui } = useI18n();
  const { sectionTitle, subtitle, labels } = ui.about;
  const about = [
    { label: labels.basedIn, value: 'test' },
    { label: labels.focus, value: 'test' },
    { label: labels.currently, value: 'test' },
    { label: labels.openTo, value: 'test' },
  ];

  return (
    <section id="about" className="section-container">
      <div className="content-container layout text-white">
        <SectionHeading index="01" title={sectionTitle} note={subtitle} />
        <div className="mt-10 grid gap-10 md:items-center lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
          <div aria-label="profile">
            <img
              src="/img/profile.png"
              alt="dhabov"
              loading="lazy"
              width={640}
              height={480}
              onContextMenu={(e) => e.preventDefault()}
              className="border-border bg-card mx-auto h-full w-full overflow-hidden rounded-xl border object-cover md:max-w-sm"
            />
            <p className="text-muted-foreground mt-3 font-mono text-xs">
              <span className="text-primary">$</span> whoami — {AUTHOR_NAME}
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-3xl font-medium tracking-tight text-white">test</h2>

            <div className="text-muted-foreground mb-4 text-base leading-relaxed">
              <p>test</p>
            </div>

            <dl className="mt-8 grid gap-3 md:grid-cols-2">
              {about.map((f) => (
                <div key={f.label} className="border-border bg-card rounded-xl border p-4">
                  <dt className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
