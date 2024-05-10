const navToggleBtn = document.querySelector('.nav-toggle')
const menu = document.querySelector('.menu')
const mobileMenuLinks = document.querySelectorAll('.menu__link')
const cover = document.querySelector('.cover')
const header = document.querySelector('.header')
const menuItems = document.querySelectorAll('.menu__item')
const sections = document.querySelectorAll('main > section')
navToggleBtn.addEventListener('click', function () {
    // When Click In Hamburger Menu Changing The Styles
    navToggleBtn.classList.toggle('nav-toggle--active')
    // Add a Class To Menu For Open In Mobile
    menu.classList.toggle('menu--open')
    // Show Cover
    cover.classList.toggle('cover-show')
})


// When Clicked On Menu Mobile Link We Weill Remove Menu Active Class

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Removing Menu Active Class
        menu.classList.remove('menu--open')
        // Removing Active Class From Cover
        cover.classList.remove('cover-show')
        // Removing Active Class Form Hamburger Menu
        navToggleBtn.classList.remove('nav-toggle--active')
    })
})

// Change Header Background When Scrolled

function scrollHeader() {
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Scroll Reveal Codes

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
})

sr.reveal('.home__title', {delay: 700, origin: 'top'})
sr.reveal('.home', {delay: 700, origin: 'top'})
sr.reveal('.home__caption', {delay: 800, origin: 'right'})
sr.reveal('.btn-big', {delay: 900, origin: 'bottom'})
sr.reveal('.home__services', {delay: 1500, origin: 'top'})
sr.reveal('.home__photo-wrapper', {delay: 900, origin: 'bottom'})
sr.reveal('.features__photo', {delay: 500, origin: 'left'})
sr.reveal('.features__content', {delay: 800, origin: 'right'})
sr.reveal('.package', {delay: 800, origin: 'left'})
sr.reveal('.package--medium', {delay: 800, origin: 'top'})
sr.reveal('.package--premium', {delay: 800, origin: 'right'})
sr.reveal('.network', {delay: 800, origin: 'top'})
sr.reveal('.newsletter', {delay: 900, origin: 'top'})
sr.reveal('.newsletter__title', {delay: 900, origin: 'top'})
sr.reveal('.newsletter__caption', {delay: 900, origin: 'top'})



function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}

const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
});
function observerHandler(allSections) {
    allSections.map(section => {
        if (section.isIntersecting) {
            let sectionClassName = section.target.className
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.add('menu__item--active')
        } else {
            let sectionClassName = section.target.className
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.remove('menu__item--active')
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})
menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        removeActiveClass('menu__item--active')
        item.classList.add('menu__item--active')
        let sectionClass = item.getAttribute('data-section')
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffsetTop - 107,
            behavior: 'smooth'
        })
    })
})