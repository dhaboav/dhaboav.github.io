import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '@/data/blog';

export function useBlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  // 1. Cari dulu metadata artikel berdasarkan slug di URL
  const currentBlog = blogData.find((blog) => blog.slug === slug);

  useEffect(() => {
    // Jika dari awal metadata slug tidak ditemukan di data/blog.ts
    if (!currentBlog) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setIsError(false);

    // 2. Ambil file .md secara dinamis dari folder public/content/
    fetch(`/content/${currentBlog.slug}.md`)
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
    currentBlog, // Data judul, tanggal, tag
    content, // Isi teks mentah Markdown (.md)
    isLoading, // State loading untuk UI skeleton/spinner
    isError, // State error jika file hilang/salah ketik slug
  };
}
