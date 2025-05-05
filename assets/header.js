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

//Show and hide mega menu
const megaMenu = () => {};

megaMenu();

// Submenu js code
const subMenu = () => {
  const subMenuDropdownTitleGroup = document.querySelectorAll('.sub-menu__dropdown--title-group');
  const subMenuDropdownDescGroup = document.querySelectorAll('.sub-menu__dropdown--desc-group');
  console.log(subMenuDropdownDescGroup);

  for (let i = 0; i < subMenuDropdownTitleGroup.length; i++) {
    subMenuDropdownTitleGroup[i].addEventListener('click', (e) => {
      if (e.target.parentElement.nextElementSibling.classList.contains('sub-menuHide')) {
        e.target.parentElement.nextElementSibling.classList.remove('sub-menuHide');
        // e.target.parentElement.nextElementSibling.classList.add('block');
      } else {
        e.target.parentElement.nextElementSibling.classList.add('sub-menuHide');
        // e.target.parentElement.nextElementSibling.classList.remove('block');
      }

      // console.log(e.target.parentElement.nextElementSibling);

      // for (let j = 0; j < subMenuDropdownDescGroup.length; j++) {
      //   if (i === j) {
      //     console.log(subMenuDropdownDescGroup[j]);

      //     subMenuDropdownDescGroup[j].style.display = 'block';
      //   }
      // }
    });
  }
};

subMenu();
