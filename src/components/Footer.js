import { langData } from '../data/languages.js';
import { getLang } from '../utils/languagesUtil.js';

export default function Footer() {
    const footer = document.createElement('footer');
    footer.className = `
        border-t border-zinc-800 bg-black 
        py-8 sm:py-10 text-white
    `;

    const savedLang = getLang();

    footer.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <div
                class="flex flex-col items-center justify-center gap-4 
                text-center text-xs text-zinc-500
                sm:flex-row sm:justify-between sm:gap-0 sm:text-sm"
            >
                <p class="font-mono">© 2025 Dhammiko Bodhi Avatara</p>

                <div class="relative">
                    <button
                        id="lang-btn"
                        class="flex items-center gap-2 px-3 py-2 text-sm
                        border border-zinc-700 rounded-lg
                        hover:bg-zinc-800 active:scale-95 transition"
                    >
                        <span id="lang-flag" class="text-lg">${langData[savedLang].flag}</span>
                        <span id="lang-code" class="font-medium">${langData[savedLang].label}</span>
                        <i class="bx bx-chevron-up text-lg opacity-80"></i>
                    </button>

                    <div
                        id="lang-menu"
                        class="absolute right-0 bottom-[115%] hidden w-40
                        rounded-lg bg-zinc-900 shadow-lg border border-zinc-700 overflow-hidden"
                    >
                        ${Object.keys(langData)
                            .map(
                                (key) => `
                                    <button
                                        data-lang="${key}"
                                        class="flex w-full items-center gap-3 px-4 py-3 
                                        text-left text-sm hover:bg-zinc-800 transition"
                                    >
                                        <span class="text-lg">${langData[key].flag}</span>
                                        <span>${langData[key].full}</span>
                                    </button>
                                `,
                            )
                            .join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // --- Functionality ---
    const btn = footer.querySelector('#lang-btn');
    const menu = footer.querySelector('#lang-menu');
    const flagEl = footer.querySelector('#lang-flag');
    const codeEl = footer.querySelector('#lang-code');

    btn.addEventListener('click', () => menu.classList.toggle('hidden'));

    menu.querySelectorAll('button').forEach((option) => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;

            // Save language
            localStorage.setItem('site-lang', lang);

            flagEl.textContent = langData[lang].flag;
            codeEl.textContent = langData[lang].label;
            menu.classList.add('hidden');
            window.dispatchEvent(new Event('language-change'));
        });
    });

    return footer;
}
