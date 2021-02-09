const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const { cpf } = request.body;

        const cliente = await connection('cliente')
            .where('cpf', cpf)
            .select('nome')
            .first();
        
            if (!cliente) {
                return response.status(400).json({ error: 'No Cliente found with this cpf'});
            }

            return response.json(cliente);
    }
}