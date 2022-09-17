// 组合胜过继承
// ES6 class 通过 extends 关键字实现继承,实际上是将 子类的原型对象通过 [Prototype] 指向父类的原型对象(原型继承)
// ES6 规定子类的 constructor 方法必须调用 super,否则会报错。这是因为子类的实例化对象(this对象),必须通过父类的
// 构造函数完成塑造,从而得到于父类同样的实例属性和方法。如果不调用 super 方法,子类得不到自己的 this 对象。

// 使用 super 关键字需要注意
// 1. 只能在子类的构造函数和静态方法中使用
class Father {
  constructor() {
    console.log(1);
  }
  static age () {
    console.log('age')
  }
}

class Son extends Father {
  constructor() {
    // console.log(this) // 会报错,因为子类实例的构建必须先完成父类的继承,只有 super 方法才能让子类实例继承父类
    super(); // -> super.constructor()
  }
  // 私有属性和方法无法继承
  move () {
    super.age()
  }
}

const son = new Son();
console.log(son.move)
son.move()