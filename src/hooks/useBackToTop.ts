import { useState, useEffect } from 'react';

export function useBackToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol muncul jika scroll melebihi 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        isVisible && setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Membersihkan event listener saat komponen tidak lagi dirender (unmount)
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isVisible]);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Efek scroll halus ke atas
    });
  };

  return {
    isVisible,
    scrollToTop,
  };
}
