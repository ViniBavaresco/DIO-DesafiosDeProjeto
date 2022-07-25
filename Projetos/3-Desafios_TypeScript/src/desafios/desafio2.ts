enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let maria: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let roberto: Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};

let laura: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let carlos: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}