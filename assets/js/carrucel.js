let numSliders = 20; // Definimos el número de sliders
let slideIndex = new Array(numSliders).fill(0); // Inicializamos el índice de cada slider a 0

// Definimos un array de arrays para cada slider, puedes añadir las rutas de las imágenes de cada slider
let slides = [
  ["assets/img/residential/planks1.webp", "assets/img/residential/planks2.webp", "assets/img/residential/planks3.webp"],
  ["assets/img/residential/sterling1.webp", "assets/img/residential/sterling2.webp"],
  ["assets/img/residential/skyline1.webp", "assets/img/residential/skyline2.webp", "assets/img/residential/skyline1.webp"],
  ["assets/img/residential/shoreline1.webp", "assets/img/residential/shoreline2.webp", "assets/img/residential/shoreline3.webp"]
  // Añade las imágenes correspondientes a cada slider
  // Hasta llegar al slider 20
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
  for (let i = 0; i < numSliders; i++) {
    showSlide(i); // Muestra la primera imagen de cada slider
  }
});

console.log('carrucel.js cargado correctamente');
