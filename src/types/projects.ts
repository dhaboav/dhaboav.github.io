import type { Localized } from './lang';

export interface ProjectDetails {
  title: string;
  description: string;
}

export interface ProjectItem {
  image: string;
  link: string;
  text: Localized<ProjectDetails>;
}
