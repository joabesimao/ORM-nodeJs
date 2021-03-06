const database = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    data_inicial || data_final ? (where.data_inicio = {}) : null;
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;
    data_final ? (where.data_inicio[Op.lte] = data_final) : null;

    try {
      const todasAsTurmas = await database.Turmas.findAll({ where });
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegaUmaTurma(req, res) {
    const idDoParametro = req.params?.id;
    try {
      const pegaTurma = await database.Turmas.findOne({
        where: { id: idDoParametro },
      });
      return res.status(200).json(pegaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Turmas.update(novasInfos, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Turma.findOne({
        where: { id: id },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: id } });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = TurmaController;
//etc
