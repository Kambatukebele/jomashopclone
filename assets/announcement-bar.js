function announcementSlider() {
  const scrollContainer = document.querySelector('#scrollContainer');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  const slideWidth = slides[0].offsetWidth;

  setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    scrollContainer.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth',
    });
  }, 3000);
}

announcementSlider();

/**
 * This function show and hiding the right div that contains a block with:
 * an icon phone and text
 * an icon chat and text
 * an icon whatsup and text
 */
function showingHiddenBlock() {
  const announcementRightVisibleText = document.querySelector('.announcement__right--visibleText'); // right text on the announcement bar
  const hiddenBlock = document.querySelector('.hiddenBlock'); // the hidden block

  announcementRightVisibleText.addEventListener('mouseenter', () => {
    hiddenBlock.style.animation = 'hiddenBlock 300ms ease-in-out forwards';
  });
  hiddenBlock.addEventListener('mouseleave', () => {
    hiddenBlock.style.animation = 'hiddenBlockReverse 300ms ease-in-out forwards';
  });
}
showingHiddenBlock();
