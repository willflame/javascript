class CardNews extends HTMLElement {
  constructor() {
    super();

    // Define se component pode sofrer alteração por agente externo
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const rootComponent = document.createElement("div");
    rootComponent.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-title");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("photo") || "src/assets/image-not-found.png";
    newsImage.alt = this.getAttribute("alt");

    cardRight.appendChild(newsImage);

    rootComponent.appendChild(cardLeft);
    rootComponent.appendChild(cardRight);

    return rootComponent;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .card {
        width: 80%;
        max-height: 20rem;
        box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem;
        border-radius: 1rem;
      }

      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        height: 100%;
      }

      .card__left > span {
        font-weight: 400;
      }
      
      .card__left > a {
        margin-top: 1.5rem;
        font-size: 2.5rem;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }

      .card__left > p {
        color: rgb(70, 70, 70);
      }

      .card__right {
        max-width: 18rem;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card__right > img {
        height: 100%;
        width: auto;
      }
    `;

    return style;
  }
}

/**
 * Cria o elemento customizado e define o seletor, sempre utilize "-" hífen
 * para definir o nome sem ele o component não é reconhecido
 */
customElements.define("card-news", CardNews);
