const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('funcionario').select('*');
        return response.json(cliente);
    },

    async create(request, response, next){
        try {
            
            const {cpf, nome, senha, papel} = request.body;

            const id = generateUniqueId();

            await connection('funcionario').insert({
                id,
                cpf,
                nome,
                senha,
                papel,
            });

            return response.status(200).json({ sucess: 'Operation performed successfully.' })

        } catch (error) {
            next(response.status(401).json({ error: 'Operation not permited.' }));
        }

        return response.json({id});
    },

    async update(request, response, next){
        try {
            const body = request.body
            const {id} = request.params

            await connection('funcionario')
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

            await connection('funcionario')
            .where({id})
            .del()

            return response.status(200).json({ sucess: 'Operation performed successfully.' })

        } catch (error) {
            next(error)
        }
    }

};