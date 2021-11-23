const tocaSom = (nomeID) => {
  document.querySelector(nomeID).play();
};

const teclas= document.querySelectorAll('.tecla');

teclas.forEach((tecla, index) => {
    tecla.addEventListener("click", () =>{
        tocaSom(`#som_${teclas[index].classList[1]}`); 
    })
    
})