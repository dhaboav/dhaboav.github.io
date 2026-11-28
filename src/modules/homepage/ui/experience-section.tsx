import { cn } from 'cn';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

import type { ExperienceItem } from '@/shared/data/types';
import { useI18n } from '@/shared/i18n/useI18n';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/ui/collapsible';

import { SectionHeading } from './section-heading';
import { ShowMore } from './show-more';

const EXP_LIMIT = 4;

export function ExperienceSection() {
  const { ui, data } = useI18n();
  const [showAll, setShowAll] = useState({ exp: false, skill: false });
  const toggleShow = (key: 'exp' | 'skill') => {
    setShowAll((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Data slicing
  const countExp = data.experience.length - EXP_LIMIT;
  const visibleExp = showAll.exp ? data.experience : data.experience.slice(0, EXP_LIMIT);

  return (
    <section id="experiences" className="section-container">
      <div className="content-container layout">
        <SectionHeading
          index="02"
          title={ui.experience.sectionTitle}
          note={ui.experience.subtitle}
        />

        <div className="mt-8 flex flex-col" aria-label="experiences">
          {visibleExp.map((exp) => {
            const last = exp.id - 1 === visibleExp.length - 1;

            return (
              <div key={exp.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      'mt-1.5 size-3 shrink-0 rounded-full',
                      exp.id === 1 ? 'bg-primary' : 'bg-secondary',
                    )}
                    aria-hidden="true"
                  />

                  {!last && <span className="w-px flex-1 bg-border" aria-hidden="true" />}
                </div>

                <div className={last ? 'min-w-0 flex-1' : 'min-w-0 flex-1 pb-6'}>
                  <ExperienceCard {...exp} />
                </div>
              </div>
            );
          })}
        </div>
        <ShowMore
          expanded={showAll.exp}
          hiddenCount={countExp}
          onToggle={() => toggleShow('exp')}
          label={countExp === 1 ? 'exp' : 'exps'}
        />
      </div>
    </section>
  );
}

function ExperienceCard({ id, tags = [], highlights = [], ...props }: ExperienceItem) {
  const [open, setOpen] = useState(id === 1);
  const isTags = tags.length > 0;
  const isHighlights = highlights.length > 0;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="group w-full">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{props.timeperiod}</span>
            {props.badge && <Badge className="bg-primary/80 rounded-sm">{props.badge}</Badge>}
          </div>
          <CardTitle className="text-base md:text-lg">{props.jobtitle}</CardTitle>
          <CardDescription>
            <p>{props.workplace}</p>
            {isTags && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-mono text-[10px] rounded-none">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardDescription>

          {(props.description || isHighlights) && (
            <CardAction>
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={open ? 'Hide details' : 'Show details'}
                  >
                    <ChevronDownIcon
                      className={cn('size-4 transition-transform', open && 'rotate-180')}
                    />
                  </Button>
                }
              />
            </CardAction>
          )}
        </CardHeader>

        <CollapsibleContent className="px-(--card-spacing)">
          <CardContent className="space-y-3 border-t pt-4 px-0 border-border">
            <p className="text-sm leading-relaxed text-muted-foreground">{props.description}</p>

            {isHighlights && (
              <ul className="space-y-1.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
