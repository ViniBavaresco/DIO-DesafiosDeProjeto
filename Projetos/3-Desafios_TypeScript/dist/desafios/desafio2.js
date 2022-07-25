"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let maria = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
let laura = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
let carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
