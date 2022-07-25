const numeros = [1, 2, 79, 4, 7, 9, 6, 8, 256, ];

const ehPar = numeros.filter((numeros) => numeros % 2 === 0)
const ehImpar = numeros.filter((numeros) => numeros % 2 !== 0)

console.log(`Os números ${ehPar} do array são pares`)
console.log(`Os números ${ehImpar} do array são ímpares`)