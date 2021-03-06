require("dotenv").config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, {
  host: process.env.host,
  dialect: 'mysql',
  operatorsAliases: false,
});

module.exports = connection;
