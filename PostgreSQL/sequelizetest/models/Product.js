const Sequelize = require('sequelize');
const db = require('../database');

const Product = db.define('product',{
    name:{
        type: Sequelize.STRING
    },
    categoryid: { type: Sequelize.INTEGER }
},{

    freezeTableName: true
  });

module.exports = Product;