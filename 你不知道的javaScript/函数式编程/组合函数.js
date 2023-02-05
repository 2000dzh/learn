// 组合函数的实现
function hyCompose(...fns) {
	const _len = fns.length
	fns.forEach((fn) => {
		if (typeof fn !== 'function') {
			throw new TypeError('每一项都必须是一个函数')
		}
	})

	return function compose(...args) {
		let index = 0
		let result = _len ? fns[index].apply(this, args) : args
		while (++index < _len) {
			result = fns[index].call(this, result)
		}

		return result
	}
}

function double(num) {
	return num * 2
}

function square(n) {
	return n ** 2
}

var newFn = hyCompose(double, square)
console.log(newFn(5))
console.log(newFn(10))
