// TypeScript对于传入的函数类型的多余的参数会被忽略掉(the extra arguments are simply ignored.)
type CalcType = (num1: number, num2: number) => number

function calc(fn: CalcType) {
	return fn(10, 20) // 调用的时候必须传递两个参数
}

// 传递函数形参个数不做校验
calc(function (num) {
	return num
})

// TS对于很多类型的检测报不报错, 取决于它的内部规则
// TS版本在不断更新: 在进行合理的类型检测的情况, 让ts同时更好用(好用和类型检测之间找到一个平衡)
// 举一个栗子:
interface IPerson {
	name: string
	age: number
}

// typescript github issue, 成员
const p = {
	name: 'why',
	age: 18,
	height: 1.88,
	address: '广州市',
}

// 报错
// const info1: IPerson = {
// 	name: 'why',
// 	age: 18,
// 	height: 1.88,
// 	address: '广州市',
// }

const info: IPerson = p

export {}
