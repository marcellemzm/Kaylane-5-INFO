const Cliente = require("../models/Cliente");
const Veiculo = require("../models/Veiculo");
const Contrato = require("../models/Contrato");
const Empresa = require("../models/Empresa");
const Filial = require("../models/Filial2");

function abreindex(req, res) {
    res.render("index");
}

function abreadd(req, res) {
    res.render("add");
}

function add(req, res) {
    console.log(req.body);
    let cliNome = req.body.cliNome;
    let cliHistorico = req.body.cliHistorico;
    let cliCPF = req.body.cliCPF;
    let cliEnd = req.body.cliEnd;
    let cliCod = req.body.cliCod;

    let cliente = new Cliente({
        cliNome: cliNome,
        cliHistorico: cliHistorico,
        cliCPF: cliCPF,
        cliEnd: cliEnd,
        cliCod: cliCod,
    });

    cliente.save().then(function (docs) {
        res.redirect("/lst");
    });
}

function listar(req, res) {
    Cliente.find({}).then(function (clientes) {
        res.render("lst.ejs", { Clientes: clientes });
    });
}

function abreedtcliente(req, res) {
    Cliente.findById(req.params.id).then(function (cliente, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("edtcliente.ejs", { Cliente: cliente });
        }
    });
}

function edtcliente(req, res) {
    Cliente.findByIdAndUpdate(req.params.id, {
        cliNome: req.body.clinome,
        cliHistorico: req.body.cliHistorico,
        cliCPF: req.body.cliCPF,
        cliEnd: req.body.cliEnd,
        cliCod: req.body.cliCod,
    }).then(function (cliente, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lst.ejs");
        }
    });
}

function pesquisacliente(req, res) {
    Cliente.find(
        { titulo: new RegExp(req.body.pesquisar, "i") },
        function (err, clientes) {
            res.render("cliente/lst.ejs", { Clientes: clientes });
        }
    );
}

function delcliente(req, res) {
    Cliente.findByIdAndDelete(req.params.id).then(function (cliente, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lst.ejs");
        }
    });
}

function abreaddempresa(req, res) {
    res.render("add");
}

function addempresa(req, res) {
    let empCod = req.body.empCod;
    let empLocal = req.body.empLocal;
    let empFunc = req.body.empFunc;
    let empNome = req.body.empNome;
    let empTelef = req.body.empTelef;

    let empresa = new Empresa({
        empCod: empCod,
        empLocal: empLocal,
        empFunc: empFunc,
        empNome: empNome,
        empTelef: empTelef,
    });

    empresa.save().then(function (docs) {
        res.redirect("/lstempresa");
    });
}

function listarempresa(req, res) {
    Empresa.find({}).then(function (empresas) {
        res.render("lstempresa.ejs", { Empresas: empresas });
    });
}

function abreedtempresa(req, res) {
    Empresa.findById(req.params.id).then(function (empresa, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("edtempresa.ejs", { Empresa: empresa });
        }
    });
}

function edtempresa(req, res) {
    Empresa.findByIdAndUpdate(req.params.id, {
        empCod: empCod,
        empLocal: empLocal,
        empFunc: empFunc,
        empNome: empNome,
        empTelef: empTelef,
    }).then(function (empresa, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstempresa");
        }
    });
}

function pesquisaempresa(req, res) {
    Empresa.find(
        { titulo: new RegExp(req.body.pesquisar, "i") },
        function (err, empresas) {
            res.render("empresa/lst", { Empresas: empresas });
        }
    );
}

function delempresa(req, res) {
    Empresa.findByIdAndDelete(req.params.id).then(function (empresa, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstempresa");
        }
    });
}

function abreaddfilial(req, res) {
    res.render("addfilial");
}

function addfilial(req, res) {
    let filFunc = req.body.filFunc;
    let filTelef = req.body.filTelef;
    let filLocal = req.body.filLocal;
    let filNum = req.body.filNum;
    let empresa = req.body.empresa;

    let filial = new Filial({
        filFunc: filFunc,
        filTelef: filTelef,
        filLocal: filLocal,
        filNum: filNum,
        empresa: empresa,
    });

    filial.save().then(function (docs) {
        res.send("Salvo");
    });
}

function listarfilial(req, res) {
    Filial.find({}).then(function (filiais) {
        res.render("lstfilial.ejs", { Filiais: filiais });
    });
}

function abreedtfilial(req, res) {
    Filial.findById(req.params.id).then(function (filial, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("edtfilial.ejs", { Filial: filial });
        }
    });
}

function edtfilial(req, res) {
    Filial.findByIdAndUpdate(req.params.id, {
        filFunc: filFunc,
        filTelef: filTelef,
        filLocal: filLocal,
        filNum: filNum,
        empresa: empresa,
    }).then(function (filial, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstfilial");
        }
    });
}

function pesquisafilial(req, res) {
    Filial.find(
        { titulo: new RegExp(req.body.pesquisar, "i") },
        function (err, filiais) {
            res.render("filial/lst", { Filiais: filiais });
        }
    );
}

function delfilial(req, res) {
    Filial.findByIdAndDelete(req.params.id).then(function (filial, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstfilial");
        }
    });
}

function abreaddveiculo(req, res) {
    res.render("addveiculo.ejs");
}

function addveiculo(req, res) {
    let veiculo = new Veiculo({
        veiCod: req.body.veiCod,
        veiPlaca: req.body.veiPlaca,
        veiCor: req.body.veiCor,
        veiModel: req.body.veiModel,
        veiMarca: req.body.veiMarca,
    });
    veiculo.save().then(function (docs, err) {
        console.log(docs);
        res.redirect("/lstveiculo.ejs");
    });
}

function lstveiculo(req, res) {
    Veiculo.find({}).then(function (veiculos, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("lstveiculo.ejs", { Veiculos: veiculos });
        }
    });
}

function pesquisaveiculo(req, res) {
    Veiculo.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
        veiculos,
        err
    ) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("lstveiculo.ejs", { Veiculos: veiculos });
        }
    });
}

function abreedtveiculo(req, res) {
    Veiculo.findById(req.params.id).then(function (veiculo, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.render("edtveiculo.ejs", { Veiculo: veiculo });
        }
    });
}

function edtveiculo(req, res) {
    Veiculo.findByIdAndUpdate(req.params.id, {
        veiCod: req.body.veiCod,
        veiPlaca: req.body.veiPlaca,
        veiCor: req.body.veiCor,
        veiModel: req.body.veiModel,
        veiMarca: req.body.veiMarca,
    }).then(function (veiculo, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstveiculo");
        }
    });
}

function delveiculo(req, res) {
    Veiculo.findByIdAndDelete(req.params.id).then(function (veiculo, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstveiculo");
        }
    });
}

function abreaddcontrato(req, res) {
    Veiculo.find({}).then(function (veiculos, err) {
        if (err) {
            res.send(err.message);
        } else {
            Cliente.find().then(function (clientes, err) {
                if (err) {
                    res.send(err.message);
                } else {
                    Filial.find().then(function (filiais, err) {
                        if (err) {
                            res.send(err.message);
                        } else {
                            res.render("addcontrato", {
                                Veiculos: veiculos,
                                Clientes: clientes,
                                Filiais: filiais,
                            });
                        }
                    });
                }
            });
        }
    });
}

function addcontrato(req, res) {
    let contrato = new Contrato({
        contData: req.body.contData,
        contFormPaga: req.body.contFormPaga,
        contCod: req.body.contCod,
        contValor: req.body.contValor,
        contDataEntrg: req.body.contDataEntrg,
        cliente: req.body.cliente,
        veiculo: req.body.veiculo,
        filial: req.body.filial,
    });
    contrato.save().then(function (docs, err) {
        if (err) {
            res.send(err.message);
        } else {
            console.log(docs);
            res.render(
                "addcontrato",
                { Cliente: cliente },
                { Contrato: contrato },
                { Empresa: empresa },
                { Filial: filial },
                { Veiculo: veiculo }
            );
        }
    });
}

function lstcontrato(req, res) {
    Contrato.find({})
        .populate("veiculo")
        .populate("cliente")
        .populate("filial")
        .then(function (contratos, err) {
            if (err) {
                res.send(err.message);
            } else {
                res.redirect("lstcontrato.ejs", { Contratos: contratos });
            }
        });
}

function pesquisacontrato(req, res) {
    Contrato.find(
        { titulo: new RegExp(req.body.pesquisar, "i") },
        function (err, contratos) {
            res.render("contrato/lst", { Contratos: contratos });
        }
    );
}

function abreedtcontrato(req, res) {
    Contrato.findById(req.params.id, function (err, contrato) {
        Cliente.find({}, function (err, clientes) {
            Veiculo.find({}).exec(function (err, veiculos) {
                Filial.find({}).exec(function (err, filiais) {
                    res.render("contrato/edt", {
                        Contrato: contrato,
                        Clientes: clientes,
                        Veiculos: veiculos,
                        Filiais: filiais,
                    });
                });
            });
        });
    });
}

function edtcontrato(req, res) {
    Veiculo.findByIdAndUpdate(req.params.id, {
        contData: req.body.contData,
        contFormPaga: req.body.contFormPaga,
        contCod: req.body.contCod,
        contValor: req.body.contValor,
        contDataEntrg: req.body.contDataEntrg,
        cliente: req.body.cliente,
        veiculo: req.body.veiculo,
        filial: req.body.filial,
    }).then(function (veiculo, err) {
        if (err) {
            res.send(err.message);
        } else {
            res.redirect("/lstcontrato");
        }
    });
}

/*function delcontrato(req,res){
    Veiculo.findByIdAndDelete(req.params.id)
        .then(function(veiculo,err){
            if(err){
                res.send(err.message);
            }else{
                res.redirect('/lstveiculo')
            }
        })
}*/

function delcontrato(req, res) {
    Contrato.findByIdAndDelete(req.params.id, function (err, contratos) {
        res.redirect("/lstcontrato");
    });
}

module.exports = {
    abreindex,
    abreadd,
    add,
    listar,
    abreaddveiculo,
    addveiculo,
    lstveiculo,
    pesquisaveiculo,
    delveiculo,
    abreedtveiculo,
    edtveiculo,
    abreedtcliente,
    edtcliente,
    abreaddcontrato,
    addcontrato,
    lstcontrato,
    pesquisacontrato,
    delcontrato,
    abreedtcontrato,
    edtcontrato,
    delcliente,
    abreaddempresa,
    addempresa,
    listarempresa,
    abreedtempresa,
    edtempresa,
    delempresa,
    abreaddfilial,
    addfilial,
    listarfilial,
    abreedtfilial,
    edtfilial,
    delfilial,
    pesquisacliente,
    pesquisaempresa,
    pesquisafilial,
};
