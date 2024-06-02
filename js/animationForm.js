export default function animacaoFormOnChange() {
  const inputElement = document.querySelector("[data-input]");
  const ancoraElement = document.querySelector("[data-ancora]");
  const rgxEmail = /^\S+@\S+\.\S+$/;

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
        console.log("funcionou");
      } else {
        inputElement.style.backgroundColor = "hsl(20, 100%, 67%)";
        inputElement.style.border = "1px solid hsl(4, 100%, 67%)";
        console.log("erro");
      }
    };
    verificaEstado();
  });
}

// Acessa todas as folhas de estilo do documento
//const styleSheets = document.styleSheets;

// Encontra a regra específica que deseja alterar
//for (let i = 0; i < styleSheets.length; i++) {
//const rules = styleSheets[i].cssRules || styleSheets[i].rules;
//for (let j = 0; j < rules.length; j++) {
//  if (rules[j].selectorText === "input::placeholder") {
//   // Altera a cor do placeholder
//   rules[j].style.color = "#503697";
//   break;
//   }
/// }
//}
