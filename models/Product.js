const { Sequelize } = require('sequelize')
const sequelize = require('../database/config')

const Product = sequelize.define('products', {    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
},
{   
    timestamps: false
})

module.exports = Product
