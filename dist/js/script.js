// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top')
    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}
