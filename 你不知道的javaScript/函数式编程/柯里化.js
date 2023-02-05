// 只传递给函数一部分参数来调用它,让它返回一个函数去处理剩余的参数,这个过程就是柯里化

function add(a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return a + b + c + d
			}
		}
	}
}

const add1 = (a) => (b) => (c) => (d) => {
	return a + b + c + d
}

// 为什么需要柯里化
// 在函数式编程中我们往往希望一个函数处理的问题是单一的,而不是将一大推的处理过程交给一个函数来处理(单一职责原则)
function makeAdder(count) {
	count *= count
	return function (num) {
		return count + num
	}
}
const adder6 = makeAdder(5)
console.log(adder6(10))
console.log(adder6(14))

// 柯里化的实现
function fnnn1(x, y, z) {
	return x + y + z
}

function hyCurrying(fn) {
	function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args)
		} else {
			return function curried2(...args2) {
				return curried.apply(this, [...args, ...args2])
			}
		}
	}
	return curried
}

const currAdd = hyCurrying(fnnn1)

console.log(currAdd(10, 20, 30))
console.log(currAdd(10, 20)(30))
console.log(currAdd(10)(20)(30))

// 实现
// add(1)(2,3)(4)() = 10
// 当传入空的参数时，代表可以进行真正的运算

function fn1(...args) {
	if (!args.length) {
		return 0
	}
	let arr = [...args]
	return function fn2(...args2) {
		if (!args2.length) {
			return arr.reduce((sum, item) => sum + item, 0)
		}
		arr = [...arr, ...args2]
		return fn2.bind(this)
	}
}

console.log(fn1(1)(2, 3)(4)(5)(5)())
