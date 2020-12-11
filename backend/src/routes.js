const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');

const routes = express.Router();

routes.get('/cliente', ClienteController.list);
routes.post('/cliente', ClienteController.create);
routes.put('/cliente/:id', ClienteController.put);
routes.delete('/cliente/:cpf', ClienteController.delete);

routes.get('/funcionario', FuncionarioController.list);
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:id', FuncionarioController.put);
routes.delete('/funcionario/:cpf', FuncionarioController.delete);


module.exports = routes;