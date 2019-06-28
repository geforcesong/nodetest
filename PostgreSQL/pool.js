const { Pool } = require('pg');
var config = {
    user: 'dbuser',
    password: '1234',
    database: 'Student'
}
const pool = new Pool(config);
// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err)
//     process.exit(-1)
// });


(async () => {
    let client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM Student WHERE id = $1', [2])
    console.log('user:', rows[0]);
    client.end();
    pool.end();
})().catch(e => setImmediate(() => { throw e }))