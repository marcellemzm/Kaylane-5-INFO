const conexao = require("../config/conexao.js");

const ContratoSchema = new conexao.Schema({
  contData: Date,
  contFormPaga: String,
  contCod: Number,
  contValor: Number,
  contDataEntrg: Date,
  cliente: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  veiculo: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Veiculo",
  },
  filial: {
    type: conexao.Schema.Types.ObjectId,
    ref: "Filial",
  },
});

module.exports = conexao.model("Contrato", ContratoSchema);
