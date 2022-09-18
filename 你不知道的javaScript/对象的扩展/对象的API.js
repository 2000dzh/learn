// Object.assign() 静态方法
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
const merge = (taget, ...sources) => Object.assign(taget, ...sources); // 将多个对象合并到某个对象
const merge1 = (...sources) => Object.assign({}, ...sources); // 返回一个新对象



// Object.is() 静态方法
// ES5比较两个值相等,只有两个运算符 == 相等运算符 和严格相等运算符 === 。
// 他们都有缺点,相等运算符会自动进行类型转换,严格相等运算符对于 NaN 不等于自身,以及 +0 等于 -0
// ES6 提供新的 API Object.is() 解决这个问题,它于严格相等运算符基本一致。
// 不同之处有
// + 0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true



// Object.getOwnPropertyDescriptor() 静态方法
// 返回指定对象上的实例属性对应的属性描述符
// descriptor 属性描述符有6个
// value: 属性默认值
// writable: 属性是否可写
// enumerable: 属性是否可枚举
// configurable: 属性是否可被删除
// set(): 该属性更新调用的函数
// get(): 访问属性所调用的属性

const obj = {
  get foo () { },
  set foo (x) { }
};

// obj.foo.name
// TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(descriptor)
descriptor.get.name // "get foo"
descriptor.set.name // "set foo"