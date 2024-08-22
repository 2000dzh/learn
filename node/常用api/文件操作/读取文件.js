const fs = require('node:fs')
const fsP = require('node:fs/promises');

fs.readFile(`${__dirname}/文件路径.js`, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})

// 同步读取
try {
  const data = fs.readFileSync(`${__dirname}/文件路径.js`, 'utf-8')
  console.log(data)
} catch (err) {
  console.log(err)
}

// 使用 promise 语法读取

async function example () {
  try {
    const data = await fsP.readFile(`${__dirname}/文件路径.js`, { encoding: 'utf8' })
  } catch (err) {
    console.log(err)
  }
}

example()

