
exports.up = function(knex) {
  return knex.schema.createTable('funcionario', function(table) {
    table.string('id').primary();
    table.string('cpf').notNullable().unique();
    table.string('nome').notNullable();
    table.string('senha').notNullable();    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('funcionario');
};
