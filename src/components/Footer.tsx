import { useFooter } from '@/hooks/useFooter';

export default function Footer() {
  const {
    langData,
    currentLang,
    isOpen,
    menuRef,
    buttonRef,
    toggleMenu,
    changeLanguage,
    availableLanguages,
  } = useFooter();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black py-8 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-zinc-500 md:flex-row md:justify-between lg:text-xs">
          <p className="font-mono">© 2025-{currentYear} Dhammiko Bodhi Avatara</p>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="hover:bg-primary hover:border-primary flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm hover:text-white focus:outline-none lg:text-xs"
            >
              <span className="text-lg lg:text-xs">{langData[currentLang].flag}</span>
              <span className="font-medium">{langData[currentLang].label}</span>
              <i className="bx bx-chevron-up text-lg opacity-80" />
            </button>

            {/* Dropdown menu lang options */}
            <div
              ref={menuRef}
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute -right-8 bottom-[115%] z-50 w-40 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-lg`}
            >
              {availableLanguages.map((key) => (
                <button
                  key={key}
                  onClick={() => changeLanguage(key)}
                  className="flex w-full cursor-pointer items-center gap-3 p-3 text-left text-sm transition hover:bg-zinc-800"
                >
                  <span className="text-lg lg:text-xs">{langData[key].flag}</span>
                  <span>{langData[key].full}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
