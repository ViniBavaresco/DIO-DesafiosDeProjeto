"use strict";
let buttonValidacao = document.getElementById("button");
let input1Validacao = document.getElementById("input1");
let input2Validacao = document.getElementById("input2");
function somarNumeros(numeroA, numeroB) {
    if (typeof numeroA === "number" && typeof numeroB === "number") {
        return numeroA + numeroB;
    }
    else {
        return Number(numeroA) + Number(numeroB);
    }
}
if (button) {
    button.addEventListener("click", () => {
        console.log(somarNumeros(Number(input1Validacao.value), Number(input2Validacao.value)));
    });
}
