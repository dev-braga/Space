// Carregando conteudo
let url1 = "url('assets/home/background-home-desktop.jpg')"
let url2 = "url('assets/destination/background-destination-desktop.jpg')"
let url3 = "url('assets/crew/background-crew-desktop.jpg')"
let url4 = "url('assets/technology/background-technology-desktop.jpg')"
let background = document.querySelector('.header')

let item1 = document.querySelector(".container-border1")
let item2 = document.querySelector(".container-border2")
let item3 = document.querySelector(".container-border3")
let item4 = document.querySelector(".container-border4")
/* ============= ** ===============** =============== */
let tabActive = document.querySelector("#home")
let tab2Active = document.querySelector("#destination")
let tab3Active = document.querySelector("#crew")
let tab4Active = document.querySelector("#technology")

// obtém todos os elementos radio button do grupo "meuGrupo"
var radios = document.getElementsByName("radio-check");

// adiciona um evento de clique a cada um desses elementos
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function() {
    // desmarca todos os outros radio buttons do grupo, exceto o que foi clicado
    for (var j = 0; j < radios.length; j++) {
      if (radios[j] != this) {
        radios[j].checked = false;
      }
    }
    if(radios[0].checked){
        item1.style.background = "#fff"
        item2.style.background = ""
        item3.style.background = ""
        item4.style.background = ""
     
        tabActive.style.display = "block";
        tab2Active.style.display = "none";
        tab3Active.style.display = "none";
        tab4Active.style.display = "none";
        fecharMenu()
    }
    else if(radios[1].checked){
        item2.style.background = "#fff"
        item1.style.background = ""
        item3.style.background = ""
        item4.style.background = ""
      
        tabActive.style.display = "none";
        tab2Active.style.display = "block";
        tab3Active.style.display = "none";
        tab4Active.style.display = "none";
        fecharMenu()
    }
    else if(radios[2].checked){
        item3.style.background = "#fff"
        item2.style.background = ""
        item1.style.background = ""
        item4.style.background = ""
    

        tabActive.style.display = "none";
        tab2Active.style.display = "none";
        tab3Active.style.display = "block";
        tab4Active.style.display = "none";
        fecharMenu()
        
    }
    else if(radios[3].checked){
        item4.style.background = "#fff"
        item2.style.background = ""
        item3.style.background = ""
        item1.style.background = ""
       
        tabActive.style.display = "none";
        tab2Active.style.display = "none";
        tab3Active.style.display = "none";
        tab4Active.style.display = "block";
        fecharMenu()
    }
    
  });
}

function fecharMenu(){
    document.querySelector(".item-link").style.marginRight = "-550px"
    document.querySelector(".header").style.overflowY = "auto"
}

function mudarImage1(){
    background.style.backgroundImage = url1
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    
    //item1.style.background = "#fff"
    // Remover a aba dos outros links
    //item2.classList.remove("border-bottom-custom")
   // item3.classList.remove("border-bottom-custom")
    //item4.classList.remove("border-bottom-custom")

    // Remover classe padrao
    tabActive.classList.remove("active")
}
function mudarImage2(){
    background.style.backgroundImage = url2
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"

    //item2.classList.add("border-bottom-custom")

    // Remover a aba dos outros links
    //item1.classList.remove("border-bottom-custom")
    //item3.classList.remove("border-bottom-custom")
    //item4.classList.remove("border-bottom-custom")
    // Remover classe padrao
    //tabActive.classList.remove("active")
}
function mudarImage3(){
    background.style.backgroundImage = url3
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"

    //tem3.classList.add("border-bottom-custom")

    // Remover a aba dos outros links
   // item1.classList.remove("border-bottom-custom")
    //item2.classList.remove("border-bottom-custom")
    //item4.classList.remove("border-bottom-custom")
    // Remover classe padrao
   // tabActive.classList.remove("active")
}
function mudarImage4(){
    background.style.backgroundImage = url4
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    background.style.backgroundClip = "content-box"

    //item4.classList.add("border-bottom-custom")

    // Remover a aba dos outros links
    //item1.classList.remove("border-bottom-custom")
    //item2.classList.remove("border-bottom-custom")
    //item3.classList.remove("border-bottom-custom")
    // Remover classe padrao

}

window.addEventListener('load',  ()=>{
    tabActive.style.display = "block";
    item1.style.background = "#fff"
    mudarImage1()
})
