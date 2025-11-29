export default function Hero() {
    const section = document.createElement('section')
    section.id = 'home'
    section.className =
        'flex min-h-screen items-center justify-center bg-black pt-16'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2">
                    <p class="animate-fade-in mb-4 font-mono text-sm text-primary">Hai, I'm</p>
                    <h1 class="animate-fade-in-delay-1 mb-6 text-6xl font-medium leading-none tracking-tight text-white">
                        Dhammiko Bodhi Avatara
                    </h1>
                    <p class="animate-fade-in-delay-2 mb-8 text-xl font-light leading-relaxed text-zinc-400">
                        Passionate about robotics and computer vision, developing smart systems that see and act.
                    </p>
                    <div class="animate-fade-in-delay-3 flex items-center gap-6">
                        <a href="#projects" class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary">
                            View work <span class="text-lg">→</span>
                        </a>
                        <a href="#contact" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">
                            Get in touch
                        </a>
                    </div>
                </div>
                <div class="relative w-full self-end px-4 lg:w-1/2">
                    <img src="dist/img/profile.png" alt="Dhammiko" class="relative z-10 mx-auto max-w-full lg:-mt-8"/>
                    <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 md:scale-150">
                        <svg class="h-72 w-72" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ea580c" d="M50.5,-71.2C62,-61.2,65.6,-41.8,66.6,-24.9C67.5,-8,65.9,6.4,63,22C60.1,37.6,55.9,54.4,45.2,60.3C34.4,66.2,17.2,61.3,2.4,58C-12.5,54.8,-25,53.1,-36.7,47.5C-48.4,42,-59.3,32.4,-66.7,19.4C-74.2,6.3,-78.1,-10.2,-74.3,-24.9C-70.5,-39.6,-59.1,-52.5,-45.4,-61.9C-31.7,-71.2,-15.9,-76.9,1.8,-79.4C19.5,-81.9,39,-81.2,50.5,-71.2Z" transform="translate(100 100)"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    `

    return section
}
