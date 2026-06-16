import type { SupportedLang } from '@/utils/langUtils';

export interface ExperienceDetails {
  role: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  text: Record<SupportedLang, ExperienceDetails>;
}
