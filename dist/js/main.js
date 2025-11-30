import { renderAll } from './renderAll.js';
import { updateHtmlLang } from '../../src/utils/languagesUtil.js';

// First render
updateHtmlLang();
renderAll();

// Re-render when language changes
window.addEventListener('language-change', () => {
    updateHtmlLang();
    renderAll();
});

// Scroll behavior for navbar + back to top
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const toTop = document.querySelector('#to-top');

    if (!header || !toTop) return;

    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
});
