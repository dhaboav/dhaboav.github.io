import { HashLink } from 'react-router-hash-link';
import { useNavbar } from './hooks/useNavbar';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { personalData } from '@/data';
import { useI18n, languages, type SupportedLang } from '@/shared/lib';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';

export function Navbar() {
  const { ui, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const { aboutLabel, experienceLabel, projectLabel, contactLabel, blogLabel } = ui.navbar;
  const { isOpen, menuRef, buttonRef, toggleMenu, closeMenu } = useNavbar();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/#about', label: aboutLabel },
    { href: '/#experiences', label: experienceLabel },
    { href: '/#projects', label: projectLabel },
    { href: '/#contact', label: contactLabel },
    { href: '/blog', label: blogLabel },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${scrolled ? 'border-border bg-background/85 backdrop-blur-md' : 'bg-background border-transparent'}`}
    >
      <div className="content-container nav">
        <nav
          className="grid grid-cols-[1fr_auto_auto] items-center gap-4"
          aria-label="desktop-menu"
        >
          <HashLink to="/#home" aria-label="logo">
            <h1 className="font-mono text-base font-bold">
              <span className="text-primary">~/</span>
              {personalData.brandName}
              <span className="blink-cursor text-primary">_</span>
            </h1>
          </HashLink>

          <Button onClick={toggle} variant="ghost" size="icon-sm">
            {theme === 'dark' ? <Moon /> : <Sun />}
          </Button>

          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((navMenu) => (
              <HashLink
                key={navMenu.href}
                to={navMenu.href}
                className="link-underline hover:text-foreground font-mono text-sm text-zinc-400"
              >
                {navMenu.label}
              </HashLink>
            ))}

            <Select value={lang} onValueChange={(value) => setLang(value as SupportedLang)}>
              <SelectTrigger className="text-muted-foreground border-0 font-mono text-sm uppercase">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-0" alignItemWithTrigger={false}>
                {languages.map((langItem) => (
                  <SelectItem
                    key={langItem.label}
                    value={langItem.label}
                    className="hover:bg-foreground/10"
                  >
                    {langItem.flag} {langItem.full}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button ref={buttonRef} onClick={toggleMenu} className="md:hidden" aria-label="nav-icon">
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <nav
          ref={menuRef}
          className={` ${isOpen ? 'flex' : 'hidden'} text-foreground/80 flex-col gap-3 py-4 md:hidden`}
          aria-label="mobile-menu"
        >
          {navLinks.map((navMenu) => (
            <HashLink key={navMenu.href} to={navMenu.href} onClick={closeMenu} className="text-sm">
              {navMenu.label}
            </HashLink>
          ))}

          <Select value={lang} onValueChange={(value) => setLang(value as SupportedLang)}>
            <SelectTrigger className="border-0 text-sm uppercase">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border-0" alignItemWithTrigger={false}>
              {languages.map((langItem) => (
                <SelectItem
                  key={langItem.label}
                  value={langItem.label}
                  className="hover:bg-white/10"
                >
                  {langItem.flag} {langItem.full}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
}
