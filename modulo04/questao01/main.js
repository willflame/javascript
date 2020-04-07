var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var idade = inputElement.value;

function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    
    inputElement.innerHTML = '';

    if (idade >= 18) {
      resolve('Maior que 18');
    } else {
      reject('Menor que 18');
    }
  });
}

checaIdade(20)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

buttonElement.onclick = checaIdade;