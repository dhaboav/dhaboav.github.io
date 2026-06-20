import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '@/entities/blog/model/data';

export function useBlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const currentBlog = useMemo(() => {
    return blogData.find((blog) => blog.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (!currentBlog) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    // Fetching data from markdown
    fetch(`/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('File artikel tidak ditemukan');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [slug, currentBlog]);

  return {
    currentBlog,
    content,
    isLoading,
    isError,
  };
}
