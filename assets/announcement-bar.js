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
