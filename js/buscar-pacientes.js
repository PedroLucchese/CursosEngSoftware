const carregaDados = () => {
  const cursos = curso.DISCIPLINAS.map(DISCIPLINA => {
    return {
      SEMESTRE: DISCIPLINA.SEMESTRE,
      CODIGO: DISCIPLINA.CODIGO,
      DISCIPLINA: DISCIPLINA.DISCIPLINA,
      HORAS: DISCIPLINA.HORAS
    };
  });

  cursos.forEach(curso => {
    adicionaCursoNaTabela(curso);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  carregaDados();
});
