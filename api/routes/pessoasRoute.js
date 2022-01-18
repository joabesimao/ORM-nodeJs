const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const pessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", pessoaController.pegaTodasAsPessoas);

router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);

module.exports = router;
