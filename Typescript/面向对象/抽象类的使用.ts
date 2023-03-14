// 抽象类 abstract
abstract class Shape {
	// getArea方法只有声明没有实现体
	// 实现让子类自己实现
	// 可以将getArea方法定义为抽象方法: 在方法的前面加abstract
	// 抽象方法必须出现在抽象类中, 类前面也需要加abstract
	abstract getArea()
}

class Rectangle extends Shape {
	constructor(public name: string, public age: number, private sex: string) {
		super()
	}
	getArea() {
		return 100
	}
}

class Circle extends Shape {
	constructor(public sum: number) {
		super()
	}
	getArea() {
		return 200
	}
}

// 通用的函数
function calcArea(shape: Shape) {
	return shape.getArea()
}

calcArea(new Rectangle('dzh', 18, '男'))
calcArea(new Circle(5))

// 抽象类不能被实例化
// new Shape()

// 在Java中会报错: 不允许
calcArea({ getArea: function () {} })

export {}
