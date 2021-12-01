// lastElementChild : último elemento filho
// clientWidth : dimensão em pixels do primeiro elemento
// childElementCount : quantidade de elementos filhos

const sectionPai = document.getElementById("section-pai")
const divStart = document.getElementById("div-start")
const divOffset = document.getElementById("div-offset")
const divEnd = document.getElementById("div-end")

const divUm = document.getElementById("div-um")
const divDois = document.getElementById("div-dois")
const divTres = document.getElementById("div-tres")
const divQuatro = document.getElementById("div-quatro")




//quantidade dos filhos
let primeiraDivQuantidade = divStart.childElementCount
let segundaDivQuantidade = divOffset.childElementCount
let terceiraDivQuantidade = divEnd.childElementCount


let primeiraDiv = divStart.lastElementChild

let mao = undefined


divStart.addEventListener("click", function(event){ 
    const filho = event.currentTarget.lastElementChild
    const tamanho = primeiraDiv.clientWidth

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
    } 
})
        

divOffset.addEventListener("click", function(event){ 
    const filho = event.currentTarget.lastElementChild
    const tamanho = primeiraDiv.clientWidth

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
    }
})



divEnd.addEventListener("click", function(event){ 
    const filho = event.currentTarget.lastElementChild
    const tamanho = primeiraDiv.clientWidth

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
    }
    if(divEnd.childElementCount === 4){
        // divEnd.appendChild(mao)

        let divVitoria = document.createElement("div")
        divVitoria.classList.add("div-vitoria")
        sectionPai.appendChild(divVitoria)
        divVitoria.innerText = "Parabéns, você venceu!"
    }
})
















// event.currentTarget.appendChild(mao)





















































































// lastElementChild : último elemento filho
// clientWidth : dimensão em pixels do primeiro elemento
// childElementCount : quantidade de elementos filhos

// const sectionPai = document.getElementById("section-pai")
// const divStart = document.getElementById("div-start")
// const divOffset = document.getElementById("div-offset")
// const divEnd = document.getElementById("div-end")

// const divUm = document.getElementById("div-um")
// const divDois = document.getElementById("div-dois")
// const divTres = document.getElementById("div-tres")
// const divQuatro = document.getElementById("div-quatro")



// const divStart = document.querySelector("#div-start")
// const divOffset = document.querySelector("#div-offset")
// const divEnd = document.querySelector("#div-end")

// divStart.addEventListener("click", interceptandoClick)
// divOffset.addEventListener("click", interceptandoClick)
// divEnd.addEventListener("click", interceptandoClick)

// function interceptandoClick(event){
//     event.currentTarget
//     // console.log(event.currentTarget.lastElementChild)
// }


// function add(disco, torre){
//     torre.appendChild(disco)
// }



// divStart.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })

// divOffset.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })

// divEnd.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })