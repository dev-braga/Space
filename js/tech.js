const buttons = document.querySelectorAll('.sliderTech-button');
const slides = document.querySelectorAll('.sliderTech-slide');

const image1 = document.querySelector("#image-tech1")
const image2 = document.querySelector("#image-tech2")
const image3 = document.querySelector("#image-tech3")

// Função para mostrar um slide e atualizar o botão ativo
function showSlide(n) {
  buttons.forEach(button => button.classList.remove('active'));
  slides.forEach(slide => slide.classList.remove('active'));
  buttons[n].classList.add('active');
  slides[n].classList.add('active');

  if(n == 0){
    image1.style.display = "block"
    image2.style.display = "none"
    image3.style.display = "none"
  }
  else if( n == 1){
    image2.style.display = "block"
    image1.style.display = "none"
    image3.style.display = "none"
  }
  else{
    image3.style.display = "block"
    image1.style.display = "none"
    image2.style.display = "none"
  }
}


// Adiciona um evento de clique para cada botão
buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    showSlide(i);
    
  }); 
});

// Mostra o primeiro slide como padrão
showSlide(0);
