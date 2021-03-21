const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');




module.exports = {

    //Lista todos os itens de todos os pedidos.
    async list(request, response){
        
        const itens = await connection('itemPedido')
        .select('*');

        return response.status(200).json({itens});
    },


    
    async create(request, response){
        try{
            const { id_cliente, id_pedido, id_produto } = request.body;
            //Cria um novo item

            
            const id = generateUniqueId();

            
            const buscaValor = await connection('produto')
            .select('valor', 'titulo')
            .where('id', id_produto);
        

            const valor = buscaValor[0].valor;
            
            const titulo_produto = buscaValor[0].titulo;
            
            await connection('itemPedido')
            .insert({
                id,
                id_produto,
                quantidade: 1,
                titulo_produto,
                valor, 
                id_cliente,
                id_pedido,
            });

            
            return response.status(201).json({ sucess: ` 1 ${titulo_produto} foi adcionado a sua sacola.`});
        
        }catch(err){

            return response.status(400).send("Erro ao selecionar produto. Tente novamente.");
        }
    },

    //Atualiza a quantidade de itens e seu respectivo valor
    async updateQuant(request, response){
        const {id} =  request.params;

        
        const { quantidade } = request.body;

        
        const id_produto = await connection('itemPedido')
        .where({id})
        .select('id_produto');

        

        const buscaValor = await connection('produto')
        .select('valor')
        .where('id', id_produto[0].id_produto);

        
        const valor = quantidade * buscaValor[0].valor;


        await connection('itemPedido')
        .where({id})
        .update({
            valor:valor,
            quantidade: quantidade
        });

        const pedido = await connection('itemPedido')
        .select('*')
        .where({id});


        return response.status(200).json(pedido);
    },

    //deleta um item do pedido
    async delete(request, response){


        const {id} = request.params;

        await connection('itemPedido')
        .where({id})
        .del();

        return response.status(200).json({message: "deleted"});
    },


};