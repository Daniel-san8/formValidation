export default function buttonEnabled() {
  const inputElement = document.querySelector("[data-input]");
  const labelElement = document.querySelector("[data-label]");
  const divMainElement = document.querySelector("[data-divmain]");
  const imgElement = document.querySelector("[data-image]");
  addEventListener("DOMContentLoaded", () => {
    const buttonAncora = document.querySelector("[data-ancora]");
    buttonAncora.classList.add("desativado");
    buttonAncora.addEventListener("click", (e) => {
      if (buttonAncora.classList.contains("desativado")) {
        e.preventDefault();
      } else {
        paginaValidation();
      }
    });
  });

  function paginaValidation() {
    divMainElement.style.display = "none";
    imgElement.style.display = "none";
  }
}
