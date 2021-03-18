
exports.up = function(knex) {
    return knex.schema.createTable('pedido', function(table) {
        table.string('id').notNullable().primary();
        table.string('id_cliente').notNullable();
        table.string('nome_cliente').notNullable();
        table.float('total').notNullable();
        table.string('status').notNullable();

        table.foreign('id_cliente').references('id').inTable('cliente');
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('pedido');

};
    