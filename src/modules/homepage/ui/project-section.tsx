import { cn } from 'cn';
import { ExternalLinkIcon } from 'lucide-react';
import { useState } from 'react';

import type { ProjectItem } from '@/shared/data/types';
import { useI18n } from '@/shared/i18n/useI18n';
import { Badge } from '@/shared/ui/badge';
import { Button, buttonVariants } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Github } from '@/shared/ui/sns-icon';

import { SectionHeading } from './section-heading';
import { ShowMore } from './show-more';

const PROJECTS_PREVIEW = 3;

export function ProjectSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle } = ui.project;
  const [showAll, setShowAll] = useState(false);
  const visibleProject = showAll ? data.project : data.project.slice(0, PROJECTS_PREVIEW);
  const countProject = data.project.length - PROJECTS_PREVIEW;

  return (
    <section id="projects" className="section-container">
      <div className="content-container layout">
        <SectionHeading index="03" title={sectionTitle} note={subtitle} />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {visibleProject.map((project) => (
            <ProjectCard key={project.id} {...project} />
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

function ProjectCard({ ...props }: ProjectItem) {
  return (
    <Card className="lift flex flex-col">
      <CardHeader className="flex-1">
        <CardTitle className="font-mono text-base font-bold">
          <span className="text-primary">./</span>
          {props.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {props.techStack.map((item, index) => (
            <Badge key={index} className="font-mono text-xs bg-border text-foreground">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter
        className={cn(
          'bg-transparent grid gap-2 border-0',
          props.demoLink ? 'grid-cols-2' : 'grid-cols-1',
        )}
      >
        <a
          href={props.repoLink}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({
            variant: 'outline',
            className: 'gap-2 bg-input font-mono text-xs hover:border-primary hover:bg-transparent',
          })}
        >
          <Github />
          Repo
        </a>

        {props.demoLink && (
          <Button
            className="hover:border-primary flex h-11 flex-row gap-2 bg-transparent font-mono text-xs hover:bg-transparent"
            variant="outline"
          >
            <ExternalLinkIcon />
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
