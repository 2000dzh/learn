// 组合胜过继承
// ES6 class 通过 extends 关键字实现继承,实际上是将 子类的原型对象通过 [Prototype] 指向父类的原型对象(原型继承)
// ES6 规定子类的 constructor 方法必须调用 super,否则会报错。这是因为子类的实例化对象(this对象),必须通过父类的
// 构造函数完成塑造,从而得到于父类同样的实例属性和方法。如果不调用 super 方法,子类得不到自己的 this 对象。

// 静态方法的继承
// 子类通过 [Prototype] 指向父类,完成静态方法和属性的继承,即子类可以访问父类的属性和方法。(构造函数继承)
// 内置对象没有静态继承,因为内置类没有静态  [Prototype] 引用。

// 关于继承的细节
// 在 JavaScript 中,继承了其他类的构造函数比较特殊。在继承类(子类)中,相应的构造函数被标记为特殊的内部属性 [[ConstructorKind]]: "derived"。
// 主要区别在于:
// 1.当一个普通的构造函数运行时,它会先创建一个空对象作为 this,然后继续运行。
// 2.继承的构造函数:当子类的构造函数运行时,与1不同的是他是依靠父构造函数完成这件事的。所以子类如果显示定义构造函数,那就必须调用 super ,否侧子类的实例对象将不会被创建。
// 关于继承的构造函数: 
// 2.1 ES5继承机制,先创建一个独立的子类的实例化对象,然后将父类的属性或方法添加到这个对象上面。(实例在前,继承在后)
// 2.2 ES6继承机制,先将父类的属性和方法添加到一个空对象上面,让后再将该对象作为子类的实例。(继承在前,实例在后)
// 以上两点也可解释ES6的继承为什么必须调用 super 方法,因为 super 会生成一个继承父类的 this 对象,没有这一步就无法继承父类。

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
  // 实例方法
  fn = () => {
    super.propFn() // -> Father.prototype.propFn.call(this) 
  }
  // 静态方法
  static move () {
    super.age() // Father.age.call(this)
  }
  // 原型方法
  sonPropFn () {
    super.propFn() // -> Father.prototype.propFn.call(this) 
  }
  // 私有属性和方法无法继承

  aaa () {
    setTimeout(() => {
      super.propFn() // 箭头函数没有 super 所以会从外部函数中获取 super。
    })
    // setTimeout(function () {
    //   super.propFn() // 报错
    // })
  }
}

const son = new Son();
console.log(son.move)
son.fn()
Son.move()
son.sonPropFn()
son.aaa()

// super的实现于 [[HomeObject]]
// 在 ES5中我们对多个对象使用 __proto__ 来实现原型继承,我们子类方法中调用父类原型上的方法如果改变了 this 指向,this 指向子类即父类原型方法 this 指向 子类,
// 就有可能造成循环引用的问题,导致报错。
// 为了解决这个问题,JavaScript 为函数添加了一个特殊的内部属性 [[HomeObject]]。
// 当函数被定义为类或者对象方法时, 它的 [[HomeObject]] 属性就成为该对象

let animal = {
  name: "Animal",
  eat () {         // animal.eat.[[HomeObject]] == animal
    console.log(`Hello ${this.name}`)  // this -> longEar
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat () {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat(); // -> rabbit.__proto__.eat.call(longEar)   this -> longEar
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat () {         // longEar.eat.[[HomeObject]] == longEar
    super.eat(); // -> longEar.__proto__.eat.call(longEar)
    console.log(this)
  }
};

longEar.eat();  // Hello Long Ear

// JavaScript 的函数都是自由的即 this 不固定,并没有绑定对象。正因如此,函数可以在对象之间复制,并用另外的 this 调用。
// 但是 [[HomeObject]] 的存在违背了这个原则,因为这个属性使函数记住了它们的对象,而且 [[HomeObject]] 不能被更改,即这个绑定是永久的。
// 但是 [[HomeObject]] 仅被用于 super。所以方法内部不使用 super,那么我们仍然可以认为它是自由的,并且可以在对象之间复制。

// [[HomeObject]]是为了类和对象方法定义的。但是对于对象而言,方法必须指定为 method(){} 形式, 不能是 method: function(){}, 
// 因为 method: function(){} 没有设置 [[HomeObject]] 属性,所以继承也不起作用。

// 最后,对象总是继承其他对象的,所以可以在任意对象中,使用 super 关键字。
const obj = {
  toString () {
    console.log(super.toString === Object.prototype.toString) // true
    console.log(super.constructor === Object) // true
    return "MyObject" + super.toString();
  }
}
obj.toString() // MyObject[object Object]
// 在自定义对象 obj 的实例方法中使用 super 关键字, super 指向 Object.prototype,


class dzg {
   move () {
    console.log(super.valueOf === Object.prototype.valueOf)
    console.log(super.constructor === Object)
  }
}

const DZH = new dzg()
DZH.move()

// 补充
// 箭头函数没有自己的 this、super,所以它们能融入到就近的上下文。



