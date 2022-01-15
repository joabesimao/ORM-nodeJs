const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (requisicao, resposta) =>
  resposta.status(200).send({ mensagem: "boas vindas" })
);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;
