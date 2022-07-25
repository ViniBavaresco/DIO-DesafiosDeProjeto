//Generic Types

function adicionaNaLista<NaoSei>(array: any[], valor: NaoSei) {
  return array.map((item) => item + valor);
}

adicionaNaLista([1, 2, 3], 1);
