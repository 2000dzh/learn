import b, { a, objA, fn } from './a.js'

console.log(a, '---', b, '---', objA.a, '---', 'test1.js')

setTimeout(() => {
  objA.a = 'hello word'
  fn('hello word')
  console.log(a, '---', b, '---', objA.a, '---', 'test1.js')
})