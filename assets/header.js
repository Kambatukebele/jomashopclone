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

// Submenu js code
const subMenu = () => {
  const subMenuDropdownTitleGroup = document.querySelectorAll('.sub-menu__dropdown--title-group');
  const subMenuDropdownDescGroup = document.querySelectorAll('.sub-menu__dropdown--desc-group');
  for (let i = 0; i < subMenuDropdownTitleGroup.length; i++) {
    subMenuDropdownTitleGroup[i].addEventListener('click', () => {
      for (let j = 0; j < subMenuDropdownDescGroup.length; j++) {
        if (i === j) {
          console.log(subMenuDropdownDescGroup[j]);

          subMenuDropdownDescGroup[j].style.display = 'block';
        }
      }
    });
  }
};

subMenu();
