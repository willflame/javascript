class DynamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Base component
    const rootComponent = document.createElement("h1");
    // rootComponent.textContent = "Título";
    rootComponent.textContent = this.getAttribute("title");

    // Style component
    const rootStyle = document.createElement("style");
    rootStyle.textContent = `
        h1 {
            color: red;
        }
    `;

    // Send shadow
    shadow.appendChild(rootComponent);
    shadow.appendChild(rootStyle);
  }
}

customElements.define("dynamic-title", DynamicTitle);
