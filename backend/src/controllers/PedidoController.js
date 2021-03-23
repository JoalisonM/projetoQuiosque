const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
const ItemPedidoController = require('../controllers/ItemPedidoController');

module.exports = {

    async list(request, response){

        const pedidos = await connection('pedido')
            .select('*');


        if (pedidos.length == 0){
            return response.json({mensagem: "não foi realizado nenhum pedido no sistema"});
        }
        else{
            return response.json(pedidos);
        }

    },

    async create(request, response) {
        try {
            const { id_cliente } = request.body;

            const id = generateUniqueId();
            
            
            const buscarNome = await connection('cliente')
            .select('nome')
            .where('id', id_cliente);


            const nome_cliente = buscarNome[0].nome;
            

            const total = 0;
            const status = 'O cliente está escolhendo o(s) produto(s).';
            await connection('pedido').insert({
                id,
                id_cliente,
                nome_cliente,
                total,
                status,
            });


            return response.status(201).json({ 
            id_pedido: id,
            id_cliente,
            nome_cliente,
            });
        
        } catch (error) {
            return response.status(400).json({error: "error."});
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await connection('pedido')
                .where({id})
                .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async updatePrice(request, response){

        const { id_pedido } = request.params;
        const valores = await connection('itemPedido')
        .select('*')
        .where({id_pedido});


        var preco = 0;
        for( i = 0; i < valores.length; i ++){
            preco += valores[i].valor_total;
        }


        await connection('pedido')
        .where('id', id_pedido)
        .update({
            total: preco
        });

        const pedido = await connection('pedido')
        .select('total')
        .where('id', id_pedido);

        return response.status(200).json(pedido);

        
    },


    async updateStatus(request, response){
        
        
        const { id } = request.params;

        const { status } = request.body;
        
        await connection('pedido')
        .where({id})
        .update({
            status: status
        });


        const pedido = await connection('pedido')
        .select('*')
        .where({id});

        return response.status(200).json(pedido);

    },

    
    async listItens(request, response){

        const { id } = request.params;

        const itens = await connection('itemPedido')
        .select('*')
        .where('id_pedido', id);

        const count = itens.length;


        return response.json({count: count, rows: itens});
    },

    async listByClientId(request, response){

        const { id_cliente } = request.params;

        const pedidos = await connection('pedido')
        .select('*')
        .where({ id_cliente });

        return response.json(pedidos);
    },

    async listRequestsInProgressByClient(request, response){

        const { id_cliente } = request.params;

        const pedidos = await connection('pedido')
        .select('*')
        .where({ id_cliente})
        .andWhereNot({status: "O cliente está escolhendo o(s) produto(s)."});

        return response.json(pedidos);
        
    },

    async listRequestsInProgress(request, response){

        
        const pedidos = await connection('pedido')
        .select('*')
        .where({status: "Em Andamento"})
        
        
        return response.json(pedidos);
    
    }


};