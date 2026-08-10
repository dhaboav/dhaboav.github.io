import type { IconProps } from '@/shared/ui';
import type { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';

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

interface experienceSectionData {
  id: string;
  workPlace?: string;
  jobTitle: string;
  timePeriod?: string;
  description: string;
}

interface projectSectionData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink?: string;
  webLink?: string;
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
  experience: experienceSectionData[];
  project: projectSectionData[];
  contact: contactSectionData;
}

export type blogItem = {
  slug: string;
  tag: string;
  title: string;
  dateISO: string;
  excerpt: string;
};

export type skillItem = {
  category: string;
  techStack: string[];
};

export type personalInfo = {
  name: string;
  brandName: string;
  sns: {
    github: string;
    linkedin: string;
    instagram: string;
  };
};

type IconType = LucideIcon | ComponentType<IconProps>;
export type snsItem = {
  logo: IconType;
  href: string;
};
