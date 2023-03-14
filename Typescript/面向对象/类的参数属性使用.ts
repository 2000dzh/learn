class Persion {
	// 语法糖
	constructor(
		public name: string,
		private age: number,
		readonly height: number
	) {}
}

const p = new Persion('dzh', 18, 172.9999999)

export {}
