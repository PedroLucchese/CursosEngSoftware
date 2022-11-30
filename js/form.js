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
  const codigo = document.querySelector(".modal-codigo");
  const title = document.querySelector(".modal-title");
  const ementa = document.querySelector(".modal-ementa");
  const infos = document.querySelector(".modal-infos");
  const prerequisitostext = document.querySelector(".pre-requisitos");
  const prerequisito = document.querySelector(".pre-requisito");

  codigo.textContent = registro.codigo;
  title.textContent = registro.nome;
  ementa.textContent = registro.ementa;
  infos.textContent = `${registro.semestre}º semestre - Modalidade ${
    registro.nat == "FEP" ? "EAD" : "Presencial"
  } - Duração ${registro.horas} horas`;

  console.log(registro.prerequisitos);

  if (registro.prerequisitos > 0) {
    prerequisitostext.textContent = "Pré-Requisitos";
    prerequisito.textContent = registro.prerequisitos;
  }
};
