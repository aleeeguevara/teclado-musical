const tocaSom = (seletorAudio) => {
  const elemento = document.querySelector(seletorAudio);
  
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  }else{
    console.log("Elemento não encontrado ou seletor inválido");
  }
};

const teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla, index) => {
  tecla.addEventListener("click", () => {
    tocaSom(`#som_${teclas[index].classList[1]}`);
  });
  tecla.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      tecla.classList.add("ativa");
    }
  });
  tecla.addEventListener("keyup", () => {
    tecla.classList.remove("ativa");
  });
});

