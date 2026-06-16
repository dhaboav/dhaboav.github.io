import { useState, useEffect, useRef } from 'react';
import { langData } from '@/data/languages';
import { getLang, type SupportedLang } from '@/utils/langUtils';

export function useFooter() {
  const currentLang = getLang();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const changeLanguage = (lang: SupportedLang) => {
    localStorage.setItem('site-lang', lang);
    setIsOpen(false);
    window.dispatchEvent(new Event('language-change'));
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!isOpen) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  const availableLanguages = Object.keys(langData) as SupportedLang[];

  return {
    langData,
    currentLang,
    isOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    changeLanguage,
    availableLanguages,
  };
}
