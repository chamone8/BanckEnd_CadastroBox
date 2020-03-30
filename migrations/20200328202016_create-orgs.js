
exports.up = function(knex) {
 return knex.schema.createTable('orgs', function (table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  })
};

exports.down = function(knex) {
  return knex.dropTable('orgs')
};
//npx knex migrate:make nome_da_tabela
//npx knex migrate:latest cria a tabelas e as informações a cima