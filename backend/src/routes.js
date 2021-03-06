const express = require('express');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProdutoController = require('./controllers/ProdutoController');
const SessionClienteController = require('./controllers/SessionClienteController');
const SessionFuncionarioController = require('./controllers/SessionFuncionarioController');
const PedidoController = require('./controllers/PedidoController');
const ItemPedidoController = require('./controllers/ItemPedidoController');

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
routes.get('/produto/d', ProdutoController.listByDisponibility);
routes.get('/produto/:id', ProdutoController.getById);
routes.post('/produto', ProdutoController.create);
routes.put('/produto/:id', ProdutoController.update);
routes.delete('/produto/:id', ProdutoController.delete);

routes.get('/pedido', PedidoController.list);
routes.post('/pedido', PedidoController.create);
routes.delete('/pedido/:id', PedidoController.delete);
routes.put('/pedido/st/:id', PedidoController.updateStatus);  
routes.put('/pedido/p/:id_pedido', PedidoController.updatePrice);
routes.get('/pedido/i/:id', PedidoController.listItens);
routes.get('/pedido/client/:id_cliente', PedidoController.listByClientId);
routes.get('/pedido/client/progress/:id_cliente', PedidoController.listRequestsInProgressByClient);
routes.get('/pedido/progress', PedidoController.listRequestsInProgress);

routes.get('/ipedido', ItemPedidoController.list);
routes.put('/ipedido', ItemPedidoController.create);
routes.delete('/ipedido/:id', ItemPedidoController.delete);
routes.put('/ipedido/:id', ItemPedidoController.updateQuant);

module.exports = routes;