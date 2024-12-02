function hiddenBlock() {
  const text = document.querySelector(".annoucement__right--visibleText__text"); // Capturing the text in annoucement
  const hiddenBlockInAnnoucement = document.querySelector(
    ".annoucement__right--hiddenBlock"
  ); // capturing the hidden block in annoucement

  text.addEventListener("click", () => {
    if (hiddenBlockInAnnoucement.classList.contains("hidden")) {
      hiddenBlockInAnnoucement.classList.remove("hidden");
    } else {
      hiddenBlockInAnnoucement.classList.add("hidden");
    }
  });
}

hiddenBlock();

// Slide
function slideAnnoucement() {
  // console.log(scrollingDiv);
  window.addEventListener("load", (e) => {
    const scrollingDivs = document.querySelectorAll(".annoucement__left--div");
    // for (let i = 0; i < scrollingDivs.length; i++) {
    //   const element = array[i];

    // }
    scrollingDivs.forEach((divs, index) => {
      let current = 0;
      console.log(divs[index]);

      setInterval(() => {
        if (!divs.classList.contains("hidden")) {
          divs.classList.add("hidden");
        }
      }, 5000);
    });
  });
}

slideAnnoucement();
