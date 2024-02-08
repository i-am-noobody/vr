document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".flex-container");
  const prevBtn = document.querySelector(".left-arrow");
  const nextBtn = document.querySelector(".right-arrow");
  const wrapper = document.querySelector(".carousel");
  let currentIndex = 0;

  function goToSlide(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
  }

  function goToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    goToSlide(currentIndex);
  }

  nextBtn.addEventListener("click", goToNextSlide);
  prevBtn.addEventListener("click", goToPrevSlide);
});
