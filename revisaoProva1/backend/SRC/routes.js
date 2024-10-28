const express = require('express');
const router = express.Router();

const clientes = require('./controller/clientes');
const estacionamento = require('./controller/estacionamento');
const quartos = require('./controller/quartos');
const reservas = require('./controller/reservas');
const telefone = require('./controller/telefone');

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.put('/estacionamento/:id', estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);

router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);
router.put('/quartos/:id', quartos.update);
router.delete('/quartos/:id', quartos.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);
router.put('/reservas/:id', reservas.update);
router.delete('/reservas/:id', reservas.deletar);

module.exports = router;