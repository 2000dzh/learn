const sayName = require('./hello.js')
console.log(sayName(), 'home.js')
module.exports = function say () {
  return {
    name: sayName(),
    author: 'dzh'
  }
}