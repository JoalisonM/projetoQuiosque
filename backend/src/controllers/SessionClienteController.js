const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { cpf, senha } = request.body;

        const cliente = await connection('cliente')
            .where('cpf', cpf)
            .where('senha', senha)
            .select('nome')
            .first();
        
            if (!cliente) {
                return response.status(400).json({ error: 'No Cliente found with this cpf'});
            }

            return response.json(cliente);
    }
}