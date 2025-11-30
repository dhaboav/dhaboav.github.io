import { techStack } from '../data/techStack.js'

function TechStack(stack = []) {
    const container = document.createElement('div')
    container.className = 'flex flex-wrap gap-3 mt-4'

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
    section.className =
        'min-h-screen bg-zinc-900 py-24 sm:py-32 md:py-40 lg:py-56'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div class="grid gap-16 md:grid-cols-2 lg:gap-24">

                <!-- LEFT COLUMN -->
                <div>
                    <p class="mb-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                        About
                    </p>

                    <h2 class="mb-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                        Building with purpose
                    </h2>

                    <div class="space-y-4 leading-relaxed text-zinc-400 text-sm sm:text-base">
                        <p>
                            I'm passionate about robotics and computer vision. Building systems that see, interpret, and respond to the world around them. I believe in keeping things simple, robust, and meaningful.
                        </p>
                        <p>
                            When I'm not writing code, you'll probably find me reading a good book, grinding through a game, or binge-watching anime.
                        </p>
                    </div>

                    <a href="dist/other/resume.pdf"
                       download="Resume Dhammiko Bodhi Avatara"
                       class="mt-8 inline-flex items-center gap-2 border-2 border-transparent bg-primary px-4 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:border-primary hover:text-black hover:shadow-lg">
                        <i class="bx bx-save text-lg"></i> Resume
                    </a>
                </div>

                <!-- RIGHT COLUMN -->
                <div>
                    <p class="mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                        Tech Stack
                    </p>
                    <!-- TechStack will be inserted here -->
                </div>
            </div>
        </div>
    `

    // Append tech stack dynamically
    const stackContainer = TechStack(techStack)
    section
        .querySelector('div.grid > div:nth-child(2)')
        .appendChild(stackContainer)

    return section
}
