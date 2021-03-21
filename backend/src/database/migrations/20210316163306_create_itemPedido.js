
exports.up = function(knex) {
    return knex.schema.createTable('itemPedido', function(table) {
        table.string('id').notNullable().primary();
        table.string('id_produto').notNullable();
        table.string('titulo_produto').notNullable();
        table.integer('quantidade').notNullable();
        table.float('valor_total').notNullable();
        table.float('valor_unitário').notNullable();
        table.string('id_cliente').notNullable();
        table.string('id_pedido').notNullable();

        table.foreign('id_produto').references('id').inTable('produto');
        table.foreign('id_cliente').references('id').inTable('cliente');
        table.foreign('id_pedido').references('id').inTable('pedido');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('itemPedido');
};
