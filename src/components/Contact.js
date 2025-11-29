export default function Contact() {
    const section = document.createElement('section')
    section.id = 'contact'
    section.className = 'bg-black py-32 text-white'

    section.innerHTML = `
        <div class="container mx-auto">
            <div class="mx-auto mb-16 max-w-xl text-center">
                <p class="text-muted-foreground mb-4 font-mono text-xs uppercase tracking-wider">
                    Contact
                </p>
                <h2 class="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
                    Let's connect
                </h2>
                <p class="text-muted-foreground">
                    Have a project in mind or just want to chat? I'd love to hear from you.
                </p>
            </div>

            <div class="mx-auto max-w-md">
                <form class="mb-12 space-y-6">
                    <div>
                        <label for="name" class="sr-only">Name</label>
                        <input type="text" id="name" placeholder="Name" required
                            class="placeholder:text-muted-foreground w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 transition-colors focus:border-primary focus:outline-none" />
                    </div>

                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" id="email" placeholder="Email" required
                            class="placeholder:text-muted-foreground w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 transition-colors focus:border-primary focus:outline-none" />
                    </div>

                    <div>
                        <label for="message" class="sr-only">Message</label>
                        <textarea id="message" placeholder="Message" rows="4" required
                            class="placeholder:text-muted-foreground w-full resize-none border-0 border-b border-gray-600 bg-transparent px-0 py-3 transition-colors focus:border-primary focus:outline-none"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-white/90">
                        Send message
                    </button>
                </form>

                <div class="flex items-center justify-center gap-6">
                    <a href="https://github.com/dhaboav" class="transition-colors hover:text-primary">
                        <i class="bxl bx-github text-2xl text-white hover:text-gray-600"></i>
                    </a>

                    <a href="#home" class="transition-colors hover:text-primary">
                        <i class="bxl bx-linkedin text-2xl text-white hover:text-blue-600"></i>
                    </a>
                </div>
            </div>
        </div>
    `

    // Optional: Add JS for form submission here if needed

    return section
}
