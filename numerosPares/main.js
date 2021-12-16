function verifyNumbers(array) {
    // Verifica se o array está vazio
    if(!array || !array.length) {
        console.log('O array esta vázio');
        return -1
    };

    // Percorrer todo array
    const newArray = array.map(number => {
        // Verifica se o valor é igual a zero
        if (number === 0) {
            console.log('Valor já é zero');
            return number;
        };
        // Verifica se o resto da divisão por 2 é zero que significa que o numero é par
        if ((number % 2) === 0) {
            console.log(`Valor ${number} foi substituido por 0`);
            return 0;
        };

        console.log(`Valor ${number} não foi alterado`);
        return number;
    });

    return newArray;
}

// Array de modelo [1, 3, 4, 6, 0, 80, 33, 23, 90]
const array = [1, 3, 4, 6, 0, 80, 33, 23, 90];
console.log(verifyNumbers(array));
console.log(verifyNumbers([]));