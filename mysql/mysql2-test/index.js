const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'admin123',
  database: 'practice'
})


connection.query(
  'select * from customers',
  function (err, results, fields) {
    if (err) {
      console.log(err)
      return
    }
    console.log(results)
    console.log(fields.map(({ name }) => name))
  }
)

// 查询了姓李的顾客有哪些
connection.query(
  'select * from customers where name like ?',
  ['李%'],
  function (err, results, fields) {
    console.log(results)
    console.log(fields.map(({ name }) => name))
  }
)

// 插入一条数据
connection.query(
  'inset into customers (name) values (?)',
  ['丁'],
  function (err, results, fields) {
    console.log(err);
  }
)

// 修改上一条插入的数据
connection.query(
  'update customers set name="ding" where name = 丁',
  function (err) {
    console.log(err)
  }
)

// 删除插入的数据
connection.query(
  'delete from customers where name=?',
  ['丁'],
  function (err) {
    console.log(err)
  }
)