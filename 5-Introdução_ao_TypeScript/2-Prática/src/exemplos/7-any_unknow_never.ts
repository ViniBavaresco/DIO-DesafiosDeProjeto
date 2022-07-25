let anyDeNovo: any;
anyDeNovo = 3;
anyDeNovo = "teste";
anyDeNovo = 5;

let stringTest: string = "verificar";
stringTest = anyDeNovo;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = "opaa";
unknowValor = true;
unknowValor = "vai sim";

let stringTest2: string = "agora vai";

if (typeof unknowValor === "string") {
  stringTest2 = unknowValor;
}

function jogaErro(erro: string, codigo: number): never {
  throw { error: erro, code: codigo };
}

jogaErro("deu ruim", 500);
