import { techStack } from '@/data/techStack.js';
import { text, getLang } from '@/utils/languagesUtil.js';
import { experienceData } from '@/data/experience.js';

function TechStack(stack = []) {
  const container = document.createElement('div');
  container.className = 'flex flex-wrap gap-3 mt-4';

  stack.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'rounded-sm bg-primary px-3 py-1.5 font-mono text-sm text-white';
    span.textContent = item;
    container.appendChild(span);
  });

  return container;
}

function createExperienceItem({ role, company, period, description }) {
  const item = document.createElement('div');
  item.className = 'relative pl-6 sm:pl-8';

  item.innerHTML = `
        <div class="absolute left-0 top-2 h-2 w-2 -translate-x-[2px] rounded-full bg-primary sm:-translate-x-[3px]"></div>
        
        <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="text-sm sm:text-base font-medium text-primary">
                ${role}
                <span class="font-normal text-zinc-400"> @ ${company}</span>
            </h3>
            <span class="font-mono text-[10px] sm:text-xs text-zinc-500">${period}</span>
        </div>

        <p class="text-sm text-zinc-400 leading-relaxed">${description}</p>
    `;
  return item;
}

export default function About() {
  const lang = getLang();
  const textLang = text('about');
  const textLangExperience = text('experience');
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'min-h-screen bg-zinc-900 py-32 md:py-40 lg:py-56';

  section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div class="grid gap-16 md:grid-cols-2 lg:gap-24">

                <!-- LEFT COLUMN -->
                <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-6">
                      [ 01 ] ${textLang.label}
                    </p>

                    <h2 class="mb-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                        ${textLang.title}
                    </h2>

                    <div class="space-y-4 leading-relaxed text-zinc-400 text-sm sm:text-base">
                        <p>
                            ${textLang.p1}
                        </p>
                        <p>
                            ${textLang.p2}
                        </p>
                    </div>


                    <p class="mt-8 lg:mt-12 mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                        ${textLang.techLabel}
                    </p>
                </div>

                <!-- RIGHT COLUMN -->
                <div>
                  <!-- Title -->
                  <div class="mb-12 sm:mb-16">
                    <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
                        ${textLangExperience.title}
                    </h2>
                  </div>

                  <!-- Timeline -->
                  <div class="max-w-2xl">
                    <div class="relative">
                      <div class="absolute left-[3px] top-2 bottom-2 w-px bg-zinc-800 sm:left-0"></div>
                      <div class="space-y-10 sm:space-y-12 experience-list"></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    `;

  // Append tech stack dynamically
  const stackContainer = TechStack(techStack);
  section.querySelector('div.grid > div:nth-child(1)').appendChild(stackContainer);

  const listContainer = section.querySelector('.experience-list');
  experienceData.forEach((item) => {
    const { role, period, description } = item.text[lang];
    listContainer.appendChild(
      createExperienceItem({
        role,
        company: item.company,
        period,
        description,
      }),
    );
  });

  return section;
}
