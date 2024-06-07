export default function buttonEnabled() {
  const containerElement = document.querySelector("[data-container]");
  const bodyElement = document.querySelector("body");
  const divMainElement = document.querySelector("[data-divmain]");
  const imgElement = document.querySelector("[data-image]");
  const inputValue = document.querySelector("[data-input]");
  const dataStrongVariavel = document.querySelector("[data-strongVariavel]");
  const formData = document.querySelector("[data-form]");

  formData.addEventListener("input", (e) => {
    e.preventDefault();
  });

  inputValue.addEventListener("click", (e) => {
    e.preventDefault();
  });

  addEventListener("DOMContentLoaded", () => {
    const buttonAncora = document.querySelector("[data-ancora]");
    buttonAncora.classList.add("desativado");
    buttonAncora.addEventListener("click", (e) => {
      if (buttonAncora.classList.contains("desativado")) {
        e.preventDefault();
      } else {
        e.preventDefault();
        paginaValidation();
      }
    });
  });

  function paginaValidation() {
    const novaPagina = `<div class="container-new-page">
      <div class="div-page-confirm">
        <img class="image-new-page" src="/appProject/images/icon-success.svg" alt="success">
        <h1 class="title-new-page">Thanks for subscribing!</h1>
        <p class="para-new-page">A confirmation email has been sent to <strong
                data-strongVariavel>${inputValue.value}</strong>. Please open
            it and click <br> the
            button inside to confirm your subscription.</p>
        <a href="" class="ancora-button-new-page">Subscribe to monthly newsletter</a>
      </div>`;

    divMainElement.style.display = "none";
    imgElement.style.display = "none";
    containerElement.style.display = "none";
    containerElement.style.width = "30%";
    containerElement.style.height = "100%";
    bodyElement.insertAdjacentHTML("beforeend", novaPagina);

    const containerElementNew = document.querySelector(".container-new-page");
    const divPage = document.querySelector(".div-page-confirm");
    divPage.style.gap = "10px";
    containerElementNew.style.display = "flex";
    containerElementNew.style.gap = "100px";

    const buttonNewPage = document.querySelector(".ancora-button-new-page");
    buttonNewPage.addEventListener("click", (e) => {
      e.preventDefault();
      dismissMessage();
    });

    buttonNewPage.innerHTML = "Dismiss message";
  }

  function dismissMessage() {
    const containerElementNew = document.querySelector(".container-new-page");

    // Remove o elemento do DOM
    if (containerElementNew) {
      containerElementNew.parentNode.removeChild(containerElementNew);
    }

    // Restaura a visibilidade e o estilo dos elementos originais
    divMainElement.style.display = "flex";
    imgElement.style.display = "grid";
    imgElement.style.width = "100%";
    containerElement.style.display = "flex";
    containerElement.style.width = "80%";
    containerElement.style.height = "100%";
  }
}
