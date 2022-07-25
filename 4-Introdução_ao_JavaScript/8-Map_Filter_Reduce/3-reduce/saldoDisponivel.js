function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return "Envie todos os parâmetros";

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}

lista = [{
        preco: 5,
        nome: "maçã",
    },
    {
        preco: 60,
        nome: "roupa",
    },
    {
        preco: 29,
        nome: "carne",
    },
];

saldo = 150;

console.log(calculaSaldo(saldo, lista));