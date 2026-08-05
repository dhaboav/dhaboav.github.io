import rawId from './id.json';
import rawEn from './en.json';
import projectsMeta from './projects-meta.json';
import blogsData from './blogs.json';
import personalInfoData from './personal-info.json';
import type { dynamicData, blogItem, personalInfo } from './types';
import type { Localized } from '@/shared/lib';

const metaMap = new Map(projectsMeta.map((meta) => [meta.id, meta]));
const injectProjects = (rawProjects: typeof rawEn.project) => {
  return rawProjects.map((proj) => {
    const meta = metaMap.get(proj.id);
    return {
      ...proj,
      techStack: meta ? meta.techStack : [],
      repoLink: meta ? meta.repoLink : '',
    };
  });
};

const en: dynamicData = {
  ...rawEn,
  project: injectProjects(rawEn.project),
};

const id: dynamicData = {
  ...rawId,
  project: injectProjects(rawId.project),
};

export const appData: Localized<dynamicData> = { en, id };
export const blogData: blogItem[] = blogsData;
export const personalData: personalInfo = personalInfoData;
