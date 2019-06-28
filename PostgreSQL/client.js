const { Client } = require('pg');
const connectionStr = 'postgres://george:123456@localhost:5432/Student';
(async _ => {
    const client = new Client(connectionStr)
    await client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    const studentsRes = await client.query('SELECT * FROM STUDENT');
    console.log(studentsRes.rows);
    await client.end()
})();
