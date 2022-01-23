const names = ["Diego", "Gabriel", "Lucas"];

const listElement = document.querySelector("ul");

for (name of names) {
  const line = document.createElement("li");
  const text = document.createTextNode(name);

  line.appendChild(text);

  listElement.appendChild(line);
}
