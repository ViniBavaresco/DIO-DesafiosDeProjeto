function validarArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros!');

        if (typeof array !== 'object')
            throw new TypeError('Envie um elemento do tipo Array!');

        if (typeof num !== 'number')
            throw new TypeError('Envie um elemento do tipo Number!');

        if (array.length !== num) throw new RangeError('Tamanho do array inválido!');

        return array;
    } catch (e) {
        if (e instanceof RangeError) {
            console.log('RangeError!');
            console.log(e.stack);
        } else if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(e.stack);
        }
    }
}

//console.log(validarArray([10, 20, 30], 3)); 
//[ 1, 2, 3 ]

//console.log(validarArray([10, 20, 30], 1)); 
//RangeError! RangeError: Tamanho do array inválido!

//console.log(validarArray(3)); 
//Outro tipo de erro! TypeError: Envie um elemento do tipo Array!

//console.log(validarArray([10, 20, 30])); 
//Outro tipo de erro! TypeError: Envie um elemento do tipo Number!

//console.log(validarArray()); 
//ReferenceError! ReferenceError: Envie os parâmetros!

