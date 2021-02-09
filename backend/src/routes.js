const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const CardapioController = require('./controllers/CardapioController');
const SessionClienteController = require('./controllers/SessionClienteController');
const SessionFuncionarioController = require('./controllers/SessionFuncionarioController');

const routes = express.Router();

routes.post('/sessions/cliente', SessionClienteController.create);
routes.post('/sessions/funcionario', SessionFuncionarioController.create);

routes.get('/cliente', ClienteController.list);
routes.post('/cliente', ClienteController.create);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);

routes.get('/funcionario', FuncionarioController.list);
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:id', FuncionarioController.update);
routes.delete('/funcionario/:id', FuncionarioController.delete);

routes.get('/cardapio', CardapioController.list);
routes.post('/cardapio', CardapioController.create);
routes.put('/cardapio/:id', CardapioController.update);
routes.delete('/cardapio/:id', CardapioController.delete);

module.exports = routes;