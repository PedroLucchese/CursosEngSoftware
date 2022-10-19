function montaTr(disciplina) {
  const disciplinaTr = document.createElement("tr");
  disciplinaTr.classList.add("disciplina");

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
