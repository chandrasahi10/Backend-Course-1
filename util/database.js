const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','0542@Cool',{dialect: 'mysql',host: 'localhost'});

module.exports = sequelize;