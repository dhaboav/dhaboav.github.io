import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui';

export function ExperienceSection() {
  const { ui, data } = useI18n();
  const { sectionTitle, subtitle } = ui.experience;
  return (
    <section id="experiences" className="section-container">
      <div className="content-container layout text-white">
        <SectionHeading index="02" title={sectionTitle} note={subtitle} />
        <div className="mt-8 grid gap-4" aria-label="experiences">
          {data.experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              workPlace={exp.workPlace}
              jobTitle={exp.jobTitle}
              timePeriod={exp.timePeriod}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  index: number;
  workPlace?: string;
  jobTitle: string;
  timePeriod?: string;
  description: string;
}

function ExperienceCard({
  index,
  workPlace,
  jobTitle,
  timePeriod,
  description,
}: ExperienceCardProps) {
  return (
    <Card key={index} className="lift border-border bg-card rounded-xl border lg:p-5">
      <CardHeader className="flex flex-col">
        <CardTitle className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center justify-between">
          <span className="truncate text-lg font-bold lg:text-xl">{workPlace}</span>
          <span className="border-border text-muted-foreground shrink-0 rounded-lg border px-2 py-1 font-mono text-xs">
            {timePeriod}
          </span>
        </CardTitle>
        <CardDescription className="text-primary text-sm">{jobTitle}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </CardContent>
    </Card>
  );
}
