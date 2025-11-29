import { experienceData } from '../data/experience.js'

function createExperienceItem({ role, company, period, description }) {
    const item = document.createElement('div')
    item.className = 'relative pl-8'

    item.innerHTML = `
        <div class="absolute left-0 top-2 h-2 w-2 -translate-x-[3px] rounded-full bg-primary"></div>
        <div class="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="text-base font-medium text-primary">
                ${role}<span class="font-normal text-zinc-400"> @ ${company}</span>
            </h3>
            <span class="font-mono text-xs text-zinc-500">${period}</span>
        </div>
        <p class="text-sm text-zinc-400">${description}</p>
    `

    return item
}

export default function Experience() {
    const section = document.createElement('section')
    section.id = 'experience'
    section.className = 'bg-zinc-900 py-32'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-6">
            <div class="mb-16">
                <h2 class="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    Experience
                </h2>
            </div>
            <div class="max-w-2xl">
                <div class="relative">
                    <div class="absolute bottom-2 left-0 top-2 w-px bg-zinc-800"></div>
                    <div class="space-y-12 experience-list"></div>
                </div>
            </div>
        </div>
    `

    const listContainer = section.querySelector('.experience-list')
    experienceData.forEach((item) => {
        listContainer.appendChild(createExperienceItem(item))
    })

    return section
}
