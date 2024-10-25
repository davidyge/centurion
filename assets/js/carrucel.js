let slideIndex = [0, 0]; // Array para múltiples sliders
let slides = [
  ["assets/img/Gopeners/p3.webp", "assets/img/Gopeners/p1.webp", "assets/img/Gopeners/p2.webp"],
  ["assets/img/Gopeners/p4.webp", "assets/img/Gopeners/p3.webp", "assets/img/Gopeners/p2.webp"]
];

// Función para mostrar la imagen correspondiente del slider
function showSlide(sliderIndex) {
  let sliderImages = document.querySelectorAll('.image-slider')[sliderIndex].querySelector('.slider-image');
  sliderImages.src = slides[sliderIndex][slideIndex[sliderIndex]];
}

// Función para ir a la siguiente imagen
function nextSlide(sliderIndex) {
  slideIndex[sliderIndex] = (slideIndex[sliderIndex] + 1) % slides[sliderIndex].length;
  showSlide(sliderIndex);
}

// Función para ir a la imagen anterior
function prevSlide(sliderIndex) {
  slideIndex[sliderIndex] = (slideIndex[sliderIndex] - 1 + slides[sliderIndex].length) % slides[sliderIndex].length;
  showSlide(sliderIndex);
}

// Mostrar la primera imagen de cada slider al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  showSlide(0); // Muestra la primera imagen del primer slider
  showSlide(1); // Muestra la primera imagen del segundo slider
});

console.log('carrucel.js cargado correctamente');

