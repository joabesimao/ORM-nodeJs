const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.pegaMatriculaPorTurma
  )
  .get(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatricula)
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/matriculas", PessoaController.criaNovaMatricula)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa);

module.exports = router;
