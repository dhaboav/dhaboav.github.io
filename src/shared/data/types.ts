import type { ComponentType, SVGProps } from 'react';

interface heroSectionData {
  tag: {
    jobTitle: string;
    location: string;
  };
  subtitle: string;
  tagline: string;
  resumeLink: string;
}

interface aboutSectionData {
  subtitle: string;
  description: string;
  data: {
    basedIn: string;
    focus: string;
    currently: string;
    openTo: string;
  };
}

export interface SkillItem {
  category: string;
  stack: string[];
}

export interface ExperienceItem {
  id: number;
  badge?: string;
  timeperiod?: string;
  jobtitle: string;
  workplace?: string;
  tags?: string[];
  description?: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repoLink?: string;
  demoLink?: string;
}

export interface BlogItem {
  id: number;
  slug: string;
  tag: string;
  title: string;
  dateISO: string;
  excerpt: string;
}

interface contactSectionData {
  description: string;
  notification: {
    success: string;
    failure: string;
    pending: string;
  };
}

export interface dynamicData {
  hero: heroSectionData;
  about: aboutSectionData;
  experience: ExperienceItem[];
  project: ProjectItem[];
  contact: contactSectionData;
}

export type personalInfo = {
  name: string;
  brandName: string;
  sns: {
    github: string;
    linkedin: string;
    instagram: string;
  };
};

export type snsItem = {
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};
