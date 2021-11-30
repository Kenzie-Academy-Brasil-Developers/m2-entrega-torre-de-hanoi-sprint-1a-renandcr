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


// let primeiraDivTamanho = divStart.lastElementChild.clientWidth
// let segundaDivTamanho = divOffset.lastElementChild.clientWidth
// let terceiraDivTamanho = divEnd.lastElementChild.clientWidth

let primeiraDivQuantidade = divStart.childElementCount
let segundaDivQuantidade = divOffset.childElementCount
let terceiraDivQuantidade = divEnd.childElementCount

let primeiraDiv = divStart.lastElementChild

let primeiroDisco = false
let segurando = false

divStart.addEventListener("click", function(event){
    primeiroDisco = event.currentTarget.lastElementChild
    console.log(primeiroDisco)
    divOffset.appendChild(primeiroDisco)
    // segundaTorre = event.currentTarget
    // console.log(segundaTorre)

    // segundoClick = event.currentTarget.lastElementChild
    // 
    if(primeiroDisco !== false){
        segurando = true
    }
    

    // console.log(primeiroDisco)
    // console.log(segundoClick)
})


// Verificar o estado da variável segurando, qual o valor?
// Se segundo for falso, verificar se a torre tem algum disco
// Se segundo for true, comparar disco atual com o último disco da torre clicada



divOffset.addEventListener("click", function(event){
    event.currentTarget
    divOffset.appendChild(divStart.lastElementChild)
    
})

divEnd.addEventListener("click", function(event){
    event.currentTarget
    
})


// let primeiroClick = true
// let segundoClick = true












