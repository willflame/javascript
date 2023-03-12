class BaseComponent extends HTMLElement {
  constructor() {
    super();

    // Define se component pode sofrer alteração por agente externo
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = "<span>Base Component!</span>";
  }
}

/**
 * Cria o elemento customizado e define o seletor, sempre utilize "-" hífen
 * para definir o nome sem ele o component não é reconhecido
 */
customElements.define("base-component", BaseComponent);
