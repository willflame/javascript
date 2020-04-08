var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var checaIdade = function(idade) {
  return new Promise(function(resolve, reject) {

    if (idade >= 18) {
      inputElement.value = '';

      resolve('Maior que 18');
    } else {
      inputElement.value = '';

      reject('Menor que 18');
    }
  });
}

function verifica(){
  var idade = inputElement.value;

  checaIdade(idade)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.warn(error);
    });
}

function acinamento(){
  setTimeout(verifica, 2000);
}

buttonElement.onclick = acinamento;