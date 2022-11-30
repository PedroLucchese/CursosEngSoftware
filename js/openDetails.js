var tabela = document.querySelector(".tabela-postagem");

function openModal(teste) {
  $(teste).modal("show");
}

tabela.addEventListener("click", function () {
  const teste = document.querySelector("#exampleModalCenter");
  openModal(teste);
});
