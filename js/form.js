function montaTr(disciplina) {
  const disciplinaTr = document.createElement("tr");
  disciplinaTr.addEventListener("click", function () {
    adicionarTextoModal(disciplina);
  });
  disciplinaTr.classList.add("disciplina");

  disciplina.semestre % 2 === 0
    ? disciplinaTr.classList.add("semestre-par")
    : disciplinaTr.classList.add("semestre-impar");

  disciplinaTr.appendChild(montaTd(disciplina.semestre, "disciplina-semestre"));
  disciplinaTr.appendChild(montaTd(disciplina.codigo, "disciplina-codigo"));
  disciplinaTr.appendChild(montaTd(disciplina.nome, "disciplina-nome"));
  disciplinaTr.appendChild(montaTd(disciplina.horas, "disciplina-horas"));

  return disciplinaTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function adicionaDisciplinaNaTabela(disciplina) {
  const disciplinaTr = montaTr(disciplina);
  const tabela = document.querySelector(".tabela-curso");
  tabela.appendChild(disciplinaTr);
}

const adicionaDadosCurso = arrayDados => {
  const cursoConteudo = document.querySelector(".curso-conteudo");

  const h1 = document.createElement("h1");
  h1.classList.add("nome-curso");
  h1.textContent = `${arrayDados.nomeCurso} - ${arrayDados.codigoCurso}`;

  const h2 = document.createElement("h2");
  h2.classList.add("infos-curso");
  h2.textContent = `${arrayDados.duracao} - ${arrayDados.cargaHoraria}`;

  cursoConteudo.appendChild(h1);
  cursoConteudo.appendChild(h2);
};

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
