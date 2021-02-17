
exports.up = function(knex) {
  return knex.schema.createTable('cliente', function(table) {
    table.string('id').primary();
    table.string('cpf').unique().notNullable();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cliente');
};
