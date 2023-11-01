const { Sequelize } = require('sequelize');

//Conexão com o banco de dados via sequelize

const sequelize = new Sequelize('cadastro_aluno', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
  port: 3306,
});

module.exports = sequelize;
