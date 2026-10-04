export type SupportedLang = 'en' | 'id';
export type Localized<T> = Record<SupportedLang, T>;
export type LangContextType = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
};

export const languages = [
  { flag: '🇺🇸', label: 'en', full: 'English' },
  { flag: '🇮🇩', label: 'id', full: 'Indonesia' },
] as const;

interface Navbar {
  aboutLabel: string;
  experienceLabel: string;
  projectLabel: string;
  contactLabel: string;
  blogLabel: string;
}

interface HeroSection {
  projectLabel: string;
  resumeLabel: string;
  blogLabel: string;
}

interface AboutSection {
  sectionTitle: string;
  subtitle: string;
  labels: {
    basedIn: string;
    focus: string;
    currently: string;
    openTo: string;
  };
}

interface ExperienceSection {
  sectionTitle: string;
  subtitle: string;
  skillsLabel: string;
}

interface ProjectSection {
  sectionTitle: string;
  subtitle: string;
  buttonLabels: {
    repoLabel: string;
    webLinkLabel: string;
  };
}

interface ShowmoreButton {
  showLessLabel: string;
  showMoreLabel: string;
}

interface ContactSection {
  sectionTitle: string;
  subtitle: string;
  formLabels: {
    name: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  submitButton: string;
}

interface NotfoundPage {
  sectionTitle: string;
  subtitle: string;
  backButtonLabel: string;
}

interface BlogPage {
  headerTag: string;
  headerTitle: {
    part1: string;
    part2: string;
  };
  searchPlaceholder: string;
  noResultLabel: string;
  readButtonLabel: string;
}

interface BlogDetail {
  loadingPageLabel: string;
  backButtonLabel: string;
}

export interface Translations {
  navbar: Navbar;
  hero: HeroSection;
  about: AboutSection;
  experience: ExperienceSection;
  project: ProjectSection;
  showMore: ShowmoreButton;
  contact: ContactSection;
  notfoundPage: NotfoundPage;
  blogPage: BlogPage;
  blogDetail: BlogDetail;
}
