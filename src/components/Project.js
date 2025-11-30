import { projectsData } from '../data/projects.js'
import { text, getLang } from '../utils/languagesUtil.js'

function createProjectCard({ title, description, image, link, repo }) {
    const cardWrapper = document.createElement('div')
    cardWrapper.className = 'w-full px-4 mb-8 sm:w-1/2 lg:w-1/3' // Mobile 1 col → sm 2 cols → lg 3 cols

    cardWrapper.innerHTML = `
        <div class="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-900 shadow-md transition-shadow lg:hover:shadow-primary">
            <img src="${image}" alt="${title}"
                 class="h-48 w-full object-cover sm:h-56 lg:h-64" />

            <div class="flex flex-col justify-between px-5 py-6">
                <div>
                    <h3 class="mb-3 text-lg font-semibold text-white sm:text-xl sm:truncate">
                        ${title}
                    </h3>

                    <p class="mb-6 text-sm font-medium text-gray-400 sm:text-base">
                        ${description}
                    </p>

                    <a href="${link}" target="_blank"
                       class="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:opacity-80">
                        ${repo}
                    </a>
                </div>
            </div>
        </div>
    `
    return cardWrapper
}

export default function Project() {
    const lang = getLang()
    const textLang = text('projects')
    const section = document.createElement('section')
    section.id = 'projects'
    section.className = 'bg-black py-20 sm:py-28 md:py-32' // mobile-first responsive spacing

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">

            <div class="mb-12 sm:mb-16">
                <p class="mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    ${textLang.label}
                </p>

                <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
                    ${textLang.title}
                </h2>
            </div>

            <div class="flex flex-wrap -mx-4 projects-list"></div>
        </div>
    `

    const listContainer = section.querySelector('.projects-list')
    projectsData.forEach((project) => {
        const { image, link } = project
        const { title, description } = project.text[lang]
        listContainer.appendChild(
            createProjectCard({
                title,
                description,
                image,
                link,
                repo: textLang.repo,
            })
        )
    })

    return section
}
