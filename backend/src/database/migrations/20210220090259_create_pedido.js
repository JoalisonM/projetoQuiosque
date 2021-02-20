
exports.up = function(knex) {
    return knex.schema.createTable('pedido', function(table) {
        table.string('id').notNullable().primary();
        table.string('id_cliente').notNullable();
        table.string('id_produto').notNullable();
        table.integer('qtd').notNullable();

        table.foreign('id_cliente').references('id').inTable('cliente');
        table.foreign('id_produto').references('id').inTable('produto');
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
};
    