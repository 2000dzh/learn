const fs = require('node:fs');
const fsP = require('node:fs/promises')

function demo1 () {
  const content = '你好啊!\n1'
  fs.writeFile(`${__dirname}/test.txt`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // 写入成功
    }
  })
}

// 同步写入
function demo2 () {
  const content = '你好啊我是同步写入!\n1'
  fs.writeFileSync(`${__dirname}/test.txt`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // 写入成功
    }
  })
}

function demo3 () {
  const content = '你好啊!\npromise'
  fsP.writeFile(`${__dirname}/test.txt`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // 写入成功
    }
  })
}

demo3()

