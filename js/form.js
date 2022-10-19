function montaTr(curso) {
  const cursoTr = document.createElement("tr");
  cursoTr.classList.add("curso");

  cursoTr.appendChild(montaTd(curso.SEMESTRE, "curso-semestre"));
  cursoTr.appendChild(montaTd(curso.CODIGO, "curso-codigo"));
  cursoTr.appendChild(montaTd(curso.DISCIPLINA, "curso-disciplina"));
  cursoTr.appendChild(montaTd(curso.HORAS, "curso-horas"));

  return cursoTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function adicionaCursoNaTabela(curso) {
  const cursoTr = montaTr(curso);
  const tabela = document.querySelector("#tabela-curso");
  tabela.appendChild(cursoTr);
}
