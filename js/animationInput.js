export default function animacaoFormOnChange() {
  const inputElement = document.querySelector("[data-input]");
  const rgxEmail = /^\S+@\S+\.\S+$/;
  const labelElement = document.querySelector("[data-label]");

  inputElement.addEventListener("focus", () => {
    inputElement.style.outline = "none";
  });

  //

  //função para atualizar estado do form
  inputElement.addEventListener("click", () => {
    setTimeout(() => {
      inputElement.addEventListener("input", () => {
        const estadoInput = inputElement.value;
        const verificaEstado = () => {
          if (rgxEmail.test(estadoInput)) {
            inputElement.style.backgroundColor = "field";
            inputElement.style.border = "1px solid green";
            labelElement.classList.remove("after");
          } else {
            inputElement.style.backgroundColor = "#FFE2DA";
            inputElement.style.border = "1px solid hsl(4, 100%, 67%)";
            labelElement.classList.add("after");
          }
        };

        verificaEstado();
      });
    }, 500);
  });
}
