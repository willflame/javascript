const buttonElement = document.querySelector(".box button");

const boxElement = document.querySelector(".box");
let id = 0;

buttonElement.onclick = function () {
  const newElement = document.createElement("div");
  newElement.style.width = 100;
  newElement.style.height = 100;
  newElement.style.margin = 1;
  newElement.style.backgroundColor = "#f03";
  newElement.setAttribute("id", `div${id.toString()}`);
  newElement.setAttribute("onmouseover", `changeColor(event)`);

  boxElement.appendChild(newElement);
  id++;
};

function changeColor(e) {
  let newColor = this.getRandomColor();
  e.target.style.backgroundColor = newColor;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
