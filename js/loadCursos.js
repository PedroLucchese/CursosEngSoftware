function loadPost() {
  let URL = "https://localhost:4567/postagem";

  fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(body => {
      return body.json();
    })
    .then(data => {
      carregaDadosTabela(data);
    })
    .catch(error => console.error("Erro:", error.message || error));
}

const carregaDadosTabela = data => {
  data.forEach(postagem => {
    adicionaPostagemNaTabela(postagem);
  });
};

const resizeMenu = () => {
  return window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.pageYOffset > 20
      ? header.classList.add("isActive")
      : header.classList.remove("isActive");

    const img = document.querySelector(".logo");
    window.pageYOffset > 20
      ? img.classList.add("isActive")
      : img.classList.remove("isActive");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadPost();
  resizeMenu();
});
