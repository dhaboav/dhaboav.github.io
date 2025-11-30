import { experienceData } from '../data/experience.js';
import { text, getLang } from '../utils/languagesUtil.js';

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

export default function Experience() {
    const lang = getLang();
    const textLang = text('experience');
    const section = document.createElement('section');
    section.id = 'experience';
    section.className = 'bg-zinc-900 py-20 sm:py-28 md:py-32';

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">

            <!-- Title -->
            <div class="mb-12 sm:mb-16">
                <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
                    ${textLang.title}
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
    `;

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
