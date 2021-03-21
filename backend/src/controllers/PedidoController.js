const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

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
            const status = 'Em Andamento';
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
            preco += valores[i].valor;
        }


        await connection('pedido')
        .where('id', id_pedido)
        .update({
            total: preco
        });

        const pedido = await connection('pedido')
        .select('*')
        .where('id', id_pedido);

        return response.status(200).json(pedido);

        
    },


    async updateStatus(request, response){
        
        
        const { id } = request.params;

        const { mensagem } = request.body;
        
        await connection('pedido')
        .where({id})
        .update({
            status: mensagem
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
    }


};