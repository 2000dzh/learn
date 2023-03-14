// public
// private
// protected
// readonly

class Persion {
	// 只有在类内部或者子类内部可以访问
	protected name: string
	// 私有属性,只有在类内部才可以访问
	private _age: number
	readonly sex: string
	constructor(name: string, age: number) {
		this.name = name
		this._age = age
		this.sex = '男'
	}
	// setter/getter: 对属性的访问进行拦截操作
	set age(newValue: number) {
		this._age = newValue
	}

	get age() {
		return this._age
	}
  
}

const p = new Persion('dzh', 18)
// p.age = 20

class Student extends Persion {
	constructor(name: string, age: number) {
		super(name, age)
	}
	studying() {
		console.log(this.name)
	}
}

const stu = new Student('dzh', 18)

export {}
