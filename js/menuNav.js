// Carregando conteudo
let url1 = "url('assets/home/background-home-desktop.jpg')"
let url2 = "url('assets/destination/background-destination-desktop.jpg')"
let url3 = "url('assets/crew/background-crew-desktop.jpg')"
let url4 = "url('assets/technology/background-technology-desktop.jpg')"
let background = document.querySelector('.header')

// Background tablet =====
let urlTablet1 = "url('assets/home/background-home-tablet.jpg')"
let urlTablet2 = "url('assets/destination/background-destination-tablet.jpg')"
let urlTablet3 = "url('assets/crew/background-crew-tablet.jpg')"
let urlTablet4 = "url('assets/technology/background-technology-tablet.jpg')"

// Background tablet =====
let urlMobile1 = "url('assets/home/background-home-mobile.jpg')"
let urlMobile2 = "url('assets/destination/background-destination-mobile.jpg')"
let urlMobile3 = "url('assets/crew/background-crew-mobile.jpg')"
let urlMobile4 = "url('assets/technology/background-technology-mobile.jpg')"

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
let radios = document.getElementsByName("radio-check");

//Variaveis para controlar qual tela esta sendo acessada
let isHome = false
let isDestination = false
let isCrew = false
let isTechnology = false
// Variavel de verificacao do aparelho utilizado
let isMobile = 600
let isTablet = 900

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
        mudarImage1()
        isHome = true
        isDestination = false
        isCrew = false
        isTechnology = false
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
        isHome = false
        isDestination = true
        isCrew = false
        isTechnology = false
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
        isHome = false
        isDestination = false
        isCrew = true
        isTechnology = false
        
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
        isHome = false
        isDestination = false
        isCrew = false
        isTechnology = true
    }
    
  });
}

function fecharMenu(){
    document.querySelector(".item-link").style.marginRight = "-550px"
    document.querySelector(".header").style.overflowY = "auto"
}

function mudarImage1(){
    let wWidth = window.innerWidth

    background.style.backgroundImage = url1
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    isHome = true
    tabActive.classList.remove("active")
    // Inserir background mobile caso seja true
    if(wWidth < isMobile){
        background.style.backgroundImage = urlMobile1
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
    // Inserir background tablet caso seja true
    if(wWidth > isMobile && wWidth < isTablet){
        background.style.backgroundImage = urlTablet1
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
}
function mudarImage2(){
    let wWidth = window.innerWidth
    background.style.backgroundImage = url2
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    isDestination = true

    // Inserir background mobile caso seja true
    if(wWidth < isMobile){
        background.style.backgroundImage = urlMobile2
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
    // Inserir background tablet caso seja true
    if(wWidth > isMobile && wWidth < isTablet){
        background.style.backgroundImage = urlTablet2
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }

}
function mudarImage3(){
    let wWidth = window.innerWidth
    background.style.backgroundImage = url3
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    isCrew = true 
    
    // Inserir background mobile caso seja true
    if(wWidth < isMobile){
        background.style.backgroundImage = urlMobile3
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
    // Inserir background tablet caso seja true
    if(wWidth > isMobile && wWidth < isTablet){
        background.style.backgroundImage = urlTablet3
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
}
function mudarImage4(){
    let wWidth = window.innerWidth
    background.style.backgroundImage = url4
    background.style.backgroundRepeat = "no-repeat"
    background.style.backgroundSize = "cover"
    background.style.backgroundClip = "content-box"
    
    // Inserir background mobile caso seja true
    if(wWidth < isMobile){
        background.style.backgroundImage = urlMobile4
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
    // Inserir background tablet caso seja true
    if(wWidth > isMobile && wWidth < isTablet){
        background.style.backgroundImage = urlTablet4
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
    }
}

window.addEventListener('load',  ()=>{
    tabActive.style.display = "block";
    item1.style.background = "#fff"

    mudarImage1()
    isHome = true
})

window.addEventListener('resize', function() {
    verifyResize()    
});

verifyResize=()=>{
    if(window.innerWidth < isMobile ){
        // Verificando Mobile Backgrounds =========
        if( isHome ){
            background.style.backgroundImage = urlMobile1
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
    
        }
        else if( isDestination ){
            background.style.backgroundImage = urlMobile2
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
           
        }
        else if( isCrew ){
            background.style.backgroundImage = urlMobile3
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
        else if( isTechnology ){
            background.style.backgroundImage = urlMobile4
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
    }
    // Verificando Tablet Backgrounds =========
    if(window.innerWidth > isMobile && window.innerWidth < isTablet){
        // Verificando Mobile Backgrounds =========
        if( isHome ){
            background.style.backgroundImage = urlTablet1
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
    
        }
        else if( isDestination ){
            background.style.backgroundImage = urlTablet2
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
           
        }
        else if( isCrew ){
            background.style.backgroundImage = urlTablet3
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
        else if( isTechnology ){
            background.style.backgroundImage = urlTablet4
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
    }
    // Verificando Desktop Backgrounds =========
    if(window.innerWidth > isTablet){
        // Verificando Mobile Backgrounds =========
        if( isHome ){
            background.style.backgroundImage = url1
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
    
        }
        else if( isDestination ){
            background.style.backgroundImage = url2
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
           
        }
        else if( isCrew ){
            background.style.backgroundImage = url3
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
        else if( isTechnology ){
            background.style.backgroundImage = url4
            background.style.backgroundRepeat = "no-repeat"
            background.style.backgroundSize = "cover"
            
        }
    }
}