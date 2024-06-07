export default function animacaoFormOnChange() {
  const inputElement = document.querySelector("[data-input]");
  const labelElement = document.querySelector("[data-label]");
  const formData = document.querySelector("[data-form]");

  const rgxEmail = /^\S+@\S+\.\S+$/;

  inputElement.addEventListener("focus", () => {
    inputElement.style.outline = "none";
  });

  formData.addEventListener("input", (e) => {
    e.preventDefault();
  });

  //

  //função para atualizar estado do form
  inputElement.addEventListener("click", () => {
    setTimeout(() => {
      inputElement.addEventListener("input", () => {
        const buttonAncora = document.querySelector("[data-ancora]");
        const estadoInput = inputElement.value;
        const verificaEstado = () => {
          if (rgxEmail.test(estadoInput)) {
            inputElement.style.backgroundColor = "field";
            inputElement.style.border = "1px solid green";
            labelElement.classList.remove("after");
            buttonAncora.classList.remove("desativado");
            buttonAncora.classList.add("ativo");
          } else {
            inputElement.style.backgroundColor = "#FFE2DA";
            inputElement.style.border = "1px solid hsl(4, 100%, 67%)";
            inputElement.classList.add("ativo-input");
            labelElement.classList.add("after");
            buttonAncora.classList.remove("ativo");
            buttonAncora.classList.add("desativado");
          }
        };

        verificaEstado();
      });
    }, 300);
  });
}
