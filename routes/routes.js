const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({ dest: './public' })


router.get('/',controller.abreindex)

//rota para abrir formulário de adicionar
router.get('/add',controller.abreadd)

//rota para receber dados do formulário e adicionar ao banco mongodb
router.post('/add',controller.add)

router.get('/lst',controller.listar)
router.post('/lst',controller.pesquisacliente)

router.get('/edtcliente/:id', controller.abreedtcliente)
router.post('/edtcliente/:id', controller.edtcliente)

router.get('/delcliente/:id', controller.delcliente)

router.get('/addempresa', controller.abreaddempresa)
router.post('/addempresa',controller.addempresa)

router.get('/lstempresa',controller.listarempresa)
router.post('/lstempresa',controller.pesquisaempresa)

router.get('/edtpaciente/:id', controller.abreedtempresa)
router.post('/edtpaciente/:id', controller.edtempresa)

router.get('/delpaciente/:id', controller.delempresa)

router.get('/addfilial', controller.abreaddfilial)
router.post('/addfilial',controller.addfilial)

router.get('/lstfilial',controller.listarfilial)
router.post('/lstfilial',controller.pesquisafilial)

router.get('/edtfilial/:id', controller.abreedtfilial)
router.post('/edtfilial/:id', controller.edtfilial)

router.get('/delfilial/:id', controller.delfilial)

router.get('/addveiculo', controller.abreaddveiculo)
router.post('/addveiculo',controller.addveiculo)

router.get('/lstveiculo',controller.lstveiculo)
router.post('/lstveiculo',controller.pesquisaveiculo)

router.get('/edtveiculo/:id', controller.abreedtveiculo)
router.post('/edtveiculo/:id', controller.edtveiculo)

router.get('/delveiculo/:id', controller.delveiculo)

router.get('/addcontrato', controller.abreaddcontrato)
router.post('/addcontrato',controller.addcontrato)

router.get('/lstcontrato',controller.lstcontrato)
router.post('/lstcontrato',controller.pesquisacontrato)

router.get('/edtcontrato/:id', controller.abreedtcontrato)
router.post('/edtcontrato/:id', controller.edtcontrato)

router.get('/delcontrato/:id', controller.delcontrato)


module.exports = router