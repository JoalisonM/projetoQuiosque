
exports.up = function(knex) {
  return knex.schema.createTable('cliente', function(table) {
    table.string('cpf').primary();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cliente');
};
