// ES6允许方法简写
const o1 = {
  fn () {
    return 'Hello js';
  }
}

// 等同于
const o2 = {
  fn: function () {
    return 'Hello js';
  }
}
// 注意,简写的对象方法不能作为构造函数,会报错。
// new o1.fn() //报错,不是构造函数
new o2.fn()