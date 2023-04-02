// 纯函数即相同的输入,永远会得到相同的输出,而且没有任何可观察的副作用

// 纯函数的优势
// 只需要关心函数的参数和返回值就可以
// 在写的时候保证了函数的纯度,只是单纯的实现自己的业务逻辑即可,不需要关心传入的内容是如何获取的,或者依赖的其他的外部变量是否发生改变
// 在用的时候你确定你传入的内容是不会被任意修改的,并且确定自己的输入,一定会有确定的输出。

// slice 纯函数
// splice 不是纯函数

// 纯函数
function sum(age1, age2) {
  return age1 + age2
}

// 不是纯函数,依赖全局变量
let foo = 5
function add(num) {
  return foo + num
}
console.log(add(5))
foo = 10
console.log(add(5))

const info = {
  name: 'd',
  age: '6',
}
// 不是纯函数
function printInfo(info) {
  info.name = '哈哈哈'
}

// function MakePowerFn(power) {
//   return function (base) {
//     return base ** power
//   }
// }


const MakePowerFn = (power) => (base) => base ** power

const power3 = MakePowerFn(3)
const power2 = MakePowerFn(2)

console.log(power2(10))
console.log(power3(10))

// 阶乘
function fact(n) {
  return n === 0 ? 1 : n * fact(n - 1)
}

function fact1(func, n) {
  return n === 0 ? 1 : n * func(func, n - 1)
}

console.log(fact1(5))


