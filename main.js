const objetosTeclado = [
  {
    "classe": "tecla_pom",
    "id": "som_tecla_pom",
  },
  {
    "classe": "tecla_clap",
    "id": "som_tecla_clap",
  },
  {
    "classe": "tecla_tim",
    "id": "som_tecla_tim",
  },
  {
    "classe": "tecla_puff",
    "id": "som_tecla_puff",
  },
  {
    "classe": "tecla_splash",
    "id": "som_tecla_splash",
  },
  {
    "classe": "tecla_toim",
    "id": "som_tecla_toim",
  },
  {
    "classe": "tecla_psh",
    "id": "som_tecla_psh",
  },
  {
    "classe": "tecla_tic",
    "id": "som_tecla_tic",
  },
  {
    "classe": "tecla_tom",
    "id": "som_tecla_tom",
  },
];

objetosTeclado.map((objeto) => {
  document.querySelector(`.${objeto.classe}`).addEventListener("click", () => {
    document.querySelector(`#${objeto.id}`).play();
  });
});
