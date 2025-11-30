import { text } from '../utils/languagesUtil.js';

export default function Navbar() {
    const textLang = text('navbar');
    const header = document.createElement('header');
    header.className = `
        fixed left-0 right-0 z-50 backdrop-blur-sm bg-black/60 border-b border-transparent
        transition-all duration-300
    `;

    header.innerHTML = `
        <div class="container mx-auto max-w-7xl px-4 sm:px-6">
            <nav class="flex h-16 items-center justify-between">

                <!-- LOGO -->
                <a href="#home" class="py-4">
                    <i class="bx bx-fire bx-lg text-3xl text-primary"></i>
                </a>

                <!-- HAMBURGER (mobile only) -->
                <button id="nav-toggle" class="block text-white text-3xl sm:hidden">
                    <i class="bx bx-menu"></i>
                </button>

                <!-- DESKTOP MENU -->
                <div class="hidden sm:flex items-center gap-8">
                    <a href="#home" class="link-underline text-sm text-zinc-400 hover:text-white">${textLang.home}</a>
                    <a href="#about" class="link-underline text-sm text-zinc-400 hover:text-white">${textLang.about}</a>
                    <a href="#projects" class="link-underline text-sm text-zinc-400 hover:text-white">${textLang.projects}</a>
                    <a href="#experience" class="link-underline text-sm text-zinc-400 hover:text-white">${textLang.experience}</a>
                </div>

                <!-- DESKTOP CTA -->
                <a href="#contact" class="hidden sm:block text-sm font-medium text-primary hover:text-white">
                    ${textLang.contact}
                </a>
            </nav>

            <!-- MOBILE MENU -->
            <div id="mobile-menu"
                class="hidden flex-col gap-4 rounded-lg p-6 text-zinc-300 shadow-xl sm:hidden
                       transition-all duration-300">
                
                <a href="#home" class="text-sm hover:text-white">${textLang.home}</a>
                <a href="#about" class="text-sm hover:text-white">${textLang.about}</a>
                <a href="#projects" class="text-sm hover:text-white">${textLang.projects}</a>
                <a href="#experience" class="text-sm hover:text-white">${textLang.experience}</a>
                <a href="#contact" class="text-sm font-medium text-primary hover:text-white">
                    ${textLang.contact}
                </a>

            </div>
        </div>
    `;

    // ===== MOBILE MENU TOGGLE LOGIC ===== //
    const toggleButton = header.querySelector('#nav-toggle');
    const mobileMenu = header.querySelector('#mobile-menu');

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        toggleButton.innerHTML = `<i class="bx bx-menu"></i>`;
    }

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        toggleButton.innerHTML = `<i class="bx bx-x"></i>`;
    }

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains('flex');
        isOpen ? closeMenu() : openMenu();
    });

    // ===== CLOSE WHEN CLICKING OUTSIDE ===== //
    document.addEventListener('click', (e) => {
        const isOpen = mobileMenu.classList.contains('flex');

        if (!isOpen) return;

        // If click is NOT inside menu or button
        if (!mobileMenu.contains(e.target) && !toggleButton.contains(e.target)) {
            closeMenu();
        }
    });

    return header;
}
