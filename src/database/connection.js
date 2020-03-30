const knex = require('knex'); //para conectar o banco de dado
const configurate = require('../../knexfile');

const connection = knex(configurate.development)//parametro de conexão

module.exports = connection;