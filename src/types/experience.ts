import type { Localized } from './lang';

export interface ExperienceDetails {
  role: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  text: Localized<ExperienceDetails>;
}
