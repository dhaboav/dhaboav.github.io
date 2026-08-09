import rawId from './id.json';
import rawEn from './en.json';
import projectsMeta from './projects-meta.json';
import experiencesMeta from './experiences-meta.json';
import blogsData from './blogs.json';
import skillsData from './techStack.json';
import personalInfoData from './personal-info.json';
import type { dynamicData, blogItem, personalInfo, snsItem, skillItem } from './types';
import type { Localized } from '@/shared/lib';
import { Github, Instagram, Linkedin } from '@/shared/ui';

// Mapping
const metaProjectMap = new Map(projectsMeta.map((meta) => [meta.id, meta]));
const metaExperienceMap = new Map(experiencesMeta.map((meta) => [meta.id, meta]));

// Helper injection func
const injectExperiences = (rawExperiences: typeof rawEn.experience) =>
  rawExperiences.map((exp) => {
    const meta = metaExperienceMap.get(exp.id);
    return {
      ...exp,
      workPlace: meta?.workPlace ?? '',
      timePeriod: meta?.timePeriod ?? '',
    };
  });

const injectProjects = (rawProjects: typeof rawEn.project) =>
  rawProjects.map((proj) => {
    const meta = metaProjectMap.get(proj.id);
    return {
      ...proj,
      techStack: meta?.techStack ?? [],
      repoLink: meta?.repoLink ?? '',
    };
  });

// Dynamic data based on language (en/id) with injected metadata
const en: dynamicData = {
  ...rawEn,
  experience: injectExperiences(rawEn.experience),
  project: injectProjects(rawEn.project),
};

const id: dynamicData = {
  ...rawId,
  experience: injectExperiences(rawId.experience),
  project: injectProjects(rawId.project),
};
export const appData: Localized<dynamicData> = { en, id };

// Fixed data
export const blogData: blogItem[] = blogsData;
export const personalData: personalInfo = personalInfoData;
export const skillData: skillItem[] = skillsData;
export const snsData: snsItem[] = [
  { logo: Github, href: personalInfoData.sns.github },
  { logo: Linkedin, href: personalInfoData.sns.linkedin },
  { logo: Instagram, href: personalInfoData.sns.instagram },
];
