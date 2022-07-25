// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines = gets().split("\n");
let line = lines.shift().split(' ');
let soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 0; i < 4; i++) {
    let transfor = parseInt(line[i])
    soma = soma + transfor
}
print(soma - 3)