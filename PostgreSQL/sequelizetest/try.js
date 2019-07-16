const Sequelize = require('sequelize');
const Product = require('./models/Product');
const db = require('./database');

(async _ => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        let products = await Product.findAll();

        let p = await Product.create({
            name: 'Samsung x10',
            categoryid: 2
        });

        await Product.update({ name: 'Samsung x10+' }, {
            where: {
                name: 'Samsung x10'
            }
        });

        await Product.destroy({
            where: {
                name: 'Samsung x10+'
            }
        });

    } catch (err) {
        console.error('Unable to connect to the database:', err);
        return;
    }
})()