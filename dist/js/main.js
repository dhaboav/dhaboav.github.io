import Navbar from '../../src/components/Navbar.js'
import Hero from '../../src/components/Hero.js'
import About from '../../src/components/About.js'
import Project from '../../src/components/Project.js'
import Experience from '../../src/components/Experience.js'
import Contact from '../../src/components/Contact.js'
import Footer from '../../src/components/Footer.js'
import BackToTop from '../../src/components/BackToTop.js'

document.body.appendChild(BackToTop())

const navbarContainer = document.getElementById('navbar-container')
navbarContainer.appendChild(Navbar())

const heroContainer = document.getElementById('hero-container')
heroContainer.appendChild(Hero())

const aboutContainer = document.getElementById('about-container')
aboutContainer.appendChild(About())

const projectsContainer = document.getElementById('projects-container')
projectsContainer.appendChild(Project())

const experienceContainer = document.getElementById('experience-container')
experienceContainer.appendChild(Experience())

const contactContainer = document.getElementById('contact-container')
contactContainer.appendChild(Contact())

const footerContainer = document.getElementById('footer-container')
footerContainer.appendChild(Footer())

// Scroll behavior for navbar + back to top
window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    const toTop = document.querySelector('#to-top')

    if (!header || !toTop) return

    const fixedNav = header.offsetTop

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
})
