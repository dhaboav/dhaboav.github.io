import { useI18n } from '@/shared/lib';
import { SectionHeading } from './SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui';
import { ShowMore } from './ShowMore';
import { useState } from 'react';
import { skillData } from '@/data';

const EXP_LIMIT = 2;
const SKILL_LIMIT = 4;

export function ExperienceSection() {
  const { ui, data } = useI18n();
  const [showAll, setShowAll] = useState({ exp: false, skill: false });
  const toggleShow = (key: 'exp' | 'skill') => {
    setShowAll((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Experience Data Handling
  const countExp = data.experience.length - EXP_LIMIT;
  const visibleExp = showAll.exp ? data.experience : data.experience.slice(0, EXP_LIMIT);

  // Skill Data Handling
  const countSkill = skillData.length - SKILL_LIMIT;
  const visibleSkill = showAll.skill ? skillData : skillData.slice(0, SKILL_LIMIT);

  return (
    <section id="experiences" className="section-container">
      <div className="content-container layout">
        <SectionHeading
          index="02"
          title={ui.experience.sectionTitle}
          note={ui.experience.subtitle}
        />

        {/* Experience Section */}
        <div className="mt-8 grid gap-4" aria-label="experiences">
          {visibleExp.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
        <ShowMore
          expanded={showAll.exp}
          hiddenCount={countExp}
          onToggle={() => toggleShow('exp')}
          label={countExp === 1 ? 'exp' : 'exps'}
        />

        {/* Skills Section */}
        <h3
          className="text-muted-foreground mt-6 font-mono text-sm tracking-[0.2em] uppercase lg:mt-14"
          aria-label="skills"
        >
          {ui.experience.skillsLabel}
        </h3>
        <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {visibleSkill.map((item, index) => (
            <SkillsCard key={index} {...item} />
          ))}
        </div>
        <ShowMore
          expanded={showAll.skill}
          hiddenCount={countSkill}
          onToggle={() => toggleShow('skill')}
          label={countSkill === 1 ? 'skill' : 'skills'}
        />
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  workPlace?: string;
  jobTitle: string;
  timePeriod?: string;
  description: string;
}

function ExperienceCard({ workPlace, jobTitle, timePeriod, description }: ExperienceCardProps) {
  return (
    <Card className="lift border-border bg-card rounded-xl border lg:p-5">
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

interface SkillsCardProps {
  category: string;
  techStack: string[];
}

function SkillsCard({ category, techStack }: SkillsCardProps) {
  return (
    <Card className="lift">
      <CardHeader>
        <CardTitle className="text-primary font-mono text-xs tracking-widest uppercase">
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {techStack.map((skill, index) => (
          <span
            key={index}
            className="border-border text-muted-foreground cursor-default rounded border px-2 py-1 font-mono text-xs transition-colors"
          >
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
