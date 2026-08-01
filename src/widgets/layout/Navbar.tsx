import { useI18n } from '@/shared/lib';
import { HashLink } from 'react-router-hash-link';
import { useNavbar } from './hooks/useNavbar';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const { ui } = useI18n();
  const { isOpen, menuRef, buttonRef, toggleMenu, closeMenu } = useNavbar();

  const navLinks = [
    { href: '/#home', label: ui.navbar.home },
    { href: '/#about', label: ui.navbar.about },
    { href: '/#projects', label: ui.navbar.projects },
    { href: '/#blog', label: ui.navbar.blogTeaser },
    { href: '/#contact', label: ui.navbar.contact },
    { href: '/blog', label: ui.navbar.blogArchive },
  ];

  return (
    <header className="sticky top-0 z-9999 w-full bg-black">
      <div className="mx-auto max-w-7xl p-4">
        <nav className="flex items-center justify-between" aria-label="desktop-menu">
          <HashLink to="#home" aria-label="logo">
            <h1 className="text-primary font-bold">Dhaboav</h1>
          </HashLink>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((navMenu) => (
              <HashLink
                key={navMenu.href}
                to={navMenu.href}
                className="link-underline text-sm text-zinc-400 hover:text-white"
              >
                {navMenu.label}
              </HashLink>
            ))}
          </div>

          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-white md:hidden"
            aria-label="nav-icon"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <nav
          ref={menuRef}
          className={` ${isOpen ? 'flex' : 'hidden'} flex-col gap-3 pb-4 text-white/80 md:hidden`}
          aria-label="mobile-menu"
        >
          {navLinks.map((navMenu) => (
            <HashLink key={navMenu.href} to={navMenu.href} onClick={closeMenu} className="text-sm">
              {navMenu.label}
            </HashLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
