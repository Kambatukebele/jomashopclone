// Toggle menu
const toggleMenu = () => {
  const levelOneWrapper = document.getElementById('level-1-wrapper'); // targetting level One wrapper
  const levelTwoWrapper = document.getElementById('level-2-wrapper'); // targetting level two wrapper
  const hamburgerIcon = document.querySelector('.header__menu--icon'); // targetting the hamburger icon
  const mobileMenuIcons = document.querySelectorAll('.mobile-menu__icon'); // targetting the mobile menu on first level
  const mobileMenuBackIcon = document.querySelector('.mobile-menu__back-icon'); // Targetting the icon back from the level 2 to return to level 1
  const menuSlideClose = document.querySelector('.menu-slide__close'); // Closing first level
  const dataMenuId = document.querySelectorAll('[data-menu-id]');
  console.log(dataMenuId);

  // Opening the first level
  hamburgerIcon.addEventListener('click', function () {
    levelOneWrapper.classList.remove('slide-default');
    levelOneWrapper.classList.add('slide-in');
  });
  // Opening the second level
  mobileMenuIcons.forEach((icon, index) => {
    icon.addEventListener('click', function () {
      levelOneWrapper.classList.remove('slide-in');
      levelOneWrapper.classList.add('slide-out-left');
      levelTwoWrapper.classList.remove('slide-default-level-2');
      levelTwoWrapper.classList.add('slide-in-right');
    });
  });
  // Closing the second level
  mobileMenuBackIcon.addEventListener('click', function () {
    levelOneWrapper.classList.remove('slide-out-left');
    levelOneWrapper.classList.add('slide-in');
    levelTwoWrapper.classList.remove('slide-in-right');
    levelTwoWrapper.classList.add('slide-default-level-2');
  });
  // Closing the first level
  menuSlideClose.addEventListener('click', function (event) {
    levelOneWrapper.classList.add('slide-default');
    levelOneWrapper.classList.remove('slide-in');
  });

  /**
   * This is targeting element inside the persistent div inside the snippet folder
   */
  const mobileSubmenuIconPlus = document.querySelectorAll('.mobile-submenu__icon-plus'); // target the icon plus in persistent footer
  const mobileSubmenuIconMinus = document.querySelectorAll('.mobile-submenu__icon-minus'); // target the icon minus in persistent footer
  const mobileSubmenuLists = document.querySelectorAll('.mobile-submenu__list-persistent'); // target the lists in persistent footer
  /**
   * ------------------------------------------
   */
  const iconPlus = document.querySelectorAll('.icon-plus');
  const iconMinus = document.querySelectorAll('.icon-minus');
  const theLists = document.querySelectorAll('.mobile-submenu__list');

  function togglePersistentMenu(iconPluses, iconMinuses, lists) {
    iconPluses.forEach(function (plus, id) {
      plus.addEventListener('click', function () {
        plus.classList.add('hidden');
        iconMinuses[id].style.display = 'block';
        lists[id].style.display = 'flex';
      });
    });
    iconMinuses.forEach(function (minus, id) {
      minus.addEventListener('click', function () {
        minus.style.display = 'none';
        iconPluses[id].classList.remove('hidden');
        lists[id].style.display = 'none';
      });
    });
  }
  //Opening and closing persistent menu footer
  togglePersistentMenu(mobileSubmenuIconPlus, mobileSubmenuIconMinus, mobileSubmenuLists);
  //Opening and closing level 2 menus
  togglePersistentMenu(iconPlus, iconMinus, theLists);
};

toggleMenu();
