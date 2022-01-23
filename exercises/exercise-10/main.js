const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    (age >= 18) ? resolve("Maior que 18") : reject("Menor que 18");
  });
};

function checkOfAge() {
  const age = inputElement.value;

  checkAge(age)
    .then((response) => {
      console.log(response);
      document.getElementById('result').innerHTML = response;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById('result').innerHTML = error;
    });

  inputElement.value = "";
}

function trigger() {
  setTimeout(checkOfAge, 2000);
}

buttonElement.onclick = trigger;
