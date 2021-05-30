import storage from './localStorage.js'
import validarCampos from './validacao.js'

let flag = false
const formCadastro = document.querySelector("#cadastro");
const taxas = [0, 10, 20, 30];
const paisComprado = storage.readAll('countries-app:countries');
const precosFinais = taxas.map((Pt) => (1+(Pt/100))*paisComprado.price)


var lblopcoes = document.querySelectorAll(".lblop")
var opcoes = document.querySelectorAll(".op");

for (let i in taxas) {
  lblopcoes[i].insertAdjacentHTML("beforeEnd", ` - ${taxas[i]}%`)
}

function opcaoSelecionada(opts) {
  for (let i in opts){
    if (opts[i].checked === true){
      return [opts[i], i]
    }
  }
}
formCadastro.onsubmit = (e) => {
  if(flag == true) {
    alert("Você já realizou a compra.")
    return false
  }
  e.preventDefault();

  const compra = new FormData(formCadastro);
 
  if(!validarCampos(compra)){
    let texto = `ERRO! Insira todos os campos no formato correto.`
    alert(texto);
    return false
  }

  const nome = document.querySelector("input#titular").value;
  const parcelas = document.querySelector('select#parc').value;
  const opcaoViagem = opcaoSelecionada(opcoes);
  const qtdDias = opcaoViagem[0].value;
  const valorFinal = precosFinais[opcaoViagem[1]]
  
  //opcaoSelecionada(opcoes).value;
  const telefone = document.querySelector("input#celular").value;

  const registro = {
    Nome: nome,
    Parcelas: parcelas,
    QtdDias: qtdDias,
    ValorFinal: valorFinal.toFixed(2),
    Telefone: telefone
  };

  criarResumo(registro);
  flag = true;
};

function criarResumo(registro) {
  const resumo = document.querySelector("#registro");
  const texto = `
  <div id="resumo" class="resumo">
    <div>Card Owner:</div> <div>${registro.Nome};</div> 
    <div>Country:</div> <div>${paisComprado.name};</div> 
    <div>Days:</div> <div>${registro.QtdDias};</div> 
    <div>Final value:</div> <div>$${registro.ValorFinal};</div> 
    <div>Phone Number:</div> <div>${registro.Telefone};</div> 
  </div>
  `;
  resumo.insertAdjacentHTML('beforeend', texto);
  return resumo
}
