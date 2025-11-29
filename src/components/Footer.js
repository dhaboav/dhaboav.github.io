export default function Footer() {
    const footer = document.createElement('footer')
    footer.className = `border-t border-gray-900 bg-black py-8 text-white`

    footer.innerHTML = `
    <div class="container mx-auto px-6 max-w-7xl ">
        <div class="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p class="font-mono">© 2025 Dhammiko Bodhi Avatara</p>
            <p>Built with purpose.</p>
        </div>
    </div>
    `

    return footer
}
