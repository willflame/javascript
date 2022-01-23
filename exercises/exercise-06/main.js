const buttonElement = document.querySelector(".box button");

console.log(buttonElement);

const boxElement = document.querySelector(".box");

buttonElement.onclick = function () {
  const newElement = document.createElement("div");
  newElement.style.width = 100;
  newElement.style.height = 100;
  newElement.style.margin = 1;
  newElement.style.backgroundColor = "#f03";

  boxElement.appendChild(newElement);
};
