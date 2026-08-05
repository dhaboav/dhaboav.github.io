import { personalData } from '@/data';

export function Footer() {
  const MEDSOS = [
    { logo: 'bxl bx-github', href: personalData.sns.github },
    { logo: 'bxl bx-linkedin', href: personalData.sns.linkedin },
    { logo: 'bxl bx-instagram', href: personalData.sns.instagram },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border border-t text-white">
      <div className="content-container nav grid gap-3 text-sm text-zinc-500 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <h1 className="text-primary font-mono text-base font-bold">
            ~/
            <span className="text-white">{personalData.brandName}</span>
            <span className="blink-cursor text-primary">_</span>
          </h1>
          <p className="text-muted-foreground text-xs">
            © {currentYear} {personalData.name}. All rights reserved.
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
