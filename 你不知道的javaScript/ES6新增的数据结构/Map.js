// 在ES6之前,我们存储的数据结构主要有两种: 数组和对象。(数据结构就是存储数据的方式。)
// 在ES6之中新增了两种数据结构: Set,Map,以及它们的另外形式 WeakSet,WeakMap。

// Map 是新增的数据结构,用于存储映射关系
const map = new Map()
map.set('111', '2')
console.log(map)

const map2 = new Map([
	[{ name: 'a1' }, 'a1'],
	[{ name: 'a2' }, 'a2'],
	['a3', 'a3'],
])
console.log(map2)

// WeakMap(于Map类型相似,也是以键值对形式存在的)。
// WeakMap 和 Map 的区别
// 1. WeakMap的 key 只能使用对象,不接受其他类型作为 key
// 2. WeakMap的key对对象的引用是弱引用,如果没有其他引用引用这个对象,那么GC(垃圾回收机制)可以对该对象进行回收。(GC会无视弱引用)
// 3. 不能遍历

// WeakMap应用场景(Vue3响应式原理)


