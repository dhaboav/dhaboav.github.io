export default function Footer() {
    const footer = document.createElement('footer')
    footer.className = `
        border-t border-zinc-800 bg-black 
        py-8 sm:py-10 text-white
    `

    footer.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div class="flex flex-col items-center justify-between gap-3 text-center text-xs text-zinc-500 sm:flex-row sm:gap-0 sm:text-sm">
                
                <!-- Copyright -->
                <p class="font-mono">
                    © 2025 Dhammiko Bodhi Avatara
                </p>

                <!-- Tagline -->
                <p class="opacity-90">
                    Built with purpose.
                </p>
            </div>
        </div>
    `

    return footer
}
