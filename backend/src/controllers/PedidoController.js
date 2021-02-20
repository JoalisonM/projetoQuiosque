const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async list(request, response){
        const { page = 1, pageSize = 5 } = request.query;

        const [count] = await connection('pedido').count();

        const pedido = await connection('pedido')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .select('*');

        let pedidos = {count: count['count(*)'], rows: pedido};

        response.header('X-Total-Count', count['count(*)']);

        if (pedido.length == 0){
            return response.json({mensagem: "não foi realizado nenhum pedido no sistema"});
        }
        else{
            return response.json(pedidos);
        }

    },

    async create(request, response, next) {
        try {
            const { id_cliente, id_produto, qtd } = request.body;

            const id = generateUniqueId();

            await connection('pedido').insert({
                id,
                id_cliente,
                id_produto,
                qtd,
            });

            return response.status(201).json({ sucess: 'Operation performed successfully.' });
        
        } catch (error) {
            return next(error);
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
    }

};