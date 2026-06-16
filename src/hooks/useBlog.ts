import { blogData } from '@/data/blog';

export function useBlog() {
  const recentBlogs = [...blogData]
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
    .slice(0, 4);

  const textUi = {
    label: 'BLOG',
    title: 'TECHNICAL Notes',
    description:
      'Thoughts on the future of robotics, AI ethics, and the technical challenges of computer vision in Indonesia.',
    allButton: 'SEE ALL',
    blogLinkButton: 'READ MORE',
  };

  const titleParts = textUi.title.split(' ');

  return {
    textUi,
    titleParts,
    recentBlogs,
  };
}
