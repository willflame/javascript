var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var checaIdade = (idade) => {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      inputElement.value = "";

      resolve("Maior que 18");
    } else {
      inputElement.value = "";

      reject("Menor que 18");
    }
  });
};

function verifica() {
  var idade = inputElement.value;

  checaIdade(idade)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function acinamento() {
  setTimeout(verifica, 2000);
}

buttonElement.onclick = acinamento;
