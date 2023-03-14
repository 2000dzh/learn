// 映射类型不能使用 interface 定义
type MapPerson<TP> = {
	// [K in keyof TP]: TP[K]
	// readonly [K in keyof TP]: TP[K]
	// [K in keyof TP]?: TP[K]
  // 去除原类型中所有的 只读,可选类型标识符
	-readonly [K in keyof TP]-?: TP[K]
}

interface IPerson {
	name?: string
	readonly age: number
}

type IPersonRequired = MapPerson<IPerson>

export {}
