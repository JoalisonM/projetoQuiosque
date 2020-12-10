const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('funcionario').select('*');
        return response.json(cliente);
    },

    async create(request, response){
        const {cpf, nome, senha, papel} = request.body;

        await connection('funcionario').insert({
            cpf,
            nome,
            senha,
            papel,
        });

        return response.json({ cpf });
    }
};