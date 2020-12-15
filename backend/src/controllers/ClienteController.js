const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const { page = 1, pageSize = 5 } = request.query;

        const [count] = await connection('cliente').count();

        const cliente = await connection('cliente')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .select('*');
        

        let clientes = {count: count['count(*)'], rows: cliente};

        response.header('X-Total-Count', count['count(*)']);

        return response.json(clientes);

    },

    async create(request, response, next){
        try {
                const {cpf, nome, senha} = request.body;

                const id = generateUniqueId();
        
                await connection('cliente').insert({
                    id,
                    cpf,
                    nome,
                    senha,
                });

                return response.json({id});
        } catch (error) {
            next(response.status(404).json({ error: 'Operation not permited.' }))
        }

    },

    async update(request, response, next){
        try {
            const body = request.body
            const {id} = request.params

            await connection('cliente')
            .update(body)
            .where({id})

            return response.status(200).json({ sucess: 'Operation performed successfully.' })

        } catch (error) {
            next(error)
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params

            await connection('cliente')
            .where({id})
            .del()

            return response.status(200).json({ sucess: 'Operation performed successfully.' })

        } catch (error) {
            next(error)
        }
    }

};