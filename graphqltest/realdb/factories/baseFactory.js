const { Pool } = require('pg');
const config = {
    user: 'dbuser',
    password: '1234',
    database: 'Student'
}
const pool = new Pool(config);

class BaseFactory {
    constructor() {
        this.poolClient = pool;
    }
}

module.exports = BaseFactory;