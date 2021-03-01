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
            const { titulo, descricao, valor} = request.body;

            const disponibilidade = true;

            const id = generateUniqueId();

            if(titulo.length == 0){
              throw  "O título não podem ficar vazio!";
            }

            if(descricao.length < 15){
                throw "Digite uma descrição com pelo menos 15 caracteres";
            }

            if(valor.length == 0){
                throw "Digite um valor válido!"
            }

            try{
                await connection('produto').insert({
                    id,
                    titulo,
                    descricao,
                    valor,
                    disponibilidade,
                });
    
                return response.status(201).json({ sucess: 'Produto cadastrado com sucesso.' });
            }
            catch(err){
                throw 'Algo não ocorreu bem :( . Tente novamente';
            }
        
        } catch (err) {
            return response.status(401).send(err);
        }
    },

    async update(request, response, next){
        try {
            const body = request.body;
            const {id} = request.params;

            if(disponibilidade.toLowerCase() == 'tem'){
                const disponibilidade1 = true;
            }else{
                const disponibilidade1 = false;
            }

            await connection('produto')
                .update(body)
                .where({id});
                
            return response.status(201).json({sucess: "Dados alterados com sucesso."});

        } catch (error) {
            next(erorr);
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await connection('produto')
                .where({id})
                .del();

            return response.status(201).json({sucess: "Dados deletados com sucesso."});

        } catch (error) {
            next(error);
        }
    }

};