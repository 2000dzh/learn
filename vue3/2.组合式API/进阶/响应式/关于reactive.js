shallowReactive()
// reactive() 的浅层作用形式
// 一个浅层响应式对象里只有根级别的属性是响应式的
// 属性的值会被原样存储和暴露，这也意味着值为 ref 的属性不会被自动解包了
const count = ref(0)
const state = shallowReactive({ count })
// 不会发生解包
console.log(state.count.value)
