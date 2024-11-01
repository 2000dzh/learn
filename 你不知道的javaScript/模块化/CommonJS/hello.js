let name = 'Hello,World'
console.log(name, 'hello.js')

let age = 18

exports.age = age

module.exports = function sayName () {
  return name
}