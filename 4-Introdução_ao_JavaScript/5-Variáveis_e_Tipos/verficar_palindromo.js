//Resolução 1 

function verificarPalindromo(string) {
    if (!string) return ("string inexistente");

    return string.split("").reverse().join("") === string
}

console.log(verificarPalindromo("ampa"))


//Resolução 2

/*
omo
012
aabbcc
012345
*/

function varificarPalindromo2(string) {
    if (!string) return;
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }
    return console.log(true);
}

varificarPalindromo2("ama");