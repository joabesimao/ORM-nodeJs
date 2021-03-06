const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/ativas", PessoaController.pegaPessoasAtivas)
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
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmaLotada)
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/matriculas", PessoaController.criaNovaMatricula)
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa);

module.exports = router;
