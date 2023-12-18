const conexao = require("../config/conexao.js");

const EmpresaSchema = new conexao.Schema({
    empCod: Number,
    empLocal: String,
    empFunc: Number,
    empNome: String,
    empTelef: String,
});

module.exports = conexao.model("Empresa", EmpresaSchema);
