import type { SupportedLang } from '@/utils/langUtils';

export interface ProjectDetails {
  title: string;
  description: string;
}

export interface ProjectItem {
  image: string;
  link: string;
  text: Record<SupportedLang, ProjectDetails>;
}
