

const headerMenuBtn = document.querySelector('.header-menu-btn')
const headerSidebar = document.querySelector('.header-sidebar')
const closeSidebarBtn = document.querySelector('.header-sidebar__close')
const exploreMoreBtns = document.querySelectorAll('.header_explore_btn')
const exploreMoreModal = document.querySelector('.explore-modal')
const exploreMoreModalClose= document.querySelector('.explore-modal-close')

headerMenuBtn.addEventListener('click', () => {
    headerSidebar.classList.toggle('active')
})

closeSidebarBtn.addEventListener('click', () => {
    headerSidebar.classList.toggle('active')
})

exploreMoreBtns.forEach(exploreMoreBtn => {
    exploreMoreBtn.addEventListener('click', () => {
        exploreMoreModal.classList.toggle('opened')
    })
})

exploreMoreModalClose.addEventListener('click', () => {
    exploreMoreModal.classList.toggle('opened')
})