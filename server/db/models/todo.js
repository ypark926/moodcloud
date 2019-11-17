const Sequelize = require('sequelize')
const db = require('../db')

const Todo = db.define('todo', {
  item: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Todo
