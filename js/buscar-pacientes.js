var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  console.log(curso.DISCIPLINAS[10].CODIGO);
  
  var cursos = JSON.parse(curso);

  cursos.forEach(function (paciente) {
    adicionaCursoNaTabela(paciente);
  });
});
