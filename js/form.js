function montaTr(postagem) {
  const postagemTr = document.createElement("tr");
  postagemTr.addEventListener("click", function () {
    adicionarValuesModal(postagem);
    let id = postagem.id
  });
  postagemTr.classList.add("postagem");
  postagemTr.appendChild(montaTd(postagem.id, "postagem-id"));
  postagemTr.appendChild(montaTd(postagem.title, "postagem-titulo"));
  postagemTr.appendChild(montaTd(postagem.categories, "postagem-categorias"));
  postagemTr.appendChild(montaTd(postagem.content, "postagem-conteudo"));
  postagemTr.appendChild(montaTd(postagem.version, "postagem-versão"));

  return postagemTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

async function adicionaPostagemNaTabela(postagem) {
  const tabela = document.querySelector(".tabela-postagem");
  await removeAllChildNodes(tabela)
  const postagemTr = montaTr(postagem);
  tabela.appendChild(postagemTr);
}

const adicionarValuesModal = registro => {
  const id = document.querySelector(".input-id");
  const titulo = document.querySelector(".input-titulo");
  const categoria = document.querySelector(".input-categoria");
  const conteudo = document.querySelector(".input-conteudo");
  const versao = document.querySelector(".input-versao");

  id.value = registro.id;
  titulo.value = registro.title;
  categoria.value = registro.categories;
  conteudo.value = registro.content;
  versao.value = registro.version;
};

const removerValuesModal = () => {
  const id = document.querySelector(".input-id");
  const titulo = document.querySelector(".input-titulo");
  const categoria = document.querySelector(".input-categoria");
  const conteudo = document.querySelector(".input-conteudo");
  const versao = document.querySelector(".input-versao");

  id.value = null;
  titulo.value = null;
  categoria.value = null;
  conteudo.value = null;
  versao.value = null;
};
