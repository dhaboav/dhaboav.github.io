import { projectsData } from '@/data/projects';
import { useI18n } from '@/hooks/useI18n';

export default function Project() {
  const { lang, ui } = useI18n();

  return (
    <section id="projects" className="min-h-screen bg-black py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-2">
          <p className="text-primary/80 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase">
            [ 02 ] {ui.projects.projectLabel}
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-white">
            {ui.projects.projectHeader}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {projectsData.map((project, index) => {
            const { image, link } = project;
            const { title, description } = project.text[lang];

            return (
              <div
                key={`${link}-${index}`}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-white/30"
              >
                <img src={image} alt={title} className="h-48 w-full object-cover lg:h-64" />

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white lg:truncate lg:text-sm">
                      {title}
                    </h3>

                    <p className="mb-4 text-sm font-medium text-white/45 lg:text-xs">
                      {description}
                    </p>
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-primary hover:bg-primary block w-full rounded-md border border-white/30 py-2 text-center text-xs font-medium text-white transition-colors"
                  >
                    {ui.projects.gitHubRepoLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
