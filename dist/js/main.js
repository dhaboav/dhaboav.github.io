import About from '../../src/components/About.js'
import Footer from '../../src/components/Footer.js'

const aboutContainer = document.getElementById('about-container')
aboutContainer.appendChild(About())

const footerContainer = document.getElementById('footer-container')
footerContainer.appendChild(Footer())
