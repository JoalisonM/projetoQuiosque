const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('funcionario').select('*');
        return response.json(cliente);
    },

    async create(request, response){
        const {cpf, nome, senha, papel} = request.body;

        const id = generateUniqueId();

        await connection('funcionario').insert({
            id,
            cpf,
            nome,
            senha,
            papel,
        });

        return response.json({id});
    },

    async put(request, response){

    },

    async delete(request, response){
        const {cpf} = request.params;

        const func = await connection('funcionario')
            .where('cpf', cpf)
            .first();

        if(func.cpf != cpf) {
            return response.status(401).json({error: 'Operação não permitida '});
        }

        await connection('cliente').where('cpf', cpf).delete();

        return response.status(204).send();
    }
};