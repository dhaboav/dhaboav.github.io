import { AUTHOR_NAME } from '@/shared/config';
import { useI18n } from '@/shared/lib';

export const HeroSection = () => {
  const { ui } = useI18n();

  return (
    <section id="home" className="flex min-h-screen items-center bg-black pt-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center">
          {/* TEXT SECTION */}
          <div className="w-full md:w-1/2 lg:mb-0">
            <p className="animate-fade-in text-primary mb-2 font-mono text-sm">{ui.hero.greet}</p>

            <h1 className="animate-fade-in-delay-1 mb-3 text-4xl font-medium tracking-tight text-white lg:text-5xl">
              {AUTHOR_NAME}
            </h1>

            <p className="animate-fade-in-delay-2 mb-6 text-base font-light text-zinc-400">
              {ui.hero.tagline}
            </p>

            <div className="animate-fade-in-delay-3 flex items-center gap-4">
              <a
                href={`other/${ui.hero.resumeFile}.pdf`}
                download={`Resume ${AUTHOR_NAME}`}
                className="hover:bg-primary inline-flex items-center gap-1 rounded-lg border border-white/20 p-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <i className="bx bx-save text-lg" />
                <span>Resume</span>
              </a>

              <a
                href="#projects"
                className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium text-white transition-colors"
              >
                {ui.hero.viewProjectLabel}
                <i className="bx bx-arrow-right-stroke text-lg" />
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative flex w-full justify-center md:w-1/2">
            <div className="relative">
              <img
                src="img/profile.png"
                alt="Dhammiko"
                className="relative z-10 max-w-3xs md:max-w-full"
              />

              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 scale-130 md:-translate-y-12 md:scale-140">
                <svg className="text-primary h-60 w-60 fill-current" viewBox="0 0 200 200">
                  <path
                    d="M50.5,-71.2C62,-61.2,65.6,-41.8,66.6,-24.9C67.5,-8,65.9,6.4,63,22C60.1,37.6,55.9,54.4,45.2,60.3C34.4,66.2,17.2,61.3,2.4,58C-12.5,54.8,-25,53.1,-36.7,47.5C-48.4,42,-59.3,32.4,-66.7,19.4C-74.2,6.3,-78.1,-10.2,-74.3,-24.9C-70.5,-39.6,-59.1,-52.5,-45.4,-61.9C-31.7,-71.2,-15.9,-76.9,1.8,-79.4C19.5,-81.9,39,-81.2,50.5,-71.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
