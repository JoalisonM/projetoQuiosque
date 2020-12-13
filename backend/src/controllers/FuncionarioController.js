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

            return response.send();

        } catch (error) {
            next(error)
        }

        return response.json({id});
    },

    async update(request, response, next){
        try {
            const {nome, senha, papel} = request.body
            const {id} = request.params

            await connection('funcionario')
            .update({nome, senha, papel})
            .where({id})

            return response.send();

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

            return response.send()

        } catch (error) {
            next(error)
        }
    }

};