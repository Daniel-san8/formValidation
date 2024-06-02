export default function mudarImagem() {
  window.addEventListener("load", () => {
    const imagens = {
      imagemMobile: "/appProject/images/illustration-sign-up-mobile.svg",
      imagemDesktop: "/appProject/images/illustration-sign-up-desktop.svg",
    };

    let tamanhoTela = window.innerWidth;
    const img = document.querySelector("[data-image]");
    if (tamanhoTela <= 710) {
      img.setAttribute("src", imagens.imagemMobile);
    } else {
      img.setAttribute("src", imagens.imagemDesktop);
    }

    addEventListener("resize", () => {
      tamanhoTela = innerWidth;
      if (tamanhoTela <= 710) {
        img.setAttribute("src", imagens.imagemMobile);
      } else {
        img.setAttribute("src", imagens.imagemDesktop);
      }
    });
  });
}
