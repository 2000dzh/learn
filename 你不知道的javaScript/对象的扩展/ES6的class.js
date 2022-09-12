// javaScript有三种方法,静态方法、实例方法、原型方法
// 静态(属性/方法): 定义在构造函数上的(属性/方法),只能通过构造函数访问
// 实例(属性/方法): 在构造函数内部通过 this 定义,可以在实例化对象上扩展
// 原型(属性/方法): 定义在构造函数原型对象上的(属性/方法)

// ES5
function Foo () {
  this.instance = '实例属性'
}
Foo.prototype.proto = '原型属性'
Foo.static = '静态属性'

const foo = new Foo()
console.log(foo)
console.log(Object.keys(foo))
console.log(Foo.static) // 静态属性
console.log(foo.instance) // 实例属性
console.log(foo.proto) // 原型属性

// ES6
class Foo1 {
  constructor() {
    this.instance = '实例属性'
  }
  proto = '原型属性'
  protoFn () {
    return '原型方法'
  }
  unprepared () {
    return '我是不可枚举的原型方法'
  }
  static stic = '静态属性'
  static stic11 = '静态属性'
  static sticFn () {
    return '静态方法'
  }
  static printSex () {
    return '我是不可枚举的静态方法'
  }
  #foo = '私有属性'
}
const foo1 = new Foo1()
console.log(foo1)
console.log(Object.keys(foo1)) // ['proto', 'instance']
// 类内部定义的所有方法都是,不可枚举的
console.log(Object.keys(Foo1)) // []
console.log(Foo1.stic) // 静态属性
// console.log(Foo1.sticFn()) // 静态方法
console.log(foo1.instance) // 实例属性
console.log(foo1.proto) // 原型属性
console.log(foo1.protoFn()) // 原型方法
console.log()
