class Persion {
	// 必须在先声明实例属性,构造函数内才能使用
	name: string = 'dzh'
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
}

const p1 = new Persion('dzh', 18)

export {}
