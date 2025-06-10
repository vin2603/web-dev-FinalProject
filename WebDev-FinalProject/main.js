let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  const slider = document.querySelector(".slider");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveUp() {
  showSlide(currentIndex + 1);
}

function moveBack() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  moveUp();
}, 5000);
