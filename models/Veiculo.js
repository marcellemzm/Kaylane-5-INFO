const conexao = require("../config/conexao.js");

const VeiculoSchema = new conexao.Schema({
  veiCod: Number,
  veiPlaca: String,
  veiCor: String,
  veiModel: String,
  veiMarca: String,
});

module.exports = conexao.model("Veiculo", VeiculoSchema);
