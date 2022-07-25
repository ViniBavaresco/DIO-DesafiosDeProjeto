const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "dev",
};

pessoa.idade = 25;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "Andre",
  idade: 25,
  profissao: "Pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
  nome: "Paula",
  idade: 25,
  profissao: "Dev",
};

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Estudante extends Pessoa {
  materias: string[];
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  nome: "Jessica",
  idade: 20,
  profissao: Profissao.Atriz,
  materias: ["Atuação", "Teatro", "Interpretação"],
};

const monica: Estudante = {
  nome: "Monica",
  idade: 27,
  materias: ["Atuação", "Teatro", "Interpretação"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(monica.materias)
