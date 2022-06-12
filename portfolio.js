const menuIcon = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const mobileMenu = document.querySelector('.mobile-nav');
const headerContent = document.querySelector('.main-wrapper')
const logo = document.querySelector('.logo-text')

menuIcon.addEventListener('click',()=>{
    mobileMenu.style.display = 'flex'
    menuClose.style.display = 'block'
    menuIcon.style.display = 'none'
    headerContent.style.filter = 'blur(5px)'
    logo.style.filter = 'blur(2px)'
})

menuClose.addEventListener('click', ()=>{
    mobileMenu.style.display = 'none'
    menuClose.style.display = 'none'
    menuIcon.style.display = 'flex'
    headerContent.style.filter = 'blur(0)'
    logo.style.filter = 'blur(0)'
})

// function toggleMenuItem(menu){
//     menu.classList.toggle('fa fa-times')

// }