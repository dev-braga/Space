const slider = document.querySelector(".slider");
const slideItem = document.querySelectorAll(".slider-item");
let slideIndex = 1;
let startX = 0;
let endX = 0;

showSlides(slideIndex);

// Função para avançar ou retroceder os slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para exibir um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para exibir o slide atual e ocultar os demais
function showSlides(n) {
  const slides = document.querySelectorAll(".slider-item");
  const dots = document.querySelectorAll(".slider-dot");
 
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

// Adicionar eventos de touch no slider
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  if (endX - startX > 50) {
    plusSlides(-1); // retroceder slide
  } else if (endX - startX < -50) {
    plusSlides(1); // avançar slide
  }
});



// CHAMADA DE ENTRADA DO MENU MOBILE

document.querySelector("#toggle-button-open").addEventListener('click', () => {
    document.querySelector(".item-link").style.marginRight = 0
    document.querySelector(".header").style.overflow = "hidden"
})
document.querySelector("#toggle-button-close").addEventListener('click', () => {
  document.querySelector(".item-link").style.marginRight = "-550px"
  document.querySelector(".header").style.overflowY = "auto"
})
