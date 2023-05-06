// SCRIPT PARA VALIDAR O SLIDER DO CONTAINER

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

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

// CHAMADA DE ENTRADA DO MENU MOBILE

document.querySelector("#toggle-button-open").addEventListener('click', () => {
    document.querySelector(".item-link").style.marginRight = 0
    document.querySelector(".header").style.overflow = "hidden"
})
document.querySelector("#toggle-button-close").addEventListener('click', () => {
  document.querySelector(".item-link").style.marginRight = "-550px"
  document.querySelector(".header").style.overflowY = "auto"
})