let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  // Hide all slides and remove active class from dots
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Ensure the index is within bounds
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  // Show the active slide and highlight the corresponding dot
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

function searchContent() {
  let searchTerm = document.querySelector(
    '.search-container input[type="text"]'
  ).value;
  alert("Search for: " + searchTerm);
}

// Initialize the slider on page load
document.addEventListener("DOMContentLoaded", function () {
  showSlide(0);
});

VANTA.FOG({
  el: ".td-mesh-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xffe599,
  midtoneColor: 0xcc0000,
  lowlightColor: 0x990000,
  baseColor: 0x660000,
  blurFactor: 0.9,
  speed: 0.1,
  zoom: 0.3,
  minHeight: 100.0, // Bisa diatur, namun ini akan mengikuti tinggi header
  minWidth: 100.0,
});
