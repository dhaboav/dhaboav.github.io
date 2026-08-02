import { projectsData } from '@/entities/project';
import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHEading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Button, buttonVariants } from '@/shared/ui';
import { ExternalLink } from 'lucide-react';

export function ProjectSection() {
  const { lang, ui } = useI18n();

  return (
    <section id="projects" className="bg-surface min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-32 text-white">
        <SectionHeading
          index="03"
          title={ui.projects.projectLabel}
          note="things shipped in the open"
        />
        <header className="mt-10">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {ui.projects.projectHeader}
          </h2>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-3" aria-label="project-collections">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.text[lang].title}
              description={project.text[lang].description}
              repo={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  repo: string;
  link?: string;
}

function ProjectCard({ index, title, description, repo, link }: ProjectCardProps) {
  const test = ['test1', 'test2', 'test3'];
  return (
    <Card key={index} className="lift border-border bg-card flex flex-col rounded-xl border">
      <CardHeader className="flex-1">
        <CardTitle className="font-mono text-base font-bold">
          <span className="text-primary">./</span>
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {test.map((item, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground rounded px-2 py-1 font-mono text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className={`bg-card grid ${link ? 'grid-cols-2' : 'grid-cols-1'} gap-2 border-0`}>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className={`hover:border-primary flex h-11 flex-row items-center justify-center gap-2 bg-transparent font-mono text-xs hover:bg-transparent ${buttonVariants(
            {
              variant: 'outline',
            },
          )}`}
        >
          <i className="bxl bx-github" />
          Repo
        </a>

        {link && (
          <Button
            className="hover:border-primary flex h-11 flex-row gap-2 bg-transparent font-mono text-xs hover:bg-transparent"
            variant="outline"
          >
            <ExternalLink />
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
