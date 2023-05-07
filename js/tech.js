const buttons = document.querySelectorAll('.sliderTech-button');
const slides = document.querySelectorAll('.sliderTech-slide');

const image1 = document.querySelector("#image-tech1")
const image2 = document.querySelector("#image-tech2")
const image3 = document.querySelector("#image-tech3")
const image1l = document.querySelector("#image-tech1l")
const image2l = document.querySelector("#image-tech2l")
const image3l = document.querySelector("#image-tech3l")

let slide1 = false
let slide2 = false
let slide3 = false

// Função para mostrar um slide e atualizar o botão ativo
function showSlide(n) {
  buttons.forEach(button => button.classList.remove('active'));
  slides.forEach(slide => slide.classList.remove('active'));
  buttons[n].classList.add('active');
  slides[n].classList.add('active');
  let wWidth = window.innerWidth
  
  if(n == 0){
    image1.style.display = "block"
    image2.style.display = "none"
    image3.style.display = "none"
    
    if (wWidth <= isTablet ){ // isTablet eh uma variavel definida com 900 pixels
      image1l.style.display = "block"
      image2l.style.display = "none"
      image3l.style.display = "none"
      // Imagens no modo portrait
      image1.style.display = "none"
      image2.style.display = "none"
      image3.style.display = "none"
      }
    slide1 = true
    slide2 = false
    slide3 = false
  }
  else if( n == 1){
    image2.style.display = "block"
    image1.style.display = "none"
    image3.style.display = "none"
    if( wWidth <= isTablet ){
      image1l.style.display = "none"
      image2l.style.display = "block"
      image3l.style.display = "none"
      // Imagens no modo portrait
      image2.style.display = "none"
      image1.style.display = "none"
      image3.style.display = "none"
      
    }
    slide1 = false
    slide2 = true
    slide3 = false
  }
  else{
    image3.style.display = "block"
    image1.style.display = "none"
    image2.style.display = "none"
    if( wWidth <= isTablet ){
      image1l.style.display = "none"
      image2l.style.display = "none"
      image3l.style.display = "block"
      // Imagens no modo portrait
      image2.style.display = "none"
      image1.style.display = "none"
      image3.style.display = "none"
      
    }
    slide1 = false
    slide2 = false
    slide3 = true
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


window.addEventListener('resize', function(){
  verifyResizeTech()
})

verifyResizeTech=()=>{  
  if( window.innerWidth <= isTablet){
    if(slide1){
      image1.style.display = "none"
      image2.style.display = "none"
      image3.style.display = "none"
      image1l.style.display = "block"
      image2l.style.display = "none"
      image3l.style.display = "none"
    }
    else if(slide2){
      image1.style.display = "none"
      image2.style.display = "none"
      image3.style.display = "none"
      image1l.style.display = "none"
      image2l.style.display = "block"
      image3l.style.display = "none"
    }
    if(slide3){
      image1.style.display = "none"
      image2.style.display = "none"
      image3.style.display = "none"
      image1l.style.display = "none"
      image2l.style.display = "none"
      image3l.style.display = "block"
    }
  }
  else { // Seta as imagens para desktop
    
    if(slide1){
      image1.style.display = "block"
      image2.style.display = "none"
      image3.style.display = "none"
      image1l.style.display = "none"
      image2l.style.display = "none"
      image3l.style.display = "none"
    }
    else if(slide2){
      image1.style.display = "none"
      image2.style.display = "block"
      image3.style.display = "none"
      image1l.style.display = "none"
      image2l.style.display = "none"
      image3l.style.display = "none"
    }
    if(slide3){
      image1.style.display = "none"
      image2.style.display = "none"
      image3.style.display = "block"
      image1l.style.display = "none"
      image2l.style.display = "none"
      image3l.style.display = "none"
    }
  }
}