const mysql = require('mysql2/promise');

(async function () {

  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'admin123',
    database: 'practice'
  })

  const [results, fields] = await connection.query('SELECT * FROM customers');

  console.log(results);
  console.log(fields.map(item => item.name));
})()
