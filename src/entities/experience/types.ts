import type { Localized } from '@/shared/lib';

export interface ExperienceDetails {
  role: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  text: Localized<ExperienceDetails>;
}
