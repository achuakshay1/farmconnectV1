const Sequelize = require('sequelize')
const stateModel = require('../model/stateModel')

const sequelize = new Sequelize(process.env.DB_ConnectionString, {
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const State = stateModel(sequelize, Sequelize)

module.exports = State;