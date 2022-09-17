// 组合胜过继承
// ES6 class 通过 extends 关键字实现继承,实际上是将 子类的原型对象通过 [Prototype] 指向父类的原型对象(原型继承)
// ES6 规定子类的 constructor 方法必须调用 super,否则会报错。这是因为子类的实例化对象(this对象),必须通过父类的
// 构造函数完成塑造,从而得到于父类同样的实例属性和方法。如果不调用 super 方法,子类得不到自己的 this 对象。

// 使用 super 关键字需要注意
// super有两种用法,可以当做函数使用、可以当做对象使用。

// 1.当 super 当做函数调用时,代表父类的构造函数。注意虽然 super 代表是父类的构造函数,但是返回的还是子类的实例,
// 即 this 指向子类实例。作为函数时只能用在子类的构造函数中,否则会报错。

// 2.当 super 做对象使用时,
// 在子类普通方法中时指向父类的原型对象,调用父类原型方法时,方法内部 this 指向子类实例、
// 在子类的静态方法中时指向父类,调用父类静态方法时,方法内部 this 指向子类。
class Father {
  constructor() {
    console.log(1);
  }
  static age () {
    console.log('静态方法')
  }
  propFn () {
    console.log('原型方法')
  }
}

class Son extends Father {
  constructor() {
    // console.log(this) // 会报错,因为子类实例的构建必须先完成父类的继承,只有 super 方法才能让子类实例继承父类
    super(); // -> Father.prototype.constructor.call(this)
    super.propFn() // -> Father.prototype.propFn.call(this) 
  }
  fn = () => {
    super.propFn() // -> Father.prototype.propFn.call(this) 
  }
  static move () {
    super.age() // Father.age.call(this)
  }
  sonPropFn () {
    super.propFn() // -> Father.prototype.propFn.call(this) 
  }
   // 私有属性和方法无法继承
}

const son = new Son();
// console.log(son.move)
son.fn()
Son.move()
son.sonPropFn()



