const Sequelize = require('sequelize')

const connection = new Sequelize('products_db', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection
