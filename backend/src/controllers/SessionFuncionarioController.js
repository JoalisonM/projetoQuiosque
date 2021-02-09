const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { cpf } = request.body;

        const funcionario = await connection('funcionario')
            .where('cpf', cpf)
            .select('nome')
            .first();
        
            if (!funcionario) {
                return response.status(400).json({ error: 'No Funcionario found with this cpf'});
            }

            return response.json(funcionario);
    }
}