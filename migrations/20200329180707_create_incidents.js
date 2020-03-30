
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
  
        table.string('orgs_id').notNullable();

        table.foreign('orgs_id').references('id').inTable('orgs');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};

//npx knex migrate:make nome_da_tabela
//npx knex migrate:latest cria a tabelas e as informações a cima