const fs = require('fs')
console.log(1)
fs.readFile('./nest/index.js', 'utf-8', (err, text) => {
  console.log(text)
})
// console.log(fs)
