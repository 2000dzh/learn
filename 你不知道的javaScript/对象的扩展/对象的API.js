__proto__ // 用来读取或设置当前对象的原型对象
// 该属性本质是一个内部属性,不是一个正式对外的 api,只是因为浏览器广泛支持,才被加入ES6。
// 标椎明确规定,只有浏览器必须部署这个属性,其他环境不一定需要,所以综合考虑不要直接使用 __proto__
Object.setPrototypeOf // 设置对象的原型对象
Object.getPrototypeOf // 读取对象的原型对象


Object.create  //创建一个以第一个参数为原型的新对象
// 第一个参数,新创建对象的原型对象
// 第二个参数,一个匿名的参数对象,该参数对象是一组属性与值,属性名是新创建的对象的属性名称,值是属性描述符(数据描述符,存取描述符)
// 我们可以通过 Object.create() 创建一个纯洁的对象
const o = Object.create(null) // 没有任何属性,显示No properties
// 主要用处
// 1.我们可以自由定义属性,不用担心会将原型链上的属性覆盖掉
// 2.我们使用 for...in 循环的时候会遍历对象原型链上的属性,解决办法一般是通过
// Object.hasOwnProperty() 过滤原型链上的属性,使用 Object.create(null) 创建的对象就不用担心,
// 因为他的原型对象指向了 null


Object.assign // 静态方法
// 将一个或多个源对象的所有可枚举的自有属性复制到目标对象,返回目标对象(浅拷贝)
// 1.属性名可以为字符串或者 Symbol
// 2.对于相同的 key 后面的对象覆盖前面的对象

//  使用示例
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



Object.is // 静态方法
// ES5比较两个值相等,只有两个运算符 == 相等运算符 和严格相等运算符 === 。
// 他们都有缺点,相等运算符会自动进行类型转换,严格相等运算符对于 NaN 不等于自身,以及 +0 等于 -0
// ES6 提供新的 API Object.is() 解决这个问题,它于严格相等运算符基本一致。
// 不同之处有
// + 0 === -0 // true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true



Object.getOwnPropertyDescriptor  // 静态方法
// 返回指定对象上的实例属性对应的属性描述符
// descriptor 属性描述符有6个
// value: 属性默认值
// writable: 属性是否可写, 默认 false
// enumerable: 属性是否可枚举,默认 false
// configurable: 属性是否可被删除,默认 false
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



Object.defineProperty
// 待补充



Object.hasOwn // 静态方法
// 对象自身是否有指定的属性(不会触发原型链查找)
Object.prototype.hasOwnProperty // 原型方法
// 源对象自身是否有指定的属性(不会触发原型链查找)
// hasOwnProperty 可以被重写
// 对于 Obejct.create(null) 没有原型的对象,hasOwnProperty 会报错
// in (会触发原型链查找)

const example = {
  a: undefined,
  b: null,
  c: '测试ccc'
}
const newNull = Object.create(null)

// console.log(Object.hasOwn(example, 'a')) // true
// console.log(Object.hasOwn(example, 'b')) // true
// console.log(Object.hasOwn(example, 'c')) // true
// console.log(Object.hasOwn(example, 'toString')) // false
// console.log(Object.hasOwn(newNull, 'toString')) // false

// console.log(example.hasOwnProperty('a')) // true
// console.log(example.hasOwnProperty('b')) // true
// console.log(example.hasOwnProperty('c')) // true
// console.log(example.hasOwnProperty('toString')) // false
// // console.log(newNull.hasOwnProperty('toString')) // 报错

// console.log('a' in example) // true
// console.log('b' in example) // true
// console.log('c' in example) // true
// console.log('toString' in example) // true
// console.log('toString' in newNull) // false

// 因此建议使用 hasOwn 最安全所以少用 hasOwnProperty,in


Object.keys // 返回一个由指定对象自身可枚举属性组成的数组(不会触发原型链查找)
Object.getOwnPropertyNames // 返回一个由指定对象自身所有属性组成的数组(包括不可枚举属性,但不包括 Symbol 值作为名称的属性,不会触发原链查找)
Object.values // 返回一个由原对象自身可枚举属性的属性值组成的数组(不会触发原型链查找,不包括 Symbol 值作为名称的属性)
Object.entries // 返回一个由原对象自身可枚举属性的键值对数组([key,value])组成的新数组(不会触发原型链查找,不包括 Symbol 值作为名称的属性)
// 将 Object 转化为 Map
// const obj = {a: '1', b: '2'}
// const map = new Map(Object.entries(obj))
Object.fromEntries // 将键值对列表转化为对象(相当于 Object.entries 的逆操作)
// 将 Map Array,转为 Object

