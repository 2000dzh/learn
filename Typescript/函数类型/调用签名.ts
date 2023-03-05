// 1.函数类型表达式
type BarType = (num: number) => number
const bar: BarType = (num: number): number => {
	return num
}

// 2.函数的调用签名
interface IBar {
	name: string
	age: number
	// 函数可以调用: 函数调用签名
	(num1: number): number
}

const bar1: IBar = (num1: number): number => {
	return num1
}
bar1.name = 'dzh'
bar1.age = 18



export {}
