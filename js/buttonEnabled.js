export default function buttonEnabled() {
  addEventListener("DOMContentLoaded", () => {
    const buttonAncora = document.querySelector("[data-ancora]");
    buttonAncora.classList.add("desativado");
    buttonAncora.addEventListener("click", (e) => {
      if (buttonAncora.classList.contains("desativado")) e.preventDefault();
    });
  });
}
