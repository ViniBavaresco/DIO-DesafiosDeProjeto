"use strict";
let anyDeNovo;
anyDeNovo = 3;
anyDeNovo = "teste";
anyDeNovo = 5;
let stringTest = "verificar";
stringTest = anyDeNovo;
let unknowValor;
unknowValor = 3;
unknowValor = "opaa";
unknowValor = true;
unknowValor = "vai sim";
let stringTest2 = "agora vai";
if (typeof unknowValor === "string") {
    stringTest2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu ruim", 500);
