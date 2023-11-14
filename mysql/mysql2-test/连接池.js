const mysql = require('mysql2/promise');

(async function () {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'practice',
    port: 3308,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })

  const [results] = await pool.query('select * from customers');
  console.log(results)

  // connectionLimit 是指定最多有多少个连接，比如 10 个，那就是只能同时用 10个，再多需要排队等。

  // maxIdle 是指定最多有多少个空闲的，超过这个数量的空闲连接会被释放。

  // waitForConnections 是指如果现在没有可用连接了，那就等待，设置为 false 就是直接返回报错。

  // idleTimeout 是指空闲的连接多久会断开。

  // queueLimit 是可以排队的请求数量，超过这个数量就直接返回报错说没有连接了。设置为 0 就是排队没有上限。

  //   enableKeepAlive、keepAliveInitialDelay 是保持心跳用的，用默认的就好。

  // 这就是 mysql2 的用法，是不是还会挺简单的？

  //   只要建立个连接或者连接池，就可以在 node 里执行 sql 了。

  // 但是我们一般不会直接这样执行 sql，而是会用 ORM 框架。

})()