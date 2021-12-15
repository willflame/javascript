function insertvalue() {
    // Solicita o valor para o usuário
    const value = window.prompt();

    // Chama a função que ira verificar se é um palindromo
    const confirm = this.verifyPalindromo(value);

    // Se o usuário não informar nada exibe alerta de erro
    if (confirm === undefined) return alert('Valor inválido');

    // Exibe a resposta confrome o resultado
    confirm ? alert('É um Palindromo') : alert('Não é um palindromo');
}

function verifyPalindromo(value) {
    // Retira todos os possiveis espaçõs da palavra e transforma em minusculo
    const beforeValue = value.trim().toLowerCase().split(' ').join('');

    // Verifica se o usuário informou algum valor
    if(!beforeValue) return alert('Campo vazio');
    
    // separa a palavar em letrars, reverte sua ordem, e junta novamente
    const afterValue = beforeValue.split('').reverse().join('');
    
    console.log(beforeValue);
    console.log(afterValue);
    // Retornar se a palavra informada é igual a sua forma reversa
    return afterValue === beforeValue;
}

insertvalue();