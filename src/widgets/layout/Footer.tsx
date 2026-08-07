import { personalData, snsData } from '@/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-border border-t">
      <div className="content-container nav grid gap-3 text-sm md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <h1 className="font-mono text-base font-bold">
            <span className="text-primary">~/</span>
            {personalData.brandName}
            <span className="blink-cursor text-primary">_</span>
          </h1>
          <p className="text-muted-foreground text-xs">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
        </div>

        <div className="text-foreground/80 flex gap-6">
          {snsData.map(({ logo: Logo, href }, index) => (
            <a href={href} key={index} className="hover:text-primary text-2xl">
              <Logo />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
