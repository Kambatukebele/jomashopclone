const headerTopMenu = document.querySelector('.header__top--menu');
const headerMobile = document.querySelector('.header__mobile');
const headerCloseMenu = document.querySelector('.header__mobile__IconClose-span');
headerTopMenu.addEventListener('click', () => {
  headerMobile.classList.add('openMenuAnnimation');
  headerMobile.classList.remove('closeMenuAnnimation');
});
headerCloseMenu.addEventListener('click', () => {
  headerMobile.classList.remove('openMenuAnnimation');
  headerMobile.classList.add('closeMenuAnnimation');
});
