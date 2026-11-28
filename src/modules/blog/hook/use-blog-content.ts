import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { blogData } from '@/shared/data/index';

const blogFiles = import.meta.glob('/resources/blog/*.md', {
  query: '?raw',
  import: 'default',
});

export function useBlogContent() {
  const { slug } = useParams<{ slug: string }>();

  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const currentBlog = useMemo(() => {
    return blogData.find((blog) => blog.slug === slug);
  }, [slug]);

  useEffect(() => {
    const loadBlog = async () => {
      if (!currentBlog || !slug) {
        setContent('');
        setIsError(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setIsError(false);
      setContent('');

      try {
        const path = `/resources/blog/${slug}.md`;
        const loader = blogFiles[path];

        if (!loader) {
          throw new Error('File artikel tidak ditemukan');
        }

        const text = (await loader()) as string;

        setContent(text);
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlog();
  }, [slug, currentBlog]);

  return {
    currentBlog,
    content,
    isLoading,
    isError,
  };
}
