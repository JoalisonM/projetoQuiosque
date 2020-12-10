
exports.up = function(knex) {
  return knex.schema.createTable('funcionario', function(table) {
    table.string('cpf').primary();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
    table.string('papel').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('funcionario');
};
