import rawEn from '@resources/data/en.json';
import rawId from '@resources/data/id.json';
import blogsData from '@resources/metadata/blogs.json';
import experiencesMeta from '@resources/metadata/experiences.json';
import personalInfoData from '@resources/metadata/personal.json';
import projectsMeta from '@resources/metadata/projects.json';
import skillsData from '@resources/metadata/skills.json';

import type { Localized } from '@/shared/i18n/types';
import { Github, Instagram, Linkedin } from '@/shared/ui/sns-icon';

import type { BlogItem, SkillItem, dynamicData, personalInfo, snsItem } from './types';

// Mapping
const metaProjectMap = new Map(projectsMeta.map((meta) => [meta.id, meta]));
const metaExperienceMap = new Map(experiencesMeta.map((meta) => [meta.id, meta]));

// Helper injection func
const injectExperiences = (rawExperiences: typeof rawEn.experience) =>
  rawExperiences.map((exp) => {
    const meta = metaExperienceMap.get(exp.id);
    return {
      ...exp,
      timeperiod: meta?.timeperiod ?? '',
      workplace: meta?.workplace ?? '',
      tags: meta?.tags ?? [],
    };
  });

const injectProjects = (rawProjects: typeof rawEn.project) =>
  rawProjects.map((proj) => {
    const meta = metaProjectMap.get(proj.id);
    return {
      ...proj,
      techStack: meta?.techStack ?? [],
      repoLink: meta?.repoLink ?? '',
      demoLink: meta?.demoLink ?? '',
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
export const blogData: BlogItem[] = blogsData;
export const personalData: personalInfo = personalInfoData;
export const skillData: SkillItem[] = skillsData;
export const snsData: snsItem[] = [
  { logo: Github, href: personalInfoData.sns.github },
  { logo: Linkedin, href: personalInfoData.sns.linkedin },
  { logo: Instagram, href: personalInfoData.sns.instagram },
];
