import { projectsData } from '@/entities/project';
import { useI18n } from '@/shared/lib';

export function ProjectSection() {
  const { lang, ui } = useI18n();

  return (
    <section id="projects" className="min-h-screen bg-black py-32">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-2">
          <p className="text-primary/80 mb-6 font-mono text-[0.625rem] tracking-[0.3em] uppercase">
            [ 02 ] {ui.projects.projectLabel}
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-white">
            {ui.projects.projectHeader}
          </h2>
        </header>

        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          aria-label="project-collections"
        >
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="grid grid-rows-[12rem_auto] overflow-hidden rounded-xl border border-white/30"
            >
              <img
                src={project.image}
                alt={project.text[lang].title}
                className="h-full w-full bg-white object-cover"
              />
              <div className="grid grid-rows-[auto_1fr_auto] bg-black p-4">
                <h1 className="mb-2 text-lg font-semibold text-white lg:truncate lg:text-sm">
                  {project.text[lang].title}
                </h1>
                <p className="mb-4 text-sm font-medium text-white/45 lg:text-xs">
                  {project.text[lang].description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border-primary hover:bg-primary block w-full rounded-md border py-2 text-center text-xs font-medium text-white transition-colors"
                >
                  {ui.projects.gitHubRepoLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
