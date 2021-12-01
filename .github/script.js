// lastElementChild : último elemento filho
// clientWidth : dimensão em pixels do primeiro elemento
// childElementCount : quantidade de elementos filhos

// Elementos criados
const main = document.querySelector("main")
const sectionPai = document.createElement("section")
const divStart = document.createElement("div")
const divOffset = document.createElement("div")
const divEnd = document.createElement("div")

const divQuatro = document.createElement("div")
const divTres = document.createElement("div")
const divDois = document.createElement("div")
const divUm = document.createElement("div")

// Atribuição de Classes
sectionPai.classList.add("section-pai")
divStart.classList.add("div-start")
divOffset.classList.add("div-offset")
divEnd.classList.add("div-end")

divQuatro.classList.add("div-quatro", "bloco")
divTres.classList.add("div-tres", "bloco")
divDois.classList.add("div-dois", "bloco")
divUm.classList.add("div-um", "bloco")

// Atribuição de filhos
main.appendChild(sectionPai)
sectionPai.appendChild(divStart)
sectionPai.appendChild(divOffset)
sectionPai.appendChild(divEnd)

divStart.appendChild(divQuatro)
divStart.appendChild(divTres)
divStart.appendChild(divDois)
divStart.appendChild(divUm)

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
    console.log(mao, "offstart")

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
    console.log(mao, "offset")
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
    console.log(mao, "offend")

    if(divEnd.childElementCount === 4){

        let divVitoria = document.createElement("div")
        divVitoria.classList.add("div-vitoria")
        sectionPai.appendChild(divVitoria)
        divStart.style.display = "none"
        divOffset.style.display = "none"
        divVitoria.innerText = "Parabéns, você venceu!"

    }
})













































































