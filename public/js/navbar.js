const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');


burgerIcon.addEventListener("click", 'hover', () => {
    navbarMenu.classList.toggle('is-active')
})