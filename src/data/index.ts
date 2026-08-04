import id from './id.json';
import en from './en.json';
import blogsData from './blogs.json';
import type { dynamicData, BlogItem } from './types';
import type { Localized } from '@/shared/lib';

export const appData: Localized<dynamicData> = { en, id };
export const blogData: BlogItem[] = blogsData;
