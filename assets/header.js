const headerTopMenu = document.querySelector('.header__top--menu');
const headerMobile = document.querySelector('.header__mobile');
headerTopMenu.addEventListener('click', () => {
  if (headerMobile.classList.contains('hidden')) {
    headerMobile.classList.remove('hidden');
  } else {
  }
});
