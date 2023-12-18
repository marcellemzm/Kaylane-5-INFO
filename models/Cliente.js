const conexao = require("../config/conexao.js");

const ClienteSchema = new conexao.Schema({
  cliNome: String,
  cliHistorico: String,
  cliCPF: String,
  cliEnd: String,
  cliCod: Number,
});

module.exports = conexao.model("Cliente", ClienteSchema);
