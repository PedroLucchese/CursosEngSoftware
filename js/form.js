function montaTr(postagem) {
  const postagemTr = document.createElement("tr");
  postagemTr.addEventListener("click", function () {
    adicionarTextoModal(postagem);
  });
  postagemTr.classList.add("postagem");

  postagem.semestre % 2 === 0
    ? postagemTr.classList.add("semestre-par")
    : postagemTr.classList.add("semestre-impar");

  postagemTr.appendChild(montaTd(postagem.semestre, "postagem-semestre"));
  postagemTr.appendChild(montaTd(postagem.codigo, "postagem-codigo"));
  postagemTr.appendChild(montaTd(postagem.nome, "postagem-nome"));
  postagemTr.appendChild(montaTd(postagem.horas, "postagem-horas"));
  postagemTr.appendChild(montaTd(postagem.horas, "postagem-horas"));

  return postagemTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function adicionaPostagemNaTabela(postagem) {
  const postagemTr = montaTr(postagem);
  const tabela = document.querySelector(".tabela-postagem");
  tabela.appendChild(postagemTr);
}

const adicionarTextoModal = registro => {
  const id = document.querySelector(".input-id");
  const titulo = document.querySelector(".input-titulo");
  const categoria = document.querySelector(".input-categoria");
  const conteudo = document.querySelector(".input-conteudo");
  const versao = document.querySelector(".input-versao");

  id.value = registro.codigo;
  titulo.value = registro.nome;
  categoria.value = registro.ementa;
  conteudo.value = registro.semestre;
  versao.value = registro.semestre;
};
