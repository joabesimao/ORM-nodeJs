const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .post("/pessoas", PessoaController.criaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .get(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/matriculas", PessoaController.criaNovaMatricula);

module.exports = router;
