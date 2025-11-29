import { projectsData } from '../data/projects.js'

function createProjectCard({ title, description, image, link }) {
    const cardWrapper = document.createElement('div')
    cardWrapper.className = 'mb-5 w-full px-4 lg:w-1/2 xl:w-1/3'

    cardWrapper.innerHTML = `
        <div class="mb-10 flex h-full flex-col overflow-hidden rounded-xl bg-zinc-900 shadow-lg hover:shadow-primary">
            <img src="${image}" alt="${title}" class="h-48 w-full object-cover" />
            <div class="flex flex-col justify-between px-6 py-8">
                <div>
                    <h3 class="mb-3 truncate text-xl font-semibold text-white">${title}</h3>
                    <p class="mb-6 text-base font-medium text-gray-600">${description}</p>
                    <a href="${link}" target="_blank" class="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-normal text-white hover:opacity-80">
                        Repository
                    </a>
                </div>
            </div>
        </div>
    `
    return cardWrapper
}

export default function Project() {
    const section = document.createElement('section')
    section.id = 'projects'
    section.className = 'bg-black py-32'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-6">
            <div class="mb-16">
                <p class="mb-4 font-mono text-xs uppercase tracking-wider text-zinc-500">Projects</p>
                <h2 class="text-2xl font-medium tracking-tight text-white md:text-3xl">Selected work</h2>
            </div>
            <div class="flex flex-wrap projects-list"></div>
        </div>
    `

    const listContainer = section.querySelector('.projects-list')
    projectsData.forEach((project) =>
        listContainer.appendChild(createProjectCard(project))
    )

    return section
}
