const conexao = require("../config/conexao.js");

const FilialSchema = new conexao.Schema({
    filFunc: Number,
    filTelef: String,
    filLocal: String,
    filNum: Number,
    empresa: {
        type: conexao.Schema.Types.ObjectId,
        ref: "Empresa",
    },
});

module.exports = conexao.model("Filial", FilialSchema);
