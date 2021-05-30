
async function jsonPaises(){
    const resposta = await fetch('/paginas/javascript/database.json');
    const json = await resposta.json();
    return json
}

const header = document.querySelector("header#topo")
const bar = document.querySelector(".container")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const financeiro = document.querySelector("#financeiro")
const link = document.querySelector("#link") 


async function insertHeader(campo, posic){
    const resposta = await jsonPaises();
    const header = resposta.headers[posic];
    const headerContent = `
    <div class="topo"><a href="#topo"><i class="fas fa-arrow-alt-circle-up"></i></a></div>
    <div class="voltar"> <a href="../../index.html"> <i class="fas fa-arrow-alt-circle-left"></i></a></div>
    <div class="title">
        <h1>${header.title}</h1>
        <h2>
            ${header.description}
        </h2>
    </div>
    `
    campo.insertAdjacentHTML("beforeEnd", headerContent);
    return header;
}

async function insertBar(campo, posic){
    const resposta = await jsonPaises();
    const bars = resposta.bars;
    const bar = bars[posic];
    const content = `
    <div class="Rio"><a href="#1">${bar.content1}</a></div>
    <div class="Sal"><a href="#3">${bar.content2}</a></div>
    <div class="Br"><a href="#2">${bar.content3}</a></div>
`;
    campo.insertAdjacentHTML("beforeEnd", content);
}

function setValue(country){
    const price = country.price;
    link.innerHTML += `$${price}`;
    financeiro.setAttribute("value",`${price}`); 
}

async function insertMain(campo, regiao){
    const resposta = await jsonPaises();
    //const main = resposta[`${regiao}`];
    console.log(resposta[`${regiao}`])
    const mains = resposta[`${regiao}`]
    for(let main in mains){
        const content =    `
    <div class="images">
            <img src="${mains[main].src}" alt="${mains[main].alt}" style="width:100%" id="${mains[main].id}">
            <div class="desc">
                <h2>${main}</h2>
                <p>
                    ${mains[main].description}
                </p>
            </div>
        </div>
    `;
    campo.insertAdjacentHTML("beforeEnd", content);
    }
}

function insertFooter(campo){
    const content = `<p>
    <i class="fas fa-horse" style="transform: scaleX(-1);"></i>
        HORSE COPYRIGHT © 2020 - Por Pedro & Paulo
    <i class="fas fa-horse"></i>
</p>
<div class="social">
    <a href="#"><i class="fab fa-facebook-square"></i></a>
    <a href="#"><i class="fab fa-instagram-square"></i></a>
    <a href="#"><i class="fab fa-twitter-square"></i></a>
</div>`
    campo.insertAdjacentHTML("beforeEnd", content);
}


export {header, bar, main, footer, financeiro, link, setValue, insertHeader, insertBar, insertMain, insertFooter};