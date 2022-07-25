let buttonValidacao = document.getElementById("button");
let input1Validacao = document.getElementById("input1") as HTMLInputElement;
let input2Validacao = document.getElementById("input2") as HTMLInputElement;

function somarNumeros(numeroA: number, numeroB: number) {
  if (typeof numeroA === "number" && typeof numeroB === "number") {
    return numeroA + numeroB;
  } else {
    return Number(numeroA) + Number(numeroB);
  }
}

if (button) {
  button.addEventListener("click", () => {
    console.log(
      somarNumeros(Number(input1Validacao.value), Number(input2Validacao.value))
    );
  });
}
