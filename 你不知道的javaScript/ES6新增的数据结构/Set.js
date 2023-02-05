// 在ES6之前,我们存储的数据结构主要有两种: 数组和对象。(数据结构就是存储数据的方式。)
// 在ES6之中新增了两种数据结构: Set,Map,以及它们的另外形式 WeakSet,WeakMap。

// Set 是新增的数据结构,可以用来保存数据,类似数组,但是和数组的区别是元素不会重复。
// 创建 Set 我们需要通过 Set构造函数。(暂时没有字面量创建的形式)

const set = new Set([6, 66, 666])


// 去除数组重复值
// 1. const set1 = [...new Set([1,2,3,5,3])]
// 2. const set2 = Array.from(new Set([1,2,3,5,3]))

// WeakSet(和 Set 类似的另外一个数据结构称之为 WeakSet,也是内部元素不会重复的数据结构)(开发基本用不到........)
// WeakSet和Set的区别
// 1. WeakSet中只能存放对象类型,不能存放基本数据类型。
// 2. WeakSet对元素的引用是弱引用,如果没有其他引用引用这个对象,那么GC(垃圾回收机制)可以对该对象进行回收。(GC会无视弱引用)
const weakset = new WeakSet()
let obj = {
	name: 'dzh',
}
weakset.add(obj)
obj = null // 当obj没有被其他强引用时,GC会回收 obj 所以为has为 false
console.log(weakset.has(obj)) // false

// WeakSet不能遍历

// WeakSet的应用场景
// 这里为什么不用 Set 存储,因为 Set 是强引用,即时 p = null Set 里面对已经存入 this 的引用也不会被销毁必须手动销毁,而 WeakSet 是弱引用。
const personSet = new WeakSet()
class Person {
	constructor() {
		personSet.add(this)
	}

	running() {
		if (!personSet.has(this)) {
			throw new Error('不能通过非构造方法创建出来的对象调用running方法')
		}
		console.log('running', this)
	}
}
const p = new Person()
p.running()

// p.running.call({name: 'dzh'}) // 报错
