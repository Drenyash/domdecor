const header = document.querySelector(".header");
const catalogElement = document.querySelector("[data-catalog-elem]");
const footer = document.querySelector("[data-header-footer]");
const nav = document.querySelector("[data-nav]");
const menu = document.querySelector("[data-menu]");
const menuItem = document.querySelectorAll("[data-menu-item]");
const dropDown = document.querySelector("[data-dropdown]");

const showList = (evt) => {
    evt.target.classList.add('open')
    footer.classList.add('header__footer_show')
};

const hideList = () => {
    catalogElement.classList.remove('open')
    footer.classList.remove('header__footer_show')
};

catalogElement.addEventListener("mouseenter", showList);

header.addEventListener("mouseleave", hideList);

nav.addEventListener("mouseenter", hideList);

menuItem.forEach(menuItem => {
    menuItem.addEventListener('mouseenter', ()=> {
        dropDown.classList.add('menu__dropdown_show')
    })
})

menu.addEventListener("mouseleave", () => {
    dropDown.classList.remove('menu__dropdown_show')
})
