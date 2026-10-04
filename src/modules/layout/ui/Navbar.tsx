import { personalData } from '@data/index';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { useNavbar } from '@/layout/hook/use-navbar';
import { useTheme } from '@/layout/hook/use-theme';
import { type SupportedLang, languages } from '@/shared/i18n/types';
import { useI18n } from '@/shared/i18n/useI18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';
import { Toggle } from '@/ui/toggle';

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

  const LanguagePicker = ({ className = '' }: { className?: string }) => (
    <Select value={lang} onValueChange={(value) => setLang(value as SupportedLang)}>
      <SelectTrigger className={`border-0 p-0 font-mono text-sm uppercase ${className}`}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-background border-0" alignItemWithTrigger={false}>
        {languages.map((langItem) => (
          <SelectItem
            key={langItem.label}
            value={langItem.label}
            className="hover:bg-foreground/15"
          >
            {langItem.flag} {langItem.full}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-background'
      }`}
    >
      <div className="content-container nav">
        {/* Desktop Navigation */}
        <nav className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
          <HashLink to="/#home" aria-label="logo">
            <h1 className="font-mono text-base font-bold">
              <span className="text-primary">~/</span>
              {personalData.brandName}
              <span className="blink-cursor text-primary">_</span>
            </h1>
          </HashLink>

          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <HashLink
                key={link.href}
                to={link.href}
                className="link-underline hover:text-foreground font-mono text-sm text-zinc-400"
              >
                {link.label}
              </HashLink>
            ))}
            <LanguagePicker className="text-zinc-400" />
          </div>

          <Toggle size="icon-sm" variant="ghost" className="text-zinc-400" onClick={toggle}>
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </Toggle>

          <button ref={buttonRef} onClick={toggleMenu} className="md:hidden" aria-label="nav-icon">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav
          ref={menuRef}
          className={`${isOpen ? 'flex' : 'hidden'} text-foreground/80 flex-col gap-2 pt-6 md:hidden`}
        >
          {navLinks.map((link) => (
            <HashLink key={link.href} to={link.href} onClick={closeMenu} className="text-sm">
              {link.label}
            </HashLink>
          ))}
          <LanguagePicker />
        </nav>
      </div>
    </header>
  );
}
