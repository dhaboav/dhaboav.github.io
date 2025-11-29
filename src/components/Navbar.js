export default function Navbar() {
    const header = document.createElement('header')
    header.className = 'fixed left-0 right-0 z-50 transition-all duration-300'

    header.innerHTML = `
        <div class="container mx-auto max-w-7xl px-6">
            <nav class="flex h-16 items-center justify-between">
                <div class="px-4">
                    <a href="#home" class="block py-6">
                        <i class="bx bx-fire bx-lg text-3xl text-primary"></i>
                    </a>
                </div>

                <div class="flex items-center gap-8">
                    <a href="#about" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">About</a>
                    <a href="#projects" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">Projects</a>
                    <a href="#experience" class="link-underline text-sm text-zinc-400 transition-colors hover:text-white">Experience</a>
                </div>

                <a href="#contact" class="block text-sm font-medium text-primary transition-colors hover:text-white">Let's talk</a>
            </nav>
        </div>
    `

    return header
}
