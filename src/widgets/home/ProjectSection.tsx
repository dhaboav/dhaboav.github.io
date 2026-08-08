import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  buttonVariants,
  Github,
} from '@/shared/ui';
import { ExternalLink } from 'lucide-react';
import { ShowMore } from './ShowMore';
import { useState } from 'react';

const PROJECTS_PREVIEW = 3;

export function ProjectSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle, buttonLabels } = ui.project;
  const [showAll, setShowAll] = useState(false);
  const visibleProject = showAll ? data.project : data.project.slice(0, PROJECTS_PREVIEW);
  const countProject = data.project.length - PROJECTS_PREVIEW;

  return (
    <section id="projects" className="section-container alt">
      <div className="content-container layout">
        <SectionHeading index="03" title={sectionTitle} note={subtitle} />
        <div className="mt-8 grid gap-4 lg:grid-cols-3" aria-label="project-collections">
          {visibleProject.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              repo={project.repoLink}
              labels={{
                repoButton: buttonLabels.repoLabel,
                webButton: buttonLabels.webLinkLabel,
              }}
              techStack={project.techStack}
            />
          ))}
        </div>
        <ShowMore
          expanded={showAll}
          hiddenCount={countProject}
          onToggle={() => setShowAll((v) => !v)}
          label={countProject === 1 ? 'project' : 'projects'}
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  labels: {
    repoButton: string;
    webButton: string;
  };
  techStack: string[];
  repo?: string;
  link?: string;
}

function ProjectCard({
  index,
  title,
  description,
  labels,
  repo,
  link,
  techStack,
}: ProjectCardProps) {
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
          {techStack.map((item, index) => (
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
          <Github />
          {labels.repoButton}
        </a>

        {link && (
          <Button
            className="hover:border-primary flex h-11 flex-row gap-2 bg-transparent font-mono text-xs hover:bg-transparent"
            variant="outline"
          >
            <ExternalLink />
            {labels.webButton}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
