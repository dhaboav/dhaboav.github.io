import Navbar from '../../src/components/Navbar.js'
import Hero from '../../src/components/Hero.js'
import About from '../../src/components/About.js'
import Project from '../../src/components/Project.js'
import Experience from '../../src/components/Experience.js'
import Contact from '../../src/components/Contact.js'
import Footer from '../../src/components/Footer.js'
import BackToTop from '../../src/components/BackToTop.js'

export function renderAll() {
    const sections = [
        ['navbar-container', Navbar],
        ['hero-container', Hero],
        ['about-container', About],
        ['projects-container', Project],
        ['experience-container', Experience],
        ['contact-container', Contact],
        ['footer-container', Footer],
    ]

    // BackToTop
    document.body.appendChild(BackToTop())

    // Render components into containers
    sections.forEach(([id, component]) => {
        const container = document.getElementById(id)
        if (!container) return

        container.innerHTML = ''
        container.appendChild(component())
    })
}
