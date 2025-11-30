import { text } from '../utils/languagesUtil.js'

export default function Hero() {
    const textLang = text('hero')
    const section = document.createElement('section')
    section.id = 'home'
    section.className =
        'flex min-h-screen items-center bg-black pt-20 sm:pt-28 lg:pt-28'

    section.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4">
            <div class="flex flex-wrap items-center">
                
                <!-- TEXT SECTION -->
                <div class="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
                    <p class="animate-fade-in mb-4 font-mono text-xs text-primary sm:text-sm">
                        ${textLang.greet}
                    </p>

                    <h1 class="animate-fade-in-delay-1 mb-6 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Dhammiko Bodhi Avatara
                    </h1>

                    <p class="animate-fade-in-delay-2 mb-8 text-base font-light leading-relaxed text-zinc-400 sm:text-lg lg:text-xl">
                        ${textLang.tagline}
                    </p>

                    <div class="animate-fade-in-delay-3 flex items-center gap-6">
                        <a href="#projects" class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary">
                            ${textLang.viewWork} <span class="text-lg">→</span>
                        </a>

                        <a href="#contact" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">
                            ${textLang.getInTouch}
                        </a>
                    </div>
                </div>

                <!-- IMAGE SECTION -->
                <div class="relative w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
                    <div class="relative">
                        <img 
                            src="dist/img/profile.png" 
                            alt="Dhammiko" 
                            class="relative z-10 mx-auto max-w-xs sm:max-w-sm lg:max-w-full lg:-mt-8"
                        />

                        <span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 scale-75 sm:scale-100 md:scale-125">
                            <svg class="h-64 w-64 sm:h-72 sm:w-72" viewBox="0 0 200 200">
                                <path 
                                    fill="#ea580c" 
                                    d="M50.5,-71.2C62,-61.2,65.6,-41.8,66.6,-24.9C67.5,-8,65.9,6.4,63,22C60.1,37.6,55.9,54.4,45.2,60.3C34.4,66.2,17.2,61.3,2.4,58C-12.5,54.8,-25,53.1,-36.7,47.5C-48.4,42,-59.3,32.4,-66.7,19.4C-74.2,6.3,-78.1,-10.2,-74.3,-24.9C-70.5,-39.6,-59.1,-52.5,-45.4,-61.9C-31.7,-71.2,-15.9,-76.9,1.8,-79.4C19.5,-81.9,39,-81.2,50.5,-71.2Z"
                                    transform="translate(100 100)"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    `

    return section
}
