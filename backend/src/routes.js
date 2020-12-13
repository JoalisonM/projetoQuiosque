const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');

const routes = express.Router();

routes.get('/cliente', ClienteController.list);
routes.post('/cliente', ClienteController.create);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);

routes.get('/funcionario', FuncionarioController.list);
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:id', FuncionarioController.update);
routes.delete('/funcionario/:id', FuncionarioController.delete);


module.exports = routes;