// 1.类型断言
// 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型

// 类型断言的两种形式
// (1).尖括号语法
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
// (2).as语法
let someValue1: any = 'this is a string'
let strLength1: number = (someValue1 as string).length

// 2.非空断言
// x! 将从 x 值域中排除 null 和 undefined
// 因为 ! 非空断言操作符会从编译生成的 JavaScript 代码中移除,所以使用的时候要注意

// 3.确定赋值断言
let x!: number
initialize()
console.log(2 * x) // Ok

function initialize() {
	x = 10
}
// 通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。



