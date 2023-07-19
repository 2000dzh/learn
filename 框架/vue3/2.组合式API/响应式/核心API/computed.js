// computed()
// 接受一个 getters 函数,返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露 getters 函数的返回值。
// 它也可以接受一个带有 get和set 函数的对象来创建一个可写的 ref 对象。

// 创建一个只读的计算属性 ref：
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误

// 创建一个可写的计算属性 ref：
const count1 = ref(1)
const plusOne1 = computed({
	get: () => count1.value + 1,
	set: (val) => {
		count1.value = val - 1
	},
})

plusOne1.value = 1
console.log(count1.value) // 0

// 计算属性的最佳实践
// 1. getter 不应有副作用。
// 计算属性的 getter 应只做计算而没有任何其他的副作用
// 一个计算属性的声明中描述的是如何根据其他值派生一个值,因此 getter 的职责应该仅为计算和返回该值。
// 2.避免直接修改计算属性值
// 从计算属性返回的值是派生状态。可以把它当做一个 "临时快照",没当源状态发生变化时,就会创建一个新的快照。
// 所以更改快照是没有意义的,因此计算属性的返回值应该视为只读的,并且永远不应该被更改—————— 应该更新它所依赖的源状态以触发新的计算。

// 计算属性调试
// 我们可以向 computed() 传入第二个参数，是一个包含了 onTrack 和 onTrigger 两个回调函数的对象
const age = computed(() => count.value + 1, {
	onTrack(e) {
		// 当 count.value 被追踪为依赖时触发
		debugger
	},
	onTrigger(e) {
		// 当 count.value 被更改时触发
		debugger
	},
})

// 访问 age，会触发 onTrack
console.log(age.value)

// 更改 count.value，应该会触发 onTrigger
count.value++

// 计算属性的 onTrack 和 onTrigger 选项仅会在开发模式下工作。
