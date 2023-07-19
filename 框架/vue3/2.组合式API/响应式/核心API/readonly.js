readonly()
// 接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
// 只读代理是深层的：对任何嵌套属性的访问都将是只读的。
// 它的 ref 解包行为与 reactive() 相同，但解包得到的值是只读的。(即访问某个响应式数组或Map这样的 原生集合类型中的ref元素时,不会执行ref的解包)
// 要避免深层级的转换行为，请使用 shallowReadonly() 作替代。

const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // 用来做响应性追踪
  console.log(copy.count) // 1
})

// 更改源属性会触发其依赖的侦听器
original.count++
console.log(original.count) // 1

// 更改该只读副本将会失败，并会得到一个警告
copy.count++ // warning!
