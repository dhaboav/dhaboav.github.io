import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '@/data/blog';

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export function useBlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const currentBlog = blogData.find((blog) => blog.slug === slug);

  useEffect(() => {
    if (!currentBlog) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    fetch(`/blog/${currentBlog.slug}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('File artikel tidak ditemukan di folder public');
        }
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
    formattedDate: currentBlog ? formatDate(currentBlog.dateISO) : '',
  };
}
