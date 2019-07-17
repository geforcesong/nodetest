const Sequelize = require('sequelize');
const db = require('./database');

const Customer = db.define('customer', {
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER }
});

(async _ => {
    await Customer.sync({ force: true });
    await Customer.create({
        name:'conjee',
        email: 'conjee@movoto.com',
        age: 10
    })
})();