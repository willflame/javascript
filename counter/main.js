var currentNumberElement = document.getElementById("currentNumber");
var buttonDecrementElement = document.getElementById("subtrair");
var buttonClearElement = document
  .getElementById("clear")
  .addEventListener("click", () => {
      currentNumber = 0;
      updateCurrentNumberElement();
      alterColorText();
      disableDecrementButton();
  });

var currentNumber = 0;

function increment() {
  console.log("increment");
  currentNumber++;

  updateCurrentNumberElement();
  alterColorText();
  disableDecrementButton();
}

function decrement() {
  console.log("decrement");
  currentNumber--;

  updateCurrentNumberElement();
  alterColorText();
  disableDecrementButton();
}

function updateCurrentNumberElement() {
    currentNumberElement.innerHTML = currentNumber;
}

/**
 * Alterar cor do contador quando valor for positivo ou negativo
 */
function alterColorText() {
  if (currentNumber >= 0) {
    currentNumberElement.style.color = "green";
  } else {
    currentNumberElement.style.color = "red";
  }
}

/**
 * Desabilita o botão de decrementar quando valor for igual a -10
 */
function disableDecrementButton() {
  if (currentNumber > -10) {
    buttonDecrementElement.removeAttribute("disabled");
  } else {
    buttonDecrementElement.setAttribute("disabled", "disabled");
  }
}
