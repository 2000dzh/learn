// 类型别名 type
// 接口 interface

// 类型别名和接口的不同
// 两者非常相似,接口的几乎所有特性都可以在type中使用,两者最关键的区别在于类型别名自身无法添加新的属性
// 而接口是可扩展的

// interface
// 通过继承扩展类型
interface A {
	name: string
}

interface B extends A {
	age: number
}

const bear: B = {
	age: 18,
	name: 'dzh',
}

// type
// 通过交集扩展类型
type C = {
	name: string
}

type D = C & {
	age: number
}

const bear1: D = {
	age: 18,
	name: 'dzh',
}

// Interface
// 对一个已经存在的接口添加新的字段
interface E {
	title: string
}

interface E {
	ts: number
}

const src: E = {
	title: 'title',
	ts: 12,
}

// Type
// 创建后不能被改变
// type F = {
//   title: string
// }

// type F = {
//   ts: number
// }

// Error: Duplicate identifier 'F'.


