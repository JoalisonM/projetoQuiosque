const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');

const routes = express.Router();

routes.get('/cliente', ClienteController.list);
routes.post('/cliente', ClienteController.create);

routes.get('/funcionario', FuncionarioController.list);
routes.post('/funcionario', FuncionarioController.create);


module.exports = routes;