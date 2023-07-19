// ref() 允许我们创建可以使用任何值类型的响应式
// ref的 .value 属性也是响应式的。同时,当值为对象类型时,会用 reactive() 自动转换它的 .value。 (ref(obj) === reactive({value: obj}))
// 不同的是包含对象类型的 ref 可以响应式地替换整个对象
const objectRef = ref({ count: 0 })
// 这是响应式的替换
objectRef.value = { count: 1 }
// ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：
const state = {
	count: ref(0),
}
// 解构之后，和 state.count 依然保持响应性连接
const { count } = state
// 会影响 state
count.value++

// 该函数接收一个 ref, 和传入的值保持响应性连接
function callSomeFunction(count) {
	// 会影响 state
	count.value++
}
callSomeFunction(count)
// ref() 让我们能创造一种对任意值的 “引用”，并能够在不丢失响应性的前提下传递这些引用。
// 这个功能很重要，因为它经常用于将逻辑提取到 组合函数 中。

// ref的解包
// 解包是指获取 ref 对象上 value 属性的值。常用的两种方法就是 .value和unref()。
// unref()是 Vue 提供的方法,如果参数是 ref,则返回 value 属性的值,否则返回参数本身
// (1) ref在模版中作为顶层属性被访问时,它会自动解包。
// (2) 如果文本插值({{}}),最终计算结果是 ref, 也会被自动解包,下面的非顶层属性会被正确渲染出来。
// <script setup>
// import { ref } from 'vue'
// const object = { foo: ref(1) }
// </script>
//
// <template>
//   <div>
//     {{ object.foo }} <!-- 无需 .value -->
//   </div>
// </template>
// 其他情况则不会被自动解包, object.foo 不是顶层属性并且文本插值（{{ }}）计算的最终值也不是 ref：
//  const object = { foo: ref(1) }
//  <div>{{ object.foo + 1 }}</div>
//  渲染结果是 [object Object]1，因为 object.foo 是一个 ref 对象

// ref 在响应式对象中的解包
// 当 ref 被嵌套在一个响应式对象中,作为属性被访问或修改是,它会自动解包,因此表现的和普通属性一样。
const count1 = ref(0)
const state1 = reactive({
	count1,
})
console.log(state1.count1) // 0
state.count1 = 1
console.log(count1.value) // 1
console.log(state1.count1) // 1
// 只有当嵌套在一个深层响应式对象内时,才会发生解包,当 ref 作为 浅层响应式对象 的属性被访问时则不会解包
const count2 = ref(0);
const state3 = shallowReactive({count2})
// 不会发生解包
console.log(state.count) // { value: 0 } 而不是 0

// ref 在数组和集合类型的解包
// 跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)

