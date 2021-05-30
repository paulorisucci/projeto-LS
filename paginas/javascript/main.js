
async function json(){
    const resposta = await fetch('/paginas/javascript/database.json');
    const json = await resposta.json();
    return json
}

json()
    .then((json) => j = json)
    .catch(console.log('Deu erro'));

console.log(j)
const brasil = j.headers[0]
const italia = j.headers[1]
const japao = j.headers[2]

const bars = j.bars
const headers = j.headers
const mainBrasil = j.mainBrasil
const mainItalia = j.mainItalia
const mainJapao = j.mainJapao

const header = document.querySelector("header#topo")
const bar = document.querySelector(".container")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const financeiro = document.querySelector("#financeiro")
const link = document.querySelector("#link") 


function createHeader(header){
    return `
    <div class="topo"><a href="#topo"><i class="fas fa-arrow-alt-circle-up"></i></a></div>
    <div class="voltar"> <a href="../../index.html"> <i class="fas fa-arrow-alt-circle-left"></i></a></div>
    <div class="title">
        <h1>${header.title}</h1>
        <h2>
            ${header.description}
        </h2>
    </div>
    `
}
function createBar(bars){
    return `
            <div class="Rio"><a href="#1">${bars.content1}</a></div>

            <div class="Sal"><a href="#3">${bars.content2}</a></div>
            
            <div class="Br"><a href="#2">${bars.content3}</a></div>
        `
}

function setValue(country){
    link.innerHTML += `$${country.price}`
    financeiro.setAttribute("value",`${country.price}`) 
}

function createMain(main, i){
    return `
    <div class="images">
            <img src="${main.src}" alt="${main.alt}" style="width:100%" id="${main.id}">
            <div class="desc">
                <h2>${i}</h2>
                <p>
                    ${main.description}
                </p>
            </div>
        </div>
    `
}

function createFooter(){
    return `<p>
    <i class="fas fa-horse" style="transform: scaleX(-1);"></i>
        HORSE COPYRIGHT © 2020 - Por Pedro & Paulo
    <i class="fas fa-horse"></i>
</p>
<div class="social">
    <a href="#"><i class="fab fa-facebook-square"></i></a>
    <a href="#"><i class="fab fa-instagram-square"></i></a>
    <a href="#"><i class="fab fa-twitter-square"></i></a>
</div>`
}


export {createHeader, createBar, createMain, createFooter, headers, header, bar, bars, main, footer, brasil, italia, japao, setValue, financeiro, link, mainBrasil, mainItalia, mainJapao};