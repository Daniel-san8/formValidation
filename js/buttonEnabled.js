export default function buttonEnabled() {
  const containerElement = document.querySelector("[data-container]");
  const bodyElement = document.querySelector("body");
  const divMainElement = document.querySelector("[data-divmain]");
  const imgElement = document.querySelector("[data-image]");
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
                data-strongVariavel>teste@hotmail.com</strong>. Please open
            it and click <br> the
            button inside to confirm your subscription</p>
        <a data-ancora href="#" class="ancora-button-new-page">Subscribe to monthly newsletter</a>
    </div>`;

    divMainElement.style.display = "none";
    imgElement.style.display = "none";
    containerElement.style.display = "none";
    containerElement.style.width = "30%";
    bodyElement.insertAdjacentHTML("beforeend", novaPagina);
    const containerElementNew = (document.querySelector(
      ".container-new-page"
    ).style.display = "flex");
    const buttonNewPage = document.querySelector(".ancora-button-new-page");
    buttonNewPage.innerHTML = "Dismiss message";
    console.log(buttonNewPage);
  }
}
