export interface NavbarTranslations {
  home: string;
  about: string;
  projects: string;
  blog: string;
  contact: string;
}

export interface HeroTranslations {
  greet: string;
  tagline: string;
  viewWork: string;
  resume: string;
  resumeFile: string;
}

export interface AboutTranslations {
  label: string;
  title: string;
  p1: string;
  p2: string;
  techLabel: string;
}

export interface ProjectsTranslations {
  title: string;
  label: string;
  repo: string;
}

export interface ExperienceTranslations {
  title: string;
}

export interface BlogTranslations {
  label: string;
  title: string;
  allButton: string;
  description: string;
  blogLinkButton: string;
}

export interface ContactTranslations {
  label: string;
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  send: string;
  loading: string;
  success: string;
  failure: string;
}

export interface LanguageStructure {
  flag: string;
  label: string;
  full: string;
  pageTitle: string;
  navbar: NavbarTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  experience: ExperienceTranslations;
  blog: BlogTranslations;
  contact: ContactTranslations;
}

export interface DynamicLangData {
  en: LanguageStructure;
  id: LanguageStructure;
  jp: LanguageStructure;
}
