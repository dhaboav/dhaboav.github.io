import { useState, useEffect, useRef } from 'react';
import { text } from '@/utils/langUtils';

export function useNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const textLang = text('navbar');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);
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

  return {
    textLang,
    isOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    closeMenu,
  };
}
