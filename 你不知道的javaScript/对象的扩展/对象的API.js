// Object.assign()
// 将一个或多个源对象的所有可枚举的自有属性复制到目标对象,返回目标对象(浅拷贝)
// 1.属性名可以为字符串或者 Symbol
// 2.对于相同的 key 后面的对象覆盖前面的对象

// Object.assign() 使用示例
// 1.初始化对象属性
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y })
  }
}

// 2.为对象添加方法
// ES5
Object.prototype.Myfn = function () {
  // .....
}
// ES6
Object.assign(Object.prototype, {
  Myfn () {
    // ...
  },
})

// 3.合并多个对象
const merge = (taget, ...sources) => Object.assign(taget, ...sources) // 将多个对象合并到某个对象
const merge1 = (...sources) => Object.assign({}, ...sources) // 返回一个新对象


  // Object.is()
  // ES5比较两个值相等,只有两个运算符 == 相等运算符 和严格相等运算符 === 。
  // 他们都有缺点,相等运算符会自动进行类型转换,严格相等运算符对于 NaN 不等于自身,以及 +0 等于 -0
  // ES6 提供新的 API Object.is() 解决这个问题,它于严格相等运算符基本一致。
  // 不同之处有
  + 0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

