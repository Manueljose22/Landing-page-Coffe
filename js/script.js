//Header fixed

const header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('sticky',this.window.scrollY > 0)
    
})

//Btn MENU
let navMenu = document.querySelector('.nav-menu')
let btnMenu = document.querySelector('#menu-icon')

btnMenu.addEventListener('click', () =>{
    btnMenu.classList.toggle('bx-x')
    navMenu.classList.toggle('open')
    
})