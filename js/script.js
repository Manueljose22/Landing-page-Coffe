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

let containerArticle = document.querySelectorAll('.row')
function SliderClients(indice) {
   let n = indice

   let mover =  100
   let next = mover
   let preview = -mover

   if (indice == +1) {
    containerArticle[n].scrollBy(next, 0)

   }
   if (indice == -1) {
    containerArticle[n].scrollBy(preview, 0)
   }

   setTimeout(() => {
    for (let i = 0; i <= containerArticle.length; i++) {
        containerArticle[i]
        
    }
   }, 3000);
}

SliderClients(-1)




