const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const cliente = await connection('cliente').select('*');
        return response.json(cliente);
    },

    async create(request, response){
        const {cpf, nome, senha} = request.body;

        const id = generateUniqueId();

        await connection('cliente').insert({
            id,
            cpf,
            nome,
            senha,
        });

        return response.json({id});
    },

    async put(request, response){

    },

    async delete(request, response){
        const {cpf} = request.params;

        const usuario = await connection('cliente')
            .where('cpf', cpf)
            .first();

        if(usuario.cpf != cpf) {
            return response.status(401).json({error: 'Operação não permitida '});
        }

        await connection('cliente').where('cpf', cpf).delete();

        return response.status(204).send();
    }

};