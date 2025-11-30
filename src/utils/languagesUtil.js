import { langData } from '../data/languages.js';

export function getLang() {
    return localStorage.getItem('site-lang') || 'en';
}

export function updateHtmlLang() {
    const lang = getLang();
    document.documentElement.lang = lang;
    document.title = langData[lang].title || "Dhaboav's Website";
}

export function text(section) {
    const lang = getLang();
    return langData[lang][section] || {};
}
