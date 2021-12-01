





















































































































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



const divStart = document.querySelector("#div-start")
const divOffset = document.querySelector("#div-offset")
const divEnd = document.querySelector("#div-end")

divStart.addEventListener("click", interceptandoClick)
divOffset.addEventListener("click", interceptandoClick)
divEnd.addEventListener("click", interceptandoClick)

function interceptandoClick(event){
    event.currentTarget
    // console.log(event.currentTarget.lastElementChild)
}


function add(disco, torre){
    torre.appendChild(disco)
}



// divStart.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })

// divOffset.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })

// divEnd.forEach(function(interceptaTorre){
//     interceptaTorre.addEventListener("click", clickNaTorre)
// })