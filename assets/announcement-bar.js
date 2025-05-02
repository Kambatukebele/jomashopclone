function announcementSlider() {
  const scrollContainer = document.querySelector('#scrollContainer');
  const slides = document.querySelectorAll('.slide');
  // Initialize a variable to keep track of which slide is currently shown
  let currentIndex = 0;

  // Function to scroll the current slide
  function scrollToSlide(index) {
    //access the index in the slides
    const targetSlide = slides[index];
    targetSlide.scrollIntoView({ behavior: 'smooth' });
  }

  setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    scrollToSlide(currentIndex);
  }, 3000);
}
announcementSlider();

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
