const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProdutoController = require('./controllers/ProdutoController');
const SessionClienteController = require('./controllers/SessionClienteController');
const SessionFuncionarioController = require('./controllers/SessionFuncionarioController');
const PedidoController = require('./controllers/PedidoController');

const routes = express.Router();

routes.post('/sessions/cliente', SessionClienteController.create);
routes.post('/sessions/funcionario', SessionFuncionarioController.create);

routes.get('/cliente', ClienteController.list);
routes.get('/cliente/:id', ClienteController.getById);
routes.post('/cliente', ClienteController.create);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete);

routes.get('/funcionario', FuncionarioController.list);
routes.get('/funcionario/:id', FuncionarioController.getById);
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:id', FuncionarioController.update);
routes.delete('/funcionario/:id', FuncionarioController.delete);


routes.get('/produto', ProdutoController.list);
routes.get('/produto/:id', ProdutoController.getById);
routes.post('/produto', ProdutoController.create);
routes.put('/produto/:id', ProdutoController.update);
routes.delete('/produto/:id', ProdutoController.delete);

routes.get('/pedido', PedidoController.list);
routes.post('/pedido', PedidoController.create);
routes.delete('/pedido', PedidoController.delete);

module.exports = routes;