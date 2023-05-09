let checkbox = document.getElementsByName("check-destination")
let tituloPage = document.querySelector("#title-planet")
// Recuperando imagens para mudar
let imgMoon = document.getElementById("img-moon")
let imgMars = document.getElementById("img-mars")
let imgEurope = document.getElementById("img-europa")
let imgTitans = document.getElementById("img-titans")
// Recuperando valores da div para adicionar visualização para aba
let aba1 = document.querySelector(".container-border-planets1")
let aba2 = document.querySelector(".container-border-planets2")
let aba3 = document.querySelector(".container-border-planets3")
let aba4 = document.querySelector(".container-border-planets4")
// Recuperando valores da descrição
let desc = document.querySelector("#descricao-planet")
// Recuperando valores da info
let infoDistance = document.querySelector("#info-distance")
let infoMes = document.querySelector("#info-meses")

for(let i = 0; i<checkbox.length; i++){
    checkbox[i].addEventListener('click', function(){
        for(let j=0; j<checkbox.length; j++){
            if(checkbox[j] != this){
                checkbox[j].checked = false;
            }
        }
        
        if(checkbox[0].checked){
            // Inserindo titulo
            tituloPage.innerHTML = "MOON"
            // Inserindo imagens
            imgMoon.style.display = "block"
            imgMars.style.display = "none"
            imgEurope.style.display = "none"
            imgTitans.style.display = "none"
            // Inserindo abas visualmente
            aba1.style.background = "#fff"
            aba2.style.background = ""
            aba3.style.background = ""
            aba4.style.background = ""
            // Inserindo descrição
            desc.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help" 
            +"regain perspective and come back refreshed. While you’re there, take in some history"+
            " by visiting the Luna 2 and Apollo 11 landing sites."
            // Inserindo informacao 
            infoDistance.innerHTML = "384,400 km"
            infoMes.innerHTML = "3 days"

        }
        if(checkbox[1].checked){

            tituloPage.innerHTML = "MARS"
            // Inserindo imagens
            imgMars.style.display = "block"
            imgMoon.style.display = "none"
            imgEurope.style.display = "none"
            imgTitans.style.display = "none"
             // Inserindo abas visualmente
            aba2.style.background = "#fff"
            aba1.style.background = ""
            aba3.style.background = ""
            aba4.style.background = ""
             // Inserindo descrição
            desc.innerHTML = " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            // Inserindo informacao 
            infoDistance.innerHTML = "225 mil. km"
            infoMes.innerHTML = "9 years"
        }
        if(checkbox[2].checked){
            tituloPage.innerHTML = "EUROPA"
            imgEurope.style.display = "block"
            imgMars.style.display = "none"
            imgTitans.style.display = "none"
            imgMoon.style.display = "none"
             // Inserindo abas visualmente
             aba3.style.background = "#fff"
             aba2.style.background = ""
             aba1.style.background = ""
             aba4.style.background = ""
            // Inserindo descrição
            desc.innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a"
            +"winter lover’s dream. With an icy surface, it’s perfect for a bit of" 
            +"ice skating, curling, hockey, or simple relaxation in your snug" 
            +"wintery cabin."
            // Inserindo informacao 
            infoDistance.innerHTML = "628 mil. km"
            infoMes.innerHTML = "3 years"

        }
        if(checkbox[3].checked){
            tituloPage.innerHTML = "TITANS"
            imgTitans.style.display = "block"
            imgMars.style.display = "none"
            imgEurope.style.display = "none"
            imgMoon.style.display = "none"
             // Inserindo abas visualmente
            aba4.style.background = "#fff"
            aba2.style.background = ""
            aba3.style.background = ""
            aba1.style.background = ""
             // Inserindo descrição
            desc.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan" 
            +"is a home away from home (just a few hundred degrees colder!). As a"
            +"bonus, you get striking views of the Rings of Saturn."
            // Inserindo informacao 
            infoDistance.innerHTML = "1.6 bil. km"
            infoMes.innerHTML = "7 years"
        }
    })
}

window.addEventListener('load', () => {
    aba2.style.background = "#fff"
})
