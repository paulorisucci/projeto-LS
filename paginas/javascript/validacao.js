function validarCampos(compra){

    const numCard = compra.get("numero_cartao");
    const validade = compra.get("validade");
    const codSeg = compra.get("cod-seg");
    const SSN = compra.get("SSN");
    const dtNasc = compra.get("data-nasc");
    const numCel = compra.get("num-cel")

    const teste = (validarCartao(numCard) || validarDtExp(validade) || validarCodSeg(codSeg)
    || validarSSN(SSN) || validarDtNasc(dtNasc) || validarNumCel(numCel));
    
    return teste;
}

function validarCartao(numCard){
    const pattern = /^(\d{16})|(\d{4} \d{4} \d{4} \d{4})$/
    return pattern.test(numCard)
}
function validarDtExp(validade){
    const pattern = /^\d{2}\/\d{2}$/
    return pattern.test(validade);
}
function validarCodSeg(codSeg){
    const pattern = /^\d{3}$/;
    return pattern.test(codSeg);
}
function validarSSN(SSN){
    const pattern = /^(\d{9})$/
    return pattern.test(SSN);
}
function validarDtNasc(dtNasc){
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/
    return pattern.test(dtNasc);
}
function validarNumCel(numCel) {
    const pattern = /^(\d{14})|(\(\d{3}\)\d{9})$/;
    /// const pattern = /^(\(\d{3}\)\d{9})|(+\d{2}-\(\d{3}\)\d{9})|(\d{14})$/

    return pattern.test(numCel);
}

export default validarCampos