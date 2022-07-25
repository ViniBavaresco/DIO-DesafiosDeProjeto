"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "dev",
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "Pintor",
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Dev",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
const jessica = {
    nome: "Jessica",
    idade: 20,
    profissao: Profissao.Atriz,
    materias: ["Atuação", "Teatro", "Interpretação"],
};
const monica = {
    nome: "Monica",
    idade: 27,
    materias: ["Atuação", "Teatro", "Interpretação"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
