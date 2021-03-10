
exports.up = function(knex) {
    return knex.schema.createTable('produto', function(table) {
      table.string('id').primary();
      table.string('titulo').notNullable().unique();
      table.string('descricao').notNullable();
      table.float('valor').notNullable();
      table.string('disponibilidade').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('produto');
  };
  