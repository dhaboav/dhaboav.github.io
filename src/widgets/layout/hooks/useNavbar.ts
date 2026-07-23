import { useState, useEffect, useRef } from 'react';

export function useNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(target);
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(target);

      if (clickedOutsideMenu && clickedOutsideButton) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return {
    isOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    closeMenu,
  };
}
