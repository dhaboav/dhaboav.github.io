import { techStack } from '../data/techStack.js'

function TechStack(stack = []) {
    const container = document.createElement('div')
    container.className = 'flex flex-wrap gap-3 mt-2'

    stack.forEach((item) => {
        const span = document.createElement('span')
        span.className =
            'rounded bg-primary px-3 py-1.5 font-mono text-sm text-white'
        span.textContent = item
        container.appendChild(span)
    })

    return container
}

export default function About() {
    const section = document.createElement('section')
    section.id = 'about'
    section.className = 'min-h-screen bg-zinc-900 py-64'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-6">
            <div class="grid gap-16 md:grid-cols-2 lg:gap-24">
                <div>
                    <p class="mb-4 font-mono text-xs uppercase tracking-wider text-zinc-500">
                        About
                    </p>
                    <h2 class="mb-6 text-2xl font-medium tracking-tight text-white md:text-3xl">
                        Building with purpose
                    </h2>
                    <div class="space-y-4 leading-relaxed text-zinc-400">
                        <p>
                            I'm passionate about robotics and computer vision. Building systems that see, interpret, and respond to the world around them. I believe in keeping things simple, robust, and meaningful.
                        </p>
                        <p>
                            When I'm not writing code, you'll probably find me reading a good book, grinding through a game, or binge-watching anime.
                        </p>
                    </div>
                    <a href="dist/other/resume.pdf" download="Resume Dhammiko Bodhi Avatara"
                        class="mt-6 inline-flex items-center gap-2 border-2 border-transparent bg-primary px-4 py-3 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:border-primary hover:text-black hover:shadow-lg">
                        <i class="bx bx-save text-lg"></i> | Resume
                    </a>
                </div>
                <div>
                    <p class="mb-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
                        Tech Stack
                    </p>
                </div>
            </div>
        </div>
    `

    // Append tech stack
    const stackContainer = TechStack(techStack)
    section
        .querySelector('div.grid > div:nth-child(2)')
        .appendChild(stackContainer)

    return section
}
