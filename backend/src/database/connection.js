//Criar a conexão com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile.js');

const connection = knex(configuration.development);

module.exports = connection;