// carousel.js
let slideIndex = [];
let slides = [];

// Función para configurar las imágenes del slider específico de cada HTML
function initializeSlides(slidesArray) {
  slides = slidesArray;
  slideIndex = new Array(slides.length).fill(0);
  document.addEventListener("DOMContentLoaded", function() {
    slides.forEach((_, i) => showSlide(i));
  });
}

function showSlide(sliderIndex) {
  const sliderImages = document.querySelectorAll('.image-slider')[sliderIndex].querySelector('.slider-image');
  sliderImages.src = slides[sliderIndex][slideIndex[sliderIndex]];
}

function nextSlide(sliderIndex) {
  slideIndex[sliderIndex] = (slideIndex[sliderIndex] + 1) % slides[sliderIndex].length;
  showSlide(sliderIndex);
}

function prevSlide(sliderIndex) {
  slideIndex[sliderIndex] = (slideIndex[sliderIndex] - 1 + slides[sliderIndex].length) % slides[sliderIndex].length;
  showSlide(sliderIndex);
}

console.log('carousel.js cargado correctamente');
