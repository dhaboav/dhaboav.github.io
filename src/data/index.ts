import rawId from './id.json';
import rawEn from './en.json';
import projectsMeta from './projects-meta.json';
import experiencesMeta from './experiences-meta.json';
import blogsData from './blogs.json';
import personalInfoData from './personal-info.json';
import type { dynamicData, blogItem, personalInfo, snsItem } from './types';
import type { Localized } from '@/shared/lib';
import { Github, Instagram, Linkedin } from '@/shared/ui';

const metaProjectMap = new Map(projectsMeta.map((meta) => [meta.id, meta]));
const metaExperienceMap = new Map(experiencesMeta.map((meta) => [meta.id, meta]));

const injectExperiences = (rawExperiences: typeof rawEn.experience) => {
  return rawExperiences.map((exp) => {
    const meta = metaExperienceMap.get(exp.id);
    return {
      ...exp,
      workPlace: meta ? meta.workPlace : '',
      timePeriod: meta ? meta.timePeriod : '',
    };
  });
};

const injectProjects = (rawProjects: typeof rawEn.project) => {
  return rawProjects.map((proj) => {
    const meta = metaProjectMap.get(proj.id);
    return {
      ...proj,
      techStack: meta ? meta.techStack : [],
      repoLink: meta ? meta.repoLink : '',
    };
  });
};

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
export const blogData: blogItem[] = blogsData;
export const personalData: personalInfo = personalInfoData;

export const snsData: snsItem[] = [
  { logo: Github, href: personalInfoData.sns.github },
  { logo: Linkedin, href: personalInfoData.sns.linkedin },
  { logo: Instagram, href: personalInfoData.sns.instagram },
];
