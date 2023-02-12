// reactive() 返回一个对象的响应式代理

// 响应式代理 vs 原始对象
const raw = {}
const proxy = reactive(raw)
// reactive() 返回的是一个原始对象的 Proxy,它和原始对象是不相等
console.log(raw === proxy) // false

// 为了保证访问代理的一致性,对同一个原始对象调用 reactive() 总是会返回相同的代理对象,
// 而对一个已经存在代理的对象再次调用 reactive() 会返回其本身
// 在同一个对象调用 reactive 会返回相同的代理
console.log(reactive(raw) === proxy) // true
// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true
// 这个规则对于嵌套对象,同样适用,依靠深层响应性,响应式对象内的嵌套对象依然是代理
const raw1 = {}
const proxy1 = reactive({ obj: raw1 })
const nestd = reactive(raw1)
console.log(proxy1.obj === nestd)

// reactive()的局限性
// reactive() 有两条限制
// 1.仅对对象类型有效,原始类型无效
// 2.因为 Vue 的响应式系统是通过属性访问进行追踪的,如果我们直接“替换”一个响应式对象，这会导致对初始引用的响应性连接丢失：
// 3.将响应式对象的属性赋值或解构至本地变量，或是将该属性传入一个函数时，会失去响应性：
const state = reactive({ count: 0 })
// n 是一个局部变量,失去响应式链接
let n = state.count
//  不影响原始的 state
count++
// count 也会失去响应式链接
let { count } = state
// 不会影响原始的 state
count++
// 参数 count 同样和 state.count 失去了响应性连接
function callSomeFunction(count) {
	// 不会影响 state
	count++
}
callSomeFunction(state.count)
// reactive() 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制
