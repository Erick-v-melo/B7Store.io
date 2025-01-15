let menuBurguer = document.querySelector('.menu-burguer');
let headerMenu = document.querySelector('.header-menu-mobile');

menuBurguer.addEventListener('click', ()=>{
  if(headerMenu.style.display === 'block') {
    headerMenu.style.display = 'none';
    menuBurguer.classList.remove('active');
  } else {
    headerMenu.style.display = 'block';
    menuBurguer.classList.add('active');
  }
});