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

//quantidade dos filhos
let primeiraDivQuantidade = divStart.childElementCount
let segundaDivQuantidade = divOffset.childElementCount
let terceiraDivQuantidade = divEnd.childElementCount

let primeiraDiv = divStart.lastElementChild

let mao = undefined

divStart.addEventListener("click", function(event){ 
    console.log(event.currentTarget)

    const filho = event.currentTarget.lastElementChild
    console.log(filho)
    const tamanho = primeiraDiv.clientWidth

    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else {
        event.currentTarget.appendChild(mao)
        mao = undefined
    }
})

divOffset.addEventListener("click", function(event){ 
    console.log(event.currentTarget)

    const filho = event.currentTarget.lastElementChild
    console.log(filho)
    const tamanho = primeiraDiv.clientWidth

    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else {
        event.currentTarget.appendChild(mao)
        mao = undefined
    }
})

divEnd.addEventListener("click", function(event){ 
    console.log(event.currentTarget)

    const filho = event.currentTarget.lastElementChild
    console.log(filho)
    const tamanho = primeiraDiv.clientWidth

    if(mao === undefined) {
        mao = event.currentTarget.lastElementChild
    }
    else {
        event.currentTarget.appendChild(mao)
        mao = undefined
    }
})












