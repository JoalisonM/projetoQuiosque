
exports.up = function(knex) {
  return knex.schema.createTable('cardapio', function(table) {
    table.string('id').primary();
    table.string('titulo').notNullable();
    table.string('descricao').notNullable()
    table.float('valor').notNullable()
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cardapio');
};