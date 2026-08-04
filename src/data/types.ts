interface heroSectionData {
  tag: {
    jobTitle: string;
    location: string;
  };
  subtitle: string;
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

interface projectSectionData {
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  webLink?: string;
}

interface contactSectionData {
  description: string;
}

export interface dynamicData {
  hero: heroSectionData;
  about: aboutSectionData;
  project: projectSectionData[];
  contact: contactSectionData;
}

export type BlogItem = {
  slug: string;
  tag: string;
  title: string;
  dateISO: string;
  excerpt: string;
};
