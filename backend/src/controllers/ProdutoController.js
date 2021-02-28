const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async list(request, response){
        const { page = 1, pageSize = 5 } = request.query;

        const [count] = await connection('produto').count();

        const produto = await connection('produto')
            .limit(pageSize)
            .offset((page - 1) * pageSize)
            .select('*');

        let produtos = {count: count['count(*)'], rows: produto};

        response.header('X-Total-Count', count['count(*)']);

        if (produto.length == 0){
            return response.json({mensagem: "não há produtos cadastrados no sistema"});
        }
        else{
            return response.json(produtos);
        }

    },

    async create(request, response, next) {
        try {
            const { titulo, descricao, valor, } = request.body;

            const disponibilidade = true;

            const id = generateUniqueId();

            await connection('produto').insert({
                id,
                titulo,
                descricao,
                valor,
                disponibilidade,
            });

            return response.status(201).json({ sucess: 'Produto cadastrado com sucesso.' });
        
        } catch (err) {
            return response.status(401).json({errror: 'Algo não ocorreu bem :( . Tente novamente'});
        }
    },

    async update(request, response, next){
        try {
            const {titulo, descricao, valor, disponibilidade} = request.body;
            const {id} = request.params;

            if(disponibilidade.toLowerCase() == 'tem'){
                const disponibilidade1 = true;
            }else{
                const disponibilidade1 = false;
            }

            await connection('produto')
            .where({id})
                .update({
                    titulo: titulo,
                    descricao: descricao,
                    valor: valor,
                    disponibilidade: disponibilidade1,
                });
                

            return response.status(201).json({sucess: "Dados alterados com sucesso."});

        } catch (err) {
            return response.status(401).json({ error: "Algo deu errado. Tente novamente."});
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await connection('produto')
                .where({id})
                .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    }

};