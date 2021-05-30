const form = document.querySelector("#form")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

async function carregarPaises(){
    const resposta = await fetch('/javascript/database.json');
    const paises = await resposta.json();
    for(let pais of paises){
        main.insertAdjacentHTML("beforeend", createPais(pais))
    }
    footer.insertAdjacentHTML("afterBegin",createFooter())
}

form.onsubmit = (e) => {
    e.preventDefault();
    document.querySelector("#e-mail").value = ''
    document.querySelector("#password").value = ''
    
}

function createPais(pais){
    return `<div class="content">
    <h2 class="title titulo-pais">${pais.name}</h2>
    <div class="fotos">
        <img src="${pais.src[0]}" alt="Rio de Janeiro" width="460px" height="245px">
        <img src="${pais.src[1]}" alt="Rio de Janeiro" width="460px" height="245px">
        <img src="${pais.src[2]}" alt="Rio de Janeiro" width="460px" height="245px">
    </div>
    <div class="descricao">
    ${pais.description}
    </div>
    <div class="next-page" id="${pais.id}">
        <a href="${pais.next}">MORE <i class="fas fa-plane"></i></a>
    </div>
</div>`
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

carregarPaises();