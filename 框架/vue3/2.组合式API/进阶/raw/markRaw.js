markRaw()
// 将一个对象标记为不可转换为响应式对象。返回该对象本身

const foo = markRaw({})
console.log(isReactive(reactive(foo))) // false

// 也适用于嵌套在其他响应性对象
const bar = reactive({ foo })
console.log(isReactive(bar.foo)) // false
