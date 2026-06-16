import Navbar from '@/components/Navbar.js';
import Hero from '@/components/Hero.js';
import About from '@/components/About.js';
import Project from '@/components/Project.js';
import Blog from '@/components/Blog.js';
import Contact from '@/components/Contact.js';
import Footer from '@/components/Footer.js';
import BackToTop from '@/components/BackToTop.js';

export function renderAll() {
  const sections = [
    ['navbar-container', Navbar],
    ['hero-container', Hero],
    ['about-container', About],
    ['projects-container', Project],
    ['blog-container', Blog],
    ['contact-container', Contact],
    ['footer-container', Footer],
  ];

  // BackToTop
  document.body.appendChild(BackToTop());

  // Render components into containers
  sections.forEach(([id, component]) => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = '';
    container.appendChild(component());
  });
}
