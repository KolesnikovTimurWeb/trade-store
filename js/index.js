const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header-nav');

headerBurger.addEventListener('click', function () {
   headerMenu.classList.toggle("active")
   headerBurger.classList.toggle("active")
})
// let links = document.querySelectorAll('.header-item')
// links.forEach(link => {
//    link.addEventListener('click', function () {
//       headerMenu.classList.remove("active")
//       headerBurger.classList.remove("active")
//    })
// })


const header = document.querySelector('.header-down')
const headerClick = document.querySelector('.header-click')

headerClick.addEventListener('click', function(){
   header.classList.toggle('active')
   headerClick.classList.toggle('active')
})