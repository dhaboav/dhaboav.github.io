import { useState, useRef } from 'react';
import { useI18n, languages } from '@/shared/lib';
import type { SupportedLang } from '@/shared/lib';

export const Footer = () => {
  const { lang, setLang } = useI18n();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentYear = new Date().getFullYear();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const changeLanguage = (key: SupportedLang) => {
    setLang(key);
    setIsOpen(false);
  };

  return (
    <footer className="border-t border-zinc-800 bg-black py-8 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-zinc-500 md:flex-row md:justify-between">
          {/* COPYRIGHT */}
          <p className="font-mono">© 2025-{currentYear} Dhammiko Bodhi Avatara</p>

          {/* LANGUAGE SWITCHER */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="hover:bg-primary flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm hover:text-white"
            >
              <span className="text-lg">{languages[lang].flag}</span>
              <span className="font-medium">{languages[lang].label}</span>
              <i className="bx bx-chevron-up text-lg opacity-80" />
            </button>

            {isOpen && (
              <div
                ref={menuRef}
                className="absolute -right-8 bottom-[115%] z-50 w-40 rounded-lg border border-zinc-700 bg-zinc-900 shadow-lg"
              >
                {Object.keys(languages).map((key) => (
                  <button
                    key={key}
                    onClick={() => changeLanguage(key as keyof typeof languages)}
                    className="flex w-full items-center gap-3 p-3 text-left text-sm hover:bg-zinc-800"
                  >
                    <span>{languages[key as keyof typeof languages].flag}</span>
                    <span>{languages[key as keyof typeof languages].full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
