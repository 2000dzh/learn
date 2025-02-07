const { mkdir } = require('node:fs')

// 创建文件夹
mkdir('../dist', { recursive: true }, (err, path) => {
  console.log(err)
  console.log(path)
})