export type SupportedLang = 'en' | 'id';
export type Localized<T> = Record<SupportedLang, T>;
export type LangContextType = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
};

export const languages = {
  en: { flag: '🇺🇸', label: 'EN', full: 'English' },
  id: { flag: '🇮🇩', label: 'ID', full: 'Indonesia' },
} as const;

export interface NotfoundTranslations {
  pageTitle: string;
  pageDesc: string;
  buttonLabel: string;
}

export interface NavbarTranslations {
  home: string;
  about: string;
  projects: string;
  blogTeaser: string;
  blogArchive: string;
  contact: string;
}

export interface HeroTranslations {
  greet: string;
  tagline: string;
  viewProjectLabel: string;
  resumeFile: string;
}

export interface AboutTranslations {
  aboutLabel: string;
  aboutMeHeader: string;
  aboutMeParagraph: string;
  techStackLabel: string;
  experienceLabel: string;
}

export interface ProjectsTranslations {
  projectLabel: string;
  projectHeader: string;
  gitHubRepoLabel: string;
}

export interface BlogTranslations {
  blogLabel: string;
  blogHeader: {
    word1: string;
    word2: string;
  };
  blogDescription: string;
  blogAllButton: string;
  blogLinkButton: string;
  blogArchiveLabel: string;
  blogArchiveSearchLabel: string;
  blogNotFoundLabel: string;
  blogCardLinkLabel: string;
  blogDetailBackLabel: string;
  blogDetailAuthorLabel: string;
  blogDetailAuthorDescLabel: string;
  blogDetailAuthorLinkLabel: string;
  blogDetailLoadPageLabel: string;
}

export interface ContactTranslations {
  label: string;
  header: string;
  description: string;
  namePlaceholder: string;
  messagePlaceholder: string;
  sendStatus: string;
  loadingStatus: string;
  successStatus: string;
  failureStatus: string;
}

export interface WebUiTranslations {
  webTitle: string;
  notfound: NotfoundTranslations;
  navbar: NavbarTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  blog: BlogTranslations;
  contact: ContactTranslations;
}
