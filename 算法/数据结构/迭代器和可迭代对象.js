// 迭代器
// js的迭代器本质上是一个对象,符合迭代器协议
// 迭代器协议
   // 1.其对象必须包含一个 next 方法
   // 2.调用 next 方法必须返回一个对象,该对象应有两个属性: done和value,如果返回一个非对象值会报错。
   // done(完成),它的值为布尔类型
   // value(值)它可以返回js中的任何值,TS中可表示 value: any。(done 为 true 时可省略)

// 迭代器实例 
function makeIterator (array) {
  let nextIndex = 0;
  return {
    next () {
      return nextIndex < array.length
        ? { done: false, value: array[nextIndex++] }
        : { done: true }
    }
  }
}

const iter = makeIterator(['ice', 'panda', 'grizzly'])

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

// 可迭代对象
// 也是一个对象,符合可迭代协议
// 可迭代协议
    // 一个对象必须实现 @@iterator 方法。这意味着该对象(或者原型链上的某个对象)必须有一个键为 @@iterator 的属性,可以通过常量 Symodel.iterator 访问该属性。
    // 其中Symbol.iterator 是一个函数，返回一个迭代器
    // 属性: Symbol.iterator   值: 一个无参数的函数,其返回值为一个符合迭代器协议的对象。

// 可迭代对象实例
const info = {
  bears: ['ice', 'panda', 'grizzly'],
  [Symbol.iterator] () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.bears.length
          ? { done: false, value: this.bears[nextIndex++] }
          : { done: true }
      }
    }
  }
}

const iter2 = info[Symbol.iterator]()
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())

for (let bear of info) {
  console.log(bear)
}