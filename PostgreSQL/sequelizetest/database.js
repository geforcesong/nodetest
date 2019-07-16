const Sequelize = require('sequelize');
//方法1:单独传递参数
module.exports = new Sequelize('Student', 'george', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});



// 方法2: 传递连接 URI
// const sequelize = new Sequelize('postgres://george:123456@localhost:5432/Student');