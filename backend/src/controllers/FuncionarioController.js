const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const { page = 1, pageSize = 5 } = request.query;

        const [count] = await connection('funcionario').count();

        const funcionario = await connection('funcionario')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .select('*');

        let funcionarios = {count: count['count(*)'], rows: funcionario};

        response.header('X-Total-Count', count['count(*)']);

        if (funcionario.length == 0){
            return response.json({mensagem: "não há funcionários cadastrados no sistema"});
        }
        else{
            return response.json(funcionarios);
        }
    },

    async create(request, response, next){
        try {
            
            const {cpf, nome, senha, papel} = request.body;

            const id = generateUniqueId();

            if (cpf.length < 11 || cpf.length > 11) {
                return response.status(401).json({ sucess: 'CPF irregular.' });
            }

            await connection('funcionario').insert({
                id,
                cpf,
                nome,
                senha,
                papel,
            });

            return response.status(201).json({ sucess: 'Operation performed successfully.' })

        } catch (error) {
            next(error);
        }

        return response.json({id});
    },

    async update(request, response, next){
        try {
            const body = request.body;
            const {id} = request.params;

            await connection('funcionario')
                .update(body)
                .where({id});

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params

            if (!id) {
                return response.status(401).json({ error: "Operation not permitted" })
            }

            await connection('funcionario')
                .where({id})
                .del();
            
            return response.status(204).send();

        } catch (error) {
            next(error);
        }
    }

};