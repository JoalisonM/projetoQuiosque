const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('cliente').select('*');
        return response.json(cliente);
    },

    async create(request, response){
        const {cpf, nome, senha} = request.body;

        await connection('cliente').insert({
            cpf,
            nome,
            senha,
        });

        return response.json({ cpf });
    }
};