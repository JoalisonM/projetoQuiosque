const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('cliente').select('*');
        return response.json(cliente);
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
            next(error)
        }

    },

    async update(request, response, next){
        try {
            const {nome, senha} = request.body
            const {id} = request.params

            await connection('cliente')
            .update({nome, senha})
            .where({id})

            return response.send();

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

            return response.send()

        } catch (error) {
            next(error)
        }
    }

};