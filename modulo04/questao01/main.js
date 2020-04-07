var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var checaIdade = function() {
  return new Promise(function(resolve, reject) {
    var idade = inputElement.value;

    console.log('aki'+ idade);
    if (idade >= 18) {
      inputElement.value = '';

      //console.log('certo');
      resolve('Maior que 18');
    } else {
      inputElement.value = '';

      //console.log('errado');
      reject('Menor que 18');
    }
  });
}

function verifica(){
  checaIdade()
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.warn(error);
    });
}

buttonElement.onclick = verifica;