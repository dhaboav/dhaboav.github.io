import { AUTHOR_NAME } from '@/shared/config';

export function Footer() {
  const MEDSOS = [
    { logo: 'bxl bx-github', href: 'https://github.com/dhaboav' },
    { logo: 'bxl bx-linkedin', href: 'https://www.linkedin.com/in/dhaboav' },
    { logo: 'bxl bx-instagram', href: 'https://www.instagram.com/dhaboav' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border border-t text-white">
      <div className="mx-auto grid max-w-6xl gap-3 p-4 text-sm text-zinc-500 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <h1 className="text-primary font-mono text-base font-bold">
            ~/
            <span className="text-white">Dhaboav</span>
            <span className="blink-cursor text-primary">_</span>
          </h1>
          <p className="text-muted-foreground text-xs">
            © {currentYear} {AUTHOR_NAME}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-white/80">
          {MEDSOS.map((medsos) => (
            <a href={medsos.href} key={medsos.logo} className="hover:text-primary text-2xl">
              <i className={medsos.logo} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
