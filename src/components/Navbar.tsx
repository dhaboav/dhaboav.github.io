import { useNavbar } from '@/hooks/useNavbar';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const { textLang, isOpen, menuRef, buttonRef, toggleMenu, closeMenu } = useNavbar();
  const navLinks = [
    { href: '/#home', label: textLang.home },
    { href: '/#about', label: textLang.about },
    { href: '/#projects', label: textLang.projects },
    { href: '/#blog', label: textLang.blog },
    { href: '/blog', label: 'All Articles' },
  ];
  const ctaLink = { href: '/#contact', label: textLang.contact };

  return (
    <header className="fixed right-0 left-0 z-50 border-b border-transparent bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between py-4">
          <HashLink to="#home">
            <i className="bx bx-fire bx-lg text-primary text-3xl" />
          </HashLink>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 md:flex lg:flex">
            {navLinks.map(({ href, label }) => (
              <HashLink
                key={href}
                to={href}
                className="link-underline text-sm text-zinc-400 hover:text-white"
              >
                {label}
              </HashLink>
            ))}
          </div>

          <HashLink
            to={ctaLink.href}
            className="text-primary hidden text-sm font-medium hover:text-white md:block lg:block"
          >
            {ctaLink.label}
          </HashLink>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none md:hidden lg:hidden"
            aria-label="Toggle Menu"
          >
            <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} />
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col gap-3 pb-4 text-white/80 transition-all duration-300 md:hidden lg:hidden`}
        >
          {navLinks.map(({ href, label }) => (
            <HashLink key={href} to={href} onClick={closeMenu} className="text-sm hover:text-white">
              {label}
            </HashLink>
          ))}

          <HashLink
            to={ctaLink.href}
            onClick={closeMenu}
            className="text-primary pt-2 text-sm font-medium hover:text-white"
          >
            {ctaLink.label}
          </HashLink>
        </div>
      </div>
    </header>
  );
}
