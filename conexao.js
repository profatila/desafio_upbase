const { Sequelize } = require('sequelize');

//Conexão com o banco de dados via sequelize

const sequelize = new Sequelize('cadastro_aluno', 'Douglas', 'batata5.', {
  host: 'museus.mysql.database.azure.com',
  dialect: 'mysql', 
  port: 3306,
});

module.exports = sequelize;
