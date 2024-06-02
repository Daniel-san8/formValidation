export default function animacaoFormOnChange() {
  const inputElement = document.querySelector("[data-input]");
  const rgxEmail = /^\S+@\S+\.\S+$/;
  const estiloDOM = document.styleSheets;
  const labelElement = document.querySelector("[data-label]");
  console.log(estiloDOM);

  //atualiza estilo do input ao ser clicado e desclicado
  inputElement.addEventListener("focus", () => {
    inputElement.style.outline = "none";
  });

  //

  //função para atualizar estado do form
  inputElement.addEventListener("change", () => {
    const estadoInput = inputElement.value;
    const verificaEstado = () => {
      if (rgxEmail.test(estadoInput)) {
        inputElement.style.backgroundColor = "field";
        inputElement.style.border = "1px solid green";
        labelElement.classList.toggle("after");
      } else {
        inputElement.style.backgroundColor = "hsl(20, 100%, 67%)";
        inputElement.style.border = "1px solid hsl(4, 100%, 67%)";
        labelElement.classList.toggle("after");
      }
    };
    verificaEstado();
  });
}
