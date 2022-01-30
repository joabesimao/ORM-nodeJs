const database = require("../models");

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll();
  }

  async pegaUmRegistroAtivo(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo].create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { id: id } },
      transacao
    );
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { ...where } },
      transacao
    );
  }
}

module.exports = Services;
