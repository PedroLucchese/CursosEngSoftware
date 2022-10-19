const carregaDadosCurso = () => {
  const dadosCurso = {
    nomeCurso: curso.CURSO,
    codigoCurso: curso.CODIGO_DO_CURSO,
    duracao: curso.DURACAO,
    cargaHoraria: curso.CARGA_HORARIA
  };
  adicionaDadosCurso(dadosCurso);
};

const carregaDadosTabela = () => {
  const disciplinas = curso.DISCIPLINAS.map(DISCIPLINA => {
    return {
      semestre: DISCIPLINA?.SEMESTRE || "",
      codigo: DISCIPLINA?.CODIGO || "",
      nome: DISCIPLINA?.DISCIPLINA || "",
      horas: DISCIPLINA?.HORAS || "",
      ordem: DISCIPLINA?.ORDEM || "",
      ementa: DISCIPLINA?.EMENTA || "",
      nat: DISCIPLINA?.NAT || "",
      prerequisitos: DISCIPLINA?.PREREQUISITOS || ""
    };
  });

  disciplinas.forEach(disciplina => {
    adicionaDisciplinaNaTabela(disciplina);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  carregaDadosTabela();
  carregaDadosCurso();
});
