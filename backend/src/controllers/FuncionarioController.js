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
        
        try{
            const {cpf, nome, senha} = request.body;
            const id = generateUniqueId();
            
            const verification = isNaN(cpf);
            

            if (nome.length==0 && senha.length==0 && cpf.length ==0) {
                throw "Todos os campos devem ser preenchidos!";
            }


            if(nome.length==0){
                throw "Preencha o campo 'Nome'.";
            }


            if(senha==0){

                throw "Preencha o campo 'Senha'.";
            }

            if(cpf==0){
                throw "Preencha o campo 'CPF'.";
            }


            if (cpf.length < 11 || cpf.length > 11) {
                throw  "Erro no cadastro: insira um CPF válido!";
            }

            
            if(verification){
                throw  "Erro de cadastro: seu CPF deve conter apenas números.";
            }
                        
            try{
                await connection('funcionario').insert({
                    id,
                    cpf,
                    nome,
                    senha,
                });


                return response.status(201).send({sucess: "Seu cadastro foi realizado com sucesso!"});
            
            
            }catch(err){
             
                throw "Erro no cadastro: seu CPF já consta na base de dados.";
            
            }
        }catch(err){
            
            return response.status(400).send(err);
        
        }   

    },

    async update(request, response, next){
        try {
            const body = request.body;
            const {id} = request.params;

            await connection('funcionario')
                .update(body)
                .where({id});

            return response.status(201).json({sucess: "Dados alterados com sucesso."});

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
            
            return response.status(201).json({sucess: "Dados deletados com sucesso."});

        } catch (error) {
            next(error);
        }
    }

};