const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../conexao.js'); // 


const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Aluno;
