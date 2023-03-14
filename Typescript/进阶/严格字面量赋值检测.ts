interface IPerson {
	name: string
	age: number
}

// 奇怪现象1
const obj = {
	name: 'dzh',
	age: 18,
	height: 172.999999,
}
const info: IPerson = obj

// 奇怪现象2
function fn(data: IPerson) {}

const kobe = { name: 'kobe', age: 30, height: 1.98 }
fn(kobe)

// 解释现象
// 第一次创建的对象字面量, 称之为fresh(新鲜的)
// 对于新鲜的字面量, 会进行严格的类型检测. 必须完全满足类型的要求(不能有多余的属性)
const obj2 = {
	name: 'why',
	age: 18,

	height: 1.88,
}

const p: IPerson = obj2

// 严格的字面量赋值检测

// - 对于对象的字面量赋值,  每个对象字面量最初都被认为是“新鲜的（fresh）”

// -  对于新鲜的字面量, 会进行严格的类型检测. 必须完全满足类型的要求(不能有多余的属性)

// - 当类型断言或对象字面量的类型扩大时，新鲜度会消失。

export {}
