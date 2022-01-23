const names = ["Diego", "Gabriel", "Lucas"];

const content = document.querySelector("body");
const listElement = document.querySelector("ul");

for (nome of names) {
  const linha = document.createElement("li");
  const text = document.createTextNode(nome);

  linha.appendChild(text);

  listElement.appendChild(linha);
}

// Criar input
const input = document.createElement("input");
input.setAttribute("type", "text");

//Criar botão
const button = document.createElement("button");
const textButton = document.createTextNode("Adicionar");
button.appendChild(textButton);

content.appendChild(input);
content.appendChild(button);

// Adicionado evento ao botão
button.onclick = function add() {
  const newValue = document.querySelector("input").value;
  if (newValue !== "") {
    const line = document.createElement("li");
    const text = document.createTextNode(newValue);

    line.appendChild(text);

    listElement.appendChild(line);

    input.value = '';
  } else {
    alert("Favor inserir um texto valido.");
  }
}


