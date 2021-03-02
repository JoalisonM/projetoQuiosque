const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        try{
            const { cpf, senha } = request.body;

            const verification = isNaN(cpf);

            
            if(cpf.length == 0 && senha.length == 0){
                throw "Todos os campos devem ser preenchidos!";
            }


            if(cpf.length == 0 ){
                throw "Preencha o campo 'CPF'.";
            }

            if(senha.length == 0){
                throw "Preencha o campo 'Senha'.";
            }


            if( (cpf.length < 11 || cpf.length > 11 ) || verification){
                throw "Digite um CPF válido!";
            }

            try{
                const cliente = await connection('funcionario')
                    .where('cpf', cpf)
                    .where('senha', senha)
                    .select('nome', 'id')
                    .first();
                
                if (!cliente) {
                    throw 'CPF ou senha incorretos!.';
                }

                return response.json({
                    nome: cliente.nome,
                    id: cliente.id
                });
            }catch(err){
                throw err;
            }
            

            
        }catch(err){
            return response.status(401).send(err);
        }
    }
}