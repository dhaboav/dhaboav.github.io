import { experienceData } from '@/entities/experience';
import { useI18n } from '@/shared/lib';

export const AboutSection = () => {
  const { lang, ui } = useI18n();
  const techStack = ['Python', 'Docker', 'FastAPI', 'OpenCV', 'MySQL', 'React', 'Tailwind'];

  return (
    <section id="about" className="min-h-screen bg-zinc-900 py-32 md:py-40 lg:py-56">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          {/* LEFT SIDE */}
          <div>
            <p className="text-primary/80 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase">
              [ 01 ] {ui.about.aboutLabel}
            </p>

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

          {/* RIGHT SIDE - EXPERIENCE */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-medium tracking-tight text-white">
                {ui.about.experienceLabel}
              </h2>
            </div>

            <div className="max-w-2xl">
              <div className="relative space-y-10 border-l border-white/20 pl-6.5 lg:pl-8">
                {experienceData.map((item, index) => {
                  const { role, period, description } = item.text[lang];

                  return (
                    <div key={`${item.company}-${index}`} className="relative">
                      <div className="bg-primary absolute top-1.5 -left-7.75 h-2 w-2 rounded-full lg:-left-9" />

                      <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="text-primary text-sm font-medium lg:text-base">
                          {role}
                          <span className="font-normal text-white/80"> @ {item.company}</span>
                        </h3>

                        <span className="lg:text-2xs font-mono text-[10px] text-white/70">
                          {period}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-white/30 lg:text-xs">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
