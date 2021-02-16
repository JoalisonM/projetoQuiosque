const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async list(request, response){
        const { page = 1, pageSize = 5 } = request.query;

        const [count] = await connection('produto').count();

        const produto = await connection('produto')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .select('*');

        let produtos = {count: count['count(*)'], rows: produto};

        response.header('X-Total-Count', count['count(*)']);

        return response.json(produtos);

    },

    async create(request, response, next) {
        try {
            const { titulo, descricao, valor } = request.body;

            const id = generateUniqueId();

            await connection('produto').insert({
                id,
                titulo,
                descricao,
                valor,
            });

            return response.status(201).json({ sucess: 'Operation performed successfully.' });
        
        } catch (error) {
            return next(error);
        }
    },

    async update(request, response, next){
        try {
            const body = request.body;
            const {id} = request.params;

            await connection('produto')
                .update(body)
                .where({id});

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await connection('produto')
                .where({id})
                .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    }

};