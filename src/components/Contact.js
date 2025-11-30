import { text } from '../utils/languagesUtil.js'

const scriptURL =
    'https://script.google.com/macros/s/AKfycbxMpAHVtSNb-KGhAuOIn5qZ5cyVvCbZ4PS0lL3mPyRUre53DNWfWBmlHi9ZfyUGPQKl/exec'

export default function Contact() {
    const textLang = text('contact')
    const section = document.createElement('section')
    section.id = 'contact'
    section.className = 'bg-black py-20 text-white sm:py-28 md:py-32'

    section.innerHTML = `
        <div class="container mx-auto px-4">

            <!-- SECTION HEADER -->
            <div class="mx-auto mb-12 max-w-md text-center sm:mb-14 md:mb-16">
                <p class="text-muted-foreground mb-3 font-mono text-[10px] uppercase tracking-wider sm:text-xs">
                    ${textLang.label}
                </p>

                <h2 class="mb-3 text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                    ${textLang.title}
                </h2>

                <p class="text-muted-foreground text-sm sm:text-base">
                    ${textLang.subtitle}
                </p>
            </div>

            <!-- FORM -->
            <div class="mx-auto max-w-sm sm:max-w-md">
                <form id="contact-form" class="mb-10 space-y-5 sm:space-y-6">
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="${textLang.namePlaceholder}" 
                            required
                            class="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="${textLang.emailPlaceholder}" 
                            required
                            class="w-full border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <textarea 
                            name="message"
                            placeholder="${textLang.messagePlaceholder}" 
                            rows="4" 
                            required
                            class="w-full resize-none border-0 border-b border-gray-600 bg-transparent px-0 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        ></textarea>
                    </div>

                    <!-- SUBMIT BUTTON -->
                    <button 
                        id="submit-btn"
                        type="submit"
                        class="w-full bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 flex items-center justify-center gap-2"
                    >
                        <span id="btn-text">${textLang.send}</span>
                    </button>
                </form>

                <!-- ICON LINKS -->
                <div class="flex items-center justify-center gap-4 sm:gap-6">
                    <a href="https://github.com/dhaboav" class="transition-colors hover:text-gray-600 text-2xl">
                        <i class="bxl bx-github"></i>
                    </a>

                    <a href="#home" class="transition-colors text-2xl hover:text-blue-600">
                        <i class="bxl bx-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- NOTIFICATION -->
        <div id="notification" 
            class="hidden fixed bottom-6 right-6 rounded-lg px-4 py-3 text-sm 
                   bg-zinc-900 border border-zinc-700 shadow-lg opacity-0 
                   transition-opacity duration-300">
        </div>
    `

    // ===== FORM LOGIC & NOTIFICATIONS ===== //
    const form = section.querySelector('#contact-form')
    const submitBtn = section.querySelector('#submit-btn')
    const btnText = section.querySelector('#btn-text')
    const notif = section.querySelector('#notification')

    // Show notification
    function showNotification(message, success = true) {
        notif.textContent = message
        notif.classList.remove('hidden')
        notif.classList.remove('opacity-0')

        notif.classList.add(success ? 'text-green-400' : 'text-red-400')

        // Show
        setTimeout(() => {
            notif.classList.add('opacity-100')
        }, 10)

        // Hide after 4 seconds
        setTimeout(() => {
            notif.classList.remove('opacity-100')
            setTimeout(() => notif.classList.add('hidden'), 300)
        }, 4000)
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        // Change button state to "Sending..."
        btnText.textContent = textLang.loading
        submitBtn.disabled = true
        submitBtn.classList.add('opacity-70')

        // Add spinner
        const spinner = document.createElement('span')
        spinner.className =
            'animate-spin border-2 border-black border-t-transparent rounded-full w-4 h-4'
        submitBtn.prepend(spinner)

        try {
            const formData = new FormData(form)
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                showNotification(`${textLang.success}`, true)
                form.reset()
            } else {
                showNotification(`${textLang.failure}`, false)
            }
        } catch (error) {
            showNotification(`Error: ${error}`, false)
        }

        // Reset button state
        spinner.remove()
        btnText.textContent = textLang.send
        submitBtn.disabled = false
        submitBtn.classList.remove('opacity-70')
    })

    return section
}
