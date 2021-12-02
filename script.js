// Elementos criados
const main = document.querySelector("main")
const divBotao = document.createElement("div")
const imgBotao = document.createElement("img")
imgBotao.src = "assets/img/botaoReinNew2.png"

const sectionPai = document.createElement("section")
const divStart = document.createElement("div")
const divOffset = document.createElement("div")
const divEnd = document.createElement("div")

const divQuatro = document.createElement("div")
const divTres = document.createElement("div")
const divDois = document.createElement("div")
const divUm = document.createElement("div")

// Atribuição de Classes
divBotao.classList.add("div-botao")
imgBotao.classList.add("img-botao")
sectionPai.classList.add("section-pai")
divStart.classList.add("div-start")
divOffset.classList.add("div-offset")
divEnd.classList.add("div-end")

divQuatro.classList.add("div-quatro", "bloco")
divTres.classList.add("div-tres", "bloco")
divDois.classList.add("div-dois", "bloco")
divUm.classList.add("div-um", "bloco")

// Atribuição de filhos
divBotao.appendChild(imgBotao)
main.appendChild(divBotao)
main.appendChild(sectionPai)
sectionPai.appendChild(divStart)
sectionPai.appendChild(divOffset)
sectionPai.appendChild(divEnd)

divStart.appendChild(divQuatro)
divStart.appendChild(divTres)
divStart.appendChild(divDois)
divStart.appendChild(divUm)


// Divs ocultas
let divVitoria = document.createElement("div")
divVitoria.classList.add("div-vitoria")
main.appendChild(divVitoria)
divVitoria.innerText = "Parabéns, você venceu!"
divVitoria.style.display = "none"

const divAlert = document.createElement("div")
divAlert.classList.add("div-alert")
main.appendChild(divAlert)

const imgDedo = document.createElement("img")
imgDedo.classList.add("img-dedo")
imgDedo.src = "assets/img/dedo-apontado.png"
divAlert.appendChild(imgDedo)

const paragrafo = document.createElement("p")
paragrafo.innerText = "Jogue denovo!"
divAlert.appendChild(paragrafo)
divAlert.style.display = "none"

// Divs ocultas


let mao = undefined

divStart.addEventListener("click", function(event){ 
    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else if(mao !== undefined && divStart.lastElementChild === null) {
        divStart.appendChild(mao)
        mao = undefined
    }
    else if(mao.clientWidth < divStart.lastElementChild.clientWidth){
        divStart.appendChild(mao)
        mao = undefined
    } else{
        mao = undefined
    }

})

        
divOffset.addEventListener("click", function(event){ 
    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else if(mao !== undefined && divOffset.lastElementChild === null) {
        divOffset.appendChild(mao)
        mao = undefined
    }
    else if(mao.clientWidth < divOffset.lastElementChild.clientWidth){
        divOffset.appendChild(mao)
        mao = undefined
    }else{
        mao = undefined
    }
})


divEnd.addEventListener("click", function(event){ 
    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else if(mao !== undefined && divEnd.lastElementChild === null) {
        divEnd.appendChild(mao)
        mao = undefined
    }
    else if(mao.clientWidth < divEnd.lastElementChild.clientWidth){
        divEnd.appendChild(mao)
        mao = undefined
    } else{
        mao = undefined
    }
    if(divEnd.childElementCount === 4){
        divVitoria.style.display = ""
        divAlert.style.display = ""
    }
    
})

function reiniciar(){
    divStart.appendChild(divQuatro)
    divStart.appendChild(divTres)
    divStart.appendChild(divDois)
    divStart.appendChild(divUm)
    divOffset.style.display = ""   
    divEnd.style.display = ""
    divVitoria.style.display = "none"
    divAlert.style.display = "none"
}

let bottonReiniciar = document.querySelector(".img-botao")
bottonReiniciar.addEventListener("click", reiniciar)
        

















































































