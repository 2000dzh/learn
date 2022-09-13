// ES6类实质就是一个函数,类自身指向的就是构造函数,所以ES6中的类其实就是构造函数的另一种写法。

// javaScript有三种方法,静态方法、实例方法、原型方法
// 静态(属性/方法): 定义在构造函数上的(属性/方法),不会被实例继承只能通过构造函数访问
// 实例(属性/方法): 在构造函数内部通过 this 定义,可以在实例化对象上扩展,ES2022规定定义在 constructor 上的属性或方法也是实例属性
// 原型(属性/方法): 定义在构造函数原型对象上的(属性/方法)

// ES5 函数声明
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

// ES6 类声明
class Foo1 {
  instance2 = 'ES2022实例属性'
  constructor(element) {
    this.instance = '实例属性'
    this.element = element
  }
  ceshi = '我也是实例属性'
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
  get html () {
    return this.element.innerHTML
  }
  set html (value) {
    this.element.innerHTML = value
  }
  static {
    console.log('静态块')
  }
  #foo = '私有属性'
}
const foo1 = new Foo1()
console.log(foo1)
console.log(Object.keys(foo1)) // ['proto', 'instance']
// 类内部定义的所有方法都是,不可枚举的
console.log(Object.keys(Foo1)) // []
console.log(Foo1.stic) // 静态属性
console.log(Foo1.sticFn()) // 静态方法
console.log(foo1.instance) // 实例属性
console.log(foo1.protoFn()) // 原型方法


// ES6 类表达式
const MyClass = class Me {
  constructor() {
    this.name = '李明'
  }
  getClassName () {
    console.log(Me.name)
  }
}
let inst = new MyClass()
console.log(inst)
inst.getClassName()
// 这个类的名字是 Me,但是只能在 Class 内部使用,指代当前类。在 Class 外部,这个类只能用 MyClass 引用。
// 如果内部不需要使用这个类,可以简写 const MyClass = class {....};

// 立即执行类
const person = new class {
  constructor(name) {
    Object.assign(this, { name })
  }
  sayName () {
    console.log(this.name)
  }
  static age () {
    console.log(this)
  }
}('李四')
console.log(person)
person.sayName()

// 1. 类的方法都定义在 prototype(原型对象)对象,且都是不可枚举的。
// 2. __proto__ 并不是js语言的特性,更推荐通过 Object.getPrototypeOf() 方法获取实例对象的原型,然后进行扩展
// 3. 私有属性只有在类的内部才可以访问,可以通过 this、实例引用私有属性。(访问某个类不存在的私有属性会报错,可通过 in 规避)
// 4. 静态快,仅在类生成时运行一次可以对静态属性进行初始化。
// 5. 可以使用 new.target 判断构造函数是怎么调用的。通过 new 调用返回当前构造函数,否则返回 undefined
// class 内部调用 new.target,返回当前 class。子类继承父类 new.target 返回子类
// 利用这个特点,可以写出只能用作继承的类
class Fn {
  constructor() {
    if (new.target === Fn) {
      throw new Error('本类不能实例化')
    }
  }
}

class Son extends Fn {
  constructor() {
    super()
  }
}

// const fn = new Fn() // 报错
const son = new Son()

