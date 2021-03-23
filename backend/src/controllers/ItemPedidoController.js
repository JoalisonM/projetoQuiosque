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
        

            var valor_unitário = buscaValor[0].valor;
            
            
            const titulo_produto = buscaValor[0].titulo;
            
            const quantidade = 1;

            const itemIgual = await connection('itemPedido')
            .select('quantidade')
            .where({ id_produto, id_pedido });

            if(itemIgual.length != 0){

                await connection('itemPedido')
                .where({ id_produto, id_pedido })
                .update({ quantidade: itemIgual[0].quantidade + 1,});

            
                

                return response.status(201).json({ sucess: ` + 1 ${titulo_produto} foi adcionado a sua sacola.`});
                
                
            }else{

                await connection('itemPedido')
                .insert({
                    id,
                    id_produto,
                    quantidade,
                    titulo_produto,
                    valor_unitário, 
                    valor_total: valor_unitário * quantidade, 
                    id_cliente,
                    id_pedido,
                });

                
                return response.status(201).json({ sucess: ` 1 ${titulo_produto} foi adcionado a sua sacola.`});
            }

            
        
        }catch(err){

            return response.status(400).send("Erro ao selecionar produto. Tente novamente.");
        }
    },

    //Atualiza a quantidade de itens e seu respectivo valor
    async updateQuant(request, response){
        const {id} =  request.params;

        
        const { quantidade } = request.body;

        
        const item = await connection('itemPedido')
        .where({id})
        .select('*');


        


        await connection('itemPedido')
        .where({id})
        .update({
            valor_total:quantidade * item[0].valor_unitário,
            quantidade: quantidade,
            valor_unitário: item[0].valor_unitário  
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

        return response.status(200).json({sucess: "Item removido da sacola com sucesso."});
    },


};